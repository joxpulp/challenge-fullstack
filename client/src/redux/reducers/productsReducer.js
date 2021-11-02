import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCommerce } from '../../services/api/ecommerce';

export const getProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const { data: {products} } = await apiCommerce.get('/api/products/list');
		return products;
	}
);

const initialState = {
    products: []
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			return {
				...state,
				products: action.payload,
			};
		});
	},
});

export default productSlice.reducer;
