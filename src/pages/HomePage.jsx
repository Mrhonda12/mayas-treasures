import { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../data/items'
import ProductCard from '../components/ProductCard'
import './HomePage.css'

const categories = [
  {
    title: "Women's Clothing",
    description:
      "Tops, dresses, jeans, jackets, and more — hand-selected and ready for a new home.",
  },
  {
    title: "Kids / Girls Clothing",
    description:
      "Kids grow fast. We make it easy to keep up with comfortable, practical finds at prices that make sense.",
  },
  {
    title: 'Housewares',
    description:
      'Mugs, bowls, linens, décor, and more — little things that make a house feel like home.',
  },
  {
    title: 'Toys',
    description:
      'Gently used toys for all ages — a fun and affordable way to keep the kids entertained.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Browse Inventory',
    description: 'Look through our current listings and find something you love.',
  },
  {
    number: '2',
    title: 'Message Us',
    description:
      "Send us an email or Instagram DM with the item name. We'll get back to you quickly to confirm it's available.",
  },
  {
    number: '3',
    title: 'Pick Up or Arrange Delivery',
    description:
      "We'll set up a pickup time that works for you, or talk through delivery options together.",
  },
]

const policies = [
  'All items are thrifted and may show signs of normal wear — condition is noted on each listing.',
  'Holds are first-come, first-served. We cannot reserve an item until we hear from you.',
  'All sales are final unless otherwise stated.',
]

const faqs = [
  {
    q: 'What do you sell?',
    a: "Women's clothing, kids' and girls' clothing, housewares, and toys — all gently used and hand-picked.",
  },
  {
    q: 'How often is inventory updated?',
    a: "New items are added regularly as we get new stock in. Check back often — good finds go fast!",
  },
  {
    q: 'How do I buy an item?',
    a: "Message us with the item name — by email or Instagram DM. We'll confirm it's still available and take it from there.",
  },
  {
    q: 'Are items final sale?',
    a: "Yes, all sales are final. We describe the condition of each item as accurately as we can, but please keep in mind these are pre-loved goods sold as-is.",
  },
]

const featured = items.filter(i => i.featured)

function Faq() {
  const [open, setOpen] = useState(null)
  const toggle = i => setOpen(prev => (prev === i ? null : i))

  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__intro">
          <h2 className="faq__heading">Frequently Asked Questions</h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div key={i} className="faq__item">
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className={`faq__answer${open === i ? ' faq__answer--open' : ''}`}>
                <p className="faq__answer-text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Welcome to</p>
          <h1 className="hero__title">Maya's Treasures</h1>
          <p className="hero__tagline">
            Gently loved clothing and housewares, handpicked for your family.
          </p>
          <Link to="/inventory" className="hero__cta">
            Browse Inventory
          </Link>
        </div>
      </section>

      <section className="about">
        <div className="about__container">
          <div className="about__intro">
            <h2 className="about__heading">About Us</h2>
            <p className="about__text">
              We're a small, family-run shop offering gently used clothing, housewares,
              and toys at honest prices. Every item is hand-selected — we only list things
              we'd be happy to bring home ourselves. Whether you're refreshing your
              wardrobe, finding great deals for the kids, or looking for something cozy
              for the home, we're glad you're here.
            </p>
          </div>
          <div className="about__grid">
            {categories.map(cat => (
              <div className="about__card" key={cat.title}>
                <div className="about__card-bar" />
                <h3 className="about__card-title">{cat.title}</h3>
                <p className="about__card-text">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how">
        <div className="how__container">
          <div className="how__intro">
            <h2 className="how__heading">How It Works</h2>
            <p className="how__subtext">Getting your next find is easy.</p>
          </div>
          <div className="how__steps">
            {steps.map((step, i) => (
              <div className="how__step" key={step.number}>
                <div className="how__step-number" aria-hidden="true">{step.number}</div>
                {i < steps.length - 1 && <div className="how__connector" aria-hidden="true" />}
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured__container">
          <div className="featured__intro">
            <h2 className="featured__heading">Featured Finds</h2>
            <p className="featured__subtext">
              Some of our current favorites — grab them before they're gone.
            </p>
          </div>
          <div className="featured__grid">
            {featured.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="featured__footer">
            <Link to="/inventory" className="featured__link">
              View all inventory
            </Link>
          </div>
        </div>
      </section>

      <Faq />

      <section className="policies">
        <div className="policies__container">
          <h2 className="policies__heading">Our Policies</h2>
          <ul className="policies__list">
            {policies.map((policy, i) => (
              <li key={i} className="policies__item">{policy}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
