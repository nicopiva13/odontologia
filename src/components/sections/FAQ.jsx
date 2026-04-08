import React, { useState } from 'react';

const FAQ = ({ faq, colors }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#0B0C0E',
        padding: '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Columna izquierda sticky */}
        <div style={{ position: 'sticky', top: '80px' }}>
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
            ● FAQ
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '52px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: '1.15',
              margin: '0 0 28px',
            }}
          >
            Preguntas<br />Frecuentes
          </h2>

          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: '1.7',
              margin: '0',
            }}
          >
            Resolvé tus dudas sobre nuestros tratamientos, turnos y cobertura. Si necesitás más información, no dudes en contactarnos.
          </p>
        </div>

        {/* Columna derecha accordion */}
        <div>
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '24px',
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '20px',
            fontWeight: '500',
            color: isOpen ? '#C8A96E' : '#FFFFFF',
            lineHeight: '1.3',
            transition: 'color 0.3s ease',
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '20px',
            color: '#C8A96E',
            flexShrink: 0,
            lineHeight: 1,
            transition: 'transform 0.3s ease',
          }}
        >
          {isOpen ? '×' : '+'}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.7',
            padding: '0 0 24px',
            margin: '0',
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
