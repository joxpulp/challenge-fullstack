import { Request, Response } from 'express';
import cloudinary from '../services/cloudinary';
import { productModel } from '../models/product';
import multer from 'multer';

class ProductController {
	async getProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;

			if (id) {
				const singleProduct = await productModel.get(id);

				return res.json({ product: singleProduct });
			} else {
				const getAll = await productModel.get();

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

			const newProduct = await productModel.add({
				...body,
				thumbnail: req.file!.path!,
				thumbnail_id: req.file!.filename!,
			});

			return res.json(newProduct);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			} else if (error instanceof multer.MulterError) {
				return res.status(500).json('Max file size 2MB allowed!');
			}
		}
	}

	async updateProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;
			//* Find product by id to get product fields
			const [product] = await productModel.get(id);

			const body = req.body;
			let thumbnail = product.thumbnail;
			let thumbnail_id = product.thumbnail_id;

			//* If user upload a new image, previous image is destroyed by passing the thumbnail_id,
			//* Variables thumbnail and thumbnail_id are overwritten by the new image
			if (req.file) {
				thumbnail = req.file.path;
				thumbnail_id = req.file.filename;
				await cloudinary.uploader.destroy(product.thumbnail_id!);
			}

			const updatedProduct = await productModel.update(id, {
				...body,
				thumbnail,
				thumbnail_id,
			});

			return res.status(201).json({ updatedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}

	async deleteProduct(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const [product] = await productModel.get(id);

			await cloudinary.uploader.destroy(product.thumbnail_id!);
			const deletedProduct = await productModel.delete(id);

			return res.json({ deletedProduct });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ error: error.message });
			}
		}
	}
}

export const productController = new ProductController();
