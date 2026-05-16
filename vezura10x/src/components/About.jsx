const skills = ['SEO', 'Google Ads', 'Shopify', 'Analytics', 'CRO', 'Google Merchant'];

const checks = [
  'Certified Google Ads & Analytics Expert',
  'Shopify Partner & SEO Specialist',
  'Worked with 200+ clients across Europe',
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#07070e',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        className="orb animate-float"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
          top: '-60px',
          right: '-120px',
          animationDelay: '1s',
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
          bottom: '0px',
          left: '-80px',
          animationDelay: '3s',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: 72,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left: Content */}
          <div>
            <span className="badge" style={{ display: 'inline-block', marginBottom: 20 }}>
              About Us
            </span>
            <h2
              style={{
                fontSize: 'clamp(30px, 4.5vw, 52px)',
                fontWeight: 800,
                margin: '0 0 28px',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                color: '#fff',
              }}
            >
              Led by a Marketer Who
              <br />
              <span className="gradient-text">Obsesses Over Your Growth</span>
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 16,
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              Vahid Sediqi founded Vezura10x with a single mission: to give every business
              access to the same growth strategies used by the world's top e-commerce brands —
              without the agency bloat, empty promises, or inflated retainers.
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 16,
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              Based in Germany and serving clients worldwide, we've helped local shops and
              large enterprises alike multiply their revenue by 10X or more. Every strategy
              is data-driven, every campaign is ROI-focused, and every client gets Vahid's
              direct personal involvement — not handed off to a junior team.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {checks.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: 'rgba(124,58,237,0.18)',
                      border: '1px solid rgba(124,58,237,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="13" height="13" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16, lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass"
              style={{
                borderRadius: 26,
                padding: '44px 36px',
                width: '100%',
                maxWidth: 400,
                textAlign: 'center',
                position: 'relative',
                border: '1px solid rgba(124,58,237,0.15)',
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 26,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(245,158,11,0.04))',
                  pointerEvents: 'none',
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 108,
                  height: 108,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 38,
                  fontWeight: 800,
                  color: '#fff',
                  position: 'relative',
                  letterSpacing: '-1px',
                }}
              >
                VS
                <div
                  style={{
                    position: 'absolute',
                    inset: -5,
                    borderRadius: '50%',
                    border: '2px solid rgba(124,58,237,0.4)',
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  margin: '0 0 6px',
                  color: '#fff',
                  letterSpacing: '-0.3px',
                }}
              >
                Vahid Sediqi
              </h3>
              <p
                style={{
                  color: '#a78bfa',
                  fontSize: 13,
                  fontWeight: 700,
                  margin: '0 0 8px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Founder &amp; Lead Strategist
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: '0 0 28px' }}>
                🇩🇪 Germany
              </p>

              <div className="divider" style={{ marginBottom: 24 }} />

              {/* Email */}
              <a
                href="mailto:Vahid@vezura10x.com"
                style={{
                  color: '#f59e0b',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 28,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Vahid@vezura10x.com
              </a>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: 'rgba(124,58,237,0.14)',
                      border: '1px solid rgba(124,58,237,0.28)',
                      color: '#c4b5fd',
                      fontSize: 12,
                      fontWeight: 600,
                      padding: '5px 13px',
                      borderRadius: 100,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
