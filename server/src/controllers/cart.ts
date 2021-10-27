import { Request, Response } from 'express';
import { cartModel } from '../models/cart';

class CartController {
	async getProducts(req: Request, res: Response) {
		try {
			const { id_producto } = req.params;
			if (id_producto) {
				const singleProduct = await cartModel.get(id_producto);
				if (singleProduct.length === 0) {
					return res
						.status(404)
						.json({ error: 'No existe un producto con este id' });
				}
				return res.json({ product: singleProduct });
			} else {
				const get = await cartModel.get(req.user!._id!);
				if (get.length === 0) {
					return res.status(404).json({ error: 'No hay un carrito creado' });
				}
				return res.json({ cart: get });
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
			const { id_producto } = req.params;
			const deletedProduct = await cartModel.delete(id_producto);
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
