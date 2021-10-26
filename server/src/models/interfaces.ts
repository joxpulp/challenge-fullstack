export interface ProductsCart {
	_id: string;
}

export interface CartI {
	_id: string;
	timestamp: number;
	products: ProductI[];
	cartProducts?: any;
}
export interface ProductI {
	_id: string;
	name: string;
	description: string;
	category: string;
	thumbnail: string;
	price: number;
}

export interface NewProductI {
	name: string;
	description: string;
	category: string;
	thumbnail: string;
	price: number;
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
