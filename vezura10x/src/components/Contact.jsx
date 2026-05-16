import { useState } from 'react'

const services = ['SEO', 'Google Ads', 'Google Merchant Center', 'Shopify Growth', 'All Services']

const infoCards = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email Us',
    value: 'Vahid@vezura10x.com',
    href: 'mailto:Vahid@vezura10x.com',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Germany — Serving Worldwide',
    color: '#2563eb',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    color: '#059669',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: '120px 0', position: 'relative', background: '#05050a' }}>
      <div className="orb" style={{ width: 700, height: 700, background: 'rgba(124,58,237,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20 }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Ready to 10X{' '}
            <span className="gradient-text">Your Revenue?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 540, margin: '0 auto' }}>
            Book a free 30-minute strategy call with Vahid and discover exactly how we'll grow your business.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
          {/* Form */}
          <div className="glass" style={{ borderRadius: 24, padding: '40px 36px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(5,150,105,0.2)', border: '1px solid rgba(5,150,105,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="28" height="28" fill="none" stroke="#10b981" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Vahid will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Send Us a Message</h3>

                {[
                  { key: 'name', label: 'Your Name', placeholder: 'Max Mustermann', type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'max@company.de', type: 'email' },
                  { key: 'company', label: 'Company (Optional)', placeholder: 'Your Company GmbH', type: 'text' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required={key !== 'company'}
                      className="form-input"
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 15 }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Service Interested In</label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 15, cursor: 'pointer' }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your business and goals..."
                    className="form-input"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 15, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary glow-btn"
                  style={{ padding: '14px 32px', borderRadius: 10, fontSize: 16, fontWeight: 700, color: '#fff', cursor: 'pointer', border: 'none', marginTop: 4 }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {infoCards.map((card) => (
              <div key={card.label} className="glass" style={{ borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${card.color}22`, border: `1px solid ${card.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.color, flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 4 }}>{card.label}</div>
                  {card.href ? (
                    <a href={card.href} style={{ color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{card.value}</a>
                  ) : (
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>{card.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Free audit badge */}
            <div style={{ borderRadius: 16, padding: '28px', background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.1))', border: '1px solid rgba(124,58,237,0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Free Strategy Audit</h4>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                No strings attached. We'll analyze your digital presence and tell you exactly where your biggest growth opportunities are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
