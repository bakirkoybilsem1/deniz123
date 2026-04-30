'use client'
import { useState } from 'react'
import Link from 'next/link'

const ETKINLIKLER = [
  {
    id: 'su-ayak-izi',
    icon: '💧',
    baslik: 'Su Ayak İzi Günlüğü',
    sure: '30 dakika',
    yas: 'Tüm yaşlar',
    seviye: 'Kolay',
    seviyeRenk: '#74c69d',
    aciklama: 'Bugün tükettiğin ürünlerin su ayak izini hesapla. Kahvenden tişörtüne, her şeyin bir su maliyeti var!',
    adimlar: [
      'Bugün yediğin/içtiğin 3 ürünü yaz (örn: kahve, et, süt)',
      'Her birinin su ayak izini "Su Ayak İzi" sayfasından bul',
      'Toplamını hesapla ve bir günlük tüketimle karşılaştır',
      'En yüksek su ayak izine sahip ürünün alternatifini araştır',
    ],
    materyal: ['Kağıt-kalem veya not defteri', 'Hesap makinesi'],
    renk: 'rgba(52,152,219,0.12)',
    border: 'rgba(52,152,219,0.3)',
  },
  {
    id: 'kirlilik-haritasi',
    icon: '🗺️',
    baslik: 'Kirlilik Gözlem Haritası',
    sure: '45 dakika',
    yas: 'Aile etkinliği',
    seviye: 'Orta',
    seviyeRenk: '#f4d03f',
    aciklama: 'Yaşadığın çevrede denizi kirleten kaynakları tespit et. Gerçek gözlem, gerçek farkındalık!',
    adimlar: [
      'Evin yakınındaki bir park, kıyı veya sokağa çık',
      'Çevredeki plastik atık, kanalizasyon, sanayi tesisi gibi kirlilik kaynaklarını not et',
      'Fotoğraf veya çizimle belgele',
      'Ailende veya arkadaşlarınla paylaş, çözüm önerileri tartış',
    ],
    materyal: ['Telefon (fotoğraf için)', 'Not defteri', 'Kalem'],
    renk: 'rgba(243,156,18,0.12)',
    border: 'rgba(243,156,18,0.3)',
  },
  {
    id: 'musilaj-deneyi',
    icon: '🧪',
    baslik: 'Müsilaj Simülasyon Deneyi',
    sure: '20 dakika',
    yas: 'Çocuklar için ideal',
    seviye: 'Kolay',
    seviyeRenk: '#74c69d',
    aciklama: 'Müsilajın nasıl oluştuğunu evde basit malzemelerle simüle et!',
    adimlar: [
      'Bir kaba temiz su doldur',
      'İçine biraz nişasta ekle ve karıştır (bu fitoplankton simülasyonu)',
      'Kabı ışıklı ve sıcak bir yere bırak (2-3 gün)',
      'Zamanla suyun nasıl değiştiğini gözlemle ve fotoğrafla',
      'Müsilaj sayfasındaki bilgilerle karşılaştır',
    ],
    materyal: ['Cam kap veya kavanoz', 'Temiz su', 'Nişasta veya un', 'Güneş ışığı'],
    renk: 'rgba(231,76,60,0.12)',
    border: 'rgba(231,76,60,0.3)',
  },
  {
    id: 'aile-tartismasi',
    icon: '👨‍👩‍👧',
    baslik: 'Aile Farkındalık Oturumu',
    sure: '60 dakika',
    yas: 'Aile etkinliği',
    seviye: 'Orta',
    seviyeRenk: '#f4d03f',
    aciklama: 'Ailenle bir araya gel, deniz kirliliğini tartış. Araştırma: Bu tür etkinlikler hem aile ilişkilerini güçlendirir hem de ortak çevre bilinci oluşturur.',
    adimlar: [
      'Aile üyelerini toplayın ve her birine "Müsilaj nedir?" sorusunu sor',
      'Cevapları not et (bu senin kendi ön testin!)',
      'Müsilaj ve Deniz Kirliliğiyle Mücadele Kiti sayfalarını birlikte okuyun',
      'Tekrar aynı soruyu sor — cevaplar ne kadar değişti?',
      'Evinizde uygulamak için 3 somut adım belirleyin',
    ],
    materyal: ['Bu platform', 'Not kağıdı', 'Aile üyeleri 😊'],
    renk: 'rgba(155,89,182,0.12)',
    border: 'rgba(155,89,182,0.3)',
  },
  {
    id: 'plastik-sayim',
    icon: '♻️',
    baslik: 'Haftalık Plastik Sayımı',
    sure: '7 gün boyunca',
    yas: 'Tüm yaşlar',
    seviye: 'Kolay',
    seviyeRenk: '#74c69d',
    aciklama: 'Bir hafta boyunca kaç adet tek kullanımlık plastik kullandığını say. Sonuçlar seni şaşırtacak!',
    adimlar: [
      'Bugünden itibaren 7 gün boyunca kullandığın plastikleri say',
      'Her gün plastik poşet, şişe, ambalaj sayısını not et',
      'Hafta sonunda toplamı hesapla',
      'Hangi plastikleri azaltabileceğini listele',
      'Sonuçlarını Quiz sayfasından paylaş!',
    ],
    materyal: ['Not defteri', 'Kalem', '7 gün sabır 😄'],
    renk: 'rgba(45,106,79,0.12)',
    border: 'rgba(45,106,79,0.3)',
  },
  {
    id: 'quiz-calis',
    icon: '🎮',
    baslik: 'Quiz ile Pekiştirme',
    sure: '15 dakika',
    yas: 'Tüm yaşlar',
    seviye: 'Eğlenceli',
    seviyeRenk: '#85c1e9',
    aciklama: 'Öğrendiklerini quiz ile pekiştir, liderlik tablosuna gir!',
    adimlar: [
      'Quiz sayfasına git',
      'Tüm soruları cevapla',
      'Puanını gör ve liderlik tablosundaki yerine bak',
      'Yanlış cevapladıklarını ilgili sayfalarda tekrar oku',
      'Tekrar quiz çöz ve gelişimini izle!',
    ],
    materyal: ['Bu platform', 'Konsantrasyon 🧠'],
    renk: 'rgba(0,180,216,0.12)',
    border: 'rgba(0,180,216,0.3)',
  },
]

export default function EtkinliklerPage() {
  const [acik, setAcik] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>
      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,22,40,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,180,216,0.18)', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🌊</span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--ocean-foam)', lineHeight: 1.1 }}>Deniz Kirliliğiyle</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--ocean-bright)', lineHeight: 1.1 }}>Mücadele Kiti</div>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[['← Ana Sayfa', '/'], ['Kirlilik', '/nedenler'], ['Müsilaj', '/musilaj'], ['Çözümler', '/cozumler'], ['🎮 Quiz', '/oyunlar']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: 'rgba(202,240,248,0.65)', textDecoration: 'none', fontSize: 13, padding: '5px 12px', borderRadius: 20 }}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '70px 24px 50px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 80%, rgba(243,156,18,0.08) 0%, transparent 58%)', borderBottom: '1px solid rgba(243,156,18,0.15)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(243,156,18,0.15)', border: '1px solid rgba(243,156,18,0.35)', borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700, color: '#f4d03f', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
            Uygulamalı Öğrenme
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 700, color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Etkinlikler
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(202,240,248,0.68)', lineHeight: 1.8, marginBottom: 16 }}>
            Deniz Kirliliğiyle Mücadele Kiti'nin uygulamalı bölümü. Aile ile birlikte, tek başına
            veya arkadaşlarınla yapabileceğin 6 somut etkinlik.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.42)', fontStyle: 'italic' }}>
            "Aile ve çocukların birlikte eğitim aldığı etkinlikler hem aile ilişkilerine katkı sağlar
            hem ortak hedefte hareket oluşturur." — Araştırma
          </p>
        </div>
      </section>

      {/* Etkinlikler */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {ETKINLIKLER.map((e) => (
              <div
                key={e.id}
                style={{
                  background: e.renk,
                  border: `1px solid ${acik === e.id ? e.border.replace('0.3', '0.6') : e.border}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'all 0.25s',
                }}
              >
                {/* Başlık */}
                <div
                  onClick={() => setAcik(acik === e.id ? null : e.id)}
                  style={{ padding: '22px 20px', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 10 }}>
                    <span style={{ fontSize: 32, flexShrink: 0 }}>{e.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--ocean-surface)', marginBottom: 6 }}>{e.baslik}</h3>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '2px 8px', color: 'rgba(202,240,248,0.65)' }}>⏱ {e.sure}</span>
                        <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '2px 8px', color: 'rgba(202,240,248,0.65)' }}>👤 {e.yas}</span>
                        <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.08)', borderRadius: 8, padding: '2px 8px', color: e.seviyeRenk, border: `1px solid ${e.seviyeRenk}44` }}>{e.seviye}</span>
                      </div>
                    </div>
                    <span style={{ color: 'var(--ocean-bright)', fontSize: 18, flexShrink: 0, transition: 'transform 0.2s', transform: acik === e.id ? 'rotate(180deg)' : 'none' }}>↓</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.65)', lineHeight: 1.6 }}>{e.aciklama}</p>
                </div>

                {/* Genişletilmiş İçerik */}
                {acik === e.id && (
                  <div style={{ padding: '0 20px 22px', borderTop: `1px solid ${e.border}` }}>
                    <div style={{ paddingTop: 18 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ocean-bright)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>📋 Adımlar</div>
                      {e.adimlar.map((adim, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                          <div style={{ minWidth: 22, height: 22, borderRadius: '50%', background: 'rgba(0,180,216,0.2)', border: '1px solid rgba(0,180,216,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--ocean-bright)', flexShrink: 0, marginTop: 1 }}>{i+1}</div>
                          <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.75)', lineHeight: 1.55 }}>{adim}</p>
                        </div>
                      ))}
                      <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: 'rgba(202,240,248,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>🎒 Gerekli Materyaller</div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {e.materyal.map((m, i) => (
                          <span key={i} style={{ fontSize: 12, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '3px 10px', color: 'rgba(202,240,248,0.6)' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Araştırma notu */}
      <section style={{ padding: '50px 24px', background: 'rgba(13,33,55,0.7)', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Neden Uygulamalı Etkinlikler?
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.62)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
            Deniz Kirliliğiyle Mücadele Kiti araştırması, yetişkinlerin bilgi düzeylerinin yalnızca okuyarak değil,
            <strong style={{ color: 'var(--ocean-foam)' }}> aktif katılım ve deneyim</strong> yoluyla çok daha kalıcı biçimde arttığını ortaya koymuştur.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/oyunlar"><button className="btn-ocean">🎮 Quiz'e Gir</button></Link>
            <Link href="/cozumler">
              <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '12px 24px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>✅ Bireysel Çözümler</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
