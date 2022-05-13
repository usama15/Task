import { configureStore } from "@reduxjs/toolkit";
import AddToCartReducer from './reducer/AddToCardReducer'
export const Store = configureStore({
    reducer: {
        Carts: AddToCartReducer
    }
})