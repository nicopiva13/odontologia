import React from 'react';

const Hero = ({ hero, colors, whatsapp }) => {
  const sectionStyle = {
    position: 'relative',
    height: '100dvh',
    minHeight: '700px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '80px',
    overflow: 'hidden',
    background: hero.image
      ? `linear-gradient(to bottom, rgba(11,12,14,0.75) 0%, rgba(28,58,82,0.5) 100%), url(${hero.image})`
      : `linear-gradient(to bottom, rgba(11,12,14,0.85), rgba(28,58,82,0.7))`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const containerStyle = {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
    padding: '0 60px',
    boxSizing: 'border-box',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    alignItems: 'flex-end',
    gap: '60px',
  };

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#C8A96E',
    borderLeft: '2px solid #C8A96E',
    paddingLeft: '12px',
    marginBottom: '28px',
  };

  const headlineStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(64px, 8vw, 120px)',
    fontWeight: 600,
    color: '#ffffff',
    lineHeight: 0.95,
    margin: '0 0 24px 0',
  };

  const subStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '420px',
    lineHeight: 1.65,
    margin: '0 0 40px 0',
  };

  const btnPrimaryStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '1px',
    color: '#0B0C0E',
    backgroundColor: '#ffffff',
    border: '1px solid #ffffff',
    padding: '14px 32px',
    borderRadius: '2px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'opacity 0.3s ease',
  };

  const btnSecondaryStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '1px',
    color: '#ffffff',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255,255,255,0.5)',
    padding: '14px 32px',
    borderRadius: '2px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'border-color 0.3s ease, opacity 0.3s ease',
  };

  const statsColStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingBottom: '8px',
  };

  const statCardStyle = {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '12px',
    padding: '20px 28px',
  };

  const statNumberStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '48px',
    fontWeight: 700,
    color: '#C8A96E',
    lineHeight: 1,
    display: 'block',
    marginBottom: '6px',
  };

  const statLabelStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
  };

  return (
    <>
      <style>{`
        .hero-btn-primary:hover { opacity: 0.88 !important; }
        .hero-btn-secondary:hover { border-color: rgba(255,255,255,0.9) !important; opacity: 0.85 !important; }

        @keyframes hero-fadeup {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-8px); }
          60% { transform: translateX(-50%) translateY(-4px); }
        }

        .hero-left  { animation: hero-fadeup 1s ease forwards; }
        .hero-right { animation: hero-fadeup 1s ease 0.3s both; }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-container {
            padding: 0 28px !important;
          }
          .hero-stats-col {
            flex-direction: row !important;
            overflow-x: auto !important;
            gap: 12px !important;
            padding-bottom: 4px !important;
          }
          .hero-stat-card {
            min-width: 140px !important;
            flex-shrink: 0 !important;
          }
          .hero-section {
            padding-bottom: 60px !important;
          }
        }
      `}</style>

      <section id="hero" className="hero-section" style={sectionStyle}>
        {/* Container */}
        <div className="hero-container" style={containerStyle}>
          <div className="hero-grid" style={gridStyle}>

            {/* LEFT — Texto */}
            <div className="hero-left">
              {/* Tag */}
              <div style={tagStyle}>
                ● Odontología de Vanguardia
              </div>

              {/* Headline */}
              <h1 style={headlineStyle}>
                Tu Sonrisa,<br />
                Nuestra<br />
                <em>Pasión.</em>
              </h1>

              {/* Sub */}
              <p style={subStyle}>{hero.subheadline}</p>

              {/* Botones */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-primary"
                  style={btnPrimaryStyle}
                >
                  Reservar Turno →
                </a>
                <a
                  href="#servicios"
                  className="hero-btn-secondary"
                  style={btnSecondaryStyle}
                >
                  Ver Servicios
                </a>
              </div>
            </div>

            {/* RIGHT — Stats */}
            <div className="hero-right hero-stats-col" style={statsColStyle}>
              <div className="hero-stat-card" style={statCardStyle}>
                <span style={statNumberStyle}>500+</span>
                <span style={statLabelStyle}>Pacientes Satisfechos</span>
              </div>
              <div className="hero-stat-card" style={statCardStyle}>
                <span style={statNumberStyle}>15+</span>
                <span style={statLabelStyle}>Años de Experiencia</span>
              </div>
              <div className="hero-stat-card" style={statCardStyle}>
                <span style={statNumberStyle}>98%</span>
                <span style={statLabelStyle}>Índice de Satisfacción</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.45,
          animation: 'hero-bounce 2s infinite',
          zIndex: 10,
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
