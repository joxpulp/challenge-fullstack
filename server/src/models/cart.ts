import { productModel } from './product';
import { cart } from './schemas/cartschema';
import { CartI, ProductI } from './interfaces';

class Cart {
	async get(userId: string, productId?: string): Promise<ProductI[] & CartI[]> {
		let outputGet: ProductI[] & CartI[] = [];

		if (productId) {
			const findById = await cart.findOne(
				{ userId },
				{ cartProducts: { $elemMatch: { _id: productId } } }
			);
			if (findById) outputGet.push(...findById.cartProducts!);
			return outputGet;
		} else {
			const findAll = await cart.findOne({ userId });
			if (findAll) outputGet.push(findAll);
		}

		return outputGet;
	}

	async add(userId: string, productId: string): Promise<ProductI[]> {
		const [findProduct] = await productModel.get(productId);
		const findCart = await cart.findOne({ userId });
		const ouputNew: ProductI[] = [];

		if (findCart === null) {
			const newCart = new cart({ userId });
			await newCart.save();
		}

		await cart.updateOne(
			{ userId },
			{
				$inc: { total: findProduct.price },
				$push: { cartProducts: findProduct },
			}
		);

		ouputNew.push(findProduct);

		return ouputNew;
	}

	async delete(userId: string, productId: string): Promise<ProductI[]> {
		const [findProduct] = await this.get(userId, productId);
		const outputDelete: ProductI[] = [];

		await cart.updateMany(
			{ userId },
			{
				$inc: { total: -findProduct.price! },
				$pull: {
					cartProducts: { _id: productId },
				},
			}
		);

		//* If there is no product in cart, the entire cart is deleted
		const findById = await cart.findOne({ userId }, 'cartProducts');
		if (findById!.cartProducts!.length === 0)
			await cart.findOneAndDelete({ userId });

		outputDelete.push(findProduct);

		return outputDelete;
	}
}

export const cartModel = new Cart();
