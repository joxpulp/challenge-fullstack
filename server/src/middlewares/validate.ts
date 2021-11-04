import { NextFunction, Request, Response } from 'express';
import { OptionalObjectSchema } from 'yup/lib/object';

export const validate =
	(schema: OptionalObjectSchema<{}>) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate({
				body: req.body,
			})
			return next();
		} catch (err) {
			if (err instanceof Error) {
				res.status(400).json({ error: err.message });
			}
		}
	};