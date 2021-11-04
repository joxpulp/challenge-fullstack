import { Request, Response } from 'express';
import { cartModel } from '../models/cart';

class CartController {
	async getProducts(req: Request, res: Response) {
		try {
			const { id_product } = req.params;

			if (id_product) {
				const findById = await cartModel.get(req.user!._id!, id_product);
				return res.json({ product: findById });
			} else {
				const findAll = await cartModel.get(req.user!._id!);
				return res.json({ cart: findAll });
			}
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async addProducts(req: Request, res: Response) {
		try {
			const { id_product } = req.params;
			if (id_product) {
				const productAdded = await cartModel.add(req.user!._id!, id_product);
				return res.json({ productAdded });
			}
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async deleteProducts(req: Request, res: Response) {
		try {
			const { id_product } = req.params;
			const deletedProduct = await cartModel.delete(req.user!._id!, id_product);
			return res.json({ deletedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}
}

export const cartController = new CartController();
