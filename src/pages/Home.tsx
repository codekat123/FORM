import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import formChargeImage from '../assets/products/form-charge.png'
import { getCategoryPreview } from '../services/products'
import './Home.css'

const COLLECTIONS = [
  {
    number: '01',
    name: 'Smartphones',
    category: 'smartphones',
    description: 'Essential technology for every day.',
  },
  {
    number: '02',
    name: 'Laptops',
    category: 'laptops',
    description: 'Power for work and everything beyond.',
  },
  {
    number: '03',
    name: 'Tablets',
    category: 'tablets',
    description: 'Portable tools for modern life.',
  },
  {
    number: '04',
    name: 'Accessories',
    category: 'mobile-accessories',
    description: 'Small details that make a difference.',
  },
]

function Home() {
  const [collectionImages, setCollectionImages] = useState<
    Record<string, string>
  >({})

  const [isLoadingCollections, setIsLoadingCollections] =
    useState(true)

  const [collectionError, setCollectionError] = useState<
    string | null
  >(null)

  useEffect(() => {
    Promise.all(
      COLLECTIONS.map(async (collection) => {
        const product = await getCategoryPreview(
          collection.category
        )

        return {
          category: collection.category,
          image: product.images[0],
        }
      })
    )
      .then((previews) => {
        const images = Object.fromEntries(
          previews
            .filter((preview) => preview.image)
            .map((preview) => [
              preview.category,
              preview.image,
            ])
        )

        setCollectionImages(images)
      })
      .catch((error) => {
        console.error(error)
        setCollectionError('Unable to load collections.')
      })
      .finally(() => {
        setIsLoadingCollections(false)
      })
  }, [])

  return (
    <main className="home">
      {/* Hero */}

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">
              Technology, considered.
            </p>

            <h1 className="hero__title">
              Function
              <br />
              meets
              <br />
              considered
              <br />
              design.
            </h1>

            <p className="hero__description">
              Technology designed with purpose, built for everyday
              life, and stripped back to what matters.
            </p>

            <div className="hero__actions">
              <Link className="hero__cta" to="/shop">
                Explore collection
                <span aria-hidden="true">→</span>
              </Link>

              <span className="hero__note">
                FORM / 01
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-label">
              <span>FORM</span>
              <span>Wireless charging</span>
            </div>

            <img
              className="hero__product"
              src={formChargeImage}
              alt="FORM Charge wireless charging dock"
            />

            <span className="hero__visual-index">
              01 — 04
            </span>
          </div>
        </div>
      </section>

      {/* Brand statement */}

      <section className="statement">
        <div className="container">
          <div className="statement__content">
            <p className="statement__eyebrow">
              The FORM principle
            </p>

            <h2 className="statement__title">
              Less noise.
              <br />
              Better technology.
            </h2>

            <div className="statement__body">
              <p>
                We believe the technology around us should make
                life simpler, not more complicated.
              </p>

              <p>
                FORM brings together useful technology with
                considered design — products chosen for how they
                work, how they feel, and how they fit into your
                everyday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}

      <section className="collections">
        <div className="container">
          <header className="collections__header">
            <div>
              <p className="collections__eyebrow">
                Explore the collection
              </p>

              <h2 className="collections__title">
                Technology for
                <br />
                the way you live.
              </h2>
            </div>

            <Link
              className="collections__all"
              to="/shop"
            >
              View all products
              <span aria-hidden="true">→</span>
            </Link>
          </header>

          {isLoadingCollections && (
            <div className="collections__state">
              <p>Loading collections...</p>
            </div>
          )}

          {collectionError && (
            <div
              className="collections__state collections__state--error"
              role="alert"
            >
              <p>{collectionError}</p>

              <Link to="/shop">
                Browse the shop
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

          {!isLoadingCollections &&
            !collectionError && (
              <div className="collections__grid">
                {COLLECTIONS.map((collection) => (
                  <Link
                    key={collection.category}
                    to={`/shop?category=${collection.category}`}
                    className="collection-card"
                  >
                    {collectionImages[collection.category] && (
                      <img
                        className="collection-card__image"
                        src={
                          collectionImages[
                            collection.category
                          ]
                        }
                        alt=""
                      />
                    )}

                    <div className="collection-card__overlay" />

                    <div className="collection-card__top">
                      <span className="collection-card__number">
                        {collection.number}
                      </span>

                      <span
                        className="collection-card__arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <div className="collection-card__content">
                      <p className="collection-card__eyebrow">
                        Collection
                      </p>

                      <h3 className="collection-card__title">
                        {collection.name}
                      </h3>

                      <p className="collection-card__description">
                        {collection.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
        </div>
      </section>

      {/* Closing CTA */}

      <section className="closing">
        <div className="container">
          <div className="closing__content">
            <p className="closing__eyebrow">
              FORM / Technology, considered.
            </p>

            <h2 className="closing__title">
              Make room for
              <br />
              better technology.
            </h2>

            <Link
              className="closing__cta"
              to="/shop"
            >
              Explore FORM
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
