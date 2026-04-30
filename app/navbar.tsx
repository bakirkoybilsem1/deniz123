
navbar_code = ''''use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '/', icon: '🌊' },
  { label: 'Kirlilik Nedir?', href: '/nedenler', icon: '🌊' },
  { label: 'Müsilaj', href: '/musilaj', icon: '🦠' },
  { label: 'Su Ayak İzi', href: '/su-ayak-izi', icon: '💧' },
  { label: 'Çözümler', href: '/cozumler', icon: '✅' },
  { label: 'Etkinlikler', href: '/etkinlikler', icon: '🔬' },
  { label: 'Quiz', href: '/oyunlar', icon: '🎮' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: isHome 
        ? (scrolled ? 'rgba(10,22,40,0.96)' : 'transparent')
        : 'rgba(10,22,40,0.96)',
      backdropFilter: (isHome && !scrolled) ? 'none' : 'blur(16px)',
      borderBottom: (isHome && !scrolled) ? 'none' : '1px solid rgba(0,180,216,0.18)',
      transition: 'all 0.3s ease',
      padding: '14px 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{ fontSize: 24 }}>🌊</span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--ocean-foam)', lineHeight: 1.1 }}>
              Deniz Kirliliğiyle
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--ocean-bright)', lineHeight: 1.1 }}>
              Mücadele Kiti
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          alignItems: 'center',
        }} className="desktop-nav">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? 'var(--ocean-foam)' : 'rgba(202,240,248,0.65)',
                  textDecoration: 'none',
                  fontSize: 13,
                  padding: '6px 12px',
                  borderRadius: 20,
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(0,180,216,0.2)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,180,216,0.4)' : '1px solid transparent',
                  fontWeight: isActive ? 600 : 400,
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(0,180,216,0.12)'
                    e.currentTarget.style.color = 'var(--ocean-foam)'
                  }
                }}
                onMouseOut={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(202,240,248,0.65)'
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--ocean-foam)',
            fontSize: 24,
            cursor: 'pointer',
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{
          display: 'none',
          flexDirection: 'column',
          gap: 4,
          padding: '12px 0',
          borderTop: '1px solid rgba(0,180,216,0.15)',
          marginTop: 12,
        }} className="mobile-nav">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? 'var(--ocean-foam)' : 'rgba(202,240,248,0.7)',
                  textDecoration: 'none',
                  fontSize: 15,
                  padding: '10px 16px',
                  borderRadius: 10,
                  background: isActive ? 'rgba(0,180,216,0.15)' : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
'''

with open('/mnt/agents/output/navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(navbar_code)

print("✅ navbar.tsx yazıldı")
