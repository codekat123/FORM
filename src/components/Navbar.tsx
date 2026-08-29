import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
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
          <span>Cart</span>
          <span className="navbar__cart-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
