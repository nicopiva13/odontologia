import React, { useState } from 'react';
import clinic from '../../data/clinic.json';

const Contact = ({ config }) => {
  const cfg = config || clinic;
  const services = clinic.services || [];

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = formState;

    const whatsappMessage =
      `*Nueva Consulta desde la Web*\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📱 *Teléfono:* ${phone}\n` +
      (service ? `🦷 *Servicio:* ${service}\n` : '') +
      `💬 *Mensaje:* ${message || 'Sin consulta específica'}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${cfg.whatsapp}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmit(true);
    setTimeout(() => setIsSubmit(false), 5000);
    setFormState({ name: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const fieldStyle = {
    width: '100%',
    padding: '14px 0',
    border: 'none',
    borderBottom: '1.5px solid #E2DDD5',
    fontSize: '14px',
    fontFamily: "'Inter', system-ui, sans-serif",
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#1A1A1A',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '11px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#8A8A8A',
    marginBottom: '4px',
    marginTop: '28px',
  };

  return (
    <section
      id="contacto"
      style={{ padding: '0' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Columna izquierda oscura */}
        <div
          style={{
            backgroundColor: '#1C3A52',
            padding: '100px 80px',
            color: '#FFFFFF',
          }}
        >
          {/* Tag */}
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C8A96E',
              marginBottom: '24px',
            }}
          >
            ● Contacto
          </p>

          {/* Título */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '52px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: '1.15',
              margin: '0 0 48px',
            }}
          >
            Estamos Aquí<br />Para Vos
          </h2>

          {/* Info items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '48px' }}>
            {/* Dirección */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: '1.5',
                }}
              >
                {cfg.address}
              </span>
            </div>

            {/* Teléfono */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href={`tel:${cfg.phone}`}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                }}
              >
                {cfg.phone}
              </a>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href={`mailto:${cfg.email}`}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                }}
              >
                {cfg.email}
              </a>
            </div>

            {/* Horarios */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                {(cfg.schedule || []).map((s, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: '1.7',
                    }}
                  >
                    {s.day}: <strong>{s.hours}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botón WhatsApp */}
          <a
            href={`https://wa.me/${cfg.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              padding: '16px 32px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            Escribinos por WhatsApp
          </a>

          <br />

          {/* Link maps */}
          <a
            href={cfg.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(cfg.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C8A96E'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            Ver en Google Maps →
          </a>
        </div>

        {/* Columna derecha clara */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '100px 80px',
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '36px',
              fontWeight: '600',
              color: '#1A1A1A',
              margin: '0 0 12px',
            }}
          >
            Reservá tu Turno
          </h3>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              color: '#8A8A8A',
              margin: '0 0 8px',
            }}
          >
            Completá el formulario y te contactamos a la brevedad
          </p>

          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div>
              <label style={labelStyle}>Nombre completo</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                value={formState.name}
                onChange={handleInputChange}
                style={fieldStyle}
                onFocus={e => e.target.style.borderBottomColor = '#1C3A52'}
                onBlur={e => e.target.style.borderBottomColor = '#E2DDD5'}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label style={labelStyle}>Teléfono</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+54 9 ..."
                value={formState.phone}
                onChange={handleInputChange}
                style={fieldStyle}
                onFocus={e => e.target.style.borderBottomColor = '#1C3A52'}
                onBlur={e => e.target.style.borderBottomColor = '#E2DDD5'}
              />
            </div>

            {/* Servicio */}
            <div>
              <label style={labelStyle}>Servicio</label>
              <select
                name="service"
                value={formState.service}
                onChange={handleInputChange}
                style={{
                  ...fieldStyle,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8A8A' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center',
                  paddingRight: '20px',
                }}
                onFocus={e => e.target.style.borderBottomColor = '#1C3A52'}
                onBlur={e => e.target.style.borderBottomColor = '#E2DDD5'}
              >
                <option value="">Seleccioná un servicio</option>
                {services.map((s, i) => (
                  <option key={i} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label style={labelStyle}>Mensaje</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Contanos tu consulta..."
                value={formState.message}
                onChange={handleInputChange}
                style={{ ...fieldStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderBottomColor = '#1C3A52'}
                onBlur={e => e.target.style.borderBottomColor = '#E2DDD5'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px',
                marginTop: '36px',
                backgroundColor: '#0B0C0E',
                color: '#FFFFFF',
                border: 'none',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {isSubmit ? 'Redirigiendo a WhatsApp...' : 'Solicitar Turno'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
