// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.id === item.id);
      if (existItem) {
        existItem.quantity += 1;  // Increase quantity if already in cart
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(x => x.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(x => x.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

// ✅ Optional: Selector to get total quantity
export const selectTotalQuantity = state =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
