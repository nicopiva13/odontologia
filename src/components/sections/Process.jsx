import React, { useState } from 'react';

const Process = ({ steps }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const numbers = ['01', '02', '03'];

  return (
    <section
      id="proceso"
      style={{
        backgroundColor: '#F5F2EC',
        padding: '120px 0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 60px' }}>
        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#C8A96E',
          marginBottom: '24px',
        }}>
          ● El Proceso
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '52px',
          fontStyle: 'italic',
          fontWeight: '400',
          color: '#0B0C0E',
          lineHeight: '1.15',
          margin: 0,
        }}>
          Tres Pasos / Hacia Tu Sonrisa Ideal
        </h2>
      </div>

      {/* Steps Grid */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px',
      }}>
        {(steps || []).slice(0, 3).map((s, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              border: '1px solid #E2DDD5',
              padding: '48px 40px',
              backgroundColor: hoveredIndex === index ? '#FFFFFF' : 'transparent',
              boxShadow: hoveredIndex === index ? '0 8px 40px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.4s ease',
              position: 'relative',
              cursor: 'default',
            }}
          >
            {/* Número decorativo */}
            <div style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '120px',
              fontWeight: '700',
              color: '#C8A96E',
              lineHeight: '1',
              opacity: 0.4,
              marginBottom: '24px',
              userSelect: 'none',
            }}>
              {numbers[index]}
            </div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '28px',
              fontWeight: '600',
              color: '#0B0C0E',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}>
              {s.title}
            </h3>
            <p style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '15px',
              color: '#8A8A8A',
              lineHeight: '1.7',
              margin: 0,
            }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #proceso { padding: 70px 0 !important; }
          #proceso > div:first-child { padding: 0 24px !important; }
          #proceso > div:first-child h2 { font-size: 36px !important; }
          #proceso > div:last-of-type {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
