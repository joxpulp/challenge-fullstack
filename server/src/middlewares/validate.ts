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
				},
				{ abortEarly: false, strict: true }
			);

			console.log(req.files);

			// Validate file extension
			if (req.files) {
				const mimeType = ['image/png', 'image/jpeg', 'image/jpg'];
				const { mimetype } = req.files.avatar as UploadedFile;
				if (!mimeType.includes(mimetype)) {
					return res
						.status(400)
						.json({
							error: 'File type not supported, only .png | .jpeg | .jpg',
						});
				}
			}

			return next();
		} catch (err) {
			if (err instanceof Error) {
				res.status(400).json({ error: err.errors });
			}
		}
	};
