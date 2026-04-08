import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const Services = ({ services, whatsapp }) => {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2DDD5',
        borderBottom: '1px solid #E2DDD5',
        padding: '120px 0',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 60px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#C8A96E',
            marginBottom: '24px',
          }}>
            ● Nuestros Servicios
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '52px',
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#0B0C0E',
            lineHeight: '1.15',
            marginBottom: '20px',
          }}>
            Todo lo que / Tu Boca Necesita
          </h2>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '16px',
            color: '#8A8A8A',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Tecnología avanzada y calidez humana al servicio de tu salud bucal.
          </p>
        </div>

        {/* Grid — efecto mosaico con gap 1px */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          backgroundColor: '#E2DDD5',
        }}>
          {(services || []).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              desc={service.desc}
              index={index}
              whatsappNumber={whatsapp}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #servicios > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #servicios {
            padding: 70px 0 !important;
          }
          #servicios > div {
            padding: 0 24px !important;
          }
          #servicios > div > div:first-child h2 {
            font-size: 36px !important;
          }
          #servicios > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
