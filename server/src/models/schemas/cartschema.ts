import { Schema, model } from 'mongoose';
import { CartI, ProductI } from '../interfaces';

const cartCollection = 'carrito'
const cartProductsCollection = 'carritoproducto'

const cartSchema = new Schema<CartI>(
	{
		timestamp: { type: Number, default: Date.now() },
		cartProducts: [{ type: Schema.Types.ObjectId, ref: 'carritoproducto' }],
	},
	{ versionKey: false }
);

const cartProductSchema = new Schema<ProductI>(
	{
		name: { type: String, required: true, max: 100 },
		description: { type: String, required: true, max: 300 },
		category: { type: String, required: true, max: 100 },
		thumbnail: { type: String, required: true, max: 100 },
		price: {
			type: Number,
			required: true,
			min: [100, `El valor es {VALUE}, debe ser como minimo 100`],
			max: [3000000, `El valor es {VALUE}, debe ser como maximo 5000`],
		},
	},
	{ versionKey: false }
);

export const cart = model<CartI>(cartCollection, cartSchema)
export const cartProducts = model<ProductI>(cartProductsCollection, cartProductSchema);
