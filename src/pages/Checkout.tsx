import './Checkout.css'

function Checkout() {
  return (
    <section className="checkout">
      <div className="container">
        <header className="checkout__header">
          <p className="checkout__eyebrow">Secure checkout</p>
          <h1 className="checkout__title">Checkout</h1>
          <p className="checkout__description">
            Complete your order securely.
          </p>
        </header>

        <div className="checkout__empty">
          <h2 className="checkout__empty-title">
            Checkout is not available yet
          </h2>

          <p className="checkout__empty-description">
            Add products to your cart to continue with checkout.
          </p>

          <a className="checkout__empty-link" href="/shop">
            Continue Shopping
          </a>
        </div>
      </div>
    </section>
  )
}

export default Checkout
