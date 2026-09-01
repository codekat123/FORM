import '../css/Account.css'

function Account() {
  return (
    <section className="account">
      <div className="container">
        <header className="account__header">
          <p className="account__eyebrow">Your account</p>
          <h1 className="account__title">Account overview</h1>
          <p className="account__description">
            Manage your personal details, orders, and account preferences.
          </p>
        </header>

        <div className="account__grid">
          <article className="account__card">
            <h2 className="account__card-title">Personal details</h2>
            <p className="account__card-description">
              Manage your name, email address, and contact information.
            </p>
          </article>

          <article className="account__card">
            <h2 className="account__card-title">Orders</h2>
            <p className="account__card-description">
              View your order history and track your recent purchases.
            </p>
          </article>

          <article className="account__card">
            <h2 className="account__card-title">Preferences</h2>
            <p className="account__card-description">
              Manage your account preferences and communication settings.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Account
