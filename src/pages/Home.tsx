import { Link } from 'react-router-dom'
import formChargeImage from '../assets/products/form-charge.png'
import { products } from '../data/product'
import ProductCard from '../components/ProductCard'
import './Home.css'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">Technology, considered.</p>

            <h1 className="hero__title">
              Function meets considered design.
            </h1>

            <p className="hero__description">
              Technology accessories designed to bring clarity, function,
              and intention to the way you work and live.
            </p>

            <Link className="hero__cta" to="/shop">
              Explore the collection
            </Link>
          </div>

          <div className="hero__visual">
          <img
          className="hero__product"
          src={formChargeImage}
          alt="FORM Charge wireless charing dock"
          />
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <p className="featured__eyebrow">Featured collection</p>

            <h2 className="featured__title">
              Designed for everyday use.
            </h2>
          </div>

          <div className="featured__grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
