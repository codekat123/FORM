import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/">
          FORM
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          <Link to="/shop">Shop</Link>
          <Link to="/">About</Link>
        </nav>

        <Link className="navbar__cart" to="/cart">
          Cart
        </Link>
      </div>
    </header>
  )
}

export default Navbar
