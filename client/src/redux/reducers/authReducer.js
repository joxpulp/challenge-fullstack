import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCommerce } from '../../services/api/ecommerce';

export const login = createAsyncThunk(
	'auth/login',
	async (body, { rejectWithValue }) => {
		try {
			const { data: user } = await apiCommerce.post('/api/auth/login', body);
			return user;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

export const isLogged = createAsyncThunk(
	'auth/isLogged',
	async (_, { rejectWithValue }) => {
		try {
			const { data: isLogged } = await apiCommerce.get('/api/auth/islogged');
			return isLogged;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

export const editUser = createAsyncThunk(
	'auth/editUser',
	async (formData, { rejectWithValue }) => {
		try {
			const { data: user } = await apiCommerce.put(
				'/api/auth/edituser',
				formData
			);
			return user;
		} catch ({ response: { data } }) {
			return rejectWithValue(data);
		}
	}
);

const initialState = {
	userData: JSON.parse(localStorage.getItem('userData')) || {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.rejected, (state, action) => {
				return {
					...state,
				};
			})
			.addCase(login.fulfilled, (state, action) => {
				return {
					...state,
					userData: action.payload.userData,
					logged: action.payload.logged,
				};
			})
			.addCase(isLogged.fulfilled, (state, action) => {
				return {
					...state,
					logged: action.payload.logged,
				};
			})
			.addCase(editUser.fulfilled, (state, action) => {
				return {
					...state,
					userData: action.payload.userUpdated,
				};
			});
	},
});

export default authSlice.reducer;
