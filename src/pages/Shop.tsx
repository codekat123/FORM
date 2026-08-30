import { useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import { getProducts } from '../services/products'
import type { Product } from '../types/product'
import './Shop.css'

function Shop() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <main className="shop-page">
      <div className="container">
        <header className="shop-page__header">
          <p className="shop-page__eyebrow">Catalog</p>
          <h1 className="shop-page__title">All Products</h1>
        </header>

        <ProductGrid products={products} />
      </div>
    </main>
  )
}

export default Shop
