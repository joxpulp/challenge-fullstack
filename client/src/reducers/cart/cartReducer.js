import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCommerce } from '../../services/api/ecommerce';
import { logout } from '../auth/authReducer';

export const getCart = createAsyncThunk(
	'cart/getCart',
	async (_, { rejectWithValue }) => {
		try {
			const { data: [cart] } = await apiCommerce.get('/api/cart/list');
			return cart;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

export const addProductCart = createAsyncThunk(
	'cart/addProductToCart',
	async (productId, { rejectWithValue }) => {
		try {
			await apiCommerce.post(`/api/cart/add/${productId}`);

			const { data: [cart] } = await apiCommerce.get('/api/cart/list');
			return cart;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

export const removeProductCart = createAsyncThunk(
	'cart/removeProductFromCart',
	async (productId, { rejectWithValue }) => {
		try {
			await apiCommerce.delete(`/api/cart/delete/${productId}`);

			const { data: [cart] } = await apiCommerce.get('/api/cart/list');
			return cart;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

const initialState = {
	cartData: JSON.parse(localStorage.getItem('cartData')) || [],
	total: JSON.parse(localStorage.getItem('total')) || null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.fulfilled, (state, action) => {
				return {
					...state,
					cartData: action.payload.cartProducts,
					total: action.payload.total,
				};
			})
			.addCase(getCart.rejected, (state, action) => {
				return {
					cartData: [],
					total: null,
				};
			})
			.addCase(addProductCart.fulfilled, (state, action) => {
				return {
					...state,
					cartData: action.payload.cartProducts,
					total: action.payload.total,
				};
			})
			.addCase(removeProductCart.fulfilled, (state, action) => {
				return {
					...state,
					cartData: action.payload.cartProducts,
					total: action.payload.total,
				};
			})
			.addCase(removeProductCart.rejected, (state, action) => {
				return {
					...state,
					cartData: [],
					total: null,
				};
			})
			.addCase(logout.fulfilled, (state, action) => {
				return {
					cartData: [],
					total: null,
				};
			});
	},
});

export default cartSlice.reducer;
