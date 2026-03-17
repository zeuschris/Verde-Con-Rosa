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
            ? 'bg-[var(--cream)]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.webp"
              alt="Verde con Rosa"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'block'
                }
              }}
              style={{
                height: '72px',
                width: 'auto',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              className="group-hover:scale-105 navbar-logo"
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
            <style>{`
              @media (max-width: 768px) {
                .navbar-logo {
                  height: 56px !important;
                }
              }
            `}</style>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-[400] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--rose)] after:transition-all after:duration-300 ${
                  pathname === link.to
                    ? 'text-[var(--sage-dark)] after:w-full'
                    : 'text-[var(--charcoal)] hover:text-[var(--rose)] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-[var(--rose-light)] transition-colors duration-200 text-[var(--charcoal)] hover:text-[var(--rose)]">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-[var(--rose-light)] transition-colors duration-200 text-[var(--charcoal)] hover:text-[var(--rose)] relative">
              <ShoppingBag size={18} />
            </button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-[var(--sage-light)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--warm-white)] shadow-lg border-b border-[var(--border)] md:hidden"
          >
            <nav className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-[var(--font-display)] text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors"
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
