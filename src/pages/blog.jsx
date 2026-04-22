import React from "react";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    title: "5 Skincare Secrets for Glowing Skin",
    desc: "Discover simple yet powerful tips to keep your skin radiant and healthy every day.",
    image: blog3,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Lipstick Shade",
    desc: "Find the shade that complements your skin tone and enhances your natural beauty.",
    image: blog2,
  },
  {
    id: 3,
    title: "Accessories That Elevate Your Look",
    desc: "Small details make a big difference—learn how to style accessories effortlessly.",
    image: blog1,
  },
];



export default function Blog() {
   useEffect(() => {
      AOS.init({ duration: 900, once: true });
    }, []);
  return (
    <section data-aos="fade-down" className="min-h-screen bg-white">

      <div className="bg-gradient-to-br from-[#d6a2b5] to-[#FFF0F5] text-center py-12 sm:py-16 px-4 mb-10">
        <h1 className="heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A071F]">
          Beauty Blog
        </h1>
        <p className="text-[#6F1F3B]/70 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Explore beauty tips, trends, and secrets to enhance your natural glow.
        </p>
      </div>

      <div data-aos="fade-down" className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base sm:text-lg font-semibold text-[#3A071F] mb-2">
                {blog.title}
              </h3>
              <p className="text-[#6F1F3B]/70 text-sm mb-4">
                {blog.desc}
              </p>

              <button className="text-[#D2547C] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}