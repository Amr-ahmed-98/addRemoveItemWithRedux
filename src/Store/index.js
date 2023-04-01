import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import visibilitySlice from "./visibility-slice";
const store = configureStore({
  reducer: { isVisible: visibilitySlice.reducer, cartItem: cartSlice.reducer },
});

export default store;
