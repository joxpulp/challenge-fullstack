import { ObjectId } from 'mongoose';
import { Options } from 'multer-storage-cloudinary';

export interface ProductI {
	_id: string | ObjectId;
	name?: string;
	description?: string;
	category?: string;
	thumbnail?: string;
	thumbnail_id?: string;
	price?: number;
}

export interface NewProductI {
	name: string;
	description: string;
	category: string;
	thumbnail: string;
	thumbnail_id: string;
	price: number;
}

export interface UserI {
	_id: string;
	avatar: string;
	avatar_id: string;
	name: string;
	lastname: string;
	age: number;
	cardId: number;
	email: string;
	address: string;
	password: string;
	purchases?: any;
	isAdmin?: boolean;
	isValidPassword(password: string): Promise<boolean>;
}

export interface UpdateUserI {
	avatar?: string;
	avatar_id?: string;
	name?: string;
	lastname?: string;
	age?: number;
	cardId?: number;
	email?: string;
	address?: string;
	password?: string;
}
export interface CartI {
	_id: string | ObjectId;
	userId?: string;
	cartProducts?: ProductI[];
}

export declare interface CloudinaryOptions extends Options {
	params: { folder?: string };
}

export interface ProductQuery {
	title?: string;
	price?: number;
	code?: string;
	stock?: number;
	priceMax?: number;
	priceMin?: number;
	stockMax?: number;
	stockMin?: number;
}

declare global {
	namespace Express {
		interface User {
			_id: string;
			avatar?: string;
			avatar_id?: string;
			isAdmin?: boolean;
			thumbnail_id?: string;
		}
	}
}
