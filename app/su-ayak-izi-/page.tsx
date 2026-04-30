
su_ayak_izi_page = """'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../navbar'

const ONTEST = [
  { code: 'K3', text: 'Tükettiğimiz sulardır.' },
  { code: 'K9', text: 'Fikrim yok.' },
  { code: 'K25', text: 'Bilmiyorum.' },
]

const SONTEST = [
  { code: 'K23', text: 'Kullandığımız gıda, barınma ve giysilerdeki tüm ürünlerin başlangıçtan insan kullanımına kadar geçen süredeki tüm su kullanımı.' },
  { code: 'K11', text: 'Bir kişinin veya ülkenin kirlettiği ya da bir ürünün üretiminde kullanılan toplam su miktarıdır.' },
  { code: 'K4', text: 'Suya ihtiyaç duyan bir ürünün üretim ve kullanım aşamasında kullanılan su miktarıdır.' },
]

const URUN_AYAK_IZI = [
  { urun: '1 kg sığır eti', litre: 15400, icon: '🥩' },
  { urun: '1 kg pirinç', litre: 2500, icon: '🍚' },
  { urun: '1 adet tişört (pamuk)', litre: 2700, icon: '👕' },
  { urun: '1 kg buğday', litre: 1300, icon: '🌾' },
  { urun: '1 bardak kahve', litre: 140, icon: '☕' },
  { urun: '1 litre süt', litre: 1000, icon: '🥛' },
  { urun: '1 kg muz', litre: 790, icon: '🍌' },
  { urun: '1 adet akıllı telefon', litre: 12760, icon: '📱' },
]

const GUNLUK_TIKETIMLER = [
  { id: 'et', label: 'Et yiyor musun?', icon: '🥩', litre: 2000, options: [{ label: 'Her gün', mul: 1 }, { label: 'Haftada 3', mul: 0.43 }, { label: 'Hiç', mul: 0 }] },
  { id: 'kiyafet', label: 'Kaç kıyafet alıyorsun?', icon: '👕', litre: 270, options: [{ label: 'Ayda 3+', mul: 3 }, { label: 'Ayda 1', mul: 1 }, { label: 'Nadiren', mul: 0.3 }] },
  { id: 'kağıt', label: 'Kağıt kullanımı', icon: '📄', litre: 10, options: [{ label: 'Çok fazla', mul: 10 }, { label: 'Orta', mul: 5 }, { label: 'Az', mul: 2 }] },
  { id: 'kahve', label: 'Günlük kahve?', icon: '☕', litre: 140, options: [{ label: '3+', mul: 3 }, { label: '1-2', mul: 1.5 }, { label: 'İçmiyorum', mul: 0 }] },
]

export default function SuAyakIziPage() {
  const [secimler, setSecimler] = useState<Record<string, number>>({})

  const toplamAyakIzi = GUNLUK_TIKETIMLER.reduce((acc, item) => {
    const mul = secimler[item.id] ?? 0
    return acc + item.litre * mul
  }, 0)

  const hepsSecildi = GUNLUK_TIKETIMLER.every(item => secimler[item.id] !== undefined)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '100px 24px 50px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(52,152,219,0.15)',
        background: 'radial-gradient(ellipse at 50% 80%, rgba(52,152,219,0.08) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(52,152,219,0.15)',
            border: '1px solid rgba(52,152,219,0.35)',
            borderRadius: 20,
            padding: '5px 16px',
            fontSize: 11,
            fontWeight: 700,
            color: '#85c1e9',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}>Araştırma Sorusu 6</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem,5vw,3.8rem)',
            fontWeight: 700,
            color: 'var(--ocean-surface)',
            marginBottom: 14,
          }}>
            Su Ayak İzi
          </h1>
          <p style={{
            fontSize: 16,
            color: 'rgba(202,240,248,0.68)',
            lineHeight: 1.8,
            marginBottom: 20,
          }}>
            Araştırmada en az bilinen kavramlardan biri olan su ayak izi nedir? Kendi su ayak izini hesapla.
          </p>
          <div style={{
            background: 'rgba(52,152,219,0.1)',
            border: '1px solid rgba(52,152,219,0.22)',
            borderRadius: 12,
            padding: '16px 20px',
            maxWidth: 560,
            margin: '0 auto',
            textAlign: 'left',
          }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#85c1e9',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 7,
            }}>📋 Araştırma Sorusu</div>
            <p style={{
              fontSize: 15,
              color: 'rgba(202,240,248,0.8)',
              fontStyle: 'italic',
            }}>"Su ayak izi ne olabilir?"</p>
          </div>
        </div>
      </section>

      {/* Ön / Son Test */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem,2.5vw,1.9rem)',
            color: 'var(--ocean-surface)',
            marginBottom: 28,
            textAlign: 'center',
          }}>
            Katılımcıların Cevapları
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#e8a87c',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 14,
              }}>Ön Test (Kit Öncesi)</div>
              {ONTEST.map((k, i) => (
                <div key={i} style={{
                  background: 'rgba(139,69,19,0.15)',
                  border: '1px solid rgba(139,69,19,0.28)',
                  borderRadius: 10,
                  padding: '14px 16px',
                  marginBottom: 10,
                  display: 'flex',
                  gap: 12,
                }}>
                  <div style={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(139,69,19,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#e8a87c',
                    flexShrink: 0,
                  }}>{k.code}</div>
                  <p style={{
                    fontSize: 13,
                    color: 'rgba(202,240,248,0.68)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}>"{k.text}"</p>
                </div>
              ))}
            </div>
            <div>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#74c69d',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 14,
              }}>Son Test (Kit Sonrası)</div>
              {SONTEST.map((k, i) => (
                <div key={i} style={{
                  background: 'rgba(45,106,79,0.15)',
                  border: '1px solid rgba(45,106,79,0.28)',
                  borderRadius: 10,
                  padding: '14px 16px',
                  marginBottom: 10,
                  display: 'flex',
                  gap: 12,
                }}>
                  <div style={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(45,106,79,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#74c69d',
                    flexShrink: 0,
                  }}>{k.code}</div>
                  <p style={{
                    fontSize: 13,
                    color: 'rgba(202,240,248,0.78)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}>"{k.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Ayak İzleri */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem,2.5vw,1.9rem)',
            color: 'var(--ocean-surface)',
            marginBottom: 10,
            textAlign: 'center',
          }}>
            Ürünlerin Su Ayak İzi
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            Bir ürünün üretiminde başından sonuna ne kadar su kullanılıyor?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
            {URUN_AYAK_IZI.map((u, i) => (
              <div key={i} className="card-ocean" style={{ padding: '18px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 30, marginBottom: 8 }}>{u.icon}</div>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.65)', marginBottom: 6 }}>{u.urun}</p>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--ocean-bright)',
                  fontWeight: 700,
                }}>
                  {u.litre.toLocaleString('tr-TR')}
                </div>
                <p style={{ fontSize: 11, color: 'rgba(202,240,248,0.45)', marginTop: 2 }}>litre su</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hesap Makinesi */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem,2.5vw,1.9rem)',
            color: 'var(--ocean-surface)',
            marginBottom: 10,
            textAlign: 'center',
          }}>
            🧮 Kendi Su Ayak İzini Hesapla
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 32 }}>
            Deniz Kirliliğiyle Mücadele Kiti uygulamalı etkinliği
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {GUNLUK_TIKETIMLER.map(item => (
              <div key={item.id} style={{
                background: 'rgba(14,61,92,0.4)',
                border: '1px solid rgba(0,180,216,0.18)',
                borderRadius: 12,
                padding: '18px 20px',
              }}>
                <p style={{
                  fontSize: 15,
                  color: 'rgba(202,240,248,0.82)',
                  marginBottom: 12,
                }}>
                  <span style={{ fontSize: 20, marginRight: 8 }}>{item.icon}</span>{item.label}
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {item.options.map((opt, oi) => (
                    <button
                      key={oi}
                      onClick={() => setSecimler(prev => ({ ...prev, [item.id]: opt.mul }))}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 20,
                        fontSize: 13,
                        cursor: 'pointer',
                        border: `1.5px solid ${secimler[item.id] === opt.mul ? 'rgba(0,180,216,0.7)' : 'rgba(0,180,216,0.2)'}`,
                        background: secimler[item.id] === opt.mul ? 'rgba(0,180,216,0.25)' : 'transparent',
                        color: secimler[item.id] === opt.mul ? 'var(--ocean-foam)' : 'rgba(202,240,248,0.6)',
                        transition: 'all 0.2s',
                      }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {hepsSecildi && (
            <div style={{
              marginTop: 28,
              background: 'rgba(0,180,216,0.12)',
              border: '1px solid rgba(0,180,216,0.35)',
              borderRadius: 14,
              padding: '24px',
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease-out',
            }}>
              <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.6)', marginBottom: 8 }}>
                Tahmini günlük su ayak izin
              </p>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                color: 'var(--ocean-bright)',
                fontWeight: 700,
                marginBottom: 8,
              }}>
                {Math.round(toplamAyakIzi).toLocaleString('tr-TR')} L
              </div>
              <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.5)', lineHeight: 1.6 }}>
                {toplamAyakIzi > 5000
                  ? '🔴 Yüksek su ayak izi! Et tüketimini azaltmak en etkili çözüm.'
                  : toplamAyakIzi > 2000
                  ? '🟡 Orta düzey. Küçük değişikliklerle önemli ölçüde düşürebilirsin.'
                  : '🟢 Düşük su ayak izi — harika bir farkındalık!'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Navigasyon */}
      <section style={{ padding: '50px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/musilaj"><button className="btn-ocean">🦠 Müsilaj Sayfası</button></Link>
          <Link href="/cozumler">
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
              ✅ Bireysel Çözümler
            </button>
          </Link>
          <Link href="/oyunlar">
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
              🎮 Quiz'e Gir
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
"""

with open('/mnt/agents/output/su_ayak_izi_page.tsx', 'w', encoding='utf-8') as f:
    f.write(su_ayak_izi_page)

print("✅ su-ayak-izi/page.tsx yazıldı (404 DÜZELTİLDİ!)")
