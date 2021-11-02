import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCommerce } from '../../services/api/ecommerce';

export const getProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const {
			data: { products },
		} = await apiCommerce.get('/api/products/list');
		return products;
	}
);

export const getProductById = createAsyncThunk(
	'products/getProductById',
	async (id) => {
		const {
			data: { product },
		} = await apiCommerce.get(`/api/products/list/${id}`);
		return product;
	}
);

const initialState = {
	products: [],
	product: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {
				return {
					...state,
					products: action.payload,
				};
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				return {
					...state,
					product: action.payload,
				};
			});
	},
});

export default productSlice.reducer;
