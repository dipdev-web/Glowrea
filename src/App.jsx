import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/faq";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Head from "./Head/head";
import './App.css'
export default function App(){
  return (
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />  
      </Routes>
    </BrowserRouter>
    
  );
}