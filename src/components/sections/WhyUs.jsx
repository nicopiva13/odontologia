import React from 'react';

const stats = [
  { number: '500+', label: 'Pacientes atendidos' },
  { number: '15+', label: 'Años de experiencia' },
  { number: '98%', label: 'Satisfacción' },
  { number: '6',   label: 'Especialidades' },
];

const WhyUs = ({ benefits, colors }) => {
  return (
    <section
      id="ventajas"
      style={{
        backgroundColor: '#F5F2EC',
        padding: '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Columna izquierda */}
        <div>
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
            ● Por Qué Elegirnos
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '52px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: '1.15',
              margin: '0 0 28px',
            }}
          >
            La Diferencia<br />Está en los<br />Detalles
          </h2>

          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '15px',
              color: '#8A8A8A',
              lineHeight: '1.7',
              margin: '0 0 36px',
              maxWidth: '440px',
            }}
          >
            Combinamos tecnología de vanguardia con un trato humano y cálido. Cada tratamiento es personalizado para que tu experiencia sea única y memorable.
          </p>

          {/* Línea decorativa */}
          <div
            style={{
              width: '40px',
              height: '2px',
              backgroundColor: '#C8A96E',
              marginBottom: '40px',
            }}
          />

          {/* Botón */}
          <a
            href="#contacto"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              border: '1.5px solid #1A1A1A',
              color: '#1A1A1A',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1A1A1A';
            }}
          >
            Conocer Más
          </a>
        </div>

        {/* Columna derecha: grid 2x2 de métricas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
          }}
        >
          {stats.map((stat, i) => (
            <StatCell key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCell = ({ stat }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        padding: '32px',
        border: '1px solid #E2DDD5',
        backgroundColor: hovered ? '#FFFFFF' : 'transparent',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '72px',
          fontWeight: '700',
          color: '#1C3A52',
          lineHeight: 1,
          marginBottom: '12px',
        }}
      >
        {stat.number}
      </div>
      <div
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#8A8A8A',
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

export default WhyUs;
