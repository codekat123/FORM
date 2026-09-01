import '../css/Cart.css'


function Cart() {
  return (
    <section className="cart">
      <div className="container">
        <header className="cart__header">
          <p className="cart__eyebrow">Your bag</p>
          <h1 className="cart__title">Shopping Cart</h1>
          <p className="cart__description">
            Review your selected products before checkout.
          </p>
        </header>

        <div className="cart__empty">
          <h2 className="cart__empty-title">Your cart is empty</h2>
          <p className="cart__empty-description">
            You haven't added anything to your cart yet.
          </p>

          <a className="cart__empty-link" href="/shop">
            Continue Shopping
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cart
