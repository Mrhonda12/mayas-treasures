import { useState } from 'react'
import { items } from '../data/items'
import ProductCard from '../components/ProductCard'
import './InventoryPage.css'

const FILTERS = ["All", "Women's Clothing", "Kids / Girls Clothing", "Housewares", "Toys"]

export default function InventoryPage() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <div className="inventory">
      <div className="inventory__header">
        <h1 className="inventory__title">Our Inventory</h1>
        <p className="inventory__subtitle">
          Browse our current selection of women's clothing, kids' and girls' clothing, housewares, and toys.
        </p>
      </div>

      <div className="inventory__filters" role="group" aria-label="Filter by category">
        {FILTERS.map(label => (
          <button
            key={label}
            type="button"
            className={`filter-btn${active === label ? ' filter-btn--active' : ''}`}
            onClick={() => setActive(label)}
            aria-pressed={active === label}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="inventory__note">
        To purchase an item, message us with the item name.
      </p>

      <p className="inventory__coming-soon">
        Photos and new items will be updated as inventory becomes available.
      </p>

      <div className="inventory__grid">
        {visible.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
