import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const SERVICES = [
  {
    path: '/services/seo',
    title: 'Search Engine Optimization',
    short: 'SEO',
    desc: 'Rank higher, grow organic traffic, dominate Google.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.12)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    path: '/services/google-ads',
    title: 'Google Ads Management',
    short: 'Google Ads',
    desc: 'ROI-driven PPC campaigns that scale your revenue.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    path: '/services/google-merchant',
    title: 'Google Merchant Center',
    short: 'Merchant Center',
    desc: 'Product feed setup, Shopping ads & listing optimization.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    path: '/services/shopify',
    title: 'Shopify Growth',
    short: 'Shopify',
    desc: 'Store optimization, CRO, and full marketing integration.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const megaRef = useRef(null)
  const closeTimer = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    setMobileOpen(false)
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    }
  }

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(5,5,10,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 23, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>Vezura</span>
          <span className="gradient-text" style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-0.5px' }}>10x</span>
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">

          {/* Services mega menu trigger */}
          <li style={{ position: 'relative' }} onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              onClick={() => setMegaOpen(v => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: megaOpen ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: 15, fontWeight: 500,
                padding: '8px 16px', borderRadius: 8,
                display: 'flex', alignItems: 'center', gap: 5,
                transition: 'color 0.2s',
              }}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Mega Menu Dropdown */}
            <div
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                left: '50%',
                transform: `translateX(-50%) translateY(${megaOpen ? 0 : -10}px)`,
                width: 560,
                background: 'rgba(8,6,18,0.97)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: 20,
                padding: '20px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
                opacity: megaOpen ? 1 : 0,
                pointerEvents: megaOpen ? 'auto' : 'none',
                transition: 'opacity 0.22s ease, transform 0.22s ease',
                zIndex: 100,
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Services</p>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Full-stack digital marketing to 10X your revenue</p>
              </div>

              {/* Service cards grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {SERVICES.map(svc => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setMegaOpen(false)}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '13px 14px', borderRadius: 14,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = svc.bg
                      e.currentTarget.style.borderColor = svc.color + '44'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    >
                      <div style={{
                        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                        background: svc.bg, border: `1px solid ${svc.color}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: svc.color,
                      }}>
                        {svc.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{svc.title}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{svc.desc}</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: 2 }}>
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer CTA */}
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Not sure which service you need?</span>
                <Link
                  to="/"
                  onClick={(e) => { setMegaOpen(false); scrollTo('contact')(e) }}
                  style={{
                    fontSize: 12, fontWeight: 600, color: '#a78bfa',
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4,
                  }}
                >
                  Get Free Audit
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </li>

          {[['Results','results'],['Process','process'],['About','about'],['Contact','contact']].map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={scrollTo(id)} className="nav-link"
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 15, fontWeight: 500, padding: '8px 16px', borderRadius: 8, transition: 'color 0.2s', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}

          <li style={{ marginLeft: 12 }}>
            <a href="#contact" onClick={scrollTo('contact')} className="btn-primary glow-btn"
              style={{ textDecoration: 'none', padding: '10px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600, display: 'inline-block' }}>
              Get Free Audit
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="hamburger-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'none', color: '#fff', borderRadius: 8 }}
          aria-label="Toggle navigation menu">
          {mobileOpen
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: 'rgba(5,5,10,0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(124,58,237,0.2)', padding: '16px 24px 28px' }}>
          {/* Mobile Services accordion */}
          <div>
            <button onClick={() => setMobileServicesOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 500, padding: '13px 0', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              Services
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileServicesOpen && (
              <div style={{ paddingLeft: 12, paddingBottom: 8 }}>
                {SERVICES.map(svc => (
                  <Link key={svc.path} to={svc.path} onClick={() => setMobileOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: 14, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color: svc.color }}>{svc.icon}</span>
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[['Results','results'],['Process','process'],['About','about'],['Contact','contact']].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id)}
              style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={scrollTo('contact')} className="btn-primary"
            style={{ textDecoration: 'none', padding: '13px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600, display: 'block', textAlign: 'center', marginTop: 20 }}>
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
  )
}
