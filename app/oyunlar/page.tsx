
oyunlar_page = """'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../navbar'

const SORULAR = [
  {
    id: 1,
    soru: 'BM Deniz Hukuku Sözleşmesi\'ne göre deniz kirliliği nedir?',
    secenekler: [
      'Sadece plastik atıkların denize atılması',
      'Zararlı etkilerle sonuçlanan madde veya enerjinin deniz çevresine girmesi',
      'Sadece petrol sızıntıları',
      'Deniz suyunun renginin değişmesi',
    ],
    dogru: 1,
    aciklama: 'BMDHS Madde 1/(4): "Deniz çevresinin kirlenmesi; zararlı etkilerle sonuçlanan madde veya enerjinin deniz çevresine girmesi."',
    konu: 'nedenler',
  },
  {
    id: 2,
    soru: 'Deniz kirliliğinin en büyük kaynağı nedir?',
    secenekler: [
      'Doğal afetler',
      'Plastik atıklar',
      'Deniz canlıları',
      'Güneş ışınları',
    ],
    dogru: 1,
    aciklama: 'Katılımcı K9: "İnsan kaynaklı plastik atık, akaryakıt, insan neslinin çoğalması kirliliğin başlıca sebepleridir."',
    konu: 'nedenler',
  },
  {
    id: 3,
    soru: 'Deniz kirliliği deniz canlılarını nasıl etkiler?',
    secenekler: [
      'Sadece görünüşlerini değiştirir',
      'Besin zincirini bozar ve oksijen azalmasına neden olur',
      'Hiç etkilemez',
      'Sadece büyük balıkları etkiler',
    ],
    dogru: 1,
    aciklama: 'K25: "Balıklar ve mercanlar suda çözünmüş oksijenlerden yararlanır. Kirlilik bu oksijenin azalmasına neden olur."',
    konu: 'nedenler',
  },
  {
    id: 4,
    soru: 'Müsilaj nedir?',
    secenekler: [
      'Deniz suyunun doğal rengi',
      'Fitoplankton gibi mikroorganizmaların kontrolsüz çoğalmasıyla oluşan yapışkan tabaka',
      'Deniz tuzunun çökmesi',
      'Petrol kalıntısı',
    ],
    dogru: 1,
    aciklama: 'K11: "Fitoplankton gibi bazı mikroorganizmaların kontrolsüz biçimde çoğalmasıyla deniz tabanında ve yüzeyinde oluşan yapışkan tabaka."',
    konu: 'musilaj',
  },
  {
    id: 5,
    soru: 'Müsilaj ile deniz kirliliği arasındaki ilişki nedir?',
    secenekler: [
      'Hiçbir ilişki yoktur',
      'Müsilaj sadece soğuk sularda oluşur',
      'Aşırı kirlilik müsilaj oluşumunu hızlandırır',
      'Müsilaj kirliliği önler',
    ],
    dogru: 2,
    aciklama: 'Denize boşaltılan atık sular, gübre kalıntıları ve sanayi deşarjları müsilaj oluşumunu doğrudan hızlandırır.',
    konu: 'musilaj',
  },
  {
    id: 6,
    soru: 'Su ayak izi ne anlama gelir?',
    secenekler: [
      'Sadece içtiğimiz su miktarı',
      'Bir ürünün üretim ve kullanım aşamasında kullanılan toplam su miktarı',
      'Denizdeki ayak izi',
      'Yağmur suyu miktarı',
    ],
    dogru: 1,
    aciklama: 'K4: "Suya ihtiyaç duyan bir ürünün üretim ve kullanım aşamasında kullanılan su miktarıdır."',
    konu: 'su-ayak-izi',
  },
]

export default function OyunlarPage() {
  const [aktifSoru, setAktifSoru] = useState(0)
  const [puan, setPuan] = useState(0)
  const [cevaplar, setCevaplar] = useState<Record<number, number>>({})
  const [gosterildi, setGosterildi] = useState(false)
  const [bitti, setBitti] = useState(false)

  const cevapVer = (secenekIndex: number) => {
    if (cevaplar[aktifSoru] !== undefined) return

    const dogruMu = secenekIndex === SORULAR[aktifSoru].dogru
    setCevaplar(prev => ({ ...prev, [aktifSoru]: secenekIndex }))
    if (dogruMu) setPuan(prev => prev + 1)
    setGosterildi(true)
  }

  const sonrakiSoru = () => {
    if (aktifSoru < SORULAR.length - 1) {
      setAktifSoru(prev => prev + 1)
      setGosterildi(false)
    } else {
      setBitti(true)
    }
  }

  const yenidenBasla = () => {
    setAktifSoru(0)
    setPuan(0)
    setCevaplar({})
    setGosterildi(false)
    setBitti(false)
  }

  const mevcutCevap = cevaplar[aktifSoru]
  const dogruCevap = SORULAR[aktifSoru].dogru

  if (bitti) {
    const yuzde = Math.round((puan / SORULAR.length) * 100)
    return (
      <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>
        <Navbar />
        <section style={{
          padding: '120px 24px 80px',
          textAlign: 'center',
          maxWidth: 600,
          margin: '0 auto',
        }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>
            {yuzde >= 80 ? '🏆' : yuzde >= 50 ? '🥈' : '📚'}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem,4vw,2.8rem)',
            color: 'var(--ocean-surface)',
            marginBottom: 12,
          }}>
            Quiz Tamamlandı!
          </h1>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '4rem',
            color: 'var(--ocean-bright)',
            fontWeight: 700,
            marginBottom: 8,
          }}>
            {puan} / {SORULAR.length}
          </div>
          <p style={{
            fontSize: 18,
            color: 'rgba(202,240,248,0.7)',
            marginBottom: 24,
          }}>
            {yuzde >= 80
              ? '🌟 Mükemmel! Deniz kirliliği konusunda çok bilgilisin.'
              : yuzde >= 50
              ? '👍 İyi! Daha fazla bilgi edinmek için sayfaları ziyaret et.'
              : '💪 Devam et! Sayfaları inceleyerek bilgini artırabilirsin.'}
          </p>

          {/* Sonuç Detayları */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 32,
            textAlign: 'left',
          }}>
            {SORULAR.map((s, i) => {
              const c = cevaplar[i]
              const dogru = c === s.dogru
              return (
                <div key={i} style={{
                  padding: '12px 16px',
                  borderRadius: 10,
                  background: dogru ? 'rgba(45,106,79,0.2)' : 'rgba(231,76,60,0.15)',
                  border: `1px solid ${dogru ? 'rgba(45,106,79,0.35)' : 'rgba(231,76,60,0.3)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}>
                  <span style={{ fontSize: 20 }}>{dogru ? '✅' : '❌'}</span>
                  <div>
                    <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.8)', marginBottom: 2 }}>
                      Soru {i + 1}: {s.soru}
                    </p>
                    {!dogru && (
                      <p style={{ fontSize: 12, color: 'rgba(202,240,248,0.55)', fontStyle: 'italic' }}>
                        Doğru cevap: {s.secenekler[s.dogru]}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={yenidenBasla} className="btn-ocean">
              🔄 Yeniden Başla
            </button>
            <Link href="/">
              <button style={{
                background: 'transparent',
                color: 'var(--ocean-foam)',
                border: '1.5px solid rgba(0,180,216,0.38)',
                padding: '12px 24px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(0,180,216,0.15)'
                e.currentTarget.style.borderColor = 'rgba(0,180,216,0.6)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(0,180,216,0.38)'
              }}>
                🏠 Ana Sayfa
              </button>
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>
      <Navbar />

      {/* Quiz Hero */}
      <section style={{
        padding: '100px 24px 40px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 80%, rgba(155,89,182,0.1) 0%, transparent 58%)',
        borderBottom: '1px solid rgba(155,89,182,0.15)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(155,89,182,0.15)',
            border: '1px solid rgba(155,89,182,0.35)',
            borderRadius: 20,
            padding: '5px 16px',
            fontSize: 11,
            fontWeight: 700,
            color: '#bb8fce',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}>Quiz & Oyunlar</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem,5vw,3.2rem)',
            fontWeight: 700,
            color: 'var(--ocean-surface)',
            marginBottom: 12,
          }}>
            Deniz Kirliliği Bilgi Testi
          </h1>
          <p style={{
            fontSize: 15,
            color: 'rgba(202,240,248,0.6)',
            marginBottom: 16,
          }}>
            Araştırmanın 6 temel sorusunu çöz, puan kazan!
          </p>

          {/* İlerleme Çubuğu */}
          <div style={{
            maxWidth: 400,
            margin: '0 auto 20px',
            height: 8,
            background: 'rgba(14,61,92,0.5)',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${((aktifSoru + (gosterildi ? 1 : 0)) / SORULAR.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--ocean-bright), #bb8fce)',
              borderRadius: 4,
              transition: 'width 0.4s ease',
            }} />
          </div>
          <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.5)' }}>
            Soru {aktifSoru + 1} / {SORULAR.length} · Puan: {puan}
          </p>
        </div>
      </section>

      {/* Soru Alanı */}
      <section style={{ padding: '40px 24px 60px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(14,61,92,0.4)',
            border: '1px solid rgba(0,180,216,0.18)',
            borderRadius: 16,
            padding: '32px 28px',
          }}>
            {/* Soru */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}>
              <div style={{
                minWidth: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(155,89,182,0.2)',
                border: '1px solid rgba(155,89,182,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 700,
                color: '#bb8fce',
              }}>
                {SORULAR[aktifSoru].id}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem,2.5vw,1.4rem)',
                color: 'var(--ocean-surface)',
                lineHeight: 1.4,
              }}>
                {SORULAR[aktifSoru].soru}
              </h2>
            </div>

            {/* Seçenekler */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SORULAR[aktifSoru].secenekler.map((secenek, i) => {
                const secildi = mevcutCevap === i
                const dogru = i === dogruCevap
                const yanlis = secildi && !dogru
                const gosterDogru = gosterildi && dogru
                const gosterYanlis = gosterildi && secildi && !dogru

                return (
                  <button
                    key={i}
                    onClick={() => cevapVer(i)}
                    disabled={gosterildi}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 18px',
                      borderRadius: 12,
                      fontSize: 14,
                      cursor: gosterildi ? 'default' : 'pointer',
                      border: `2px solid ${
                        gosterDogru
                          ? 'rgba(45,106,79,0.7)'
                          : gosterYanlis
                          ? 'rgba(231,76,60,0.7)'
                          : secildi
                          ? 'rgba(0,180,216,0.5)'
                          : 'rgba(0,180,216,0.15)'
                      }`,
                      background: gosterDogru
                        ? 'rgba(45,106,79,0.2)'
                        : gosterYanlis
                        ? 'rgba(231,76,60,0.15)'
                        : secildi
                        ? 'rgba(0,180,216,0.15)'
                        : 'rgba(14,61,92,0.3)',
                      color: 'rgba(202,240,248,0.85)',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{
                      minWidth: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: gosterDogru
                        ? 'rgba(45,106,79,0.4)'
                        : gosterYanlis
                        ? 'rgba(231,76,60,0.4)'
                        : 'rgba(0,180,216,0.15)',
                      border: `1px solid ${
                        gosterDogru
                          ? 'rgba(45,106,79,0.6)'
                          : gosterYanlis
                          ? 'rgba(231,76,60,0.6)'
                          : 'rgba(0,180,216,0.3)'
                      }`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 700,
                      color: gosterDogru
                        ? '#74c69d'
                        : gosterYanlis
                        ? '#f1948a'
                        : 'var(--ocean-bright)',
                      flexShrink: 0,
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {secenek}
                    {gosterDogru && <span style={{ marginLeft: 'auto', fontSize: 18 }}>✅</span>}
                    {gosterYanlis && <span style={{ marginLeft: 'auto', fontSize: 18 }}>❌</span>}
                  </button>
                )
              })}
            </div>

            {/* Açıklama */}
            {gosterildi && (
              <div style={{
                marginTop: 20,
                padding: '16px 18px',
                background: 'rgba(0,180,216,0.08)',
                border: '1px solid rgba(0,180,216,0.2)',
                borderRadius: 10,
                animation: 'fadeIn 0.4s ease-out',
              }}>
                <p style={{
                  fontSize: 13,
                  color: 'rgba(202,240,248,0.75)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}>
                  💡 {SORULAR[aktifSoru].aciklama}
                </p>
                <div style={{
                  marginTop: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <Link
                    href={`/${SORULAR[aktifSoru].konu}`}
                    style={{
                      fontSize: 12,
                      color: 'var(--ocean-bright)',
                      textDecoration: 'none',
                    }}
                  >
                    📖 Bu konuyu öğren →
                  </Link>
                  <button
                    onClick={sonrakiSoru}
                    className="btn-ocean"
                    style={{ padding: '8px 20px', fontSize: 13 }}
                  >
                    {aktifSoru < SORULAR.length - 1 ? 'Sonraki Soru →' : 'Sonuçları Gör 🏆'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
"""

with open('/mnt/agents/output/oyunlar_page.tsx', 'w', encoding='utf-8') as f:
    f.write(oyunlar_page)

print("✅ oyunlar/page.tsx yazıldı")
