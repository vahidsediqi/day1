const scrollTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const linkCols = [
  {
    title: 'Services',
    links: [
      { label: 'Search Engine Optimization', id: 'services' },
      { label: 'Google Ads Management', id: 'services' },
      { label: 'Google Merchant Center', id: 'services' },
      { label: 'Shopify Growth', id: 'services' },
      { label: 'Strategy & Consulting', id: 'contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Vahid', id: 'about' },
      { label: 'Results & Case Studies', id: 'results' },
      { label: 'Our Process', id: 'process' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Contact Us', id: 'contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#03030a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Very subtle orb */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)',
          bottom: '-100px',
          right: '10%',
          pointerEvents: 'none',
        }}
      />

      <div className="divider" />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '72px 24px 48px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: 16 }}
            >
              <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px', color: '#fff' }}>
                Vezura
              </span>
              <span className="gradient-text" style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px' }}>
                10x
              </span>
            </a>

            <p
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: 13,
                fontWeight: 600,
                margin: '0 0 16px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Full-Stack Digital Marketing
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.38)',
                fontSize: 14,
                lineHeight: 1.75,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              Based in Germany, serving businesses worldwide. We help brands 10X their
              revenue through SEO, Google Ads, and Shopify growth.
            </p>

            <a
              href="mailto:Vahid@vezura10x.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#a78bfa',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c4b5fd'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a78bfa'; }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Vahid@vezura10x.com
            </a>
          </div>

          {/* Service and Company link columns */}
          {linkCols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  marginBottom: 22,
                  margin: '0 0 22px',
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.id}`}
                      onClick={scrollTo(link.id)}
                      style={{
                        color: 'rgba(255,255,255,0.42)',
                        fontSize: 14,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.45)',
                textTransform: 'uppercase',
                margin: '0 0 22px',
              }}
            >
              Connect
            </h4>

            <a
              href="mailto:Vahid@vezura10x.com"
              className="btn-primary"
              style={{
                display: 'inline-block',
                padding: '11px 24px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                marginBottom: 20,
                width: '100%',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              Book Free Audit
            </a>

            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="btn-outline"
              style={{
                display: 'inline-block',
                padding: '11px 24px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                marginBottom: 24,
                width: '100%',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              Get In Touch
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,0.3)',
                fontSize: 13,
              }}
            >
              <span style={{ fontSize: 16 }}>🇩🇪</span>
              <span>Germany — Serving Worldwide</span>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 28 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} Vezura10x. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 13, margin: 0 }}>
            Made with ❤️ in Germany by Vahid Sediqi
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
