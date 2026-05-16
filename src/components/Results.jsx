const stats = [
  { value: '10X', label: 'Average Revenue Growth' },
  { value: '200+', label: 'Happy Clients' },
  { value: '€50M+', label: 'Ad Spend Managed' },
  { value: '98%', label: 'Client Retention Rate' },
];

const bars = [
  { label: 'Month 1', value: 30 },
  { label: 'Month 3', value: 60 },
  { label: 'Month 6', value: 150 },
  { label: 'Month 8', value: 300 },
];

const maxVal = 300;

export default function Results() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="results"
      style={{
        background: '#05050a',
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Violet glow background */}
      <div
        className="orb"
        style={{
          width: 900,
          height: 900,
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 60%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="badge" style={{ marginBottom: 20, display: 'inline-block' }}>
            Proven Results
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Numbers That Speak
            <br />
            <span className="gradient-text">For Themselves</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.52)',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Real results, real businesses. Here's what happens when you let the experts
            run your entire digital growth engine.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            marginBottom: 40,
          }}
          className="results-grid"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover"
              style={{
                padding: '40px 24px',
                borderRadius: 20,
                textAlign: 'center',
                border: '1px solid rgba(124,58,237,0.1)',
              }}
            >
              <div
                className="stat-number gradient-text"
                style={{
                  fontSize: 'clamp(34px, 4vw, 50px)',
                  fontWeight: 800,
                  marginBottom: 10,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.48)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Card */}
        <div
          className="glass"
          style={{
            borderRadius: 24,
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
            alignItems: 'center',
            border: '1px solid rgba(124,58,237,0.18)',
          }}
        >
          {/* Left: Story */}
          <div className="case-study-left">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: 100,
                padding: '6px 16px',
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 13, color: '#f59e0b', fontWeight: 600, letterSpacing: '0.02em' }}>
                ⚡ Case Study
              </span>
            </div>

            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.25,
                margin: '0 0 16px',
                letterSpacing: '-0.5px',
              }}
            >
              From €30K to €300K Monthly Revenue
            </h3>

            <p
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.85,
                margin: '0 0 28px',
              }}
            >
              A German e-commerce brand went from €30K/mo to €300K/mo in just 8 months
              using our full-stack approach — combining Google Shopping, SEO, and Shopify
              conversion optimization working in perfect sync.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 28,
                marginBottom: 32,
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Revenue Growth', value: '10X' },
                { label: 'Time Frame', value: '8 Mo.' },
                { label: 'ROAS', value: '8.4X' },
              ].map((m) => (
                <div key={m.label}>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: '#f59e0b',
                      marginBottom: 3,
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="btn-primary"
              style={{
                textDecoration: 'none',
                padding: '13px 28px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              View Case Studies →
            </a>
          </div>

          {/* Right: Chart */}
          <div className="case-study-right">
            <p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 20,
                textAlign: 'center',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Monthly Revenue (€K)
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 14,
                height: 200,
                padding: '0 8px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                marginBottom: 12,
                position: 'relative',
              }}
            >
              {/* Y-axis guides */}
              {[0, 100, 200, 300].map((v) => (
                <div
                  key={v}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: `${(v / maxVal) * 100}%`,
                    borderTop: '1px dashed rgba(255,255,255,0.05)',
                  }}
                />
              ))}

              {bars.map((bar, i) => (
                <div
                  key={bar.label}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    height: '100%',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: bar.value > 100 ? '#f59e0b' : 'rgba(255,255,255,0.4)',
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    €{bar.value}K
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: `${(bar.value / maxVal) * 100}%`,
                      background:
                        bar.value > 100
                          ? 'linear-gradient(180deg, #f59e0b 0%, #7c3aed 100%)'
                          : 'rgba(124,58,237,0.45)',
                      borderRadius: '6px 6px 0 0',
                      minHeight: 6,
                      transition: 'height 1.2s ease',
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                gap: 14,
                padding: '0 8px',
              }}
            >
              {bars.map((bar) => (
                <div
                  key={bar.label}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.3)',
                    fontWeight: 500,
                  }}
                >
                  {bar.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .case-study-left, .case-study-right { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
