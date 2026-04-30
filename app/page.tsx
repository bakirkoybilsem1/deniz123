'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const STATS = [
  { value: '27', label: 'İstanbul\'dan gönüllü katılımcı — 12 erkek, 15 kadın', icon: '👥' },
  { value: '9', label: 'Farklı ilçeden katılımcı: Beylikdüzü, Fatih, Bakırköy…', icon: '🗺️' },
  { value: '14', label: 'Farklı meslek grubu: öğretmen, hemşire, mühendis…', icon: '💼' },
  { value: '↑', label: 'Ön test → son test arası bilgi düzeyinde belirgin artış', icon: '📈' },
]

const FEATURES = [
  { icon: '🌊', title: 'Deniz Kirliliği Nedir?', desc: 'BM tanımı, Marmara Denizi\'nin durumu, kirlilik türleri ve ekosisteme etkileri.', href: '/nedenler', bg: 'rgba(0,180,216,0.1)', border: 'rgba(0,180,216,0.3)' },
  { icon: '🦠', title: 'Müsilaj Rehberi', desc: 'Fitoplankton patlaması nedir? Deniz salyası neden oluşur? Araştırmadan gerçek cevaplar.', href: '/musilaj', bg: 'rgba(231,76,60,0.1)', border: 'rgba(231,76,60,0.3)' },
  { icon: '💧', title: 'Su Ayak İzi', desc: 'Bir ürünün üretiminde kullanılan toplam su miktarı nedir? Kendininkini hesapla.', href: '/su-ayak-izi', bg: 'rgba(52,152,219,0.1)', border: 'rgba(52,152,219,0.3)' },
  { icon: '✅', title: 'Bireysel Çözümler', desc: 'Katılımcıların önerdiği somut adımlar: plastik azaltma, bilinçlendirme ve daha fazlası.', href: '/cozumler', bg: 'rgba(45,106,79,0.12)', border: 'rgba(45,106,79,0.35)' },
  { icon: '🔬', title: 'Uygulamalı Etkinlikler', desc: 'Su ayak izi hesabı, kirlilik gözlem günlüğü ve aile katılımlı etkinlikler.', href: '/etkinlikler', bg: 'rgba(243,156,18,0.1)', border: 'rgba(243,156,18,0.3)' },
  { icon: '🎮', title: 'Quiz & Oyunlar', desc: 'Araştırmanın 6 sorusunu çöz, puan kazan, liderlik tablosuna gir.', href: '/oyunlar', bg: 'rgba(155,89,182,0.1)', border: 'rgba(155,89,182,0.3)' },
]

const BEFORE_AFTER = [
  { topic: 'Müsilaj Tanımı', before: '"Bilmiyorum." — K8', after: '"Fitoplankton gibi mikroorganizmaların kontrolsüz çoğalmasıyla oluşan yapışkan tabaka." — K11', icon: '🦠' },
  { topic: 'Su Ayak İzi', before: '"Fikrim yok." — K9', after: '"Bir ürünün üretim ve kullanım aşamasında kullanılan su miktarı." — K4', icon: '💧' },
  { topic: 'Deniz Kirliliği', before: '"Denizlerin kirletilmesidir." — K21', after: '"Kimyasal atıklar, nüfus patlaması, ekosistem tahribatı ve besin zinciri üzerindeki etkiler…" — K14', icon: '🌊' },
  { topic: 'Kirlilik Nedenleri', before: '"Çevresel faktörler etkili olabilir." — K17', after: '"Bilinçsiz kullanım, mikro plastikler, sanayi atıkları, çarpık kentleşme ve nüfus artışı." — K10', icon: '🏭' },
]

const SORULAR = [
  { n: '1', q: 'Deniz kirliliği nedir? Deniz kirliliği konusundaki görüşleriniz neler?', href: '/nedenler' },
  { n: '2', q: 'Deniz kirliliğinin nedenleri neler olabilir?', href: '/nedenler' },
  { n: '3', q: 'Deniz kirliliği, deniz canlılarını (hayvan ve bitkileri) nasıl etkilemektedir?', href: '/nedenler' },
  { n: '4', q: 'Müsilaj nedir? Deniz kirliliği ve müsilaj arasında nasıl bir ilişki olabilir?', href: '/musilaj' },
  { n: '5', q: 'Deniz kirliliğinin önlenmesi için bireysel olarak neler yapılabilir?', href: '/cozumler' },
  { n: '6', q: 'Su ayak izi ne olabilir?', href: '/su-ayak-izi' },
]

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ocean-deep)' }}>

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,22,40,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,180,216,0.18)' : 'none',
        transition: 'all 0.3s', padding: '14px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🌊</span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--ocean-foam)', lineHeight: 1.1 }}>Deniz Kirliliğiyle</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--ocean-bright)', lineHeight: 1.1 }}>Mücadele Kiti</div>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {[
            { label: 'Kirlilik Nedir?', href: '/nedenler' },
            { label: 'Müsilaj', href: '/musilaj' },
            { label: 'Su Ayak İzi', href: '/su-ayak-izi' },
            { label: 'Çözümler', href: '/cozumler' },
            { label: 'Etkinlikler', href: '/etkinlikler' },
            { label: '🎮 Quiz', href: '/oyunlar' },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              color: 'rgba(202,240,248,0.7)', textDecoration: 'none',
              fontSize: 13, padding: '6px 12px', borderRadius: 20, transition: 'all 0.2s',
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '120px 24px 80px', textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 85%, rgba(0,180,216,0.12) 0%, transparent 58%)' }} />
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%',
            width: `${12+i*5}px`, height: `${12+i*5}px`,
            background: `rgba(0,180,216,${0.07+i*0.04})`,
            left: `${8+i*18}%`, top: `${22+(i%3)*18}%`,
            animation: `floatUp ${3.2+i*0.7}s ease-in-out ${i*0.5}s infinite`,
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 840 }}>
          <div style={{
            display: 'inline-block', marginBottom: 22,
            background: 'rgba(0,180,216,0.14)', border: '1px solid rgba(0,180,216,0.32)',
            borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700,
            color: 'var(--ocean-foam)', letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Coğrafya · Yer ve Deniz Bilimleri · İstanbul 2024
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5.5vw,4.8rem)', fontWeight: 700, lineHeight: 1.08, color: 'var(--ocean-surface)', marginBottom: 6 }}>
            Deniz Kirliliğiyle
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5.5vw,4.8rem)',
            fontWeight: 700, lineHeight: 1.08, marginBottom: 28,
            background: 'linear-gradient(135deg,#90e0ef,#00b4d8,#f4d03f)',
            backgroundSize: '200% 200%', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'gradientShift 4s ease infinite',
          }}>
            Mücadele Kiti
          </h1>

          <p style={{ fontSize: 17, color: 'rgba(202,240,248,0.7)', maxWidth: 660, margin: '0 auto 14px', lineHeight: 1.8 }}>
            Deniz kirliliği, günümüzün en ciddi çevresel sorunlarından biridir ve giderek artmaktadır.
            İstanbul'un 9 farklı ilçesinden 27 yetişkinle yürütülen bu araştırma; deniz kirliliği, müsilaj
            ve su ayak izi konularında toplumsal farkındalık kazandırmayı amaçlıyor.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.42)', maxWidth: 560, margin: '0 auto 38px', lineHeight: 1.7, fontStyle: 'italic' }}>
            "Çevremizden başlayarak toplumsal duyarlılığın artması için çaba harcamalıyız." — Katılımcı K3
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/nedenler"><button className="btn-ocean">Öğrenmeye Başla</button></Link>
            <Link href="/oyunlar">
              <button style={{
                background: 'transparent', color: 'var(--ocean-foam)',
                border: '1.5px solid rgba(0,180,216,0.42)', padding: '12px 26px',
                borderRadius: 50, fontSize: 15, fontWeight: 600, cursor: 'pointer',
              }}>🎮 Quiz'e Katıl</button>
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1200 80" style={{ width: '100%', display: 'block' }}>
            <path d="M0,40 C300,80 600,0 900,40 C1050,60 1150,30 1200,40 L1200,80 L0,80 Z" fill="rgba(13,33,55,0.85)" />
          </svg>
        </div>
      </section>

      {/* Araştırma Hakkında */}
      <section style={{ padding: '65px 24px', background: 'rgba(13,33,55,0.85)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'inline-block', background: 'rgba(0,180,216,0.15)', border: '1px solid rgba(0,180,216,0.3)', borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700, color: 'var(--ocean-bright)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Araştırma Hakkında</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2.1rem)', color: 'var(--ocean-surface)', marginBottom: 14 }}>
              Deniz Kirliliğiyle Mücadele Kiti Pilot Çalışması
            </h2>
            <p style={{ color: 'rgba(202,240,248,0.65)', fontSize: 15, lineHeight: 1.8, maxWidth: 780, margin: '0 auto' }}>
              Bu araştırma, İstanbul'da yaşayan yetişkin bireylerin deniz kirliliği konusundaki bilinç düzeylerini belirlemeyi
              ve farkındalık kazandıracak etkili bir materyal geliştirmeyi amaçlamaktadır. Nitel araştırma yöntemlerinden
              biri olan <strong style={{ color: 'var(--ocean-foam)' }}>durum çalışması</strong> deseniyle gerçekleştirilen
              çalışmada "Deniz Kirliliğiyle Mücadele Kiti" hazırlanmış ve 27 gönüllüye uygulanmıştır.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
            {STATS.map((s, i) => (
              <div key={i} className="card-ocean" style={{ padding: '26px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ocean-bright)', fontWeight: 700, marginBottom: 6 }}>{s.value}</div>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.58)', lineHeight: 1.55 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ön Test → Son Test */}
      <section style={{ padding: '65px 24px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.3rem)', color: 'var(--ocean-surface)', marginBottom: 10 }}>
              Kit Öncesi ve Sonrası: Gerçek Katılımcı Cevapları
            </h2>
            <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, maxWidth: 520, margin: '0 auto' }}>
              Deniz Kirliliğiyle Mücadele Kiti uygulaması sonrasında bilgi düzeyleri belirgin biçimde arttı.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,180,216,0.15)' }}>
                <div style={{ padding: '20px 22px', background: 'rgba(139,69,19,0.15)', borderRight: '1px solid rgba(0,180,216,0.1)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#e8a87c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>{item.icon} Ön Test — {item.topic}</div>
                  <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.7)', fontStyle: 'italic', lineHeight: 1.55 }}>"{item.before}"</p>
                </div>
                <div style={{ padding: '20px 22px', background: 'rgba(45,106,79,0.15)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#74c69d', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>✓ Son Test — {item.topic}</div>
                  <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.82)', fontStyle: 'italic', lineHeight: 1.55 }}>"{item.after}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bölümler */}
      <section style={{ padding: '65px 24px', background: 'rgba(13,33,55,0.55)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.3rem)', color: 'var(--ocean-surface)', marginBottom: 10 }}>
              Deniz Kirliliğiyle Mücadele Kitinin Bölümleri
            </h2>
            <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14 }}>Araştırmanın 6 temel sorusuna karşılık gelen modüller</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <Link key={i} href={f.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px 22px', borderRadius: 16,
                  background: f.bg, border: `1px solid ${f.border}`, cursor: 'pointer', transition: 'all 0.28s',
                }}>
                  <div style={{ fontSize: 38, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ocean-surface)', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.58)', lineHeight: 1.6 }}>{f.desc}</p>
                  <div style={{ marginTop: 16, fontSize: 13, color: 'var(--ocean-bright)' }}>Keşfet →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Temel Soru */}
      <section style={{ padding: '65px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--ocean-surface)', marginBottom: 12 }}>
            Araştırmada Sorulan 6 Temel Soru
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.48)', fontSize: 14, marginBottom: 32 }}>
            Ön test ve son test olarak uygulanan bu sorular platformun her bölümüne karşılık geliyor.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SORULAR.map(item => (
              <Link key={item.n} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 18px', borderRadius: 11, textAlign: 'left',
                  background: 'rgba(14,61,92,0.32)', border: '1px solid rgba(0,180,216,0.13)', transition: 'all 0.2s',
                }}>
                  <div style={{ minWidth: 30, height: 30, borderRadius: '50%', background: 'rgba(0,180,216,0.18)', border: '1px solid rgba(0,180,216,0.38)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'var(--ocean-bright)' }}>{item.n}</div>
                  <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.72)', lineHeight: 1.5 }}>{item.q}</p>
                  <span style={{ marginLeft: 'auto', color: 'var(--ocean-bright)', fontSize: 16, flexShrink: 0 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '75px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,180,216,0.1)', background: 'linear-gradient(135deg,rgba(0,180,216,0.08) 0%,rgba(26,107,138,0.12) 100%)' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.1rem)', color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Sen de Deniz Kirliliğiyle Mücadele Kitine Katıl
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.58)', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
            Araştırma sonuçları, toplumsal bilinçlendirmenin deniz kirliliğiyle mücadelede
            <strong style={{ color: 'var(--ocean-foam)' }}> kritik öneme sahip olduğunu</strong> ortaya koyuyor.
          </p>
          <p style={{ color: 'rgba(202,240,248,0.4)', fontSize: 13, fontStyle: 'italic', marginBottom: 34 }}>
            "Bu materyal MEB EBA sistemine entegre edilerek veli-öğrenci ortak etkinlikleri kapsamında değerlendirilebilir." — Araştırma
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/oyunlar"><button className="btn-ocean" style={{ padding: '13px 32px' }}>🎮 Quiz'i Çöz</button></Link>
            <Link href="/etkinlikler">
              <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '13px 32px', borderRadius: 50, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>🔬 Etkinliklere Bak</button>
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ padding: '28px 24px', borderTop: '1px solid rgba(0,180,216,0.1)', textAlign: 'center', color: 'rgba(202,240,248,0.32)', fontSize: 13 }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'rgba(202,240,248,0.5)', marginBottom: 4 }}>🌊 Deniz Kirliliğiyle Mücadele Kiti</p>
        <p>İstanbul Deniz Farkındalık Araştırması · Coğrafya / Yer ve Deniz Bilimleri · MEB EBA Entegreli</p>
      </footer>
    </div>
  )
}
