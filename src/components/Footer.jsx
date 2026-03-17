import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const handleSocialHover = (e) => {
    e.currentTarget.style.borderColor = 'var(--rose)'
    e.currentTarget.style.color = 'var(--rose)'
  }

  const handleSocialLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
    e.currentTarget.style.color = '#fff'
  }

  const handleLinkHover = (e) => {
    e.currentTarget.style.color = 'var(--rose)'
  }

  const handleLinkLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
  }

  return (
    <footer style={{ backgroundColor: 'var(--charcoal)', color: 'white', paddingTop: '64px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Brand Column */}
          <div>
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
                height: '80px',
                width: 'auto',
                marginBottom: '16px',
              }}
            />
            <span
              style={{
                display: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: '#fff',
                fontWeight: 400,
                marginBottom: '12px',
              }}
            >
              Verde con Rosa
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 400,
                color: '#fff',
                marginBottom: '12px',
              }}
            >
              Verde con Rosa
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.45)',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '220px',
              }}
            >
              Jabones artesanales elaborados con amor, ingredientes naturales y el respeto que tu piel merece.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Tienda Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 400,
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              Tienda
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Todos los productos', 'Jabones artesanales', 'Skincare', 'Kits de regalo'].map((item) => (
                <li key={item}>
                  <Link
                    to="/tienda"
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 400,
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              Información
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Nosotros', 'Ingredientes', 'Política de envíos', 'Preguntas frecuentes', 'Programa de revendedoras'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 400,
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              Contacto
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                <MapPin size={16} style={{ color: 'var(--rose)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Buenos Aires, Argentina</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                <Phone size={16} style={{ color: 'var(--rose)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>+54 11 0000-0000</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                <Mail size={16} style={{ color: 'var(--rose)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>hola@verdeconrosa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.3)',
            flexDirection: 'row',
          }}
        >
          <p>© 2025 Verde con Rosa. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1.4fr"] {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  )
}
