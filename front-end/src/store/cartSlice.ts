import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cartData: [];
}

const initialState = { cartData: [] };

export const slice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart(state, { payload }) {
      return { ...state, cartData: payload };
    },
    logoutCart(state) {
      return { ...state, cartData: [] };
    },
  },
});

export const { setCart, logoutCart } = slice.actions;

export const selectCart = (state: { cart: CartState }) => state.cart;

export default slice.reducer;
