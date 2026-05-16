const services = [
  {
    color: '#7c3aed',
    colorLight: 'rgba(124,58,237,0.12)',
    colorBorder: 'rgba(124,58,237,0.25)',
    label: 'SEO',
    title: 'Search Engine Optimization',
    description:
      'Rank higher on Google and attract qualified organic traffic. We handle technical SEO, content strategy, link building, and on-page optimization to grow your visibility sustainably and drive long-term results.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    color: '#3b82f6',
    colorLight: 'rgba(59,130,246,0.12)',
    colorBorder: 'rgba(59,130,246,0.25)',
    label: 'Google Ads',
    title: 'Google Ads Management',
    description:
      'ROI-focused PPC campaigns across Search, Display, and Shopping. We craft data-driven ad strategies that turn every euro into measurable revenue, maximizing your return on ad spend from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    color: '#10b981',
    colorLight: 'rgba(16,185,129,0.12)',
    colorBorder: 'rgba(16,185,129,0.25)',
    label: 'Merchant Center',
    title: 'Google Merchant Center',
    description:
      'Complete product feed setup and Shopping campaign management. We optimize your product listings, fix feed errors, and run Shopping ads that put your products in front of ready-to-buy customers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    color: '#f59e0b',
    colorLight: 'rgba(245,158,11,0.12)',
    colorBorder: 'rgba(245,158,11,0.25)',
    label: 'Shopify',
    title: 'Shopify Growth',
    description:
      'From store setup to full-scale e-commerce growth. We optimize your Shopify store for conversions, improve UX, integrate marketing apps, and run targeted campaigns to scale your online revenue.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function Services() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      style={{
        background: '#05050a',
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        className="orb"
        style={{
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ marginBottom: 20, display: 'inline-block' }}>
            Our Services
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Dominate Online</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.52)',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            A complete full-stack approach — no juggling agencies, no middlemen. One team
            that owns your entire digital growth strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
          className="services-grid"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="glass glass-hover"
              style={{
                padding: '40px 36px',
                borderRadius: 22,
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Label badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: service.colorLight,
                  border: `1px solid ${service.colorBorder}`,
                  borderRadius: 100,
                  padding: '4px 12px',
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 12, color: service.color, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {service.label}
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: service.colorLight,
                  border: `1px solid ${service.colorBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.color,
                  marginBottom: 22,
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: 21,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 14px',
                  letterSpacing: '-0.3px',
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.52)',
                  lineHeight: 1.8,
                  margin: '0 0 28px',
                }}
              >
                {service.description}
              </p>

              <a
                href="#contact"
                onClick={scrollTo('contact')}
                style={{
                  color: service.color,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
