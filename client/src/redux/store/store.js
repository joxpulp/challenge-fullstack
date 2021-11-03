import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import productsReducer from '../reducers/productsReducer';
import uiReducer from '../reducers/uiReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
        ui: uiReducer,
        auth: authReducer
    }
})

export default store;