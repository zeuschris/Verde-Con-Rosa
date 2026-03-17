import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Leaf } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>Producto no encontrado</p>
        <Link to="/tienda" className="text-[var(--rose)] hover:underline">Volver a la tienda</Link>
      </div>
    </div>
  )

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/tienda" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--charcoal)] mb-10 transition-colors">
          <ArrowLeft size={14} />
          Volver a la tienda
        </Link>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="aspect-square rounded-3xl overflow-hidden bg-[var(--warm-white)] border border-[var(--border)]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs tracking-widest uppercase text-[var(--rose)] font-[500]">{product.category}</span>
            {product.badge && (
              <span className="ml-3 text-[10px] tracking-widest bg-[var(--sage)] text-white px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <h1 className="text-5xl mt-3 mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-[var(--border)]'} />
              ))}
              <span className="text-xs text-[var(--muted)] ml-1">(48 reseñas)</span>
            </div>

            <p className="text-4xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
              ${product.price.toLocaleString('es-AR')}
            </p>

            <p className="text-[var(--muted)] leading-relaxed mb-8">{product.description}</p>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-sm font-[500] mb-3 flex items-center gap-2">
                <Leaf size={14} className="text-[var(--sage)]" />
                Ingredientes principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map(ing => (
                  <span key={ing} className="text-xs bg-[var(--sage-light)] text-[var(--sage-dark)] px-3 py-1.5 rounded-full">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[var(--sage-dark)] text-white py-4 rounded-full text-sm font-[500] hover:bg-[var(--rose-dark)] transition-colors duration-300">
                Agregar al carrito
              </button>
              <button className="border-2 border-[var(--border)] text-[var(--charcoal)] px-6 py-4 rounded-full text-sm font-[500] hover:border-[var(--rose)] hover:text-[var(--rose)] transition-colors duration-300">
                ♡ Guardar
              </button>
            </div>

            {/* Shipping info */}
            <div className="mt-6 p-4 bg-[var(--sage-light)] rounded-xl text-xs text-[var(--sage-dark)] flex items-center gap-2">
              <span>📦</span>
              Envío a todo el país · Empaque eco-friendly · Entrega en 3-5 días
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-4xl mb-8" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
              También te puede gustar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
