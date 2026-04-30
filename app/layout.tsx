import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from './navbar' // Navbar'ı buradan çağırıyoruz

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Deniz Kirliliğiyle Mücadele Kiti',
  description: "İstanbul'dan 27 yetişkinle yürütülen araştırmanın bulgularına dayanan deniz kirliliği farkındalık platformu. Müsilaj, su ayak izi, bireysel çözümler.",
  keywords: ['deniz kirliliği', 'müsilaj', 'su ayak izi', 'çevre', 'Marmara', 'mücadele kiti'],
  openGraph: {
    title: 'Deniz Kirliliğiyle Mücadele Kiti',
    description: 'Deniz kirliliği, müsilaj ve su ayak izi hakkında farkındalık platformu.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar /> {/* Menü her sayfada görünsün diye buraya ekledik */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
