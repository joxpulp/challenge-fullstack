import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserI } from '../interfaces';

const userCollection = 'user';

const userSchema = new Schema<UserI>(
	{
		name: { type: String, max: 100 },
		lastname: { type: String,  max: 100 },
		age: { type: Number,  },
		cardId: { type: Number,  unique: true },
		email: { type: String,  unique: true, max: 100 },
		address: { type: String, max: 200 },
		password: { type: String, max: 100 },
		isAdmin: { type: Boolean },
	},
	{ versionKey: false }
);

// Encrypt password
userSchema.pre('save', async function (next) {
	const user = this;
	const hash = await bcrypt.hash(user.password, 10);
	this.password = hash;
	next();
});

userSchema.pre('findOneAndUpdate', async function (next) {
	const user = this as any;
	if (user._update.$set.password) {
		const hash = await bcrypt.hash(user._update.$set.password, 10);
		user._update.$set.password = hash;
	}
	next();
});

// Compare if the password is valid with encrypted password stored in database.
userSchema.methods.isValidPassword = async function (password) {
	const user = this;
	const compare = await bcrypt.compare(password, user.password);
	return compare;
};

export const userModel = model<UserI>(userCollection, userSchema);
