import { products } from './schemas/productschema';
import { NewProductI, ProductI } from './interfaces';

export class Product {

	async get(id?: string): Promise<ProductI[]> {
		let outputGet: ProductI[] = [];

		if (id) {
			const singleProduct = await products.findById(id);
			singleProduct && outputGet.push(singleProduct);
		} else {
			outputGet = await products.find();
		}
		return outputGet;
	}

	async add(data: NewProductI): Promise<ProductI> {
		const newProduct = new products(data);
		await newProduct.save();
		return newProduct;
	}

	async update(id: string, data: NewProductI): Promise<ProductI[]> {
		let outputUpdate: ProductI[] = [];
		await products.findByIdAndUpdate(
			id,
			{ $set: data },
			{ runValidators: true }
		);

		const updatedProduct = await products.findById(id);
		updatedProduct && outputUpdate.push(updatedProduct);

		return outputUpdate;
	}

	async delete(id: string): Promise<ProductI[]> {
		let outputDelete: ProductI[] = [];
		const deletedProduct = await products.findByIdAndDelete(id);
		deletedProduct && outputDelete.push(deletedProduct);
		return outputDelete;
	}

	// async query(options: ProductQuery): Promise<Products[]> {
	// 	const query: any = {};
	// 	if (options.title) query.title = options.title;

	// 	if (options.priceMin && options.priceMax)
	// 		query.price = { $gte: options.priceMin, $lte: options.priceMax };

	// 	if (options.stockMin && options.stockMax)
	// 		query.stock = { $gte: options.stockMin, $lte: options.stockMax };

	// 	if (options.code) query.code = options.code;

	// 	return await products.find(query);
	// }
}

export const productModel = new Product();
