import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Head() {
  const cartLength = useSelector((state) => state.cart.cart.length);
  const [open, setOpen] = useState(false);

  return (
   <header className="w-full bg-white border-b border-gray-50 sticky top-0 z-50">
  <div className="w-full bg-[#FAF7F6] border-b border-pink-50 py-2 overflow-hidden">
    <p className="text-center text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[#B6A77C] font-semibold animate-pulse">
      Free shipping for new customers on orders over 250 dh
    </p>
  </div>

  <nav className="max-w-[1400px] mx-auto grid grid-cols-3 items-center px-4 sm:px-6 md:px-12 py-4 md:py-6">

    <div className="flex items-center">
      <button onClick={() => setOpen(true)} className="md:hidden text-[#4A4446] text-xl">
        <FaBars />
      </button>

      <ul className="hidden md:flex gap-8 text-[13px] uppercase tracking-widest text-[#4A4446] font-medium">
        {["/", "/shop", "/blog", "/about", "/faq"].map((path, i) => {
          const labels = ["Home", "Shop", "Blog", "About", "Faq"];
          return (
            <li key={i} className="relative group">
              <Link to={path} className="hover:text-[#d298ad] transition-colors">
                {labels[i]}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d298ad] transition-all group-hover:w-full"></span>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="flex justify-center">
      <Link to="/" className="group">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#4A4446] font-serif font-light tracking-tighter group-hover:text-[#d298ad] transition">
          Glowria
        </h1>
      </Link>
    </div>

    <div className="flex items-center justify-end gap-4 sm:gap-6 text-[#4A4446]">
      <Link to="/register" className="hover:text-[#d298ad] transition hover:scale-110">
        <FaUser size={18} />
      </Link>

      <Link to="/cart" className="relative hover:text-[#d298ad] transition hover:scale-110">
        <FaShoppingBag size={18} />
        <span className="absolute -top-2 -right-2 bg-[#d298ad] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
          {cartLength}
        </span>
      </Link>
    </div>

  </nav>

  <div
    className={`fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition ${
      open ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setOpen(false)}
  />

  <div
    className={`fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white z-50 transform transition ${
      open ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex justify-between items-center p-5 border-b">
      <h2 className="text-lg font-semibold text-[#4A4446]">Menu</h2>
      <button onClick={() => setOpen(false)} className="text-xl">
        <FaTimes />
      </button>
    </div>

    <ul className="flex flex-col gap-6 p-6 text-[#4A4446] uppercase tracking-widest text-sm">
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
      <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      <Link to="/faq" onClick={() => setOpen(false)}>Faq</Link>
    </ul>
  </div>
</header>
  );
}