import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";

// Declare initialState properly
const initialState = {
  products: [
    { id: 1, name: "Product 1", image: product1, prix: "200 dh" },
    { id: 2, name: "Product 2", image: product2, prix: "150 dh"},
    { id: 3, name: "Product 3", image: product3, prix: "150 dh"},
    { id: 4, name: "Product 4", image: product4, prix: "200 dh"},
    { id: 5, name: "Product 5", image: product5, prix: "150 dh"},
    { id: 6, name: "Product 6", image: product6, prix: "150 dh"}
  ]
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  }
});

export default ProductSlice.reducer;
