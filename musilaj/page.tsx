'use client'
import Link from 'next/link'

const KATILIMCI_ONTEST = [
  { code: 'K8', text: 'Bilmiyorum.' },
  { code: 'K16', text: 'Su kirliliğidir.' },
  { code: 'K20', text: 'Müsilajın deniz kirliliğine sebep olması açısından ilişkisi var.' },
]

const KATILIMCI_SONTEST = [
  { code: 'K13', text: 'Denizdeki mikroorganizmanın çoğalmasıyla oluşan deniz salyası denizi kirletmesiyle deniz kirliliğine etkisi olur.' },
  { code: 'K11', text: 'Fitoplankton gibi bazı mikroorganizmaların kontrolsüz biçimde çoğalmasıyla deniz tabanında ve yüzeyinde oluşan yapışkan tabakadır. Müsilaj, aşırı kirliliğin oluşması nedeniyle meydana gelen yapışkan çamur tabakasıdır. Kirlilik ve müsilaj doğrudan ilişkilidir.' },
  { code: 'K1', text: 'Deniz dibinde oluşan kirliliklerin deniz canlılarını etkilemesi sonucu meydana gelen yapışkan bir madde. Bu madde çoğalarak deniz yüzeyini kaplayan denizin oksijen almasını engelleyerek deniz canlılarının yaşamını tehlikeye atar.' },
]

const MUSILAJ_FACTS = [
  { icon: '📅', title: 'İlk Görülme', desc: '2007 yılında İzmit Körfezi\'nde ilk kez belgelendi. Balıkçılığı ve turizmi ciddi biçimde olumsuz etkiledi.' },
  { icon: '🌡️', title: 'Oluşum Koşulları', desc: 'Sıcaklık artışı, yüksek besin tuzları (nitrat, fosfat) ve durgun su ortamı fitoplankton patlamasını tetikler.' },
  { icon: '🫁', title: 'Oksijen Tükenmesi', desc: 'Deniz yüzeyini kaplayan müsilaj tabakası, oksijenin suya geçişini engelleyerek "ölü bölgeler" oluşturur.' },
  { icon: '🐟', title: 'Canlı Ölümleri', desc: 'Balıklar ve diğer deniz canlıları solunum yapamaz hale gelir. Besin zinciri bütünüyle bozulur.' },
  { icon: '🌊', title: 'Marmara Denizi', desc: 'Marmara Denizi, Çanakkale ve İstanbul boğazlarından gerçekleşen su akımlarıyla kendini temizleyebiliyordu — fakat artık bu akımlar yetersiz kalıyor.' },
  { icon: '🧪', title: 'Kirlilik Bağlantısı', desc: 'Denize boşaltılan atık sular, gübre kalıntıları ve sanayi deşarjları müsilaj oluşumunu doğrudan hızlandırır.' },
]

export default function MusilajPage() {
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
          {[['← Ana Sayfa', '/'], ['Kirlilik Nedir?', '/nedenler'], ['Su Ayak İzi', '/su-ayak-izi'], ['Çözümler', '/cozumler'], ['🎮 Quiz', '/oyunlar']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: 'rgba(202,240,248,0.65)', textDecoration: 'none', fontSize: 13, padding: '5px 12px', borderRadius: 20 }}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', borderBottom: '1px solid rgba(231,76,60,0.15)', background: 'radial-gradient(ellipse at 50% 80%, rgba(231,76,60,0.08) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(231,76,60,0.15)', border: '1px solid rgba(231,76,60,0.35)', borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700, color: '#f1948a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Araştırma Sorusu 4
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, color: 'var(--ocean-surface)', marginBottom: 12 }}>
            Müsilaj Nedir?
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(202,240,248,0.68)', lineHeight: 1.8, marginBottom: 20 }}>
            Deniz kirliliği ve müsilaj arasında nasıl bir ilişki var? Araştırmaya katılan 27 yetişkinin
            ön test ve son test cevaplarından öğren.
          </p>
          <div style={{ background: 'rgba(231,76,60,0.12)', border: '1px solid rgba(231,76,60,0.25)', borderRadius: 12, padding: '18px 22px', textAlign: 'left', maxWidth: 620, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#f1948a', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>📋 Araştırma Sorusu</div>
            <p style={{ fontSize: 15, color: 'rgba(202,240,248,0.82)', fontStyle: 'italic', lineHeight: 1.6 }}>
              "Müsilaj nedir? Deniz kirliliği ve müsilaj arasında nasıl bir ilişki olabilir?"
            </p>
          </div>
        </div>
      </section>

      {/* Tanım */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--ocean-surface)', marginBottom: 28, textAlign: 'center' }}>
            Müsilaj Nedir? Bilimsel Tanım
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
            {MUSILAJ_FACTS.map((f, i) => (
              <div key={i} className="card-ocean" style={{ padding: '22px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ocean-foam)', marginBottom: 7 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.62)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ön Test Cevapları */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: 'var(--ocean-surface)', marginBottom: 8, textAlign: 'center' }}>
            Ön Test: Deniz Kirliliğiyle Mücadele Kiti Öncesi Cevaplar
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            Katılımcıların büyük çoğunluğu müsilajı bilmiyordu veya yanlış tanımladı.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {KATILIMCI_ONTEST.map((k, i) => (
              <div key={i} style={{ background: 'rgba(139,69,19,0.18)', border: '1px solid rgba(139,69,19,0.3)', borderRadius: 10, padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: '50%', background: 'rgba(139,69,19,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#e8a87c', flexShrink: 0 }}>{k.code}</div>
                <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.72)', fontStyle: 'italic', lineHeight: 1.6 }}>"{k.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Son Test Cevapları */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: 'var(--ocean-surface)', marginBottom: 8, textAlign: 'center' }}>
            Son Test: Deniz Kirliliğiyle Mücadele Kiti Sonrası Cevaplar
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            Deniz Kirliliğiyle Mücadele Kiti uygulaması sonrası tüm katılımcılar müsilajı doğru tanımladı.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {KATILIMCI_SONTEST.map((k, i) => (
              <div key={i} style={{ background: 'rgba(45,106,79,0.18)', border: '1px solid rgba(45,106,79,0.32)', borderRadius: 10, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: '50%', background: 'rgba(45,106,79,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#74c69d', flexShrink: 0 }}>{k.code}</div>
                <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.82)', fontStyle: 'italic', lineHeight: 1.6 }}>"{k.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonuç */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Sonuç: Müsilaj ve Deniz Kirliliği Doğrudan İlişkili
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
            Araştırmaya katılan yetişkinler, Deniz Kirliliğiyle Mücadele Kiti uygulaması öncesinde müsilajı
            tanımlayamıyorken, uygulama sonrasında müsilajın oluşum mekanizmasını ve deniz kirliliğiyle
            doğrudan ilişkisini açıklayabildiler.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/nedenler"><button className="btn-ocean">🌊 Kirlilik Nedenleri</button></Link>
            <Link href="/oyunlar">
              <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '12px 24px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>🎮 Quiz'e Gir</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
