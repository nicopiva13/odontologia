import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = ({ testimonials }) => {
  return (
    <section
      id="testimonios"
      style={{
        backgroundColor: '#FFFFFF',
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
            ● Testimonios
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '52px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: '1.15',
              margin: '0',
            }}
          >
            Lo Que Dicen<br />Nuestros Pacientes
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}
        >
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              name={t.name}
              text={t.text}
              rating={t.rating}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
