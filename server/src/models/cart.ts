import { productModel } from './product';
import { cart, cartProducts } from './schemas/cartschema';
import { CartI, ProductI } from './interfaces';

class Cart {
	async get(userId: string, productId?: string): Promise<ProductI[]> {
		const findAll = await cart.findOne({ userId });
		let outputGet: ProductI[] = [];

		if (productId) {
			const findById = await cart.findOne(
				{ userId },
				{ cartProducts: { $elemMatch: { _id: productId } } }
			);
			outputGet.push(...findById!.cartProducts!);
			return outputGet;
		}

		if (findAll) {
			outputGet.push(findAll);
		}

		return outputGet;
	}

	async add(productId: string, userId: string): Promise<ProductI[]> {
		const findProduct = await productModel.get(productId);
		const findCart = await cart.findOne({ userId });
		const ouputNew: ProductI[] = [];

		if (findCart === null) {
			const newCart = new cart({ userId });
			await newCart.save();
		}

		if (findProduct.length) {
			await cart.updateOne(
				{ userId },
				{ $push: { cartProducts: findProduct } }
			);
			ouputNew.push(...findProduct);
			return ouputNew;
		}
		return ouputNew;
	}

	async delete(productId: string, userId: string): Promise<ProductI[]> {
		const findProduct = await this.get(userId, productId);
		const outputDelete: ProductI[] = [];

		if (findProduct) {
			await cart.updateMany(
				{ userId },
				{ $pull: { cartProducts: { _id: productId } } }
			);
			outputDelete.push(...findProduct);
		}

		return outputDelete;
	}

	async buy(id: string) {
		if (id) {
			const findCart = cart.findById(id);
		}
		await cart.findByIdAndDelete(id);
	}
}

export const cartModel = new Cart();
