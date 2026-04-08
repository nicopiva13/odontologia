import React, { useState } from 'react';

const orderNumbers = ['01', '02', '03', '04', '05', '06'];

const ServiceCard = ({ icon, title, desc, index = 0, whatsappNumber }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#0B0C0E' : '#FFFFFF',
        padding: '48px 40px',
        position: 'relative',
        transition: 'all 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
        cursor: 'default',
      }}
    >
      {/* Número orden — top right absolute */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '32px',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '72px',
        fontWeight: '700',
        color: hovered ? 'rgba(255,255,255,0.08)' : '#E2DDD5',
        lineHeight: '1',
        userSelect: 'none',
        transition: 'all 0.4s ease',
        pointerEvents: 'none',
      }}>
        {orderNumbers[index] || '01'}
      </div>

      {/* Ícono */}
      <div style={{
        fontSize: '36px',
        color: '#1C3A52',
        marginBottom: '20px',
        lineHeight: '1',
      }}>
        {icon}
      </div>

      {/* Título */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '26px',
        fontWeight: '600',
        color: hovered ? '#FFFFFF' : '#0B0C0E',
        margin: '0 0 12px 0',
        lineHeight: '1.2',
        transition: 'color 0.4s ease',
      }}>
        {title}
      </h3>

      {/* Descripción */}
      <p style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '14px',
        color: hovered ? 'rgba(255,255,255,0.65)' : '#8A8A8A',
        lineHeight: '1.7',
        margin: 0,
        flexGrow: 1,
        transition: 'color 0.4s ease',
      }}>
        {desc}
      </p>

      {/* Link Consultar */}
      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio de ${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            marginTop: '24px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '12px',
            fontWeight: '600',
            color: '#C8A96E',
            letterSpacing: '1px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          Consultar →
        </a>
      )}
    </div>
  );
};

export default ServiceCard;
