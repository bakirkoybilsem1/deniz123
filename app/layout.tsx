
layout_code = '''import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deniz Kirliliğiyle Mücadele Kiti',
  description: 'İstanbul\'un 9 farklı ilçesinden 27 yetişkinle yürütülen araştırmanın bulgularına dayanan deniz kirliliği, müsilaj ve su ayak izi farkındalık platformu.',
  keywords: ['deniz kirliliği', 'müsilaj', 'su ayak izi', 'çevre eğitimi', 'Marmara Denizi', 'İstanbul'],
  authors: [{ name: 'Deniz Kirliliğiyle Mücadele Kiti' }],
  openGraph: {
    title: 'Deniz Kirliliğiyle Mücadele Kiti',
    description: 'Deniz kirliliği, müsilaj ve su ayak izi konularında farkındalık platformu',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
'''

with open('/mnt/agents/output/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_code)

print("✅ layout.tsx yazıldı")
