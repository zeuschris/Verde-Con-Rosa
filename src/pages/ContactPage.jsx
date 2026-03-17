import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const contactItems = [
    { icon: '📍', label: 'Ubicación', value: 'Buenos Aires, Argentina' },
    { icon: '📞', label: 'WhatsApp', value: '+54 11 0000-0000' },
    { icon: '✉️', label: 'Email', value: 'hola@verdeconrosa.com' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--cream)', paddingTop: '100px', paddingBottom: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
            Escribinos
          </span>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontFamily: 'var(--font-display)', fontWeight: 300, marginTop: '12px', color: 'var(--charcoal)' }}>
            Contacto
          </h1>
        </motion.div>

        {/* 2 Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={{
              backgroundColor: 'var(--warm-white)',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid var(--border)',
            }}>
              <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '24px', color: 'var(--charcoal)' }}>
                Envianos un mensaje
              </h2>

              {/* Nombre + Apellido Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginBottom: '8px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--sage)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginBottom: '8px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Tu apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--sage)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginBottom: '8px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--cream)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--sage)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Asunto */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginBottom: '8px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  placeholder="¿En qué te podemos ayudar?"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--cream)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--sage)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginBottom: '8px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={5}
                  placeholder="Escribí tu mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--cream)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--sage)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--sage-dark)',
                  color: '#fff',
                  borderRadius: '99px',
                  padding: '16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--rose-dark)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--sage-dark)'}
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Intro */}
            <div>
              <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '12px', color: 'var(--charcoal)' }}>
                Estamos para ayudarte
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
                ¿Tenés dudas sobre algún producto, quierés hacer un pedido especial o saber más sobre los ingredientes? Escribinos y te respondemos a la brevedad.
              </p>
            </div>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactItems.map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    backgroundColor: 'var(--warm-white)',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--rose-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--charcoal)', fontFamily: 'var(--font-body)' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Card */}
            <div style={{
              backgroundColor: 'var(--rose-light)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px', color: 'var(--charcoal)', fontFamily: 'var(--font-body)' }}>
                Seguinos en redes
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Instagram', 'Facebook'].map(social => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#fff',
                      padding: '10px 16px',
                      borderRadius: '99px',
                      fontSize: '13px',
                      color: 'var(--charcoal)',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--rose)'
                      e.target.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#fff'
                      e.target.style.color = 'var(--charcoal)'
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Hours Card */}
            <div style={{
              backgroundColor: 'var(--sage-light)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: 'var(--sage-dark)', fontFamily: 'var(--font-body)' }}>
                Horarios de atención
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                  <span>Lunes a Viernes</span>
                  <span style={{ fontWeight: 500, color: 'var(--charcoal)' }}>9:00 – 18:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                  <span>Sábados</span>
                  <span style={{ fontWeight: 500, color: 'var(--charcoal)' }}>10:00 – 14:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
