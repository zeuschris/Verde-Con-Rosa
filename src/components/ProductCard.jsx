import { motion } from 'framer-motion'
import { Star, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const badgeColors = {
  NUEVO: { bg: 'var(--sage)', text: '#fff' },
  OFERTA: { bg: 'var(--rose)', text: '#fff' },
  FAVORITO: { bg: '#fbbf24', text: '#fff' },
}

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 116, 140, 0.12)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      style={{
        backgroundColor: 'var(--warm-white)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.4s',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', backgroundColor: 'var(--cream)' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        {/* Badge */}
        {product.badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '0.08em',
              backgroundColor: badgeColors[product.badge]?.bg || 'var(--sage)',
              color: badgeColors[product.badge]?.text || '#fff',
              borderRadius: '99px',
              padding: '3px 10px',
              fontFamily: 'var(--font-body)',
            }}
          >
            {product.badge}
          </span>
        )}
        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundColor: 'rgba(42, 42, 42, 0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0)'
          }}
        >
          <Link
            to={`/producto/${product.id}`}
            style={{
              opacity: '0',
              transition: 'all 0.3s',
              transform: 'translateY(8px)',
              backgroundColor: 'white',
              color: 'var(--charcoal)',
              borderRadius: '99px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--rose)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.color = 'var(--charcoal)'
            }}
          >
            <Eye size={14} />
            Ver detalle
          </Link>
        </div>

        <style>{`
          div:has(> a[href*="/producto/"]):hover > div {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px 16px' }}>
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '6px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {product.category}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '6px',
            color: 'var(--charcoal)',
          }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              style={{
                color: i < product.rating ? '#fbbf24' : 'var(--border)',
                fill: i < product.rating ? '#fbbf24' : 'none',
              }}
            />
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: 400,
              color: 'var(--charcoal)',
            }}
          >
            ${product.price.toLocaleString('es-AR')}
          </span>
          <button
            style={{
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: 'var(--sage-light)',
              color: 'var(--sage-dark)',
              borderRadius: '99px',
              padding: '6px 14px',
              border: 'none',
              transition: 'all 0.2s',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--sage-dark)'
              e.target.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--sage-light)'
              e.target.style.color = 'var(--sage-dark)'
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </motion.div>
  )
}
