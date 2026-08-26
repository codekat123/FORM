  import { products } from '../data/product'
  import ProductGrid from '../components/ProductGrid'
  import './Shop.css'

  function Shop() {
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
