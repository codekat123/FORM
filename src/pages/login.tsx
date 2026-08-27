import './login.css'

function Login() {
  return (
    <section className="login">
      <div className="container">
        <div className="login__content">
          <header className="login__header">
            <p className="login__eyebrow">Welcome back</p>
            <h1 className="login__title">Sign in to your account</h1>
            <p className="login__description">
              Access your orders, saved details, and account preferences.
            </p>
          </header>

          <form className="login__form">
            <div className="login__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            <div className="login__field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
            </div>

            <button className="login__submit" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
