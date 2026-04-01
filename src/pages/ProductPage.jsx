import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Star,
  Leaf,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  Recycle,
  Sparkles,
} from 'lucide-react'
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
  const [qty, setQty] = useState(1)

  const goPrev = useCallback(() => {
    setActiveIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  }, [galleryImages.length])

  const goNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % galleryImages.length)
  }, [galleryImages.length])

  useEffect(() => {
    setActiveIndex(0)
    setQty(1)
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

  const trustItems = [
    { icon: Sparkles, label: '100% natural' },
    { icon: Recycle, label: 'Empaque eco' },
    { icon: Truck, label: 'Envío nacional' },
  ]

  return (
    <div className="min-h-screen bg-(--cream) pt-28 pb-16 lg:pb-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-[min(600px,90vw)] h-[600px] rounded-full opacity-50"
        style={{
          backgroundColor: 'var(--rose-light)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -25%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Cabecera: volver + migas */}
        <div className="mb-10 lg:mb-12 space-y-4">
          <Link
            to="/tienda"
            className="inline-flex items-center gap-2 text-sm text-(--muted) hover:text-(--charcoal) transition-colors font-(--font-body)"
          >
            <ArrowLeft size={15} strokeWidth={1.75} />
            Volver a la tienda
          </Link>
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-(--muted) font-(--font-body)">
            <Link to="/" className="hover:text-(--charcoal) transition-colors">Inicio</Link>
            <span className="text-(--border)">/</span>
            <Link to="/tienda" className="hover:text-(--charcoal) transition-colors">Tienda</Link>
            <span className="text-(--border)">/</span>
            <span className="text-(--charcoal) truncate max-w-[min(100%,280px)]">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 xl:gap-14 items-start mb-14 lg:mb-16">
          {/* Galería */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 space-y-5"
          >
            <div className="rounded-[28px] bg-(--warm-white) border border-(--border) p-3 sm:p-4 shadow-[0_8px_40px_rgba(42,42,42,0.05)]">
              <div className="relative group rounded-[22px] overflow-hidden aspect-square">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute inset-0 w-full h-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-(--sage) focus-visible:ring-offset-2 focus-visible:ring-offset-(--warm-white) rounded-[22px]"
                  aria-label="Ampliar imagen del producto"
                >
                  <img
                    src={galleryImages[activeIndex]}
                    alt={`${product.name} — imagen ${activeIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>

                {multi && (
                  <>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); goPrev() }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-1 w-11 h-11 rounded-full bg-white/95 border border-(--border) shadow-md flex items-center justify-center text-(--charcoal) hover:bg-(--sage-light) hover:border-(--sage) transition-colors"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); goNext() }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-1 w-11 h-11 rounded-full bg-white/95 border border-(--border) shadow-md flex items-center justify-center text-(--charcoal) hover:bg-(--sage-light) hover:border-(--sage) transition-colors"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={22} />
                    </button>
                    <p
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] tracking-wide uppercase bg-black/50 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full font-medium"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {activeIndex + 1} / {galleryImages.length}
                    </p>
                  </>
                )}
              </div>
            </div>

            {multi && (
              <div
                className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 pt-1 -mx-1 px-1 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'thin' }}
              >
                {galleryImages.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 snap-start w-[88px] h-[88px] sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all shadow-sm ${
                      i === activeIndex
                        ? 'border-(--sage-dark) ring-[3px] ring-(--sage-light) scale-[1.02]'
                        : 'border-(--border) opacity-75 hover:opacity-100 hover:border-(--sage)'
                    }`}
                    aria-label={`Ver miniatura ${i + 1}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <p className="flex items-center justify-center sm:justify-start gap-2 text-xs text-(--muted) font-(--font-body)">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-(--sage-light) text-(--sage-dark) text-[13px]" aria-hidden>⤢</span>
              Toca la imagen para verla en grande
            </p>
          </motion.div>

          {/* Ficha de producto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-[28px] border border-(--border) bg-(--warm-white) p-6 sm:p-8 lg:p-10 shadow-[0_8px_48px_rgba(42,42,42,0.06)] flex flex-col"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[10px] tracking-[1.2px] uppercase text-(--rose) font-medium">{product.category}</span>
              {product.badge && (
                <span className="text-[10px] tracking-widest bg-(--sage) text-white px-3 py-1 rounded-full font-medium">
                  {product.badge}
                </span>
              )}
            </div>

            <h1
              className="text-[clamp(1.85rem,4.5vw,2.75rem)] text-(--charcoal) mb-5 leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-(--border)">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-(--border)'}
                  />
                ))}
              </div>
              <span className="text-sm text-(--muted)">
                {product.rating.toFixed(1)} · 48 reseñas
              </span>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap items-end gap-3 gap-y-1">
                <p
                  className="text-[clamp(2rem,5vw,2.75rem)] text-(--charcoal) tabular-nums tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  ${product.price.toLocaleString('es-AR')}
                </p>
                <span className="text-sm text-(--muted) pb-1.5">ARS · impuestos incluidos</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustItems.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-(--sage-dark) bg-(--sage-light)/80 px-3 py-1.5 rounded-full border border-(--sage-light)"
                  >
                    <Icon size={13} className="shrink-0 opacity-80" strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[15px] sm:text-base text-(--muted) leading-[1.75] mb-10 max-w-prose">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-(--charcoal) tracking-tight">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-(--sage-light)">
                  <Leaf size={16} className="text-(--sage)" />
                </span>
                Ingredientes principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map(ing => (
                  <span
                    key={ing}
                    className="text-xs sm:text-[13px] bg-(--cream) text-(--sage-dark) px-3.5 py-2 rounded-xl border border-(--border)/80"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
                <div>
                  <span className="block text-xs font-medium text-(--muted) mb-2 uppercase tracking-wide">Cantidad</span>
                  <div className="inline-flex items-center rounded-2xl border border-(--border) bg-(--cream) p-1 shadow-inner">
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-(--charcoal) hover:bg-(--warm-white) transition-colors disabled:opacity-40"
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      aria-label="Disminuir cantidad"
                    >
                      <Minus size={18} strokeWidth={2} />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold tabular-nums text-(--charcoal)">{qty}</span>
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-(--charcoal) hover:bg-(--warm-white) transition-colors"
                      onClick={() => setQty(q => q + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={18} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
                <button
                  type="button"
                  className="inline-flex h-[52px] flex-1 sm:flex-none sm:min-w-[min(100%,260px)] items-center justify-center gap-2 rounded-[26px] bg-(--sage-dark) px-8 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(74,122,92,0.35)] hover:bg-(--rose-dark) transition-all duration-300"
                >
                  <ShoppingBag size={18} strokeWidth={2} />
                  Agregar al carrito
                </button>
                <button
                  type="button"
                  className="inline-flex h-[52px] flex-1 sm:w-auto sm:px-8 items-center justify-center gap-2 rounded-[26px] border-2 border-(--border) bg-transparent text-(--charcoal) text-sm font-semibold hover:border-(--rose) hover:text-(--rose) hover:bg-(--rose-light)/30 transition-all duration-300"
                >
                  <Heart size={18} strokeWidth={2} />
                  Guardar
                </button>
              </div>

              <div className="rounded-2xl border border-(--border) bg-(--cream)/80 px-4 py-3.5 text-xs sm:text-sm text-(--sage-dark) flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--sage-light) text-base" aria-hidden>📦</span>
                <div className="space-y-0.5 pt-0.5">
                  <p className="font-semibold text-(--charcoal)">Envío y entrega</p>
                  <p className="text-(--muted) leading-relaxed">Envío a todo el país · Empaque eco-friendly · Entrega estimada 3 a 5 días hábiles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <section className="rounded-[28px] border border-(--border) bg-(--warm-white) px-5 py-12 sm:px-8 sm:py-14 shadow-[0_8px_40px_rgba(42,42,42,0.04)]">
            <div className="text-center mb-10 sm:mb-12 max-w-lg mx-auto">
              <span className="text-[10px] tracking-[1.2px] uppercase text-(--rose) font-medium">Descubre más</span>
              <h2
                className="text-[clamp(26px,4vw,40px)] font-light text-(--charcoal) mt-3 mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                También te puede gustar
              </h2>
              <p className="text-[15px] text-(--muted)">
                Productos de la misma línea que combinan con tu rutina.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 border-2 border-(--sage-dark) text-(--sage-dark) px-8 sm:px-10 py-3.5 rounded-[24px] text-sm font-semibold transition-all hover:bg-(--sage-dark) hover:text-white"
              >
                Ver todos los productos
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        )}
      </div>

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
