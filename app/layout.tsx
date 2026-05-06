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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
