import React, { useState } from 'react';

const AppointmentBanner = ({ whatsapp }) => {
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <section
      id="cita"
      style={{
        backgroundColor: '#1C3A52',
        padding: '100px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Texto decorativo gigante */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '200px',
          fontWeight: '700',
          color: 'rgba(255,255,255,0.03)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: '1',
          letterSpacing: '-4px',
          zIndex: 0,
        }}
      >
        SMILE
      </div>

      {/* Contenido principal */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Texto izquierda */}
        <div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#C8A96E',
            marginBottom: '24px',
          }}>
            ● Reservá Ahora
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '64px',
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#FFFFFF',
            lineHeight: '1.1',
            margin: 0,
          }}>
            ¿Listo para<br />
            Transformar<br />
            Tu Sonrisa?
          </h2>
        </div>

        {/* Botones derecha */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          flexShrink: 0,
        }}>
          {/* Botón WhatsApp */}
          <a
            href={whatsapp || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setWhatsappHovered(true)}
            onMouseLeave={() => setWhatsappHovered(false)}
            style={{
              display: 'block',
              backgroundColor: whatsappHovered ? '#d4b87a' : '#C8A96E',
              color: '#0B0C0E',
              padding: '18px 40px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Reservar por WhatsApp →
          </a>

          {/* Botón Email */}
          <a
            href="#contacto"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
            style={{
              display: 'block',
              backgroundColor: emailHovered ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: '#FFFFFF',
              padding: '18px 40px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textDecoration: 'none',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.4)',
              transition: 'background-color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Contactar por Email
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #cita {
            padding: 70px 24px !important;
          }
          #cita > div:last-child {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          #cita > div:last-child > div:first-child h2 {
            font-size: 44px !important;
          }
          #cita > div:first-child {
            font-size: 100px !important;
          }
          #cita > div:last-child > div:last-child {
            width: 100% !important;
          }
          #cita > div:last-child > div:last-child a {
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AppointmentBanner;
