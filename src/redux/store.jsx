import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice";
const Store =
    configureStore({
        reducer: {
        products: ProductSlice
        }
    });
export default Store;