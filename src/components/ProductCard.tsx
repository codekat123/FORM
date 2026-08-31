import { useState } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types/product'
import './ProductCard.css'

function ProductCard({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageDirection, setImageDirection] = useState<
    'next' | 'previous'
  >('next')

  const hasMultipleImages = product.images.length > 1

  function showPreviousImage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    setImageDirection('previous')

    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0
        ? product.images.length - 1
        : currentIndex - 1
    )
  }

  function showNextImage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    setImageDirection('next')

    setCurrentImageIndex((currentIndex) =>
      currentIndex === product.images.length - 1
        ? 0
        : currentIndex + 1
    )
  }

  return (
    <article className="product-card">
      <Link
        to={`/shop/${product.id}`}
        className="product-card__link"
      >
        <div className="product-card__image">
          <img
            key={currentImageIndex}
            className={`product-card__product-image product-card__product-image--${imageDirection}`}
            src={product.images[currentImageIndex]}
            alt={product.name}
          />

          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="product-card__arrow product-card__arrow--previous"
                aria-label={`Previous image of ${product.name}`}
                onClick={showPreviousImage}
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                className="product-card__arrow product-card__arrow--next"
                aria-label={`Next image of ${product.name}`}
                onClick={showNextImage}
              >
                <span aria-hidden="true">→</span>
              </button>

              <div
                className="product-card__image-count"
                aria-hidden="true"
              >
                {currentImageIndex + 1} / {product.images.length}
              </div>
            </>
          )}
        </div>

        <div className="product-card__info">
          <div>
            <p className="product-card__category">
              {product.category}
            </p>

            <h2 className="product-card__name">
              {product.name}
            </h2>
          </div>

          <p className="product-card__price">
            ${product.price}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
