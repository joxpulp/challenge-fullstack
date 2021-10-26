import { Request, Response } from 'express';
import { productModel } from '../models/products';

class ProductController {
	async getProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;

			if (id) {
				const singleProduct = await productModel.get(id);
				if (singleProduct.length === 0) {
					return res
						.status(404)
						.json({ error: 'No existe un producto con este id' });
				}
				return res.json({ product: singleProduct });
			} else {
				const getAll = await productModel.get();
				if (getAll.length === 0) {
					return res.status(404).json({ error: 'No hay productos cargados' });
				}
				return res.json({ products: getAll });
			}
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async addProduct(req: Request, res: Response) {
		try {
			const body = req.body;
			if (body) {
				await productModel.add(body);
				return res.json({ body });
			}
			return res.status(404).json({
				error:
					'Se debe enviar un body con title, description, code, price, thumbnail, stock',
			});
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async updateProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const body = req.body;
			const updatedProduct = await productModel.update(id, body);
			if (updatedProduct.length === 0) {
				return res.status(404).json({ error: 'Producto no encontrado' });
			}
			return res.status(201).json({ product: updatedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async deleteProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const deletedProduct = await productModel.delete(id);
			if (deletedProduct.length === 0) {
				return res.status(404).json({
					error: 'Producto no encontrado o ya eliminado',
				});
			}
			return res.json({ deletedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}
}

export const productController = new ProductController();
