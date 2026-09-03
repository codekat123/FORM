import { register } from '../../services/auth'
import '../css/register.css'

function Register() {
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const result = await register({
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    })

    console.log(result)
  }

  return (
    <section className="register">
      <div className="container">
        <div className="register__layout">
          <header className="register__header">
            <p className="register__eyebrow">FORM / ACCOUNT</p>

            <h1 className="register__title">
              Create your
              <span>FORM account.</span>
            </h1>

            <p className="register__description">
              Create an account to manage your orders, saved details, and
              preferences.
            </p>

            <div className="register__meta">
              <span>01</span>
              <span className="register__meta-line"></span>
              <span>ACCOUNT SETUP</span>
            </div>
          </header>

          <div className="register__card">
            <div className="register__card-header">
              <span>CREATE ACCOUNT</span>
              <span>FORM.01</span>
            </div>

            <form className="register__form" onSubmit={handleSubmit}>
              <div className="register__field">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Your username"
                />
              </div>

              <div className="register__field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="register__field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                />
              </div>

              <div className="register__field">
                <label htmlFor="confirm-password">Confirm password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                />
              </div>

              <button className="register__submit" type="submit">
                <span>Create Account</span>
                <span className="register__submit-arrow">→</span>
              </button>
            </form>

            <p className="register__terms">
              By creating an account, you agree to FORM's terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
