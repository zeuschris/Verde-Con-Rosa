import { motion } from 'framer-motion'

export default function AboutPage() {
  const values = [
    { emoji: '🌿', title: 'Natural', desc: 'Solo ingredientes orgánicos y botánicos certificados.' },
    { emoji: '❤️', title: 'Con Amor', desc: 'Cada jabón hecho a mano con dedicación y cariño.' },
    { emoji: '♻️', title: 'Eco-Friendly', desc: 'Empaque biodegradable y procesos sustentables.' },
    { emoji: '🏆', title: 'Calidad', desc: 'Más de 3 años perfeccionando cada receta artesanal.' },
  ]

  const steps = [
    'Seleccionamos ingredientes',
    'Formulamos la receta',
    'Elaboramos a mano',
    'Curamos por 4 semanas'
  ]

  return (
    <section style={{ backgroundColor: 'var(--cream)', paddingTop: '100px', paddingBottom: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '96px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
              Nuestra Historia
            </span>
            <h1 style={{ fontSize: 'clamp(48px, 5vw, 64px)', fontFamily: 'var(--font-display)', fontWeight: 300, marginTop: '16px', marginBottom: '24px', color: 'var(--charcoal)', lineHeight: 1.2 }}>
              Verde con Rosa nació del amor por lo natural
            </h1>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px', fontSize: '15px', fontFamily: 'var(--font-body)' }}>
              Todo comenzó en una pequeña cocina en Buenos Aires, con la inquietud de crear jabones que realmente cuiden la piel sin químicos agresivos.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '15px', fontFamily: 'var(--font-body)' }}>
              Hoy somos un emprendimiento familiar que elabora cada producto con la misma pasión del primer día, usando los mejores ingredientes naturales que encontramos.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=700&q=85"
              alt="Proceso artesanal"
              style={{
                borderRadius: '24px',
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
              }}
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px', marginBottom: '96px' }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                backgroundColor: 'var(--warm-white)',
                borderRadius: '24px',
                padding: '32px 24px',
                border: '1px solid var(--border)',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--sage-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '32px',
              }}>
                {v.emoji}
              </div>
              <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 400, marginBottom: '12px', color: 'var(--charcoal)' }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div style={{
          backgroundColor: 'var(--sage-dark)',
          borderRadius: '32px',
          padding: '48px 48px',
          textAlign: 'center',
          color: '#fff',
        }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '16px' }}>
            Nuestro proceso
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto 40px', fontSize: '15px', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
            Desde la selección de ingredientes hasta el empaque final, cada paso es hecho con cuidado y dedicación.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="process-grid">
            {steps.map((step, i) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
                  {step}
                </p>
              </div>
            ))}
            <style>{`
              @media (max-width: 768px) {
                .process-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
