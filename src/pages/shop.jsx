import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Shop() {
  const storeProducts = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };
   useEffect(() => {
        AOS.init({ duration: 900, once: true });
      }, []);
  

const allProducts = Object.values(storeProducts).flat();

const [searchParams] = useSearchParams();
const categoryFromURL = searchParams.get("category");

const [filter, setFilter] = useState(categoryFromURL || "All");
  
  
  const categories = ["All", "Accessories", "Makeup", "Skincare"];

  const filteredProducts =
  filter === "All"
    ? allProducts
    : allProducts.filter((p) =>
        p.category.toLowerCase() === filter.toLowerCase()
      );
  
      useEffect(() => {
  if (categoryFromURL) {
    setFilter(categoryFromURL);
  }
}, [categoryFromURL]);

  return (
    <div className="min-h-screen">
      
      {/* HEADER */}
      <div data-aos="fade-down" className="bg-gradient-to-br from-[#d6a2b5] to-[#FFF0F5] shadow-md mb-10 text-center py-16">
        <h1 className="heading text-5xl font-bold text-[#3A071F]">Shop</h1>
        <p className="text-[#6F1F3B]/70 mt-3">
          Discover products tailored to your beauty
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div data-aos="fade-down" className="flex justify-center gap-4 flex-wrap px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300
              ${
                filter === cat
                  ? "bg-[#d6a2b5] text-white"
                  : "bg-white text-[#3A071F] border-[#3A071F]/30 hover:bg-[#f3d6df]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div data-aos="fade-down" className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-4"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* INFO */}
              <h3 className="text-[#3A071F] font-semibold text-sm truncate">
                {product.name}
              </h3>
              <p className="text-[#6F1F3B] mt-1 font-medium">
                {product.prix}
              </p>

              {/* BUTTON */}
          <button
  onClick={() => handleViewDetails(product)}
  className="group relative mt-4 w-full bg-[#d6a2b5] text-white py-4 rounded-lg text-xs uppercase tracking-widest overflow-hidden hover:bg-[#a8798a] transition flex items-center justify-center"
>
  {/* TEXT (slides up) */}
  <span className="absolute transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
    Select Details
  </span>

  {/* ICON (slides from bottom) */}
  <span className="absolute translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-lg">
    <FaShoppingCart />
  </span>
</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}