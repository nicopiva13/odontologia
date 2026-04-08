import React from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const Footer = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0B0C0E',
        padding: '80px 0 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 60px',
        }}
      >
        {/* Layout 3 columnas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '40% 30% 30%',
            gap: '60px',
          }}
        >
          {/* Col 1: Logo + tagline + redes */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '24px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              {config.name}
              <span style={{ color: '#C8A96E' }}>.</span>
            </div>

            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: '1.7',
                margin: '0 0 32px',
                maxWidth: '280px',
              }}
            >
              {config.tagline}
            </p>

            {/* Redes sociales */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <FooterSocialLink
                href={`https://instagram.com/${config.instagram}`}
                label="Instagram"
              />
              {config.youtube && (
                <FooterSocialLink
                  href={`https://youtube.com/${config.youtube}`}
                  label="YouTube"
                />
              )}
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C8A96E',
                marginBottom: '24px',
              }}
            >
              Navegación
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <FooterNavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C8A96E',
                marginBottom: '24px',
              }}
            >
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <FooterContactItem
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                text={config.address}
              />
              <FooterContactItem
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                text={config.phone}
              />
              <FooterContactItem
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                text={config.email}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            margin: '60px 0 0',
          }}
        />

        {/* Footer bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '32px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              margin: '0',
            }}
          >
            &copy; {currentYear} {config.name}. Todos los derechos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              margin: '0',
            }}
          >
            Diseñado por Piva Software Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterNavLink = ({ href, label }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={href}
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '13px',
        color: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
};

const FooterSocialLink = ({ href, label }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '13px',
        color: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
};

const FooterContactItem = ({ icon, text }) => (
  <div
    style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
    }}
  >
    <span style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</span>
    <span
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '13px',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: '1.5',
      }}
    >
      {text}
    </span>
  </div>
);

export default Footer;
