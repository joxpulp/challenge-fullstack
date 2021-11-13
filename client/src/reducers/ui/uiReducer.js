import { createSlice } from '@reduxjs/toolkit';
import { editUser, isLoggedIn, login, logout, signup } from '../auth/authReducer';
import {
	addProductCart,
	getCart,
	removeProductCart,
} from '../cart/cartReducer';
import {
	addProduct,
	editProduct,
	getProductById,
} from '../products/productsReducer';
import { getPurchase, purchase } from '../purchase/purchaseReducer';

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
			.addCase(addProduct.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					successMsg: action.payload.msg,
				};
			})
			.addCase(editProduct.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(editProduct.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					successMsg: action.payload.msg,
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
					loading: false,
					errorMsg: action.payload.error,
				};
			})
			.addCase(logout.fulfilled, (state, action) => {
				return {
					...state,
					userMenu: false,
				};
			})
			.addCase(logout.rejected, (state, action) => {
				return {
					...state,
					userMenu: false,
				};
			})
			.addCase(isLoggedIn.rejected, (state, action) => {
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
			})
			.addCase(getCart.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(getCart.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(getCart.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(addProductCart.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(addProductCart.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					successMsg: 'Product added to cart',
				};
			})
			.addCase(addProductCart.rejected, (state, action) => {
				return {
					...state,
					loading: false,
					errorMsg: action.payload.error,
				};
			})
			.addCase(removeProductCart.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(removeProductCart.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(removeProductCart.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(getPurchase.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(getPurchase.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(getPurchase.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(purchase.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(purchase.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					successMsg: action.payload,
				};
			})
			.addCase(purchase.rejected, (state, action) => {
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
