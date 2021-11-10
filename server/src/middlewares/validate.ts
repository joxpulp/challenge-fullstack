import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { OptionalObjectSchema } from 'yup/lib/object';
import cloudinary from '../services/cloudinary';

export const validate =
	(schema: OptionalObjectSchema<{}>) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate(
				{
					body: req.body,
					files: req.files
				},
				{ abortEarly: false}
			);
			
			return next();
		} catch (err) {
			if (err instanceof Error) {
				res.status(400).json({ error: err.errors });
			}
		}
	};
