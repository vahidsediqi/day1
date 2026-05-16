import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

const OTHER_SERVICES = [
  { path: '/services/seo', label: 'SEO', color: '#8b5cf6' },
  { path: '/services/google-ads', label: 'Google Ads', color: '#3b82f6' },
  { path: '/services/google-merchant', label: 'Google Merchant', color: '#10b981' },
  { path: '/services/shopify', label: 'Shopify', color: '#f59e0b' },
]

export default function ServiceLayout({
  badge, title, highlight, subtitle, accentColor, accentBg,
  heroIcon, stats, features, process, faq, children,
}) {
  const scrollToContact = () => {
    window.location.hash = '#/'
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <main style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '90px 0 80px', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: accentColor, opacity: 0.08, top: -100, left: '60%' }} />
        <div className="orb" style={{ width: 300, height: 300, background: '#7c3aed', opacity: 0.07, bottom: 0, left: '10%' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Services</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>/</span>
              <span style={{ fontSize: 13, color: accentColor }}>{badge}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: accentBg, border: `1px solid ${accentColor}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor, fontSize: 28 }}>
                {heroIcon}
              </div>
              <span className="badge" style={{ background: accentBg, borderColor: `${accentColor}44`, color: accentColor, padding: '5px 14px', borderRadius: 50, fontSize: 12, fontWeight: 600 }}>
                {badge}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px', maxWidth: 700 }}>
              {title}{' '}
              <span style={{ background: `linear-gradient(135deg, ${accentColor}, #f59e0b)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {highlight}
              </span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 620, margin: '0 0 36px' }}>{subtitle}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={scrollToContact} className="btn-primary glow-btn"
                style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', color: '#fff' }}>
                Get Free Audit →
              </button>
              <a href="mailto:Vahid@vezura10x.com" className="btn-outline"
                style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', color: 'rgba(255,255,255,0.8)' }}>
                Email Vahid
              </a>
            </div>
          </AnimatedSection>

          {/* Stats row */}
          {stats && (
            <AnimatedSection delay={200} style={{ display: 'flex', gap: 16, marginTop: 60, flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <div key={i} className="glass" style={{ flex: '1 1 160px', padding: '20px 24px', borderRadius: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4, background: `linear-gradient(135deg, ${accentColor}, #f59e0b)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                </div>
              ))}
            </AnimatedSection>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* Custom content slot */}
      {children}

      {/* Features grid */}
      {features && (
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="badge" style={{ padding: '5px 16px', borderRadius: 50, fontSize: 12, fontWeight: 600, display: 'inline-block', marginBottom: 14 }}>What's Included</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
                Everything You Get With{' '}
                <span style={{ background: `linear-gradient(135deg, ${accentColor}, #f59e0b)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Our {badge} Service
                </span>
              </h2>
            </AnimatedSection>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {features.map((f, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="glass glass-hover" style={{ padding: '26px', borderRadius: 18, height: '100%', transition: 'all 0.3s ease' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: accentBg, border: `1px solid ${accentColor}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor, fontSize: 20, marginBottom: 16 }}>
                      {f.icon}
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#fff' }}>{f.title}</h3>
                    <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {process && (
        <section style={{ padding: '80px 0', background: 'rgba(124,58,237,0.03)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="badge" style={{ padding: '5px 16px', borderRadius: 50, fontSize: 12, fontWeight: 600, display: 'inline-block', marginBottom: 14 }}>Our Process</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                How We Deliver <span className="gradient-text">Results</span>
              </h2>
            </AnimatedSection>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${process.length}, 1fr)`, gap: 16 }} className="process-grid">
              {process.map((step, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="glass" style={{ padding: '28px 24px', borderRadius: 18, textAlign: 'center', height: '100%' }}>
                    <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, background: `linear-gradient(135deg, ${accentColor}, #f59e0b)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#fff' }}>{step.title}</h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && (
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>
            <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="badge" style={{ padding: '5px 16px', borderRadius: 50, fontSize: 12, fontWeight: 600, display: 'inline-block', marginBottom: 14 }}>FAQ</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                Common <span className="gradient-text">Questions</span>
              </h2>
            </AnimatedSection>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faq.map((item, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <FAQItem q={item.q} a={item.a} accentColor={accentColor} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection>
            <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(245,158,11,0.08))', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 28, padding: 'clamp(40px, 6vw, 70px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div className="orb" style={{ width: 400, height: 400, background: '#7c3aed', opacity: 0.07, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                  Ready to 10X Your Revenue with <span className="gradient-text">{badge}?</span>
                </h2>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', margin: '0 0 36px', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                  Book a free 30-minute strategy call with Vahid and get a custom growth roadmap for your business.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={scrollToContact} className="btn-primary glow-btn"
                    style={{ padding: '15px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', color: '#fff' }}>
                    Get Free Audit →
                  </button>
                  <a href="mailto:Vahid@vezura10x.com" className="btn-outline"
                    style={{ padding: '15px 32px', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none', color: 'rgba(255,255,255,0.8)' }}>
                    Vahid@vezura10x.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other services */}
      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore Other Services</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {OTHER_SERVICES.filter(s => s.label !== badge).map(s => (
              <Link key={s.path} to={s.path} style={{ textDecoration: 'none', padding: '10px 20px', borderRadius: 50, border: `1px solid ${s.color}33`, color: s.color, fontSize: 14, fontWeight: 500, background: `${s.color}0d`, transition: 'all 0.2s' }}>
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

function FAQItem({ q, a, accentColor }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="glass" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpen(v => !v)}>
      <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{q}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, color: accentColor, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M4 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {open && (
        <div style={{ padding: '0 22px 18px', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {a}
        </div>
      )}
    </div>
  )
}

// Need React for FAQItem
import React from 'react'
