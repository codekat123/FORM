import type { Product } from '../types/product'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link to={`/shop/${product.id}`} className="product-card__link">
        <div className="product-card__image">
          <img
            src={product.images[0]}
            alt={product.name}
          />
        </div>

        <div className="product-card__info">
          <h2 className="product-card__name">
            {product.name}
          </h2>

          <p className="product-card__price">
            ${product.price}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
