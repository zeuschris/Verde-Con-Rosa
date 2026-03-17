import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { products, testimonials, features } from '../data/products'
import ProductCard from '../components/ProductCard'

// ──────────────────────────────────── HERO SECTION ────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', backgroundColor: 'var(--cream)', overflow: 'hidden', position: 'relative' }}>
      {/* Blob decorativo rosa */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: 'var(--rose-light)',
          filter: 'blur(80px)',
          opacity: 0.6,
          transform: 'translate(150px, -100px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '80px',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 10,
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--sage-dark)',
              fontWeight: 500,
              marginBottom: '24px',
              backgroundColor: 'var(--sage-light)',
              padding: '10px 16px',
              borderRadius: '20px',
            }}
          >
            🌿 Productos Eco-Amigables
          </motion.div>

          {/* Título */}
          <h1
            style={{
              fontSize: 'clamp(48px, 8vw, 88px)',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--charcoal)',
              marginBottom: '24px',
            }}
          >
            Jabones
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Artesanales</em>
            <br />
            & Skincare
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: '16px',
              color: 'var(--muted)',
              lineHeight: 1.6,
              maxWidth: '500px',
              marginBottom: '32px',
              fontFamily: 'var(--font-body)',
            }}
          >
            Elaborados a mano con ingredientes naturales seleccionados. Cada jabón es una experiencia única para tu piel y tus sentidos.
          </p>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link
              to="/tienda"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--sage-dark)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--rose-dark)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--sage-dark)')}
            >
              Explorar Tienda
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/nosotros"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid var(--border)',
                color: 'var(--charcoal)',
                padding: '12px 32px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--sage)'
                e.target.style.color = 'var(--sage-dark)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--charcoal)'
              }}
            >
              Nuestra historia
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              paddingTop: '32px',
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              { value: '100%', label: 'Natural' },
              { value: '+500', label: 'Clientes felices' },
              { value: '12+', label: 'Variedades' },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: '32px', fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--charcoal)' }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px', fontFamily: 'var(--font-body)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column - Collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', height: '520px' }}
          className="hero-collage"
        >
          <img
            src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=700&q=85"
            alt="Jabones artesanales"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '75%',
              height: '72%',
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 20px 25px rgba(0,0,0,0.1)',
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80"
            alt="Skincare natural"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50%',
              height: '50%',
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.08)',
              border: '4px solid var(--cream)',
            }}
          />
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '30%',
              left: '18%',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '24px' }}>🌿</span>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--charcoal)', fontFamily: 'var(--font-body)' }}>
                Orgánico
              </p>
              <p style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                Certificado
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding: 60px 20px !important;
            gap: 40px !important;
          }
          .hero-collage {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

// ──────────────────────────────── FEATURES STRIP ────────────────────────────────
function FeaturesStrip() {
  return (
    <section style={{ backgroundColor: 'var(--sage-dark)', color: 'white', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
            >
              <span style={{ fontSize: '32px', minWidth: '40px' }}>{feature.icon}</span>
              <div>
                <p style={{ fontWeight: 500, fontSize: '15px', marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                  {feature.title}
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────── SECCIÓN "DALE A TU PIEL EL CUIDADO QUE MERECE" ──────
function CareSection() {
  return (
    <section style={{ backgroundColor: 'var(--warm-white)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="care-grid"
        >
          {/* Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80"
                alt=""
                style={{
                  borderRadius: '20px',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
                alt=""
                style={{
                  borderRadius: '20px',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  width: '100%',
                  marginTop: '40px',
                }}
              />
            </div>
            {/* Rating card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-30px',
                backgroundColor: 'var(--rose-light)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              }}
            >
              <p style={{ fontSize: '32px', fontFamily: 'var(--font-display)', color: 'var(--charcoal)', marginBottom: '4px' }}>
                4.9
              </p>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#FCD34D', fontSize: '13px' }}>
                    ★
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                500+ reseñas
              </p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--rose)',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
              }}
            >
              Sin Químicos
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                marginTop: '12px',
                marginBottom: '20px',
                color: 'var(--charcoal)',
                lineHeight: 1.2,
              }}
            >
              Dale a tu piel el cuidado que merece
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: '16px',
                fontFamily: 'var(--font-body)',
              }}
            >
              En Verde con Rosa creemos que el cuidado personal debe ser natural, consciente y placentero. Cada producto está elaborado a mano, sin prisa y con dedicación.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: '32px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Usamos únicamente ingredientes orgánicos certificados, aceites esenciales puros y extractos botánicos que nutren y respetan tu piel.
            </p>

            {/* Lista de beneficios */}
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
              {[
                'Ingredientes 100% orgánicos',
                'Sin parabenos ni sulfatos',
                'Empaque biodegradable',
                'Cruelty Free',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--sage-dark)',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link
              to="/nosotros"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--sage-dark)',
                fontWeight: 500,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--rose)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--sage-dark)')}
            >
              Conocé nuestra historia
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .care-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

// ──────────────────────────── SECCIÓN DE VIDEO ────────────────────────────
function VideoSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--cream)',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--sage-dark)',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
            }}
          >
            Proceso Artesanal
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              marginTop: '12px',
              marginBottom: '48px',
              color: 'var(--charcoal)',
            }}
          >
            Mirá cómo hacemos nuestros jabones
          </h2>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            aspectRatio: '16/9',
            backgroundColor: '#1a1a1a',
            backgroundImage: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 116, 140, 0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          {/* Play button */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
            }}
          >
            <Play size={40} fill="var(--rose)" color="var(--rose)" />
          </div>

          {/* Text */}
          <span
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
            }}
          >
            Tu video aquí
          </span>
        </motion.div>

        <p
          style={{
            marginTop: '24px',
            fontSize: '13px',
            color: 'var(--muted)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Descubre cada paso del proceso desde la selección de ingredientes hasta el empaque final
        </p>
      </div>
    </section>
  )
}

// ─────────────────────── SECCIÓN "LOS MÁS VENDIDOS" ───────────────────────
function BestSellers() {
  return (
    <section style={{ backgroundColor: 'var(--cream)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--rose)',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
              }}
            >
              Nuestros Productos
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                marginTop: '12px',
                marginBottom: '12px',
                color: 'var(--charcoal)',
              }}
            >
              Los Más Vendidos
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted)',
                maxWidth: '500px',
                margin: '0 auto',
                fontFamily: 'var(--font-body)',
              }}
            >
              Elegidos por cientos de clientes que ya confían en el poder de lo natural.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '48px',
          }}
          className="responsive-grid"
        >
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
          <style>{`
            @media (max-width: 1024px) {
              .responsive-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
            @media (max-width: 768px) {
              .responsive-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/tienda"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '2px solid var(--sage-dark)',
              color: 'var(--sage-dark)',
              padding: '14px 40px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--sage-dark)'
              e.target.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--sage-dark)'
            }}
          >
            Ver todos los productos
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────── BANNER CTA ──────────────────────────
function CTABanner() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 0',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo con overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1600&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(42, 42, 42, 0.7)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--rose)',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
              }}
            >
              Comienza hoy
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 54px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                marginTop: '12px',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}
            >
              El cuidado natural que tu piel está esperando
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '500px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Probá nuestros jabones artesanales y sentí la diferencia desde la primera vez.
            </p>
            <Link
              to="/tienda"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--rose)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--rose-dark)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--rose)')}
            >
              Ver kits de regalo
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--rose)',
              borderRadius: '24px',
              padding: '32px',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FCD34D', fontSize: '14px' }}>
                  ★
                </span>
              ))}
            </div>
            <h3
              style={{
                fontSize: '24px',
                fontFamily: 'var(--font-display)',
                marginBottom: '12px',
                fontWeight: 300,
              }}
            >
              Kit Regalo Primavera
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6,
                marginBottom: '20px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Set de 3 jabones artesanales con caja decorada a mano. El regalo perfecto para quien más querés.
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
              <span
                style={{
                  fontSize: '36px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                }}
              >
                $2.800
              </span>
              <span
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'line-through',
                  fontSize: '14px',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                $3.500
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

// ──────────────────────── TESTIMONIOS ──────────────────────
function Testimonials() {
  return (
    <section style={{ backgroundColor: 'var(--warm-white)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              color: 'var(--charcoal)',
            }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        {/* Grid de testimonios */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Testimonios */}
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid var(--border)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#FCD34D', fontSize: '13px' }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--rose-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--rose-dark)',
                    fontWeight: 500,
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--charcoal)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: '11px',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Rating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              backgroundColor: 'var(--sage-dark)',
              color: 'white',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '280px',
            }}
          >
            <p
              style={{
                fontSize: '56px',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                marginBottom: '8px',
              }}
            >
              4.9
            </p>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', justifyContent: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FCD34D', fontSize: '16px' }}>
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'var(--font-body)',
                marginBottom: '8px',
              }}
            >
              Calificación promedio
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-body)',
              }}
            >
              500+ reseñas verificadas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────── MAIN EXPORT ──────────────────────
export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Hero />
      <FeaturesStrip />
      <CareSection />
      <VideoSection />
      <BestSellers />
      <CTABanner />
      <Testimonials />
    </div>
  )
}
