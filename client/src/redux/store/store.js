import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsReducer';
import uiReducer from '../reducers/uiReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
        ui: uiReducer
    }
})

export default store;