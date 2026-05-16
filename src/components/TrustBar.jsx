const companies = [
  'TechStart GmbH',
  'ShopMax',
  'GrowFast AG',
  'EliteWear',
  'DataSoft',
  'EcomPro',
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#05050a',
        padding: '52px 24px',
        position: 'relative',
      }}
    >
      <div className="divider" style={{ marginBottom: 44 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          Trusted by businesses across Europe
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {companies.map((name) => (
            <div
              key={name}
              className="glass"
              style={{
                padding: '10px 24px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.02em',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.25s, border-color 0.25s, background 0.25s',
                cursor: 'default',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="divider" style={{ marginTop: 44 }} />
    </section>
  );
}
