const steps = [
  {
    num: '01',
    title: 'Free Audit',
    desc: 'We analyze your current digital presence, competitors, and growth opportunities — completely free and with no obligations.',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Custom growth roadmap tailored to your business goals, industry, and budget — no generic templates, no guesswork.',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'We implement SEO, paid ads, and conversion optimization simultaneously for maximum impact from day one.',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'We monitor, optimize, and scale what\'s working — doubling down on winners to continuously maximize your ROI.',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function Process() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="process"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#05050a',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          animationDelay: '2s',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 20 }}>
            Our Process
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
            Your Path to{' '}
            <span className="gradient-text">10X Growth</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.52)',
              fontSize: 17,
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            A proven 4-step framework that has helped 200+ businesses dramatically grow
            their revenue — built on data, speed, and accountability.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            marginBottom: 72,
            position: 'relative',
          }}
          className="process-grid"
        >
          {/* Dotted connector line (desktop only) */}
          <div
            className="process-connector"
            style={{
              position: 'absolute',
              top: 60,
              left: '12.5%',
              right: '12.5%',
              height: 1,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(124,58,237,0.4) 0, rgba(124,58,237,0.4) 6px, transparent 6px, transparent 16px)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="glass glass-hover"
              style={{
                borderRadius: 22,
                padding: '36px 28px',
                position: 'relative',
                zIndex: 1,
                cursor: 'default',
                transition: 'transform 0.25s ease',
                textAlign: 'center',
              }}
            >
              {/* Step number */}
              <div
                className="gradient-text"
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 20,
                  display: 'block',
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa',
                  margin: '0 auto 20px',
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  margin: '0 0 12px',
                  color: '#fff',
                  letterSpacing: '-0.2px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="btn-primary glow-btn"
            style={{
              textDecoration: 'none',
              padding: '17px 44px',
              borderRadius: 12,
              fontSize: 17,
              fontWeight: 700,
              display: 'inline-block',
            }}
          >
            Start Your Free Audit →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-connector { display: none; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
