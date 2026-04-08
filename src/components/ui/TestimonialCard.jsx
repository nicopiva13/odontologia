import React from 'react';

const TestimonialCard = ({ name, text, rating, image, className = '' }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`testimonial-card ${className}`}
      style={{
        backgroundColor: '#F5F2EC',
        padding: '40px',
        borderRadius: '4px',
        position: 'relative',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.10)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Comilla decorativa */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '120px',
          color: '#C8A96E',
          opacity: 0.4,
          lineHeight: '0.8',
          marginBottom: '-20px',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      {/* Texto del testimonio */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '20px',
          fontStyle: 'italic',
          color: '#1A1A1A',
          lineHeight: '1.6',
          margin: '0',
        }}
      >
        {text}
      </p>

      {/* Separador */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#E2DDD5',
          margin: '24px 0',
        }}
      />

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        {/* Foto o inicial */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#1C3A52',
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '20px',
                color: '#C8A96E',
              }}
            >
              {name[0]}
            </span>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: '700',
              color: '#1A1A1A',
              display: 'block',
            }}
          >
            {name}
          </span>
        </div>

        {/* Estrellas */}
        <div
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '14px',
            color: '#C8A96E',
            letterSpacing: '2px',
          }}
        >
          {'★'.repeat(rating || 5)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
