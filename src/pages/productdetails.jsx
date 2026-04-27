import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiChevronDown } from "react-icons/fi";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()
  const products = useSelector((state) => state.products.products);
  const allProducts = Object.values(products).flat();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [message, setMessage] = useState("")

  const [activeImg, setActiveImg] = useState(null);
  const [openSection, setOpenSection] = useState("description");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) setActiveImg(product.image);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-xs">Product not found</p>
      </div>
    );
  }

  const gallery = [product.image];

  return (
<div className="min-h-screen bg-[#fff7fa] flex flex-col">
  <div className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 flex-1">

    <div className="md:sticky md:top-6 h-fit">
      <div className="bg-white p-3 rounded-xl shadow-sm">
        <img src={activeImg} alt={product.name} className="w-full h-[350px] object-cover rounded-lg hover:scale-105 transition duration-300" />
      </div>

      <div className="flex gap-2 mt-4 justify-center md:justify-start">
        {gallery.map((img, index) => (
          <img key={index} src={img} onClick={() => setActiveImg(img)} className={`w-14 h-14 object-cover rounded-md cursor-pointer border transition ${activeImg === img ? "border-[#3A071F] scale-105" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>

    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-[#3A071F]">{product.name}</h2>
      <p className="text-md text-[#6F1F3B] font-medium mt-1">{product.prix}</p>

      <div className="flex items-center gap-3 mt-6">
        <div className="flex items-center border border-gray-200 rounded-md bg-white shadow-sm overflow-hidden">
          <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-2 py-1.5 text-gray-500 hover:bg-gray-50">
            <FiMinus size={12} />
          </button>
          <span className="px-3 text-xs font-medium min-w-[30px] text-center">{qty}</span>
          <button onClick={() => setQty(q => q + 1)} className="px-2 py-1.5 text-gray-500 hover:bg-gray-50">
            <FiPlus size={12} />
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button type="button"
         onClick={() => { dispatch(addToCart({ ...product, qty })); setMessage("Added To Cart!"); setTimeout(() => setMessage(""), 2000); }}
          className="flex-1 py-2.5 bg-[#d6a2b5] text-white rounded-md hover:bg-[#b78498] transition text-[10px] font-bold tracking-widest"
        >
          ADD TO CART
        </button>

        <button
          onClick={() => navigate("/shop")}
          className="flex-1 py-2.5 border border-[#3A071F] text-[#3A071F] rounded-md hover:bg-[#f3dce5] transition text-[10px] font-bold tracking-widest"
        >
          GO BACK
        </button>
      </div>
     <div className="relative">
        <p className="absolute top-0 left-12 -translate-x-1/2 text-green-600 text-sm mt-3">{message}</p>
      </div>
     

      <div className="mt-8 border-t border-gray-100">
        {[
          { id: "description", label: "Description", content: product.description },
          { id: "ingredients", label: "Ingredients", content: product.category === "makeup" ? "Pigments, waxes, and natural oils." : "Natural extracts and skin-safe formulas." },
          { id: "shipping", label: "Shipping", content: product.shipping || "Express delivery available." },
          { id: "reviews", label: "Reviews", content: "No reviews yet. Be the first to share your experience." }
        ].map(section => (
          <div key={section.id} className="border-b border-gray-100">
            <button
              onClick={() => setOpenSection(openSection === section.id ? "" : section.id)}
              className="w-full flex justify-between items-center py-4 text-left group"
            >
              <span className="text-[11px] font-semibold text-[#3A071F] uppercase tracking-wider group-hover:text-[#d6a2b5]">
                {section.label}
              </span>
              <FiChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${openSection === section.id ? "rotate-180" : ""}`} />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${openSection === section.id ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  {section.content || "Information not available for this product."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>

</div>
  );
}