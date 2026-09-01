import { Link } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              FORM
            </Link>

            <p className="footer__tagline">
              Technology accessories designed with function and intention.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-group">
              <h2 className="footer__nav-title">Explore</h2>

              <Link to="/shop">Shop</Link>
              <Link to="/cart">Cart</Link>
            </div>

            <div className="footer__nav-group">
              <h2 className="footer__nav-title">Account</h2>

              <Link to="/account">Account</Link>
              <Link to="/login">Sign in</Link>
              <Link to="/register">Create account</Link>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} FORM. All rights reserved.
          </p>

          <p className="footer__note">Built with intention.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
