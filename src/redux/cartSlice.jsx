import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  shippingCost: JSON.parse(localStorage.getItem("shippingCost")) || 30,
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("shippingCost", JSON.stringify(state.shippingCost));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cart = [];
      saveToLocalStorage(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveToLocalStorage(state);
    },

    updateShippingCost: (state, action) => {
      state.shippingCost = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  updateShippingCost,
} = cartSlice.actions;

export default cartSlice.reducer;