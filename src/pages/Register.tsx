import './register.css'

function Register() {
  return (
    <section className="register">
      <div className="container">
        <div className="register__content">
          <header className="register__header">
            <p className="register__eyebrow">Create your account</p>
            <h1 className="register__title">Join FORM</h1>
            <p className="register__description">
              Create an account to manage your orders, saved details, and
              preferences.
            </p>
          </header>

          <form className="register__form">
            <div className="register__field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
              />
            </div>

            <div className="register__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            <div className="register__field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </div>

            <div className="register__field">
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
              />
            </div>

            <button className="register__submit" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
