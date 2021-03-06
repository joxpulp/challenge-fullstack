import { Schema, model } from 'mongoose';
import { ProductI, PurchaseI } from '../interfaces';

const pruchaseCollection = 'purchase';

const purchaseProductSchema = new Schema<ProductI>(
	{
		_id: { type: Schema.Types.ObjectId, ref: 'products' },
		name: { type: String, required: true, max: 100 },
		description: { type: String, required: true, max: 300 },
		category: { type: String, required: true, max: 100 },
		thumbnail: { type: String, required: true, max: 100 },
		thumbnail_id: { type: String, required: true, max: 100 },
		price: {
			type: Number,
			required: true,
			min: [100, `El valor es {VALUE}, debe ser como minimo 100`],
			max: [3000000, `El valor es {VALUE}, debe ser como maximo 5000`],
		},
		quantity: { type: Number, required: true },
	},
	{ versionKey: false }
);

const purchaseSchema = new Schema<PurchaseI>(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'users' },
		total: { type: Number },
		purchases: [purchaseProductSchema],
	},
	{ versionKey: false, timestamps: true }
);
export const purchase = model<PurchaseI>(pruchaseCollection, purchaseSchema);
