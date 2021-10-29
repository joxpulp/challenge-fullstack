import { Schema, model } from 'mongoose';
import { ProductI } from '../interfaces';

const productsCollection = 'products';

const productsSchema = new Schema<ProductI>(
	{
		name: { type: String, required: true, max: 100 },
		description: { type: String, required: true, max: 300 },
		category: { type: String, required: true },
		thumbnail: { type: String, required: true, max: 100 },
		thumbnail_id: { type: String, required: true, max: 100 },
		price: {
			type: Number,
			required: true,
			min: [100, `El valor es {VALUE}, debe ser como minimo 100`],
			max: [3000000, `El valor es {VALUE}, debe ser como maximo 5000`],
		},
	},
	{ versionKey: false }
);

export const products = model<ProductI>(productsCollection, productsSchema);
