import { useState } from 'react'
import { motion } from 'framer-motion'
import { Grid3x3, List } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [gridView, setGridView] = useState(true)

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section style={{ backgroundColor: 'var(--cream)', paddingTop: '100px', paddingBottom: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
            Nuestros Productos
          </span>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontFamily: 'var(--font-display)', fontWeight: 300, marginTop: '12px', color: 'var(--charcoal)' }}>
            La Tienda
          </h1>
        </motion.div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--sage-dark)' : '#fff',
                  color: activeCategory === cat ? '#fff' : 'var(--charcoal)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border)',
                  padding: '10px 20px',
                  borderRadius: '99px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.target.style.borderColor = 'var(--sage-dark)'
                    e.target.style.color = 'var(--sage-dark)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.color = 'var(--charcoal)'
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '14px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>{filtered.length} productos</span>
            <button
              onClick={() => setGridView(!gridView)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--charcoal)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--sage-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--charcoal)'}
            >
              {gridView ? <Grid3x3 size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="shop-grid">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
          <style>{`
            @media (max-width: 1024px) {
              .shop-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
            @media (max-width: 768px) {
              .shop-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
