import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import {
	Strategy,
	VerifyFunctionWithRequest,
	IStrategyOptionsWithRequest,
} from 'passport-local';
import { userModel } from '../models/schemas/userschema';
import { UpdateUserI } from '../models/interfaces';
import cloudinary from '../services/cloudinary';

// Select passport strategy
const localStrategy = Strategy;

// Define the strategy options, we use username field(email) and password field
const strategyOptions: IStrategyOptionsWithRequest = {
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true,
};

// Login logic
const loginFunc = async (
	req: Request,
	username: string,
	password: string,
	done: any
): Promise<VerifyFunctionWithRequest> => {
	const user = await userModel.findOne({ email: username });

	if (!user || !(await user.isValidPassword(password))) {
		return done(null, false, {
			error: 'Invalid email or password, try again',
		});
	}

	return done(null, user);
};

//  Signup logic
const signupFunc = async (
	req: Request,
	username: string,
	password: string,
	done: any
): Promise<VerifyFunctionWithRequest> => {
	const body = req.body;

	const user = await userModel.findOne({
		$or: [{ email: body.email }, { cardId: body.cardId }],
	});

	if (user) {
		return done(null, false, {
			error: 'This email or cardId already exist, try with other option',
		});
	} else {
		const randomAvatar = `https://avatars.dicebear.com/api/bottts/${Date.now()}.svg`;
		const { secure_url, public_id } = await cloudinary.uploader.upload(
			randomAvatar,
			{
				folder: 'AVATARS',
				format: 'jpg',
			}
		);
		const newUser = new userModel({
			...body,
			avatar: secure_url,
			avatar_id: public_id,
		});
		await newUser.save();
		return done(null, newUser);
	}
};

// Create the login with the local strategy, we pass the strategy options and the login logic contained in loginFunc
passport.use('login', new localStrategy(strategyOptions, loginFunc));

// Create the signup with the local strategy, we pass the strategy options and the signup logic contained in signupFunc
passport.use('signup', new localStrategy(strategyOptions, signupFunc));

// Serialize the user by id
passport.serializeUser((user: Express.User, done) => {
	done(null, user._id);
});

//  Deserialize user by looking to the db with the id and a callback that executes the done.
passport.deserializeUser((userId, done) => {
	userModel.findById(userId, (err: any, user: any) => {
		done(err, user);
	});
});

export const isAuth = (req: Request, res: Response, done: NextFunction) => {
	if (req.isAuthenticated()) {
		done();
	} else {
		return res.status(401).json({
			error: 'You are not logged',
			loggedIn: false,
		});
	}
};

export const isAdmin = (req: Request, res: Response, done: NextFunction) => {
	if (req.isAuthenticated() && req.user.isAdmin) {
		done();
	} else {
		return res.status(401).json({
			error: 'Not authorized, login with admin privilegies',
		});
	}
};

export const editUser = async (_id: string, newData: UpdateUserI) => {
	await userModel.findOneAndUpdate(
		{ _id },
		{ $set: newData },
		{ runValidators: true }
	);

	const findUpdated = await userModel.findById(_id, {
		name: 1,
		lastname: 1,
		age: 1,
		cardId: 1,
		address: 1,
		avatar: 1,
		isAdmin: 1
	});
	return findUpdated;
};

export default passport;
