import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Shop() {
  const storeProducts = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const [filter, setFilter] = useState(categoryFromURL || "All");
  const [inputValue, setInputValue] = useState("");
  const [committedSearch, setCommittedSearch] = useState("");
  const categories = ["All", "Accessories", "Makeup", "Skincare"];
  const handleViewDetails = (product) => navigate(`/product/${product.id}`, { state: product });
  const handleSearch = () => setCommittedSearch(inputValue);
  useEffect(() => { 
    AOS.init({ duration: 900, once: true });
   }, []);
  useEffect(() => {
     if (categoryFromURL) 
      setFilter(categoryFromURL);
     }, [categoryFromURL]);
     
  const allProducts = Object.values(storeProducts).flat();
  const filteredProducts = allProducts.filter((p) => (filter === "All" || p.category.toLowerCase() === filter.toLowerCase()) && p.name.toLowerCase().includes(committedSearch.toLowerCase()));

  return (
    <div className="min-h-screen">
      <div data-aos="fade-down" className="bg-gradient-to-br from-[#d6a2b5] to-[#FFF0F5] shadow-md mb-10 text-center py-16">
        <h1 className="heading text-5xl font-bold text-[#3A071F]">Shop</h1>
        <p className="text-[#6F1F3B]/70 mt-3">Discover products tailored to your beauty</p>
      </div>
      <div data-aos="fade-up" className="max-w-[500px] mx-auto px-6 mb-8 relative flex items-center">
        <input type="text" placeholder="Type to search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full pl-6 pr-14 py-3 rounded-full border border-[#3A071F]/10 focus:border-[#d6a2b5] outline-none shadow-sm transition-all text-sm" />
        <button onClick={handleSearch} className="absolute right-9 p-2 text-[#3A071F] hover:scale-110 transition-transform"><FiSearch size={20} /></button>
      </div>
      <div data-aos="fade-down" className="flex justify-center gap-4 flex-wrap px-6 mb-12">
        {categories.map((cat) => (
          <button key={cat} onClick={() => {setFilter(cat); setInputValue(""); setCommittedSearch("");}} className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat ? "bg-[#d6a2b5] text-white" : "bg-white text-[#3A071F] border-[#3A071F]/30 hover:bg-[#f3d6df]"}`}>{cat}</button>
        ))}
      </div>
      <div data-aos="fade-up" className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-4">
              <div className="overflow-hidden rounded-xl mb-4"><img src={product.image} alt={product.name} className="w-full h-60 object-cover group-hover:scale-110 transition duration-500" /></div>
              <h3 className="text-[#3A071F] mt-3 font-semibold text-sm truncate">{product.name}</h3>
              <p className="text-[#6F1F3B] mt-1 font-medium">{product.prix}</p>
              <button onClick={() => handleViewDetails(product)} className="group relative mt-4 w-full bg-[#d6a2b5] text-white py-4 rounded-lg text-xs uppercase tracking-widest overflow-hidden hover:bg-[#a8798a] transition flex items-center justify-center">
                <span className="absolute transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">Select Details</span>
                <span className="absolute translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-lg"><FaShoppingCart /></span>
              </button>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && <div className="text-center py-20 text-gray-400">No products found for "{committedSearch}".</div>}
      </div>
    </div>
  );
}