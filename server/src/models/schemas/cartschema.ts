import { Schema, model } from 'mongoose';
import { CartI, ProductsCartI } from '../interfaces';

const cartCollection = 'carritos';
const cartProductsCollection = 'carritoproductos';

const cartProductSchema = new Schema<ProductsCartI>(
	{
		_id: { type: Schema.Types.ObjectId, ref: 'products' },
		name: { type: String, max: 100 },
		description: { type: String, max: 300 },
		category: { type: String, max: 100 },
		thumbnail: { type: String,  max: 100 },
		price: {
			type: Number,
			
			min: [100, `El valor es {VALUE}, debe ser como minimo 100`],
			max: [3000000, `El valor es {VALUE}, debe ser como maximo 5000`],
		},
		quantity: { type: Number },
	},
	{ versionKey: false }
);

const cartSchema = new Schema<CartI>(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'users' },
		cartProducts: [cartProductSchema],
	},
	{ versionKey: false, timestamps: true }
);
export const cart = model<CartI>(cartCollection, cartSchema);
export const cartProducts = model<ProductsCartI>(
	cartProductsCollection,
	cartProductSchema
);
