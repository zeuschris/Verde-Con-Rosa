import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Tienda', to: '/tienda' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Contacto', to: '/contacto' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-(--cream)/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Grid: móvil logo | acciones · desktop [logo][menú centrado][acciones] */}
          <div className="grid h-[72px] md:h-20 grid-cols-[1fr_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 md:gap-4">
            <Link to="/" className="flex items-center gap-3 group justify-self-start min-w-0">
              <img
                src="/logo.webp"
                alt="Verde con Rosa"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'block'
                  }
                }}
                className="h-12 w-auto sm:h-14 md:h-[68px] shrink-0 transition-transform duration-300 cursor-pointer group-hover:scale-105"
              />
              <span
                style={{
                  display: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  color: 'var(--charcoal)',
                  fontWeight: 400,
                }}
              >
                Verde con Rosa
              </span>
            </Link>

            <nav
              className="hidden md:flex md:col-start-2 items-center justify-center gap-6 lg:gap-10"
              aria-label="Principal"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-normal tracking-wide whitespace-nowrap transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-(--rose) after:transition-all after:duration-300 ${
                    pathname === link.to
                      ? 'text-(--sage-dark) after:w-full'
                      : 'text-(--charcoal) hover:text-(--rose) after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-1.5 sm:gap-2 md:gap-3 justify-self-end md:col-start-3 shrink-0">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-(--rose-light) transition-colors duration-200 text-(--charcoal) hover:text-(--rose)"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-(--rose-light) transition-colors duration-200 text-(--charcoal) hover:text-(--rose) relative"
                aria-label="Carrito"
              >
                <ShoppingBag size={18} />
              </button>
              <button
                type="button"
                className="md:hidden p-2 rounded-full hover:bg-(--sage-light) transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-(--warm-white) shadow-lg border-b border-(--border) md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-5" aria-label="Móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-(--font-display) text-(--charcoal) hover:text-(--rose) transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
