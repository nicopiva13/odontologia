import React, { useState, useEffect } from 'react';
import clinic from '../../data/clinic.json';

const Navbar = ({ config }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = config?.whatsappLink || clinic.whatsappLink || `https://wa.me/${clinic.whatsapp}`;
  const clinicName = config?.name || clinic.name;

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 60px',
    zIndex: 1000,
    transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
    backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
    borderBottom: isScrolled ? '1px solid #E2DDD5' : '1px solid transparent',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '22px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    color: isScrolled ? '#0B0C0E' : '#ffffff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'color 0.4s ease',
    whiteSpace: 'nowrap',
  };

  const linkStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: isScrolled ? '#1A1A1A' : '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s ease, opacity 0.3s ease',
  };

  const ctaStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: isScrolled ? '#ffffff' : '#ffffff',
    textDecoration: 'none',
    padding: '10px 24px',
    border: isScrolled ? '1px solid #C8A96E' : '1px solid #ffffff',
    borderRadius: '2px',
    backgroundColor: isScrolled ? '#C8A96E' : 'transparent',
    transition: 'all 0.4s ease',
    whiteSpace: 'nowrap',
  };

  const hamburgerLineStyle = (transform, opacity) => ({
    display: 'block',
    width: '24px',
    height: '1.5px',
    backgroundColor: isScrolled ? '#0B0C0E' : '#ffffff',
    transition: 'all 0.3s ease',
    transform: transform || 'none',
    opacity: opacity !== undefined ? opacity : 1,
  });

  return (
    <>
      <style>{`
        .nav-links a:hover {
          opacity: 0.6 !important;
        }
        .nav-cta:hover {
          opacity: 0.85 !important;
        }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        .nav-mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background: #ffffff;
          padding: 32px 40px 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          transform: translateY(0);
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
          box-sizing: border-box;
        }
        .nav-mobile-menu.closed {
          opacity: 0;
          transform: translateY(-8px);
          visibility: hidden;
          pointer-events: none;
        }
        .nav-mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: all;
        }
        .nav-mobile-menu a {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1A1A1A;
          text-decoration: none;
          padding-bottom: 20px;
          border-bottom: 1px solid #E2DDD5;
        }
        .nav-mobile-menu a:last-of-type {
          border-bottom: none;
        }
        .nav-mobile-cta {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          padding: 14px 24px;
          background-color: #C8A96E;
          border: 1px solid #C8A96E;
          border-radius: 2px;
          text-align: center;
          margin-top: 8px;
        }
      `}</style>

      <nav style={navStyle}>
        {/* Logo */}
        <a href="#hero" style={logoStyle}>
          <span style={{ color: '#C8A96E', fontSize: '10px', lineHeight: 1 }}>●</span>
          {clinicName}
        </a>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <a href="#servicios" style={linkStyle}>Servicios</a>
          <a href="#ventajas" style={linkStyle}>Nosotros</a>
          <a href="#testimonios" style={linkStyle}>Opiniones</a>
          <a href="#contacto" style={linkStyle}>Contacto</a>
        </div>

        {/* CTA Desktop */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta nav-cta-desktop"
          style={ctaStyle}
        >
          Reservar Turno
        </a>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
            flexDirection: 'column',
            gap: '7px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Abrir menú"
        >
          <span style={hamburgerLineStyle(isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none')}></span>
          <span style={hamburgerLineStyle('none', isOpen ? 0 : 1)}></span>
          <span style={hamburgerLineStyle(isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`nav-mobile-menu ${isOpen ? 'open' : 'closed'}`}>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#ventajas" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#testimonios" onClick={() => setIsOpen(false)}>Opiniones</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            Reservar Turno
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
