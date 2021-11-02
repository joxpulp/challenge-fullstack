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
    reducers: {},
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
							loading: false,
						};
					})
    }
});

export default uiSlice.reducer;