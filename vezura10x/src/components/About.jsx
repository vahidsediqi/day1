const skills = ['SEO', 'Google Ads', 'Shopify', 'Analytics', 'CRO', 'Google Merchant']

const checks = [
  'Certified Google Ads & Analytics Expert',
  'Shopify Partner & SEO Specialist',
  'Worked with 200+ clients across Europe',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative', background: '#07070e' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(245,158,11,0.06)', top: 0, right: -100 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Left: Content */}
          <div>
            <span className="badge" style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20 }}>
              ABOUT US
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Led by a Marketer Who{' '}
              <span className="gradient-text">Obsesses Over Your Growth</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
              Vahid Sediqi founded Vezura10x with a single mission: to give every business access to the same growth strategies used by the world's top e-commerce brands — without the agency bloat or empty promises.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
              Based in Germany, we've helped small local shops and large enterprises alike multiply their revenue by 10X or more. Every strategy is data-driven, every campaign is ROI-focused, and every client gets Vahid's direct involvement.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {checks.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" fill="none" stroke="#a78bfa" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass" style={{ borderRadius: 24, padding: '40px 36px', width: '100%', maxWidth: 380, textAlign: 'center', position: 'relative' }}>
              {/* Glow behind card */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(245,158,11,0.05))', pointerEvents: 'none' }} />

              {/* Avatar */}
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #f59e0b)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 800, color: '#fff', position: 'relative' }}>
                VS
                <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: '2px solid rgba(124,58,237,0.4)' }} />
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px', color: '#fff' }}>Vahid Sediqi</h3>
              <p style={{ color: '#a78bfa', fontSize: 14, fontWeight: 600, margin: '0 0 6px', letterSpacing: '0.05em' }}>FOUNDER &amp; LEAD STRATEGIST</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, margin: '0 0 24px' }}>🇩🇪 Germany</p>

              <div className="divider" style={{ marginBottom: 24 }} />

              {/* Email */}
              <a
                href="mailto:Vahid@vezura10x.com"
                style={{ color: '#f59e0b', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'block', marginBottom: 24 }}
              >
                Vahid@vezura10x.com
              </a>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#c4b5fd', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 999 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
