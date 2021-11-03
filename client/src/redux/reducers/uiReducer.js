import { createSlice } from '@reduxjs/toolkit';
import { editUser, login, logout, signup } from './authReducer';
import { getProductById } from './productsReducer';

const initialState = {
	loading: false,
	errorMsg: null,
	successMsg: null,
	userMenu: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		clearErrorMsg(state, action) {
			return {
				...state,
				errorMsg: null,
			};
		},
		clearSuccessMsg(state, action) {
			return {
				...state,
				successMsg: null,
			};
		},
		setUserMenu(state, action) {
			return {
				...state,
				userMenu: action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductById.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(getProductById.rejected, (state, action) => {
				return {
					...state,
					errorMsg: action.payload,
					loading: false,
				};
			})
			.addCase(login.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(login.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(login.rejected, (state, action) => {
				return {
					...state,
					errorMsg: action.payload.error,
					loading: false,
				};
			})
			.addCase(logout.fulfilled, (state, action) => {
				return {
					...state,
					userMenu: false,
				};
			})

			.addCase(editUser.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(editUser.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(editUser.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(signup.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(signup.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					successMsg: action.payload.msg,
				};
			})
			.addCase(signup.rejected, (state, action) => {
				return {
					...state,
					loading: false,
					errorMsg: action.payload.error,
				};
			});
	},
});

export const { clearErrorMsg, clearSuccessMsg, setUserMenu } = uiSlice.actions;
export default uiSlice.reducer;
