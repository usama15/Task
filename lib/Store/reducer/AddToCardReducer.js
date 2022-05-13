import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AddToCart: []
};

const AddToCartReducer = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        SaveToCart: (state, action) => {
            state.AddToCart = [...state.AddToCart, action.payload]
        },
        RemoveToCart: (state, action) => {
            state.AddToCart = state.AddToCart.filter((item) => item.id !== action.payload);
        },

    }
})

export default AddToCartReducer.reducer;
export const {SaveToCart, RemoveToCart} = AddToCartReducer.actions
export const CartList = state => state.Carts.AddToCart 