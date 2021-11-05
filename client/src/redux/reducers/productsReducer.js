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
	async (id, { rejectWithValue }) => {
		try {
			const {
				data: { product },
			} = await apiCommerce.get(`/api/products/list/${id}`);
			return product;
		} catch ({ response: { data } }) {
			return rejectWithValue(data.error);
		}
	}
);

const initialState = {
	products: [],
	product: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		clearProduct(state, action) {
			return {
				...state,
				product: [],
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {
				return {
					...state,
					products: action.payload,
				};
			})
			.addCase(getProducts.rejected, (state, action) => {
				return {
					...state,
					products: [],
				};
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				return {
					...state,
					product: action.payload,
				};
			})
			.addCase(getProductById.rejected, (state, action) => {
				return {
					...state,
					product: [],
				};
			});
	},
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
