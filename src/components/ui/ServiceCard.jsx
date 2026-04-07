import React from 'react';

const ServiceCard = ({ icon, title, desc, image, className = "", whatsappNumber }) => {
  return (
    <div
      className={`service-card reveal ${className}`}
      style={{
        backgroundColor: "var(--light)",
        borderRadius: "var(--radius-lg)", // Más redondeado
        boxShadow: "var(--shadow-md)",
        transition: "var(--transition)",
        textAlign: "left", // Texto a la izquierda para estilo premium
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden" // Para redondear la imagen
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
    >
      {/* Imagen de referencia */}
      <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "var(--shadow-md)",
            zIndex: 2
          }}
        >
          {icon}
        </div>
      </div>

      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ marginBottom: "15px", fontSize: "1.4rem", fontWeight: '700' }}>{title}</h3>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", lineHeight: '1.6', flexGrow: 1 }}>{desc}</p>
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio de ${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Consultar →
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
