import React from 'react';
import clinic from '../../data/clinic.json';

const Insurance = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        borderTop: '1px solid #E2DDD5',
        borderBottom: '1px solid #E2DDD5',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Izquierda: texto */}
        <div style={{ flexShrink: 0 }}>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '28px',
              fontWeight: '600',
              color: '#1A1A1A',
              margin: '0 0 8px',
            }}
          >
            Trabajamos con tu cobertura
          </h3>
          {clinic.financing && (
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '13px',
                color: '#8A8A8A',
                margin: '0',
              }}
            >
              {clinic.financing}
            </p>
          )}
        </div>

        {/* Derecha: pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'flex-end',
          }}
        >
          {clinic.insurance.map((name, i) => (
            <InsurancePill key={i} name={name} />
          ))}
          {clinic.financing && (
            <FinancingPill label={clinic.financing} />
          )}
        </div>
      </div>
    </section>
  );
};

const InsurancePill = ({ name }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        border: `1px solid ${hovered ? '#1C3A52' : '#E2DDD5'}`,
        padding: '8px 20px',
        borderRadius: '100px',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '12px',
        fontWeight: '500',
        color: hovered ? '#1C3A52' : '#8A8A8A',
        cursor: 'default',
        transition: 'border-color 0.25s ease, color 0.25s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
    </div>
  );
};

const FinancingPill = ({ label }) => {
  return (
    <div
      style={{
        backgroundColor: '#F0E6CC',
        border: '1px solid #C8A96E',
        padding: '8px 20px',
        borderRadius: '100px',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '12px',
        fontWeight: '500',
        color: '#8A6A30',
        whiteSpace: 'nowrap',
      }}
    >
      💳 {label}
    </div>
  );
};

export default Insurance;
