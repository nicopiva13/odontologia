import React, { useState } from 'react';

const GoogleBadge = ({ colors }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    position: 'fixed',
    bottom: '104px',
    right: '32px',
    zIndex: 999,
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: hovered
      ? '0 8px 32px rgba(0,0,0,0.18)'
      : '0 4px 16px rgba(0,0,0,0.10)',
    border: '1px solid #E2DDD5',
    cursor: 'default',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
    textDecoration: 'none',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Google Reviews 4.9 estrellas"
    >
      {/* Google SVG Icon (multicolor) */}
      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1,
          }}>
            4.9
          </span>
          <span style={{
            fontSize: '12px',
            color: '#FBBC05',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}>
            ★★★★★
          </span>
        </div>
        <span style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          color: '#8A8A8A',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          lineHeight: 1,
        }}>
          Google Reviews
        </span>
      </div>
    </div>
  );
};

export default GoogleBadge;
