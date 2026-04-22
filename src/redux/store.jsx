import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice";
import cartSlice from "./cartSlice"
const Store =
    configureStore({
        reducer: {
        products: ProductSlice,
        cart: cartSlice,
        }
    });
export default Store;