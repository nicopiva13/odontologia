import React from 'react';
import clinic from '../../data/clinic.json';

const Team = () => {
  const team = clinic.team || [];

  return (
    <section
      id="equipo"
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
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
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
            ● Nuestro Equipo
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '52px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: '1.15',
              margin: '0',
            }}
          >
            Los Profesionales<br />Detrás de Tu Sonrisa
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}
        >
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #equipo .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const initial = member.name.replace('Dr. ', '').replace('Dra. ', '')[0] || '?';
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px 24px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Foto circular */}
      <div
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 24px',
          border: '2px solid #C8A96E',
          backgroundColor: '#1C3A52',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {!imgError ? (
          <img
            src={member.image}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '48px',
              color: '#C8A96E',
              lineHeight: 1,
            }}
          >
            {initial}
          </span>
        )}
      </div>

      {/* Línea decorativa */}
      <div
        style={{
          width: '32px',
          height: '1px',
          backgroundColor: '#C8A96E',
          margin: '0 auto 20px',
        }}
      />

      {/* Nombre */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '28px',
          fontWeight: '600',
          color: '#FFFFFF',
          margin: '0 0 8px',
          lineHeight: 1.2,
        }}
      >
        {member.name}
      </h3>

      {/* Especialidad */}
      <p
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '12px',
          color: '#C8A96E',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: '0 0 8px',
        }}
      >
        {member.specialty}
      </p>

      {/* Años */}
      <p
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          margin: '0',
        }}
      >
        {member.years} años de experiencia
      </p>
    </div>
  );
};

export default Team;
