import { useState } from 'react';

const serviceOptions = [
  'SEO',
  'Google Ads',
  'Google Merchant Center',
  'Shopify Growth',
  'All Services',
];

const infoCards = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email Us',
    value: 'Vahid@vezura10x.com',
    href: 'mailto:Vahid@vezura10x.com',
    color: '#7c3aed',
    colorBg: 'rgba(124,58,237,0.14)',
    colorBorder: 'rgba(124,58,237,0.28)',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Germany — Serving Worldwide',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.14)',
    colorBorder: 'rgba(59,130,246,0.28)',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 Hours',
    color: '#10b981',
    colorBg: 'rgba(16,185,129,0.14)',
    colorBorder: 'rgba(16,185,129,0.28)',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: 10,
    fontSize: 15,
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.55)',
    marginBottom: 8,
    letterSpacing: '0.02em',
  };

  return (
    <section
      id="contact"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#05050a',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        className="orb"
        style={{
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 60%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 20 }}>
            Get In Touch
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
            Ready to 10X{' '}
            <span className="gradient-text">Your Revenue?</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.52)',
              fontSize: 17,
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Book a free 30-minute strategy call with Vahid and discover exactly how
            we'll grow your business.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: 48,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div
            className="glass"
            style={{
              borderRadius: 24,
              padding: '44px 40px',
              border: '1px solid rgba(124,58,237,0.12)',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 28px',
                  }}
                >
                  <svg width="32" height="32" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    margin: '0 0 12px',
                    color: '#fff',
                    letterSpacing: '-0.3px',
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, margin: '0 0 28px', lineHeight: 1.6 }}>
                  Vahid will review your message and get back to you within 24 hours with a personalized growth strategy.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                  className="btn-outline"
                  style={{ padding: '11px 28px', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', border: 'none' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h3
                  style={{
                    fontSize: 21,
                    fontWeight: 700,
                    margin: '0 0 4px',
                    color: '#fff',
                    letterSpacing: '-0.3px',
                  }}
                >
                  Send Us a Message
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                  Fill out the form and we'll prepare a custom growth plan for you.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      placeholder="Max Mustermann"
                      required
                      className="form-input"
                      value={form.name}
                      onChange={set('name')}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      placeholder="max@company.de"
                      required
                      className="form-input"
                      value={form.email}
                      onChange={set('email')}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company GmbH"
                    className="form-input"
                    value={form.company}
                    onChange={set('company')}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service Interested In</label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={set('service')}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    placeholder="Tell us about your business, current challenges, and growth goals..."
                    required
                    className="form-input"
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary glow-btn"
                  style={{
                    padding: '15px 32px',
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#fff',
                    cursor: 'pointer',
                    border: 'none',
                    marginTop: 4,
                    width: '100%',
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="glass"
                style={{
                  borderRadius: 18,
                  padding: '22px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: card.colorBg,
                    border: `1px solid ${card.colorBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.color,
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}
                  >
                    {card.label}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      style={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = card.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>
                      {card.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Free audit badge card */}
            <div
              style={{
                borderRadius: 18,
                padding: '32px 28px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(245,158,11,0.08))',
                border: '1px solid rgba(124,58,237,0.25)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>🎯</div>
              <h4
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  margin: '0 0 10px',
                  color: '#fff',
                  letterSpacing: '-0.3px',
                }}
              >
                Free Strategy Audit
              </h4>
              <p
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 14,
                  margin: '0 0 20px',
                  lineHeight: 1.7,
                }}
              >
                No strings attached. We'll analyze your digital presence and reveal your
                biggest untapped growth opportunities.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: 100,
                  padding: '7px 18px',
                }}
              >
                <span style={{ fontSize: 13, color: '#f59e0b', fontWeight: 600 }}>
                  ✓ 100% Free — No Credit Card
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
