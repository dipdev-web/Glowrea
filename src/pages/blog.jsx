import "./blog.css"
import Footer from "../Footer/footer"

export default function Blog() {
  return (
    <>
      <div className="blog-container">

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348" alt="Skincare" />
          <div className="blog-content">
            <h2>Spring Skincare Routine</h2>
            <p>
              Refresh your skin with lightweight hydration,
              gentle exfoliation and glowing finishes.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" alt="Makeup" />
          <div className="blog-content">
            <h2>Natural Makeup Look</h2>
            <p>
              Achieve the perfect soft glam look with minimal products
              and maximum glow.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop" alt="Accessories" />
          <div className="blog-content">
            <h2>Top Beauty Accessories</h2>
            <p>
              Discover must-have tools that upgrade your beauty routine
              instantly.
            </p>
            <button>Read More</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}