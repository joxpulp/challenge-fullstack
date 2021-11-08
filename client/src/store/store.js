import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authReducer';
import cartReducer from '../reducers/cart/cartReducer';
import productsReducer from '../reducers/products/productsReducer';
import purchaseReducer from '../reducers/purchase/purchaseReducer';
import uiReducer from '../reducers/uiReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
        ui: uiReducer,
        auth: authReducer,
        cart: cartReducer,
        purchase: purchaseReducer
    }
})

export default store;