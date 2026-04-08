import React from 'react';

/**
 * Button — Prestige Dental Studio Design System
 *
 * Variants:
 *   "primary"       — dark background (#0B0C0E), white text
 *   "accent"        — champagne gold background, dark text
 *   "outline"       — transparent bg, dark border + text
 *   "outline-light" — transparent bg, white border + text
 *
 * Props:
 *   href      → renders <a> tag instead of <button>
 *   icon      → optional React node rendered before children
 *   variant   → one of the four variants above (default: "primary")
 *   className → additional class names
 */

const variantStyles = {
  primary: {
    background: 'var(--dark)',
    color: '#FFFFFF',
    border: '1.5px solid var(--dark)',
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--dark)',
    border: '1.5px solid var(--accent)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--dark)',
    border: '1.5px solid var(--dark)',
  },
  'outline-light': {
    background: 'transparent',
    color: '#FFFFFF',
    border: '1.5px solid #FFFFFF',
  },
};

const hoverShadow = {
  primary: '0 8px 24px rgba(11, 12, 14, 0.25)',
  accent: '0 8px 24px rgba(200, 169, 110, 0.35)',
  outline: '0 8px 24px rgba(11, 12, 14, 0.12)',
  'outline-light': '0 8px 24px rgba(255, 255, 255, 0.15)',
};

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '14px 32px',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-sans)',
  fontSize: '13px',
  fontWeight: '600',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition)',
  whiteSpace: 'nowrap',
  lineHeight: 1,
};

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  href,
  icon,
  className = '',
}) => {
  const variantStyle = variantStyles[variant] ?? variantStyles.primary;
  const shadow = hoverShadow[variant] ?? hoverShadow.primary;

  const styles = { ...baseStyles, ...variantStyle };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = shadow;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const Component = href ? 'a' : 'button';
  const componentProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { type, onClick };

  return (
    <Component
      {...componentProps}
      style={styles}
      className={`btn btn--${variant} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;
