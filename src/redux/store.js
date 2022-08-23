import { configureStore, createSlice } from "@reduxjs/toolkit";
import productReducer from "./slice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
