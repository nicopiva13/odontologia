import React from 'react';
import clinic from '../../data/clinic.json';

const Insurance = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg)', padding: '80px 5%' }}>
      <div className="container">

        {/* Encabezado */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', color: 'var(--text)' }}>
            Trabajamos con tu cobertura
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(0,0,0,0.5)', maxWidth: '520px', margin: '0 auto' }}>
            Aceptamos las principales obras sociales y prepagas
          </p>
        </div>

        {/* Chips / Pills de coberturas */}
        <div className="reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {clinic.insurance.map((name, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                border: '1.5px solid rgba(0,0,0,0.1)',
                borderRadius: '50px',
                padding: '10px 22px',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Financiamiento */}
        {clinic.financing && (
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              borderRadius: '50px',
              padding: '12px 28px',
              fontSize: '0.95rem',
              fontWeight: '600',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            }}>
              💳 {clinic.financing}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Insurance;
