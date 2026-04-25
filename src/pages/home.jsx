import { useState, useEffect } from "react";
import image1 from "../assets/product18.png";
import image2 from "../assets/product18.png";
import image3 from "../assets/product18.png";
import image4 from "../assets/product18.png";
import email from "../assets/email.png";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { GiFlowerPot } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { GiButterflyFlower } from "react-icons/gi";
import { GiNecklaceDisplay, GiLipstick } from "react-icons/gi";
import { PiFlowerTulip } from "react-icons/pi";
import { FaSpa } from "react-icons/fa";
import { FaTruck, FaCheckCircle, FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [image1, image2, image3, image4];

export default function Home() {
  const storeProducts = useSelector((state) => state.products.products);
  const productCard = Object.values(storeProducts).flat();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
 const navigate = useNavigate()
  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

 useEffect(() => {
      AOS.init({ duration: 900, once: true });
    }, []);

const categories = [
  { name: "Accessories", icon: <GiNecklaceDisplay /> },
  { name: "Makeup", icon: <GiLipstick /> },
  { name: "Skincare", icon: <FaSpa /> },
];

  const handleChange = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(handleChange, 4000);
    return () => clearInterval(interval);
  }, []);

 const handleCategoryClick = (category) => {
  navigate(`/shop?category=${category}`);
};

  return (
 <div className="w-full overflow-hidden">
  <section  data-aos="fade-down" className="bg-gradient-to-br from-[#d298ad] to-[#FFF0F5] relative py-20">
    <BsFlower1 className="absolute top-10 left-1/4 text-[#E2A6BA] text-3xl opacity-70" />
    <GiButterflyFlower className="absolute top-16 right-1/4 text-[#E2A6BA] text-4xl opacity-60" />
    <PiFlowerTulip className="absolute top-1/2 left-1/4 text-[#E2A6BA] text-4xl opacity-60" />

    <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center px-6 relative">
      <img src={images[0]} className="hidden lg:block absolute left-0 top-10 w-32 rotate-[-10deg] rounded-lg shadow-lg border-4 border-white" />
      <img src={images[1]} className="hidden lg:block absolute right-0 top-10 w-32 rotate-[10deg] rounded-lg shadow-lg border-4 border-white" />

      <p className="tracking-widest text-[10px] uppercase text-[#6F1F3B] px-4 py-1 border border-[#a8798a] rounded-full mb-4">
        Welcome to Gloria
      </p>

      <h1 className="heading text-4xl md:text-6xl text-[#6F1F3B] font-serif font-bold tracking-tight mb-4">
        Glow Like Never Before
      </h1>

      <p className="text-gray/50 max-w-md leading-relaxed mb-8">
        Discover premium beauty products crafted to enhance your natural radiance.
      </p>

      <button className="px-12 py-3 bg-[#6F1F3B] text-white rounded-full shadow-lg hover:bg-[#3A071F] transition">
        Shop Now
      </button>
    </div>
  </section>

  <section  data-aos="fade-down" className="relative bg-white/50 py-20 overflow-hidden shadow-inner">
    <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">

      <h1 className="heading text-4xl md:text-5xl font-extrabold text-[#3A071F] mb-10 tracking-[0.2em] drop-shadow-sm">
        OUR COLLECTIONS
      </h1>

      <p className="text-[#424973] mb-10 font-semibold uppercase tracking-[0.15em] text-sm">
        Explore our curated collections designed to enhance your beauty and style.
      </p>

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-10">
        {categories.map((item) => (
          <div
            key={item.name}
            onClick={() => handleCategoryClick(item.name)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-5 flex items-center justify-center bg-[#E2B6C5]/20 border border-[#E2B6C5]/50 rounded-full text-[#424973] text-4xl transition group-hover:bg-[#D2547C] group-hover:text-white group-hover:scale-110">
              {item.icon}
            </div>

            <p className="text-[#424973] font-semibold uppercase tracking-[0.15em] text-sm group-hover:text-[#D2547C]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section data-aos="fade-down" className="bg-[#FFF0F5] py-20">
    <div className="max-w-[1200px] mx-auto px-6 text-center">

      <h1 className="heading text-4xl md:text-5xl text-[#3A071F] mb-12">
        Why Choose Us
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Premium Quality", desc: "Carefully selected safe beauty products.", icon: <FaCheckCircle /> },
          { title: "Fast Delivery", desc: "Reliable shipping for all orders.", icon: <FaTruck /> },
          { title: "Trusted by Customers", desc: "Loved and trusted by many users.", icon: <FaHeart /> }
        ].map((item) => (
          <div key={item.title} className="bg-white/80 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition">
            <div className="text-4xl text-[#D2547C] mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#3A071F] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section  data-aos="fade-down" className="bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-6 text-center">

      <h1 className="heading text-5xl font-bold text-[#3A071F]">
        Shop New Arrivals
      </h1>

      <div className="w-16 h-1 bg-[#3A071F] mx-auto mt-4 mb-12"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {productCard?.slice(0, 4).map((product) => (
          <div key={product.id} className="group bg-[#efdce3] p-3 rounded-2xl shadow-sm hover:shadow-xl transition">
            <img src={product.image} className="w-full h-48 object-cover group-hover:scale-110 transition" />
            <h3 className="font-semibold text-[#3A071F] text-sm truncate">{product.name}</h3>
            <p className="text-[#6F1F3B] font-medium mt-1">{product.prix}</p>
            <button onClick={() => handleViewDetails(product)} className="mt-4 w-full bg-[#3A071F] text-white py-4 rounded-lg text-xs uppercase tracking-widest hover:bg-[#77202F] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section  data-aos="fade-down" className="bg-gradient-to-br from-[#d298ad] to-[#FFF0F5] py-24 relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-10 text-center flex justify-center items-center relative z-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className="heading text-4xl md:text-5xl font-bold text-[#2e2e2e]">
          Spring Sale!
        </h1>
        <p className="text-black text-xl italic">
          Enjoy up to 30% off your favorite beauty essentials.
        </p>
        <button className="px-10 py-4 rounded-full bg-[#6F1F3B] text-white font-bold shadow-xl hover:bg-[#77202F] transition">
          Explore Now
        </button>
      </div>
    </div>
  </section>

  <section  data-aos="fade-down" className="bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-6 text-center">

      <h2 className="heading text-4xl md:text-5xl text-[#3A071F] mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Sara M.", text: "Luxury feel and amazing results." },
          { name: "Lina K.", text: "Fast delivery and premium packaging." },
          { name: "Nour A.", text: "My favorite beauty store now." }
        ].map((item, i) => (
          <div key={i} className="bg-[#FFF0F5] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center gap-1 text-[#f7dc05] mb-4">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="text-gray-600 text-sm italic mb-6">“{item.text}”</p>
            <h4 className="text-[#3A071F] font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section  data-aos="fade-down" className="bg-[#f1e8e6] py-24 relative overflow-hidden">
  <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-[#E2A6BA]/50 rounded-full blur-3xl" />
  <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#d298ad]/50 rounded-full blur-3xl" />

  <div className="max-w-[1200px] mx-auto px-6 relative z-10">
    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 sm:p-12 md:p-20 shadow-2xl shadow-pink-100/50 flex flex-col items-center text-center">

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#d298ad] blur-lg opacity-40 rounded-full animate-pulse" />
        <div className="relative bg-gradient-to-br from-[#d298ad] to-[#b57a91] p-5 rounded-full shadow-inner">
          <img src={email} className="w-8 h-8" alt="email" />
        </div>
      </div>

      <h1 className="heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A4446] mb-4 tracking-tight">
        Join the Inner Circle
      </h1>

      <p className="text-[#8E7F84] mb-10 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
        Discover new launches and exclusive beauty secrets delivered straight to your inbox.
      </p>

      <div className="relative w-full max-w-lg group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#E2A6BA] to-[#B6A77C] rounded-full blur opacity-25 group-focus-within:opacity-50 transition duration-1000" />

        <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent px-4 sm:px-6 py-3 text-[#4A4446] placeholder-[#A3979A] outline-none text-sm md:text-base"
          />
          <button className="bg-[#4A4446] text-white flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-[#B6A77C] transition transform hover:scale-105 active:scale-95 shadow-md">
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>

      <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#B6A77C] font-semibold">
        Luxury Skin Care • Exclusive Access
      </p>

    </div>
  </div>
</section>
</div>
  );
}