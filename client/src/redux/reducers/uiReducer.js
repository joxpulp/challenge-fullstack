import { createSlice } from "@reduxjs/toolkit";
import { getProductById } from "./productsReducer";


const initialState = {
    loading: false,
    errorMsg: null,
    successMsg: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
		clearErrorMsg(state, action) {
			return {
				...state,
				errorMsg: null
			}
		}
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
    }
});

export const {clearErrorMsg} = uiSlice.actions
export default uiSlice.reducer;