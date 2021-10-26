import { productModel } from "./product";
import { cart, cartProducts } from "./schemas/cartschema";
import { CartI, ProductI } from './interfaces';

export class Cart {
	
	async get(id?: string): Promise<CartI[] | ProductI[]> {
		let outputGet: ProductI[] = [];

		if (id) {
			const singleProduct = await cartProducts.findById(id);
			singleProduct && outputGet.push(singleProduct);
		} else {
			outputGet = await cart.find().populate('cartProducts');
		}
		return outputGet;
	}

	async add(id: string): Promise<ProductI[]> {
		const findProduct = await productModel.get(id);
		const ouputNew: ProductI[] = [];
		const checkCart = await cart.find();

		if (checkCart.length === 0) {
			const newCart = new cart();
			await newCart.save();
		}

		if (findProduct.length) {
			const readCart = await cart.find();
			readCart[0].cartProducts = readCart[0].cartProducts.concat(id);
			await readCart[0].save();

			const newProduct = new cartProducts(...findProduct);
			newProduct.isNew = true;
			await newProduct.save();
			ouputNew.push(newProduct);

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
            const findCart = cart.findById(id)
            
        }
        await cart.findByIdAndDelete(id);

    }
}
