import React from "react";
import { useNavigate } from "react-router-dom";
import {FaLeaf, FaGem, FaHeart, FaLightbulb, FaEye} from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import background4 from "../assets/background4.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

export default function AboutUs() {
  const navigate = useNavigate();

  const coreValues = [
    { icon: <FaLeaf />, title: "Clean Beauty", text: "Gentle, skin-friendly and conscious beauty." },
    { icon: <FaGem />, title: "Elegance", text: "Soft luxury and timeless aesthetic in every product." },
    { icon: <FaHeart />, title: "Self Love", text: "Helping you feel confident in your own skin." },
    { icon: <FaLightbulb />, title: "Innovation", text: "Always evolving to improve your experience." }
  ];
   useEffect(() => {
      AOS.init({ duration: 900, once: true });
    }, []);
  

  const team = [
    { image: team1, name: "Karl D.", job: "Beauty Curator" },
    { image: team2, name: "Sam I.", job: "Product Specialist" },
    { image: team3, name: "Leila S.", job: "Customer Care" },
    { image: team4, name: "Hanna M.", job: "Dermatologist" }
  ];

  return (
    <div className="w-full bg-white">

      <div data-aos="slide-down" className="bg-gradient-to-br from-[#d6a2b5] to-[#FFF0F5] text-center py-12 sm:py-16 px-4">
        <h1 className="heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A071F]">
          About Glowria
        </h1>
        <p className="text-[#6F1F3B]/70 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          A beauty brand created to help you glow naturally, confidently, and effortlessly.
        </p>
      </div>

      <section data-aos-delay="300" data-aos="fade-down" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 mt-8 mb-8 flex flex-col md:flex-row items-center gap-8 bg-[#E2A6BA]/20 rounded-2xl border border-pink-100">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-lg sm:text-xl italic font-bold text-[#3A071F]">
            Our Story
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Glowria started with a simple idea: beauty should be personal. Born from a passion to find products that are both elegant and safe, it grew into a soft-luxury experience.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Despite the challenges of sourcing quality, the mission remains clear: accessible luxury for everyone.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-lg"></div>
          <img
            src={background4}
            alt="product"
            className="relative w-28 sm:w-32 md:w-36 object-contain"
          />
        </div>
      </section>

      <section  data-aos-delay="300" data-aos="fade-down" className="bg-[#FFF0F5] py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white/70 p-6 rounded-2xl border border-pink-100 hover:shadow-md transition">
            <div className="w-10 h-10 bg-[#3A071F] rounded-lg flex items-center justify-center mb-4">
              <TbTargetArrow className="text-white" />
            </div>
            <h2 className="italic text-lg font-bold text-[#3A071F] mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              Providing high-quality beauty products that enhance natural beauty and promote confidence.
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-2xl border border-pink-100 hover:shadow-md transition">
            <div className="w-10 h-10 bg-[#3A071F] rounded-lg flex items-center justify-center mb-4">
              <FaEye className="text-white" />
            </div>
            <h2 className="italic text-lg font-bold text-[#3A071F] mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              Becoming a leading soft-luxury beauty brand that inspires glow and self-love worldwide.
            </p>
          </div>
        </div>
      </section>

      <section  data-aos-delay="300" data-aos="fade-down" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3A071F] mb-10">
          Core Values
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl text-[#D2547C] mb-2 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#3A071F] text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section  data-aos-delay="300" data-aos="fade-down" className="bg-[#FFF0F5] py-14 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3A071F] mb-10">
          Meet Glowria Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-white shadow-md"
              />
              <h3 className="mt-3 text-sm font-semibold text-[#3A071F]">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500">{member.job}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-aos-delay="300" data-aos="fade-down" className="py-12 px-4 text-center border-t border-pink-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          Ready to glow with Glowria?
        </h2>
        <p className="text-[#8B4C63] text-sm mb-6">
          Discover products made to enhance your natural beauty.
        </p>
        <button onClick={() => navigate("/shop")} className="bg-[#E2A6BA] text-black px-8 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#D48FA6] transition">
          Shop Now
        </button>
      </section>

    </div>
  );
}