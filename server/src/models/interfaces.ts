export interface ProductI {
	_id: string;
	name?: string;
	description?: string;
	category?: string;
	thumbnail?: string;
	price?: number;
}

export interface NewProductI {
	name: string;
	description: string;
	category: string;
	thumbnail: string;
	price: number;
}

export interface UserI {
	_id: string;
	name: string;
	lastname: string;
	age: number;
	cardId: number;
	email: string;
	address: string;
	password: string;
	cart?: any;
	purchases?: any;
	isAdmin?: boolean;
	isValidPassword(password: string): Promise<boolean>;
}
export interface CartI {
	_id: string;
	userId: any;
	timestamp: number;
	products: ProductsCartI[];
	cartProducts?: any;
}
export interface ProductsCartI {
	_id?: any;
	name: string;
	description: string;
	category: string;
	thumbnail: string;
	price: number;
	quantity: number;
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
			_id?: string;
			isAdmin?: boolean;
		}
	}
}
