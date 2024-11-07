import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload; // نتلقى id المنتج الذي سيتم حذفه
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === productId
      );

      if (productIndex !== -1) {
        // إذا كان المنتج موجودًا
        const product = state.cartProducts[productIndex];
        state.totalPrice -= product.price * product.quantity; // تحديث السعر الإجمالي
        state.cartProducts.splice(productIndex, 1); // حذف المنتج المحدد فقط
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
