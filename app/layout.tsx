import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deniz Kirliliğiyle Mücadele Kiti',
  description:
    'Deniz kirliliği, müsilaj ve su ayak izi konularını teorik bilgiler, etkinlikler ve oyunlarla öğren.',
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
