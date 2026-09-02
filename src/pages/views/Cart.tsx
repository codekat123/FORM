import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import '../css/Cart.css'

function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart()

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

        {items.length === 0 ? (
          <div className="cart__empty">
            <h2 className="cart__empty-title">Your cart is empty</h2>
            <p className="cart__empty-description">
              You haven't added anything to your cart yet.
            </p>
            <Link className="cart__empty-link" to="/shop">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart__content">
            <ul className="cart__items">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.selectedVariant}`}
                  className="cart-item"
                >
                  <img
                    className="cart-item__image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    {item.selectedVariant && (
                      <p className="cart-item__variant">
                        {item.selectedVariant}
                      </p>
                    )}
                    <p className="cart-item__price">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="cart-item__actions">
                    <div className="cart-item__quantity">
                      <button
                        type="button"
                        className="cart-item__qty-btn"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.selectedVariant,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="cart-item__qty-value">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="cart-item__qty-btn"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.selectedVariant,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-item__remove"
                      onClick={() =>
                        removeItem(item.productId, item.selectedVariant)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="cart__summary">
              <h2 className="cart__summary-title">Order Summary</h2>

              <div className="cart__summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="cart__summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="cart__summary-row cart__summary-row--total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="cart__checkout-btn">
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
