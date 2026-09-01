import type { Product } from '../../types/product'
import ProductCard from './ProductCard'
import '../css/ProductGrid.css'

interface ProductGridProps {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="product-grid--empty">
        <p>No products found.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
