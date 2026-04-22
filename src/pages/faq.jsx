import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { question: "Are your products 100% natural?", answer: "Yes, all our products are made with carefully selected natural ingredients, free from harmful chemicals." },
  { question: "Do you test on animals?", answer: "No, we are completely cruelty-free and against animal testing." },
  { question: "How long does delivery take?", answer: "Delivery usually takes 3–7 business days depending on your location." },
  { question: "Can I return a product?", answer: "Yes, we offer a 14-day return policy for unused products in original packaging." }
];

export default function Faq() {
  const [active, setActive] = useState(null);

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const toggle = (index) => setActive(active === index ? null : index);

  return (
    <div className="bg-gradient-to-b from-[#ffe6ea] to-white min-h-screen pb-16">
      <div className="text-center pt-16 sm:pt-20 pb-8 px-4" data-aos="fade-up">
        <h1 className="heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#222]">Frequently Asked Questions</h1>
        <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">Your beauty questions, answered with care.</p>
      </div>
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        {faqs.map((faq, index) => (
          <div key={index} data-aos="fade-up" className="bg-white/80 border border-[#f3c6cf] rounded-xl mb-4 shadow-sm overflow-hidden">
            <div onClick={() => toggle(index)} className="flex justify-between items-center px-4 sm:px-5 py-4 cursor-pointer font-medium text-[#333] bg-[#fff0f3]">
              <span className="text-sm sm:text-base">{faq.question}</span>
              <span className="text-lg text-[#d36b7d]">{active === index ? "−" : "+"}</span>
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden px-4 sm:px-5 ${active === index ? "max-h-40 py-4" : "max-h-0"} text-[#555] text-sm`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}