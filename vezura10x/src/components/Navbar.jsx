import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Results', id: 'results' },
    { label: 'Process', id: 'process' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(5,5,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0 }}
        >
          <span style={{ fontSize: 23, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
            Vezura
          </span>
          <span className="gradient-text" style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-0.5px' }}>
            10x
          </span>
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={scrollTo(link.id)}
                className="nav-link"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: 8,
                  transition: 'color 0.2s',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginLeft: 12 }}>
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="btn-primary"
              style={{
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              Get Free Audit
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            display: 'none',
            color: '#fff',
            borderRadius: 8,
          }}
          className="hamburger-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(5,5,10,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(124,58,237,0.2)',
            padding: '16px 24px 28px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollTo(link.id)}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
                padding: '13px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="btn-primary"
            style={{
              textDecoration: 'none',
              padding: '13px 24px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              display: 'block',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Get Free Audit
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
