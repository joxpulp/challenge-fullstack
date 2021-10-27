import { Request, Response } from 'express';
import { cartModel } from '../models/cart';

class CartController {
	async getProducts(req: Request, res: Response) {
		try {
			const { id_product } = req.params;

			if (id_product) {
				const findById = await cartModel.get(req.user!._id!, id_product);

				if (findById.length) {
					return res.json({ product: findById });
				}
				return res
					.status(404)
					.json({ error: 'No existe un producto con este id' });
			} else {
				const findAll = await cartModel.get(req.user!._id!);

				if (findAll.length) {
					return res.json({ cart: findAll });
				}
				return res.status(404).json({ error: 'No hay un carrito creado' });
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
				const productAdded = await cartModel.add(id_product, req.user!._id!);
				return productAdded.length === 0
					? res.status(404).json({ error: 'No existe producto con ese id' })
					: res.json({ productAdded });
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
			const deletedProduct = await cartModel.delete(id_product, req.user!._id!);
			return deletedProduct.length === 0
				? res
						.status(404)
						.json({ error: 'Producto no encontrado o ya eliminado' })
				: res.json({ deletedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}
}

export const cartController = new CartController();
