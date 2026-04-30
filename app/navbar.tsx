'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Kirlilik Nedir?', href: '/nedenler' },
  { label: 'Müsilaj', href: '/musilaj' },
  { label: 'Su Ayak İzi', href: '/su-ayak-izi' },
  { label: 'Çözümler', href: '/cozumler' },
  { label: 'Etkinlikler', href: '/etkinlikler' },
  { label: '🎮 Quiz', href: '/oyunlar' },
]

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: transparent ? 'rgba(10,22,40,0.85)' : 'rgba(10,22,40,0.96)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,180,216,0.18)',
      padding: '13px 28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 8,
    }}>
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 22 }}>🌊</span>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--ocean-foam)', lineHeight: 1.1 }}>
            Deniz Kirliliğiyle
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--ocean-bright)', lineHeight: 1.1 }}>
            Mücadele Kiti
          </div>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map(item => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: pathname === item.href ? 'var(--ocean-bright)' : 'rgba(202,240,248,0.65)',
              textDecoration: 'none',
              fontSize: 13,
              padding: '5px 12px',
              borderRadius: 20,
              background: pathname === item.href ? 'rgba(0,180,216,0.15)' : 'transparent',
              transition: 'all 0.2s',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
