import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png"
import product8 from "../assets/product8.png"
import product9 from "../assets/image7.png"
import product10 from "../assets/product10.png"
import product11 from "../assets/product11.png"
import product14 from "../assets/product14.png"
import product16 from "../assets/product16.png"
import product15 from "../assets/product15.png"
import product18 from "../assets/product18.png"
import product13 from "../assets/image6.png"
import product17 from "../assets/product17.png"

const initialState = {
 products: {
  accessories: [
    {
      id: 1,
      name: "Necklace",
      image: product1,
      prix: "200 dh",
      category: "accessories",
      description: "Delicate gold-plated necklace designed to elevate both casual and formal outfits with a refined, timeless touch.",
      material: "Gold-plated alloy, anti-tarnish coating",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 2,
      name: "Rings",
      image: product2,
      prix: "150 dh",
      category: "accessories",
      description: "Minimalist ring set perfect for stacking or wearing alone for a clean, elegant look.",
      material: "Alloy with gold/silver finish, anti-tarnish",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 3,
      name: "Red Earrings",
      image: product3,
      prix: "150 dh",
      category: "accessories",
      description: "Bold red statement earrings that add a vibrant and stylish accent to any outfit.",
      material: "Resin and alloy",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 4,
      name: "Golden Earrings",
      image: product4,
      prix: "200 dh",
      category: "accessories",
      description: "Classic gold earrings with a polished finish, perfect for timeless elegance.",
      material: "Gold-plated alloy",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 5,
      name: "Watch",
      image: product5,
      prix: "150 dh",
      category: "accessories",
      description: "Elegant wristwatch with a minimalist dial, combining style and everyday functionality.",
      material: "Stainless steel, quartz movement, scratch-resistant glass",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 6,
      name: "Pearl Earrings",
      image: product6,
      prix: "150 dh",
      category: "accessories",
      description: "Soft pearl earrings designed for a classy and feminine appearance.",
      material: "Synthetic pearls and alloy",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 9,
      name: "Bracelet",
      image: product9,
      prix: "170 dh",
      category: "accessories",
      description: "Delicate bracelet ideal for layering or wearing alone for a subtle elegant touch.",
      material: "Gold-plated chain, anti-tarnish coating",
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    }
  ],

  makeup: [
    {
      id: 7,
      name: "Red Lipstick",
      image: product7,
      prix: "170 dh",
      category: "makeup",
      description: "Highly pigmented red lipstick with a smooth matte finish that stays vibrant for hours without drying your lips.",
      ingredients: ["Beeswax", "Shea Butter", "Vitamin E", "Castor Oil", "Iron Oxides"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 10,
      name: "Pink Lipstick",
      image: product10,
      prix: "170 dh",
      category: "makeup",
      description: "Soft pink lipstick that provides a natural, fresh look with a creamy comfortable texture.",
      ingredients: ["Beeswax", "Jojoba Oil", "Vitamin E", "Pigments"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 11,
      name: "Nude Lipstick",
      image: product11,
      prix: "170 dh",
      category: "makeup",
      description: "Neutral nude shade perfect for everyday wear, giving a smooth and elegant finish.",
      ingredients: ["Shea Butter", "Coconut Oil", "Vitamin E", "Mineral Pigments"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 13,
      name: "Red Lipgloss",
      image: product13,
      prix: "170 dh",
      category: "makeup",
      description: "Shiny red lipgloss that adds a glossy, plumping effect with a lightweight feel.",
      ingredients: ["Castor Oil", "Vitamin E", "Natural Oils", "Pigments"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 14,
      name: "Nude Lipgloss",
      image: product14,
      prix: "170 dh",
      category: "makeup",
      description: "Soft nude gloss that enhances lips with a natural shine and smooth finish.",
      ingredients: ["Jojoba Oil", "Vitamin E", "Beeswax", "Pigments"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 16,
      name: "Mascara",
      image: product16,
      prix: "170 dh",
      category: "makeup",
      description: "Volumizing mascara that lifts and thickens lashes instantly without clumping.",
      ingredients: ["Water", "Beeswax", "Carnauba Wax", "Glycerin", "Panthenol"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 18,
      name: "Length Mascara",
      image: product18,
      prix: "170 dh",
      category: "makeup",
      description: "Lengthening mascara designed to extend lashes and define each strand for a dramatic look.",
      ingredients: ["Water", "Wax Blend", "Vitamin E", "Panthenol"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    }
  ],

  skincare: [
    {
      id: 8,
      name: "Toner",
      image: product8,
      prix: "170 dh",
      category: "skincare",
      description: "Refreshing toner that hydrates, tightens pores, and restores the skin’s natural balance.",
      ingredients: ["Rose Water", "Glycerin", "Hyaluronic Acid", "Aloe Vera", "Chamomile Extract"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 15,
      name: "Hand Cream",
      image: product15,
      prix: "170 dh",
      category: "skincare",
      description: "Deeply nourishing hand cream that repairs dryness and keeps hands soft and smooth.",
      ingredients: ["Shea Butter", "Coconut Oil", "Vitamin E", "Almond Oil", "Glycerin"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    },
    {
      id: 17,
      name: "Face Wash",
      image: product17,
      prix: "170 dh",
      category: "skincare",
      description: "Gentle face cleanser that removes impurities while keeping skin hydrated and fresh.",
      ingredients: ["Aloe Vera", "Glycerin", "Green Tea Extract", "Vitamin C", "Chamomile"],
      shipping: "Delivery takes 2–5 days. Free shipping on orders above 300 dh."
    }

  ]
}


  
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
     addProduct: (state, action) => {
    const { category, product } = action.payload;

    state.products[category].push(product);
  },

  deleteProduct: (state, action) => {
    const { id, category } = action.payload;

    state.products[category] = state.products[category].filter(
      (p) => p.id !== id
    );
  },
updateProduct: (state, action) => {
  const { id, category, updatedData } = action.payload;

  const product = state.products[category].find(p => p.id === id);

  if (product) {
    Object.assign(product, updatedData);
  }
}

  }
});

export const { deleteProduct, addProduct, updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
