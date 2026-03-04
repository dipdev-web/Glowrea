import { useState, useEffect } from "react"
import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import email from "../assets/email.png"
import './home.css'
import { FaArrowRight } from "react-icons/fa"
import { useSelector } from "react-redux"
import Footer from "../Footer/footer"

const images = [image1, image2, image3, image4]

export default function Homme() {
  const productCard = useSelector((state)=>state.products.products)
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const handleChange = () => {
    setFade(false)
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
      setFade(true)
    }, 1000)
  }

  useEffect(() => {
    const interval = setInterval(handleChange, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="container">.
      <div className="images">
          <img className="image" style={{ opacity: fade ? 1 : 0 }} src={images[index]} alt="Gallery"onClick={handleChange}/>
          <div className="dots">
            {images.map((_, i) => (<span key={i} className={`dot ${i === index ? "active" : ""}`}></span>))}</div>
  
        </div>
      <div className="intro">
      <h1 className="title">SPRING OFFER IS HERE!</h1>
        <p className="text">10% off for new customers. <br />
        <p>Enjoy fast delivery and secure payments on all orders.</p></p>
        
        <button className="button">Shop Now</button>
      </div>
    
        
      </div>
      <div className="box">
      <button>Accessories</button>
      <button>Makeup</button>
      <button>Skincare</button>
      </div>

      <div className="collection">
        <h1>New Collection!</h1>
        <p>Available On 13/03.</p>
        <button>Shop</button>
      </div>
      <div className="container2">
      <h1>Shop New Arrivals</h1>
      <hr/>
        <div className="products">
       
          {productCard.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.prix}</p>
            </div>
          ))}
        </div>
      </div>
     
      <div className="signup">
      <img src={email} alt="email" style={{width: "4rem", height: "4rem"}}/>
        <h1>Sign Up for Exclusive Updates!</h1>
        <h3>Be the first to discover our latest beauty launches and special offers.</h3>
        <div className="signupbutton">
        <input type="email" placeholder="Enter your email" /><button><FaArrowRight /></button>
        </div>
      </div>
      <Footer />
    </>
  )
}
