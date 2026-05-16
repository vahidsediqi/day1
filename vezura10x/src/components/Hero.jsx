const scrollTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      className="grid-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 24px 120px',
        overflow: 'hidden',
        background: '#05050a',
      }}
    >
      {/* Background orbs */}
      <div
        className="orb animate-float"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)',
          top: '-150px',
          left: '-200px',
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 550,
          height: 550,
          background: 'radial-gradient(circle, rgba(245,158,11,0.13) 0%, transparent 65%)',
          bottom: '-100px',
          right: '-120px',
          animationDelay: '1.8s',
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          top: '40%',
          right: '15%',
          animationDelay: '3s',
        }}
      />

      <div
        style={{
          maxWidth: 820,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <span
            className="badge animate-fade-up"
            style={{
              fontSize: 14,
              fontWeight: 600,
              padding: '9px 22px',
              borderRadius: 100,
              letterSpacing: '0.02em',
            }}
          >
            🇩🇪 Germany's #1 Digital Growth Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontSize: 'clamp(42px, 7.5vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-2px',
            margin: '0 0 28px',
            color: '#ffffff',
          }}
        >
          We Help Businesses
          <br />
          <span className="gradient-text">10X Their Revenue</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up"
          style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            maxWidth: 640,
            margin: '0 auto 48px',
          }}
        >
          Full-stack digital marketing powered by SEO, Google Ads, Google Merchant Center,
          and Shopify — all under one roof.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 72,
          }}
        >
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="btn-primary glow-btn"
            style={{
              textDecoration: 'none',
              padding: '17px 40px',
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              display: 'inline-block',
            }}
          >
            Get Free Audit →
          </a>
          <a
            href="#results"
            onClick={scrollTo('results')}
            className="btn-outline"
            style={{
              textDecoration: 'none',
              padding: '17px 40px',
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              display: 'inline-block',
            }}
          >
            See Our Results
          </a>
        </div>

        {/* Stats Row */}
        <div
          className="animate-fade-up hero-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            maxWidth: 680,
            margin: '0 auto',
          }}
        >
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '10X', label: 'Avg Revenue Growth' },
            { value: '€50M+', label: 'Ad Spend Managed' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass"
              style={{
                padding: '28px 20px',
                borderRadius: 18,
                textAlign: 'center',
                border: '1px solid rgba(124,58,237,0.12)',
              }}
            >
              <div
                className="stat-number gradient-text"
                style={{ fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 6, lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: 0.35,
          animation: 'float 2.8s ease-in-out infinite',
          cursor: 'pointer',
        }}
        onClick={(e) => scrollTo('services')(e)}
      >
        <span style={{ fontSize: 11, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path d="M9 0v20" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 15l7 8 7-8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-stats { grid-template-columns: 1fr !important; max-width: 300px !important; }
        }
      `}</style>
    </section>
  );
}
