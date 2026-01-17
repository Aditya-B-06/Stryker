import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartPrice: 0,
  cartSize: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const product = { ...action.payload, qty: action.payload.qty || 1 };
      const index = state.cart.findIndex(item => item.id === product.id);

      if (index >= 0) {
        state.cart[index].qty += 1;
      } else {
        state.cart.push(product);
      }

      state.cartSize = state.cart.reduce((sum, item) => sum + item.qty, 0);
      state.cartPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      state.cartSize = state.cart.reduce((sum, item) => sum + item.qty, 0);
      state.cartPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },

    emptyCart: (state) => {
      state.cart = [];
      state.cartPrice = 0;
      state.cartSize = 0;
    },

    increaseQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
        state.cartSize = state.cart.reduce((sum, item) => sum + item.qty, 0);
        state.cartPrice = state.cart.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1;
        state.cartSize = state.cart.reduce((sum, item) => sum + item.qty, 0);
        state.cartPrice = state.cart.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );
      }
    }
  }
});

export const { addTocart, removeFromCart, emptyCart, increaseQty, decreaseQty } =
    cartSlice.actions;

export default cartSlice.reducer;
