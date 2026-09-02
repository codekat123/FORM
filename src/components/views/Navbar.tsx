import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import '../css/Navbar.css'

function Navbar() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/">
          FORM
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? 'navbar__link navbar__link--active'
                : 'navbar__link'
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? 'navbar__link navbar__link--active'
                : 'navbar__link'
            }
          >
            Account
          </NavLink>
        </nav>

        <Link className="navbar__cart" to="/cart">
          <span>Cart{itemCount > 0 && ` (${itemCount})`}</span>
          <span className="navbar__cart-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
