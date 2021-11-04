import { NextFunction, Request, Response } from 'express';
import { OptionalObjectSchema } from 'yup/lib/object';
import cloudinary from '../services/cloudinary';

export const validate =
	(schema: OptionalObjectSchema<{}>) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate({
				body: req.body,
			});
			return next();
		} catch (err) {
			if (err instanceof Error) {
				if (req.file) {
					await cloudinary.uploader.destroy(req.file!.filename);
				}
				res.status(400).json({ error: err.message });
			}
		}
	};
