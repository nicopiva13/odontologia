import React from 'react';
import clinic from '../../data/clinic.json';

const Team = ({ colors }) => {
  const team = clinic.team || [];

  return (
    <section
      id="equipo"
      style={{
        backgroundColor: 'var(--primary)',
        padding: '100px 0',
      }}
    >
      <div className="container">
        <div className="text-center mb-40 reveal">
          <h2
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#ffffff',
            }}
          >
            Nuestro Equipo
          </h2>
          <p
            style={{
              maxWidth: '600px',
              marginInline: 'auto',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '1.05rem',
            }}
          >
            Profesionales comprometidos con tu salud y tu sonrisa.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
          }}
        >
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index }) => {
  const initial = member.name.replace('Dr. ', '').replace('Dra. ', '')[0] || '?';

  return (
    <div
      className={`reveal delay-${(index % 3) + 1}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '40px 30px',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Avatar circular */}
      <div
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 24px',
          border: '3px solid var(--accent)',
          backgroundColor: 'rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.querySelector('.team-initial').style.display = 'flex';
          }}
        />
        <span
          className="team-initial"
          style={{
            display: 'none',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {initial}
        </span>
      </div>

      {/* Nombre */}
      <h3
        style={{
          color: '#ffffff',
          fontSize: '1.25rem',
          fontWeight: '700',
          marginBottom: '8px',
        }}
      >
        {member.name}
      </h3>

      {/* Especialidad */}
      <p
        style={{
          color: 'var(--accent)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {member.specialty}
      </p>

      {/* Años de experiencia */}
      <p
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.9rem',
        }}
      >
        {member.years} años de experiencia
      </p>
    </div>
  );
};

export default Team;
