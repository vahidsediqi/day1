const steps = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Free Audit',
    desc: 'We analyze your current digital presence, competitors, and growth opportunities — completely free.',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Strategy',
    desc: 'Custom growth roadmap tailored to your business goals, industry, and budget — no generic templates.',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Execute',
    desc: 'We implement SEO, paid ads, and conversion optimization simultaneously for maximum impact.',
  },
  {
    num: '04',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Scale',
    desc: 'We monitor, optimize, and scale what\'s working — doubling down on winners to maximize your ROI.',
  },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0', position: 'relative', background: '#05050a' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20 }}>
            OUR PROCESS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Your Path to{' '}
            <span className="gradient-text">10X Growth</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>
            A proven 4-step framework that has helped 200+ businesses dramatically grow their revenue.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 64 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="glass glass-hover"
              style={{ borderRadius: 20, padding: '40px 28px', position: 'relative', cursor: 'default', transition: 'all 0.3s ease' }}
            >
              {/* Step number */}
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 20, opacity: 0.9 }}>
                {step.num}
              </div>

              {/* Icon */}
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', marginBottom: 20 }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px', color: '#fff' }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>

              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: '50%', right: -13, width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#05050a' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            className="btn-primary glow-btn"
            onClick={() => scrollTo('contact')}
            style={{ padding: '16px 40px', borderRadius: 12, fontSize: 17, fontWeight: 700, color: '#fff', cursor: 'pointer', border: 'none' }}
          >
            Start Your Free Audit →
          </button>
        </div>
      </div>
    </section>
  )
}
