import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Glowria</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
         Creating effortless beauty routines with innovative, results-driven skincare.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
        <ul className="text-gray-500 space-y-2 text-sm">
          <li><Link to="/" className="hover:text-[#E2B6C5] transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#E2B6C5] transition">About</Link></li>
          <li><Link to="/blog" className="hover:text-[#E2B6C5] transition">Blog</Link></li>
          <li><Link to="/shop" className="hover:text-[#E2B6C5] transition">Shop</Link></li>
        </ul>
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1">
        <h3 className="font-semibold text-gray-900">Stay Connected</h3>
        <div className="flex gap-4 text-lg">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-pink-600 transition transform hover:scale-110"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"><FaWhatsapp /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"><FaTwitter /></a>
        </div>
        <p className="text-xs text-gray-400">Follow our journey on social media.</p>
      </div>

    </div>

    <div className="max-w-7xl mx-auto border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500">
      <p>© {currentYear} dipdev. All rights reserved.</p>
    </div>
</footer>
  );
}