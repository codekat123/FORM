import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import {
  getProducts,
  getProductsByCategory,
} from '../services/products'
import type { Product } from '../types/product'
import './Shop.css'

const ELECTRONICS_CATEGORIES = [
  'smartphones',
  'laptops',
  'tablets',
  'mobile-accessories',
]

function Shop() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    const request = category &&
      ELECTRONICS_CATEGORIES.includes(category)
      ? getProductsByCategory(category)
      : getProducts()

    request
      .then((data) => {
        setProducts(data.products)
      })
      .catch((error) => {
        console.error(error)
        setError('Failed to load products. Please try again.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [category])

  return (
    <main className="shop-page">
      <div className="container">
        <header className="shop-page__header">
          <p className="shop-page__eyebrow">
            {category || 'Catalog'}
          </p>

          <h1 className="shop-page__title">
            {category
              ? category === 'mobile-accessories'
                ? 'Accessories'
                : category.charAt(0).toUpperCase() + category.slice(1)
              : 'All Products'}
          </h1>
        </header>

        {isLoading && (
          <p className="shop-page__status">
            Loading products...
          </p>
        )}

        {error && (
          <p
            className="shop-page__status shop-page__status--error"
            role="alert"
          >
            {error}
          </p>
        )}

        {!isLoading && !error && products.length === 0 && (
          <p className="shop-page__status">
            No products are available right now.
          </p>
        )}

        {!isLoading && !error && products.length > 0 && (
          <ProductGrid products={products} />
        )}
      </div>
    </main>
  )
}

export default Shop
