import { productModel } from './product';
import { cart, cartProducts } from './schemas/cartschema';
import { CartI, ProductI } from './interfaces';
import { userModel } from './schemas/userschema';

class Cart {
	async get(userId: string, id?: string): Promise<CartI[] | ProductI[]> {
		let outputGet: ProductI[] = [];

		if (id) {
			const singleProduct = await cartProducts.findById(id);
			singleProduct && outputGet.push(singleProduct);
		} else {
			const getAll = await cart.findOne({ userId });
			if (getAll !== null) {
				outputGet.push(getAll);
			}
		}
		return outputGet;
	}

	async add(productId: string, userId: string): Promise<ProductI[]> {
		const findProduct = await productModel.get(productId);
		const checkCart = await cart.findOne({ userId });
		const ouputNew: ProductI[] = [];

		if (checkCart === null) {
			const newCart = new cart({ userId });
			await newCart.save();
		}

		if (findProduct.length) {
			const readCart = await cart.findOne({ userId });
			readCart!.cartProducts.push(...findProduct);
			await readCart!.save();
			ouputNew.push(...findProduct);

			return ouputNew;
		}
		return ouputNew;
	}

	async delete(id: string) {
		const outputDelete: ProductI[] = [];
		const deletedProduct = await cartProducts.findByIdAndDelete(id);
		deletedProduct && outputDelete.push(deletedProduct);
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
