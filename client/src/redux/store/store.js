import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';
import productsReducer from '../reducers/productsReducer';
import purchaseReducer from '../reducers/purchaseReducer';
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