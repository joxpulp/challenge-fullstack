import { Request, Response, NextFunction } from 'express';
import passport, { editUser } from '../middlewares/auth';
import bcrypt from 'bcrypt';
import cloudinary from '../config/cloudinary';

class AuthController {
	login(req: Request, res: Response, next: NextFunction) {
		passport.authenticate('login', (err, user, info) => {
			if (err) return next(err);
			if (user) {
				req.login(user, () => {
					return res.json({
						userId: user._id,
						logged: true,
					});
				});
			} else {
				return res.status(401).json({ ...info, logged: false });
			}
		})(req, res, next);
	}

	signup(req: Request, res: Response, next: NextFunction) {
		passport.authenticate('signup', (err, user, info) => {
			if (err) return next(err);
			if (user) {
				return res.json({ msg: 'User created' });
			} else {
				return res.status(401).json({ ...info });
			}
		})(req, res, next);
	}

	isLogged(req: Request, res: Response) {
		if (req.user) {
			return res.json({ logged: true });
		} else {
			return res.status(404).json({ logged: false });
		}
	}

	logout(req: Request, res: Response) {
		if (req.user) {
			req.logout();
			return res.json({ msg: 'Session ended', logged: false });
		}
		return res
			.status(404)
			.json({ error: 'The is no session started or is already logout' });
	}

	async editUser(req: Request, res: Response) {
		const { name, lastname, address, age, cardId, password } = req.body;

		if (req.file!) {
			await editUser(req.user!._id!, {
				name,
				lastname,
				address,
				age,
				cardId,
				password,
				avatar: req.file!.path!,
				avatar_id: req.file!.filename!,
			});
		} else {
			await editUser(req.user!._id!, {
				name,
				lastname,
				address,
				age,
				cardId,
				password,
			});
		}
		return res.json({ msg: 'User updated' });
	}
}

export const authController = new AuthController();
