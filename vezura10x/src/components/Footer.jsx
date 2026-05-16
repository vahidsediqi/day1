const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const cols = [
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
]

export default function Footer() {
  return (
    <footer style={{ background: '#03030a', position: 'relative' }}>
      <div className="divider" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 64 }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>
                Vezura<span className="gradient-text">10x</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 260 }}>
              Full-stack digital marketing agency based in Germany. We help businesses 10X their revenue through SEO, paid ads, and conversion optimization.
            </p>
            <a
              href="mailto:Vahid@vezura10x.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#a78bfa', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Vahid@vezura10x.com
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 20 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}
                      style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = '#a78bfa'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
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
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 20 }}>
              Connect
            </h4>
            <a
              href="mailto:Vahid@vezura10x.com"
              className="btn-primary"
              style={{ display: 'inline-block', padding: '10px 22px', borderRadius: 10, fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none', marginBottom: 20 }}
            >
              Book Free Audit
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
              <span>🇩🇪</span>
              <span>Germany — Serving Worldwide</span>
            </div>
          </div>

        </div>

        <div className="divider" style={{ marginBottom: 28 }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} Vezura10x. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, margin: 0 }}>
            Made with ❤️ in Germany by Vahid Sediqi
          </p>
        </div>
      </div>
    </footer>
  )
}
