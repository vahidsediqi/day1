const testimonials = [
  {
    quote:
      'Vahid and his team took our Shopify store from €15K to €150K monthly revenue in just 6 months. Unbelievable results — they truly delivered beyond anything we expected.',
    name: 'Maria K.',
    title: 'CEO, FashionHub GmbH',
    initials: 'MK',
    color: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    quote:
      'Our Google Ads ROAS went from 2x to 11x after Vezura10x took over. Best investment we\'ve ever made for our business. The ROI speaks for itself.',
    name: 'Thomas B.',
    title: 'Marketing Director, TechGear AG',
    initials: 'TB',
    color: 'linear-gradient(135deg, #2563eb, #7c3aed)',
  },
  {
    quote:
      'The SEO strategy they implemented brought us to page 1 for all our main keywords within 4 months. Organic traffic is up 400% and keeps climbing.',
    name: 'Sarah M.',
    title: 'Founder, EcoShop Berlin',
    initials: 'SM',
    color: 'linear-gradient(135deg, #059669, #10b981)',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 22 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#06060c',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
          top: '10%',
          right: '5%',
          animationDelay: '2.5s',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 20 }}>
            Client Stories
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              margin: '0 0 20px',
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              color: '#fff',
            }}
          >
            What Our Clients{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 17,
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Real results from real businesses — across Germany and throughout Europe.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{
                borderRadius: 22,
                padding: '36px 32px',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Subtle top glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)',
                }}
              />

              <Stars />

              {/* Quote */}
              <p
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: 15,
                  lineHeight: 1.85,
                  margin: '0 0 28px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>

              <div className="divider" style={{ marginBottom: 24 }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    background: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#fff',
                    flexShrink: 0,
                    letterSpacing: '0.5px',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 2 }}>
                    {t.name}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13 }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 520px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
