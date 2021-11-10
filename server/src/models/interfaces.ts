import { ObjectId } from 'mongoose';
export interface ProductI  {
	_id: string | ObjectId;
	name?: string;
	description?: string;
	category?: string;
	thumbnail?: string;
	thumbnail_id?: string;
	price?: number;
	quantity?: number;
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
	_id?: string;
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
	total?: number;
	cartProducts?: ProductI[];
}
export interface PurchaseI {
	_id: string | ObjectId;
	userId?: string;
	total?: number;
	purchases?: ProductI[];
}

declare global {
	namespace Express {
		interface User {
			_id: string;
			avatar?: string;
			avatar_id: string;
			name?: string;
			lastname?: string;
			age?: number;
			cardId?: number;
			email?: string;
			address?: string;
			password?: string;
			isAdmin?: boolean;
		}
	}

	interface Error {
		errors: string[];
	}
}
