
etkinlikler_page = """'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../navbar'

const ETKINLIKLER = [
  {
    id: 'su-ayak-izi',
    icon: '💧',
    title: 'Su Ayak İzi Hesaplama',
    desc: 'Katılımcılar günlük tüketim alışkanlıklarını analiz ederek kendi su ayak izlerini hesapladılar.',
    details: [
      'Et tüketiminin su ayak izi üzerindeki etkisi incelendi',
      'Tekstil ürünlerinin (pamuk tişört) su maliyeti tartışıldı',
      'Günlük kahve tüketiminin su ayak izi hesaplandı',
    ],
    sure: '45 dk',
    yas: '12+',
    zorluk: 'Orta',
  },
  {
    id: 'gozlem-gunlugu',
    icon: '📓',
    title: 'Kirlilik Gözlem Günlüğü',
    desc: 'Katılımcılar 1 hafta boyunca deniz kenarında gözlemlerini kaydetti.',
    details: [
      'Plastik atık yoğunluğu ve türleri belgelendi',
      'Deniz suyu rengi ve şeffaflığı not edildi',
      'Yabancı madde ve koku değişimleri kaydedildi',
    ],
    sure: '1 hafta',
    yas: '10+',
    zorluk: 'Kolay',
  },
  {
    id: 'aile-etkinligi',
    icon: '👨‍👩‍👧',
    title: 'Aile Katılımlı Etkinlik',
    desc: 'Veli-öğrenci ortak etkinlikleri kapsamında deniz kirliliği farkındalığı oluşturuldu.',
    details: [
      'Aileler birlikte sahil temizliği yaptı',
      'Çocuklar ebeveynlerine öğrendiklerini anlattı',
      'Evde plastik azaltma taahhütnamesi imzalandı',
    ],
    sure: '2 saat',
    yas: '6+',
    zorluk: 'Kolay',
  },
  {
    id: 'mikroplastik',
    icon: '🔬',
    title: 'Mikroplastik Analizi',
    desc: 'Deniz suyundan örnekler alınarak mikroplastik varlığı incelendi.',
    details: [
      'Mikroskop altında mikroplastik tanımlama',
      'Plastik parçacık boyutu ve yoğunluğu ölçümü',
      'Deniz canlıları üzerindeki etkileri tartışma',
    ],
    sure: '60 dk',
    yas: '14+',
    zorluk: 'Zor',
  },
  {
    id: 'bilinclendirme',
    icon: '📢',
    title: 'Toplumsal Bilinçlendirme',
    desc: 'Katılımcılar çevrelerindeki insanları deniz kirliliği konusunda bilgilendirdi.',
    details: [
      'Sosyal medya farkındalık kampanyası',
      'Mahallede bilgilendirme standı kurma',
      'Okulda sunum yapma',
    ],
    sure: 'Sürekli',
    yas: 'Tüm yaşlar',
    zorluk: 'Orta',
  },
  {
    id: 'marmara-gemi',
    icon: '⛵',
    title: 'Marmara Denizi Gözlemi',
    desc: 'Tekne turu ile Marmara Denizi\'nin mevcut durumu yerinde incelendi.',
    details: [
      'Müsilaj yoğunluğu gözlemi',
      'Su kalitesi basit testlerle ölçüldü',
      'Balıkçılarla görüşme ve anket',
    ],
    sure: '3 saat',
    yas: '16+',
    zorluk: 'Zor',
  },
]

export default function EtkinliklerPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '100px 24px 50px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 80%, rgba(243,156,18,0.1) 0%, transparent 58%)',
        borderBottom: '1px solid rgba(243,156,18,0.15)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(243,156,18,0.15)',
            border: '1px solid rgba(243,156,18,0.35)',
            borderRadius: 20,
            padding: '5px 16px',
            fontSize: 11,
            fontWeight: 700,
            color: '#f5b041',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}>Uygulamalı Etkinlikler</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem,5vw,3.8rem)',
            fontWeight: 700,
            color: 'var(--ocean-surface)',
            marginBottom: 14,
          }}>
            Deniz Kirliliğiyle Mücadele Etkinlikleri
          </h1>
          <p style={{
            fontSize: 16,
            color: 'rgba(202,240,248,0.68)',
            lineHeight: 1.8,
            marginBottom: 20,
          }}>
            Araştırmada uygulanan ve önerilen etkinlikler. Sen de bu etkinlikleri kendi çevrende
            uygulayarak farkındalık oluşturabilirsin.
          </p>
        </div>
      </section>

      {/* Etkinlik Kartları */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
            {ETKINLIKLER.map((e) => (
              <div
                key={e.id}
                className="card-ocean"
                style={{
                  padding: '24px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onClick={() => setExpanded(expanded === e.id ? null : e.id)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{e.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 16,
                      color: 'var(--ocean-foam)',
                      marginBottom: 4,
                    }}>{e.title}</h3>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 11,
                        background: 'rgba(0,180,216,0.15)',
                        color: 'var(--ocean-bright)',
                        padding: '2px 8px',
                        borderRadius: 8,
                      }}>⏱️ {e.sure}</span>
                      <span style={{
                        fontSize: 11,
                        background: 'rgba(139,69,19,0.2)',
                        color: '#e8a87c',
                        padding: '2px 8px',
                        borderRadius: 8,
                      }}>👤 {e.yas}</span>
                      <span style={{
                        fontSize: 11,
                        background: 'rgba(45,106,79,0.2)',
                        color: '#74c69d',
                        padding: '2px 8px',
                        borderRadius: 8,
                      }}>📊 {e.zorluk}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 20,
                    color: 'var(--ocean-bright)',
                    transition: 'transform 0.3s',
                    transform: expanded === e.id ? 'rotate(180deg)' : 'none',
                  }}>▼</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.6)', lineHeight: 1.6, marginBottom: expanded === e.id ? 12 : 0 }}>
                  {e.desc}
                </p>
                {expanded === e.id && (
                  <div style={{
                    padding: '14px 16px',
                    background: 'rgba(14,61,92,0.4)',
                    borderRadius: 10,
                    border: '1px solid rgba(0,180,216,0.15)',
                    animation: 'fadeIn 0.3s ease-out',
                  }}>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: 'var(--ocean-bright)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: 8,
                    }}>Etkinlik Detayları</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {e.details.map((d, i) => (
                        <li key={i} style={{
                          fontSize: 13,
                          color: 'rgba(202,240,248,0.7)',
                          display: 'flex',
                          gap: 8,
                          alignItems: 'flex-start',
                        }}>
                          <span style={{ color: 'var(--ocean-bright)', flexShrink: 0 }}>•</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEB EBA Entegrasyonu */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem,2.5vw,1.9rem)',
            color: 'var(--ocean-surface)',
            marginBottom: 14,
          }}>
            MEB EBA Sistemine Entegrasyon
          </h2>
          <p style={{
            color: 'rgba(202,240,248,0.65)',
            fontSize: 15,
            lineHeight: 1.8,
            marginBottom: 24,
          }}>
            Araştırma sonucunda bu kitapçığın MEB EBA sistemine entegre edilerek
            veli-öğrenci ortak etkinlikleri kapsamında değerlendirilebileceği önerildi.
          </p>
          <div style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{
              background: 'rgba(0,180,216,0.1)',
              border: '1px solid rgba(0,180,216,0.25)',
              borderRadius: 12,
              padding: '16px 20px',
              textAlign: 'left',
              maxWidth: 280,
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>🏫</div>
              <h4 style={{ fontSize: 14, color: 'var(--ocean-foam)', marginBottom: 4 }}>Okul Programları</h4>
              <p style={{ fontSize: 12, color: 'rgba(202,240,248,0.55)' }}>Coğrafya ve Yer Bilimleri derslerine entegre edilebilir</p>
            </div>
            <div style={{
              background: 'rgba(0,180,216,0.1)',
              border: '1px solid rgba(0,180,216,0.25)',
              borderRadius: 12,
              padding: '16px 20px',
              textAlign: 'left',
              maxWidth: 280,
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>👨‍👩‍👧</div>
              <h4 style={{ fontSize: 14, color: 'var(--ocean-foam)', marginBottom: 4 }}>Aile Katılımı</h4>
              <p style={{ fontSize: 12, color: 'rgba(202,240,248,0.55)' }}>Veli-öğrenci ortak etkinlikleri ile evde sürdürülebilir</p>
            </div>
            <div style={{
              background: 'rgba(0,180,216,0.1)',
              border: '1px solid rgba(0,180,216,0.25)',
              borderRadius: 12,
              padding: '16px 20px',
              textAlign: 'left',
              maxWidth: 280,
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>🌍</div>
              <h4 style={{ fontSize: 14, color: 'var(--ocean-foam)', marginBottom: 4 }}>Toplumsal Etki</h4>
              <p style={{ fontSize: 12, color: 'rgba(202,240,248,0.55)' }}>Yetişkinler çocuklara rol model olarak davranabilir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigasyon */}
      <section style={{ padding: '50px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/su-ayak-izi"><button className="btn-ocean">💧 Su Ayak İzi Hesapla</button></Link>
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

with open('/mnt/agents/output/etkinlikler_page.tsx', 'w', encoding='utf-8') as f:
    f.write(etkinlikler_page)

print("✅ etkinlikler/page.tsx yazıldı")
