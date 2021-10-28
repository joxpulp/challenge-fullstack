import { cart } from '../models/schemas/cartschema';
import { Request, Response, NextFunction } from 'express';

export const cartExist = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.user!._id!;

	const findById = await cart.findOne({ userId }, 'cartProducts');

	if (findById!.cartProducts!.length === 0) {
		await cart.findOneAndDelete({ userId });
		return res
			.status(404)
			.json({ error: 'No products in cart or already deleted' });
	} else {
		next();
	}
};
