import React from 'react';

const features = [
  'Escaneo 3D sin moldes molestos',
  'Planificación digital de implantes',
  'Prótesis en el día con precisión micrónica',
];

const Technology = () => {
  return (
    <section
      id="tecnologia"
      style={{ width: '100%' }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {/* Columna izquierda — oscura */}
        <div style={{
          flex: '1 1 50%',
          minWidth: '300px',
          backgroundColor: '#0B0C0E',
          padding: '100px 80px',
          boxSizing: 'border-box',
        }}>
          {/* Línea decorativa */}
          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#C8A96E',
            marginBottom: '48px',
          }} />

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#C8A96E',
            marginBottom: '24px',
          }}>
            ● Tecnología
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '56px',
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#FFFFFF',
            lineHeight: '1.15',
            marginBottom: '32px',
          }}>
            Tecnología / de Vanguardia
          </h2>

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.7',
            marginBottom: '48px',
            maxWidth: '440px',
          }}>
            En Risus Odontología, el futuro es hoy. Utilizamos el sistema Prisma Lab Digital, integrando escaneo intraoral 3D y diseño computarizado para cada tratamiento.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {features.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '20px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  color: '#FFFFFF',
                  lineHeight: '1.6',
                }}
              >
                <span style={{ color: '#C8A96E', flexShrink: 0, marginTop: '2px' }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha — clara con imagen */}
        <div style={{
          flex: '1 1 50%',
          minWidth: '300px',
          backgroundColor: '#F5F2EC',
          position: 'relative',
          minHeight: '560px',
        }}>
          <img
            src="/images/technology.png"
            alt="Tecnología dental de vanguardia"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

          {/* Badge flotante — glass effect */}
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '4px',
            padding: '12px 20px',
          }}>
            <span style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              fontWeight: '500',
              color: '#FFFFFF',
              letterSpacing: '0.5px',
            }}>
              Laboratorio Digital
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tecnologia > div {
            flex-direction: column !important;
          }
          #tecnologia > div > div:first-child {
            padding: 70px 32px !important;
          }
          #tecnologia > div > div:first-child h2 {
            font-size: 38px !important;
          }
          #tecnologia > div > div:last-child {
            min-height: 300px !important;
            height: 300px !important;
            position: relative !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;
