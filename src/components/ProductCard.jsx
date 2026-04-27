import { CONTACT_EMAIL } from '../contact'
import './ProductCard.css'

const imageBg = {
  "Women's Clothing":    { bg: '#fde8e3', stroke: '#c9523e' },
  "Kids / Girls Clothing": { bg: '#e4f0e8', stroke: '#5e9472' },
  'Housewares':          { bg: '#f5ede4', stroke: '#9c7260' },
  'Toys':                { bg: '#fef3d8', stroke: '#d4843a' },
}

function PlaceholderImage({ category }) {
  const { bg, stroke } = imageBg[category] ?? { bg: '#f5ede4', stroke: '#9c7260' }
  return (
    <div className="card__image" style={{ background: bg }}>
      <svg
        width="44" height="44" viewBox="0 0 24 24"
        fill="none" stroke={stroke} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  )
}

const conditionSlug = c => c.toLowerCase().replace(' ', '-')

export default function ProductCard({ item }) {
  return (
    <article className={`card${item.sold ? ' card--sold' : ''}`}>
      <div className="card__image-wrap">
        <PlaceholderImage category={item.category} />
        {item.sold && (
          <span className="card__sold-badge" aria-label="Sold">Sold</span>
        )}
      </div>
      <div className="card__body">
        <span className="card__category">{item.category}</span>
        <h3 className="card__name">{item.name}</h3>
        <div className="card__meta">
          <span className={`card__condition card__condition--${conditionSlug(item.condition)}`}>
            {item.condition}
          </span>
          <span className="card__price">${item.price}</span>
        </div>
        {item.sold ? (
          <button className="card__btn card__btn--sold" disabled>
            Sold Out
          </button>
        ) : (
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Interested in: ${encodeURIComponent(item.name)}`}
            className="card__btn"
          >
            Message to Buy
          </a>
        )}
      </div>
    </article>
  )
}
