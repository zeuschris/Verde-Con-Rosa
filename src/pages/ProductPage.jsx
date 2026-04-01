import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star, Leaf, ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

function getGalleryImages(product) {
  if (product.images?.length) return product.images
  return [product.image]
}

function getRelatedProducts(product, limit = 4) {
  const same = products.filter(p => p.category === product.category && p.id !== product.id)
  if (same.length >= limit) return same.slice(0, limit)
  const rest = products.filter(p => p.id !== product.id && !same.some(s => s.id === p.id))
  return [...same, ...rest].slice(0, limit)
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const galleryImages = product ? getGalleryImages(product) : []
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goPrev = useCallback(() => {
    setActiveIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  }, [galleryImages.length])

  const goNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % galleryImages.length)
  }, [galleryImages.length])

  useEffect(() => {
    setActiveIndex(0)
  }, [product?.id])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (galleryImages.length <= 1) return
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightboxOpen, galleryImages.length, goPrev, goNext])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>Producto no encontrado</p>
          <Link to="/tienda" className="text-(--rose) hover:underline">Volver a la tienda</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product)
  const multi = galleryImages.length > 1

  return (
    <div className="min-h-screen bg-(--cream) pt-28 pb-20 relative overflow-hidden">
      {/* Decoración tipo landing */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[min(600px,90vw)] h-[600px] rounded-full opacity-50"
        style={{
          backgroundColor: 'var(--rose-light)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -25%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <nav className="flex flex-wrap items-center gap-3 text-sm text-(--muted) mb-10 font-(--font-body)">
          <Link to="/" className="hover:text-(--charcoal) transition-colors">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link to="/tienda" className="hover:text-(--charcoal) transition-colors">Tienda</Link>
          <span aria-hidden="true">/</span>
          <span className="text-(--charcoal) truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </nav>

        <Link
          to="/tienda"
          className="inline-flex items-center gap-2 text-sm text-(--muted) hover:text-(--charcoal) mb-12 transition-colors font-(--font-body)"
        >
          <ArrowLeft size={14} />
          Volver a la tienda
        </Link>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 mb-24">
          {/* Galería */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="relative group">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="w-full text-left rounded-3xl overflow-hidden bg-(--warm-white) border border-(--border) aspect-square cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-(--sage) focus-visible:ring-offset-2 focus-visible:ring-offset-(--cream)"
                aria-label="Ampliar imagen del producto"
              >
                <img
                  src={galleryImages[activeIndex]}
                  alt={`${product.name} — imagen ${activeIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              {multi && (
                <>
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); goPrev() }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-(--border) shadow-md flex items-center justify-center text-(--charcoal) hover:bg-(--sage-light) hover:border-(--sage) transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); goNext() }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-(--border) shadow-md flex items-center justify-center text-(--charcoal) hover:bg-(--sage-light) hover:border-(--sage) transition-colors"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <p
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] tracking-wide uppercase bg-black/45 text-white px-3 py-1 rounded-full font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {activeIndex + 1} / {galleryImages.length}
                  </p>
                </>
              )}
            </div>

            {multi && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {galleryImages.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      i === activeIndex
                        ? 'border-(--sage-dark) ring-2 ring-(--sage-light)'
                        : 'border-(--border) opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Ver miniatura ${i + 1}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <p className="text-xs text-(--muted) text-center sm:text-left font-(--font-body)">
              Toca la imagen para verla en grande
            </p>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="text-[10px] tracking-[1.2px] uppercase text-(--rose) font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {product.category}
              </span>
              {product.badge && (
                <span className="text-[10px] tracking-widest bg-(--sage) text-white px-3 py-1 rounded-full font-medium">
                  {product.badge}
                </span>
              )}
            </div>

            <h1
              className="text-[clamp(2rem,5vw,3rem)] text-(--charcoal) mb-4"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1.15 }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-(--border)'}
                />
              ))}
              <span className="text-xs text-(--muted) ml-1 font-(--font-body)">(48 reseñas)</span>
            </div>

            <p
              className="text-[clamp(1.75rem,4vw,2.25rem)] text-(--charcoal) mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              ${product.price.toLocaleString('es-AR')}
            </p>

            <p className="text-[15px] text-(--muted) leading-relaxed mb-8 font-(--font-body) max-w-xl">
              {product.description}
            </p>

            <div className="mb-8 pb-8 border-b border-(--border)">
              <h3
                className="text-sm font-medium mb-3 flex items-center gap-2 text-(--charcoal)"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Leaf size={14} className="text-(--sage) shrink-0" />
                Ingredientes principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map(ing => (
                  <span
                    key={ing}
                    className="text-xs bg-(--sage-light) text-(--sage-dark) px-3 py-1.5 rounded-full font-(--font-body)"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                type="button"
                className="flex-1 bg-(--sage-dark) text-white py-4 rounded-[24px] text-sm font-medium hover:bg-(--rose-dark) transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Agregar al carrito
              </button>
              <button
                type="button"
                className="border-2 border-(--border) text-(--charcoal) px-8 py-4 rounded-[24px] text-sm font-medium hover:border-(--rose) hover:text-(--rose) transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                ♡ Guardar
              </button>
            </div>

            <div className="mt-6 p-4 bg-(--sage-light) rounded-2xl text-xs text-(--sage-dark) flex items-start gap-3 font-(--font-body)">
              <span className="text-base shrink-0" aria-hidden>📦</span>
              <span>Envío a todo el país · Empaque eco-friendly · Entrega en 3-5 días</span>
            </div>
          </motion.div>
        </div>

        {/* Relacionados — estilo landing (Los más vendidos) */}
        {related.length > 0 && (
          <section className="pt-8 border-t border-(--border)">
            <div className="text-center mb-12 max-w-xl mx-auto">
              <span
                className="text-[10px] tracking-[1.2px] uppercase text-(--rose) font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Descubre más
              </span>
              <h2
                className="text-[clamp(28px,4vw,44px)] font-light text-(--charcoal) mt-3 mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                También te puede gustar
              </h2>
              <p className="text-[15px] text-(--muted) font-(--font-body)">
                Productos de la misma línea y favoritos que combinan con tu rutina.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 border-2 border-(--sage-dark) text-(--sage-dark) px-10 py-3.5 rounded-[24px] text-sm font-medium transition-all hover:bg-(--sage-dark) hover:text-white"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Ver todos los productos
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8 bg-black/88 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={e => { e.stopPropagation(); setLightboxOpen(false) }}
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>

            <div
              className="relative max-w-[min(1100px,100%)] max-h-[85vh] w-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.img
                key={galleryImages[activeIndex]}
                initial={{ opacity: 0.85, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={galleryImages[activeIndex]}
                alt={`${product.name} — vista ampliada`}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />

              {multi && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-(--charcoal) shadow-lg flex items-center justify-center hover:bg-(--sage-light) transition-colors -translate-x-1 sm:translate-x-0"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={26} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-(--charcoal) shadow-lg flex items-center justify-center hover:bg-(--sage-light) transition-colors translate-x-1 sm:translate-x-0"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={26} />
                  </button>
                  <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-white/80 font-(--font-body)">
                    {activeIndex + 1} / {galleryImages.length}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
