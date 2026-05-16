const testimonials = [
  {
    quote: 'Vahid and his team took our Shopify store from €15K to €150K monthly revenue in just 6 months. The results were beyond anything we expected.',
    name: 'Maria K.',
    title: 'CEO, FashionHub GmbH',
    initials: 'MK',
    color: '#7c3aed',
  },
  {
    quote: 'Our Google Ads ROAS went from 2x to 11x after Vezura10x took over. Best investment we\'ve ever made for our business.',
    name: 'Thomas B.',
    title: 'Marketing Director, TechGear AG',
    initials: 'TB',
    color: '#2563eb',
  },
  {
    quote: 'The SEO strategy they implemented brought us to page 1 for all our main keywords within 4 months. Organic traffic is up 400%.',
    name: 'Sarah M.',
    title: 'Founder, EcoShop Berlin',
    initials: 'SM',
    color: '#059669',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 0', position: 'relative', background: '#06060c' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.07)', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20 }}>
            CLIENT STORIES
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            What Our Clients{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 500, margin: '0 auto' }}>
            Real results from real businesses — across Germany and Europe.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{ borderRadius: 20, padding: '36px 32px', transition: 'all 0.3s ease', cursor: 'default' }}
            >
              <Stars />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.8, margin: '0 0 28px', fontStyle: 'italic' }}>
                "{t.quote}"
              </p>
              <div className="divider" style={{ marginBottom: 24 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
