import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCommerce } from '../../services/api/ecommerce';
import { logout } from '../auth/authReducer';

export const getPurchase = createAsyncThunk(
	'order/getPurchases',
	async (_, { rejectWithValue }) => {
		try {
			const { data: purchases } = await apiCommerce.get('/api/orders/getpurchases');
			return purchases;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

export const purchase = createAsyncThunk(
	'order/purchase',
	async (_, { rejectWithValue }) => {
		try {
			await apiCommerce.post(`/api/orders/purchase`);

			const { data: purchases } = await apiCommerce.get('/api/orders/getpurchases');
			return purchases;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);


const initialState = {
	purchases: JSON.parse(localStorage.getItem('purchases')) || [],
	totalPaid: JSON.parse(localStorage.getItem('totalPaid')) || null,
};

const purchaseSlice = createSlice({
	name: 'purchase',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPurchase.fulfilled, (state, action) => {
				return {
					...state,
					purchases: action.payload.purchases,
					totalPaid: action.payload.total,
				};
			})
			.addCase(getPurchase.rejected, (state, action) => {
				return {
					purchases: [],
					total: null,
				};
			})
			.addCase(purchase.fulfilled, (state, action) => {
				return {
					...state,
					purchases: action.payload.purchases,
					totalPaid: action.payload.total,
				};
			})
			.addCase(logout.fulfilled, (state, action) => {
				return {
					purchases: [],
					totalPaid: null,
				};
			});
	},
});

export default purchaseSlice.reducer;
