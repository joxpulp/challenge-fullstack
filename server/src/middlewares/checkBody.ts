import { Request, Response, NextFunction } from 'express';
import cloudinary from '../config/cloudinary';

export const checkBody = async(req: Request, res: Response, next: NextFunction) => {
	const { name, description, category, price } = req.body;
	if (!name || !description || !category || !price || !req.file) {
        if (req.file) {
            await cloudinary.uploader.destroy(req.file!.filename)
        }
		return res.status(400).json({ error: 'Missing body' });
	} else {
		next();
	}
};
