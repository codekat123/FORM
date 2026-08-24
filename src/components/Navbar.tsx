import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="/">
          FORM
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          <a href="/">Shop</a>
          <a href="/">About</a>
        </nav>

        <a className="navbar__cart" href="/">
          Cart
        </a>
      </div>
    </header>
  )
}

export default Navbar
