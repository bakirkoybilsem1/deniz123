'use client'
import Link from 'next/link'

const BIREYSEL_ONTEST = [
  { code: 'K7', text: 'Bireysel olarak duyarlı davranmalı, denize çöp atmamalıyız.' },
  { code: 'K26', text: 'Daha az atık üretmeliyiz.' },
  { code: 'K18', text: 'Bir birey olarak yetiştirmekte olduğum oğlum adına gerekli hassasiyeti gösteriyorum.' },
]

const BIREYSEL_SONTEST = [
  { code: 'K3', text: 'Öncelikle denizlerin kirlenmemesi için duyarlı davranmak gerekir. Bu konuda çevremizden başlayarak toplumsal duyarlılığın artması için çaba harcamak ve tüm ülkelerdeki siyasal iktidarların bu konularda tedbir almasını sağlamaya çabalamak gerekir.' },
  { code: 'K10', text: 'Denize yabancı maddeler, çöp, plastik atmamalıyız; etrafımızdaki insanları bu konuda bilgilendirebiliriz, çocuklarımıza deniz kirliliğini anlatarak farkındalık oluşturabiliriz.' },
  { code: 'K6', text: 'Su kullanımına dikkat edilmeli, çevresel faktörler üzerinde toplumlar etkin olmalı, kimyasal veya farklı türdeki atıklar ayrıştırılmalı, denize çöp atılmamalı.' },
]

const COZUM_ADIMLARI = [
  { num: '01', icon: '🚯', title: 'Denize Çöp Atma', desc: 'En temel bireysel adım. Katılımcıların büyük çoğunluğu hem ön testte hem son testte bu noktayı vurguladı.' },
  { num: '02', icon: '💬', title: 'Çevreni Bilinçlendir', desc: 'K10: "Etrafımızdaki insanları bu konuda bilgilendirebiliriz." Farkındalık yaymanın en güçlü yolu sosyal çevreden başlamak.' },
  { num: '03', icon: '🧒', title: 'Çocuklara Örnek Ol', desc: 'Araştırma: "Yetişkinler doğru rol model olarak denizi koruma konusunda tutum sergileyerek toplumsal seferberlik başlatabilir."' },
  { num: '04', icon: '♻️', title: 'Atıkları Ayrıştır', desc: 'K6: "Kimyasal veya farklı türdeki atıklar ayrıştırılmalı." Geri dönüşüm deniz kirliliğini doğrudan azaltır.' },
  { num: '05', icon: '💧', title: 'Su Tasarrufu Yap', desc: 'K6: "Su kullanımına dikkat edilmeli." Su ayak izini düşürmek hem kaynakları korur hem deniz kirliliğini azaltır.' },
  { num: '06', icon: '🏛️', title: 'Toplumsal Baskı Oluştur', desc: 'K3: "Hükümetlerin ve yetkililerin bu konuda daha etkin davranmalarını sağlamak için çabalamak gerekir."' },
]

const ONERILER = [
  { icon: '📅', text: 'Uygulamalı etkinlikler daha uzun sürecek şekilde planlanabilir.' },
  { icon: '👨‍👩‍👧', text: 'Aile ve çocukların birlikte eğitim aldığı etkinlikler hem aile ilişkilerine katkı sağlar hem ortak hedefte hareket sağlar.' },
  { icon: '📚', text: 'Su kirliliğinin su okuryazarlığı ile ilişkisi araştırılabilir.' },
  { icon: '🏫', text: 'MEB EBA sistemine entegrasyon ile Deniz Kirliliğiyle Mücadele Kiti daha fazla kişiye ulaşabilir.' },
]

export default function CozumlerPage() {
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
          {[['← Ana Sayfa', '/'], ['Kirlilik', '/nedenler'], ['Müsilaj', '/musilaj'], ['Su Ayak İzi', '/su-ayak-izi'], ['🎮 Quiz', '/oyunlar']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: 'rgba(202,240,248,0.65)', textDecoration: 'none', fontSize: 13, padding: '5px 12px', borderRadius: 20 }}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '70px 24px 50px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 80%, rgba(45,106,79,0.12) 0%, transparent 58%)', borderBottom: '1px solid rgba(45,106,79,0.18)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(45,106,79,0.2)', border: '1px solid rgba(45,106,79,0.4)', borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700, color: '#74c69d', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>Araştırma Sorusu 5</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 700, color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Bireysel Çözümler
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(202,240,248,0.68)', lineHeight: 1.8, marginBottom: 20 }}>
            "Deniz kirliliğinin önlenmesi için bireysel olarak neler yapılabilir?" — Deniz Kirliliğiyle Mücadele Kiti
            araştırmasına katılan 27 yetişkinin ön test ve son test cevaplarından derlendi.
          </p>
          <div style={{ background: 'rgba(45,106,79,0.12)', border: '1px solid rgba(45,106,79,0.28)', borderRadius: 12, padding: '16px 20px', textAlign: 'left', maxWidth: 560, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#74c69d', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 7 }}>📋 Araştırma Sorusu</div>
            <p style={{ fontSize: 15, color: 'rgba(202,240,248,0.8)', fontStyle: 'italic' }}>"Deniz kirliliğinin önlenmesi için bireysel olarak neler yapılabilir?"</p>
          </div>
        </div>
      </section>

      {/* Ön/Son Test */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: 'var(--ocean-surface)', marginBottom: 28, textAlign: 'center' }}>Katılımcı Cevapları</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#e8a87c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Ön Test (Kısa & Yüzeysel)</div>
              {BIREYSEL_ONTEST.map((k, i) => (
                <div key={i} style={{ background: 'rgba(139,69,19,0.15)', border: '1px solid rgba(139,69,19,0.28)', borderRadius: 10, padding: '14px 16px', marginBottom: 10, display: 'flex', gap: 12 }}>
                  <div style={{ minWidth: 36, height: 36, borderRadius: '50%', background: 'rgba(139,69,19,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#e8a87c', flexShrink: 0 }}>{k.code}</div>
                  <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.68)', fontStyle: 'italic', lineHeight: 1.5 }}>"{k.text}"</p>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#74c69d', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Son Test (Detaylı & Kapsamlı)</div>
              {BIREYSEL_SONTEST.map((k, i) => (
                <div key={i} style={{ background: 'rgba(45,106,79,0.15)', border: '1px solid rgba(45,106,79,0.28)', borderRadius: 10, padding: '14px 16px', marginBottom: 10, display: 'flex', gap: 12 }}>
                  <div style={{ minWidth: 36, height: 36, borderRadius: '50%', background: 'rgba(45,106,79,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#74c69d', flexShrink: 0 }}>{k.code}</div>
                  <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.78)', fontStyle: 'italic', lineHeight: 1.5 }}>"{k.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Adım */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: 'var(--ocean-surface)', marginBottom: 10, textAlign: 'center' }}>
            6 Bireysel Adım
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 32 }}>
            Araştırma bulgularından derlenen somut öneriler
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {COZUM_ADIMLARI.map((a, i) => (
              <div key={i} style={{ background: 'rgba(45,106,79,0.12)', border: '1px solid rgba(45,106,79,0.28)', borderRadius: 12, padding: '22px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'rgba(116,198,157,0.5)', fontWeight: 700 }}>{a.num}</div>
                  <span style={{ fontSize: 26 }}>{a.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ocean-foam)', marginBottom: 7 }}>{a.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.58)', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Araştırma Önerileri */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: 'var(--ocean-surface)', marginBottom: 10, textAlign: 'center' }}>
            Araştırmanın Önerileri
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            Deniz Kirliliğiyle Mücadele Kiti araştırmasının sonuç bölümünden
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ONERILER.map((o, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'rgba(14,61,92,0.38)', border: '1px solid rgba(0,180,216,0.15)', borderRadius: 10, padding: '15px 18px' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{o.icon}</span>
                <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.72)', lineHeight: 1.6 }}>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/etkinlikler"><button className="btn-ocean">🔬 Etkinliklere Git</button></Link>
          <Link href="/oyunlar">
            <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '12px 24px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>🎮 Quiz'e Gir</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
