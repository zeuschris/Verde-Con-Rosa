import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const linkClass =
    'text-sm text-white/70 hover:text-(--rose) transition-colors duration-300 break-words'

  return (
    <footer className="bg-(--charcoal) text-white w-full min-w-0 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-x-8 sm:gap-y-12 lg:gap-12 pb-10 border-b border-white/8 min-w-0"
        >
          {/* Marca */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.webp"
              alt="Verde con Rosa"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="h-[72px] sm:h-20 w-auto mb-4"
            />
            <p className="font-(-font-display)]text-lg text-white mb-3">Verde con Rosa</p>
            <p className="text-[13px] text-white/45 leading-relaxed mb-6 max-w-sm">
              Jabones artesanales elaborados con amor, ingredientes naturales y el respeto que tu piel merece.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Mail, href: '#', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-(--rose) hover:text-(--rose) transition-all duration-300 shrink-0"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="font-(--font-display) text-lg text-white mb-5">Tienda</h4>
            <ul className="flex flex-col gap-3">
              {['Todos los productos', 'Jabones artesanales', 'Skincare', 'Kits de regalo'].map((item) => (
                <li key={item}>
                  <Link to="/tienda" className={linkClass}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-(--font-display) text-lg text-white mb-5">Información</h4>
            <ul className="flex flex-col gap-3">
              {['Nosotros', 'Ingredientes', 'Política de envíos', 'Preguntas frecuentes', 'Programa de revendedoras'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className={linkClass}>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h4 className="font-(--font-display) text-lg text-white mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start min-w-0">
                <MapPin size={16} className="text-(--rose) shrink-0 mt-0.5" />
                <span className="text-white/70 wrap-break-words">Buenos Aires, Argentina</span>
              </li>
              <li className="flex gap-3 items-center min-w-0">
                <Phone size={16} className="text-(--rose) shrink-0" />
                <a href="tel:+541100000000" className="text-white/70 hover:text-(--rose) transition-colors break-all">
                  +54 11 0000-0000
                </a>
              </li>
              <li className="flex gap-3 items-center min-w-0">
                <Mail size={16} className="text-(--rose) shrink-0" />
                <a
                  href="mailto:hola@verdeconrosa.com"
                  className="text-white/70 hover:text-(--rose) transition-colors break-all"
                >
                  hola@verdeconrosa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-center sm:text-left text-xs text-white/30 min-w-0">
          <p className="wrap-break-words px-1">© 2026 Verde con Rosa. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 shrink-0">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
