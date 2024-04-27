import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/BlogSlice";

// created a centralized store
export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});