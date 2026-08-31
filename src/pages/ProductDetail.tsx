import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../services/products'
import type { Product } from '../types/product'
import './ProductDetails.css'

function ProductDetails() {
  const { productId } = useParams<{ productId: string }>()

  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  )

  useEffect(() => {
    if (!productId) {
      setError('Product not found.')
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    getProduct(productId)
      .then((data) => {
        setProduct(data)
        setSelectedImage(data.images[0] ?? null)

        if (data.variants.length > 0) {
          setSelectedVariantId(data.variants[0].id)
        }
      })
      .catch((error) => {
        console.error(error)
        setError('Product not found.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [productId])

  if (isLoading) {
    return (
      <main className="product-details">
        <div className="container product-details__state">
          <p>Loading product...</p>
        </div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="product-details product-details--not-found">
        <div className="container product-details__state">
          <h1>Product Not Found</h1>

          <p>
            The product you are looking for does not exist.
          </p>

          <Link to="/shop" className="product-details__back-link">
            ← Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="product-details">
      <div className="container">
        <Link to="/shop" className="product-details__breadcrumb">
          Shop
          <span aria-hidden="true">/</span>
          {product.name}
        </Link>

        <div className="product-details__grid">
          <section
            className="product-details__gallery"
            aria-label={`${product.name} images`}
          >
            <div className="product-details__main-image">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={product.name}
                />
              )}
            </div>

            {product.images.length > 1 && (
              <div className="product-details__thumbnails">
                {product.images.map((image, index) => {
                  const isSelected = image === selectedImage

                  return (
                    <button
                      key={image}
                      type="button"
                      className={`product-details__thumbnail ${
                        isSelected
                          ? 'product-details__thumbnail--active'
                          : ''
                      }`}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View product image ${index + 1}`}
                      aria-pressed={isSelected}
                    >
                      <img
                        src={image}
                        alt=""
                      />
                    </button>
                  )
                })}
              </div>
            )}
          </section>

          <section className="product-details__info">
            <p className="product-details__category">
              {product.category}
            </p>

            <h1 className="product-details__title">
              {product.name}
            </h1>

            <p className="product-details__price">
              ${product.price.toFixed(2)}
            </p>

            <div className="product-details__description">
              <p>{product.description}</p>
            </div>

            <p
              className={`product-details__stock ${
                product.stock > 0
                  ? 'product-details__stock--available'
                  : 'product-details__stock--unavailable'
              }`}
            >
              {product.stock > 0
                ? `In stock — ${product.stock} available`
                : 'Out of stock'}
            </p>

            {product.variants.length > 0 && (
              <div className="product-details__variants">
                <p className="product-details__variants-label">
                  Options
                </p>

                <div className="product-details__variants-list">
                  {product.variants.map((variant) => {
                    const isSelected =
                      variant.id === selectedVariantId

                    return (
                      <button
                        key={variant.id}
                        type="button"
                        className={`variant-btn ${
                          isSelected
                            ? 'variant-btn--active'
                            : ''
                        }`}
                        onClick={() =>
                          setSelectedVariantId(variant.id)
                        }
                        aria-pressed={isSelected}
                      >
                        {variant.value}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <button
              type="button"
              className="product-details__add-btn"
              disabled={product.stock === 0}
            >
              {product.stock > 0
                ? `Add to Bag — $${product.price.toFixed(2)}`
                : 'Out of Stock'}
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
