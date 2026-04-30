'use client'
import Link from 'next/link'

const NEDENLER = [
  { icon: '🧴', title: 'Plastik Atıklar', badge: 'En büyük kaynak', desc: 'Katılımcı K9: "İnsan kaynaklı plastik atık, akaryakıt, insan neslinin çoğalması kirliliğin başlıca sebepleridir."', detail: 'Tek kullanımlık plastikler deniz diplerinde yüzyıllarca parçalanmadan kalabilir. Mikroplastikler deniz canlılarının sindirim sistemine girer.' },
  { icon: '🏭', title: 'Sanayi Atıkları', badge: 'Kimyasal tehlike', desc: 'Katılımcı K7: "Fabrikaların atıklarını denize atmaları, gemilerin atıklarını denize boşaltmaları kirliliğe yol açıyor."', detail: 'Fabrikalar ve sanayi tesislerinin zararlı kimyasalları doğrudan su kaynaklarına deşarjı ağır metal birikimine yol açar.' },
  { icon: '🌾', title: 'Tarım Kaynaklı Kirlilik', badge: 'Gizli tehdit', desc: 'Katılımcı K9: "Yapay tohum gübre kullanımı" deniz kirliliğinin önemli nedenlerinden biri.', detail: 'Tarım arazilerinden yıkanan gübre ve pestisitler nehirler aracılığıyla denize ulaşır. Aşırı besin tuzları alg patlamalarına neden olur.' },
  { icon: '🛢️', title: 'Petrol Sızıntıları', badge: 'Acil tehlike', desc: 'Katılımcı K1: "Petrol türevlerinin yaygınlaşması ve plastik çöplerin denize atılması."', detail: 'Petrol sızıntıları hızla yayılarak deniz yüzeyinde bir film oluşturur ve oksijen geçişini engeller. Tüm ekosistemi etkiler.' },
  { icon: '🏗️', title: 'Çarpık Kentleşme', badge: 'Yapısal sorun', desc: 'Katılımcı K10: "Çarpık kentleşme, kontrolsüz nüfusa bağlı olarak gereksiz su kullanımı, atıklar."', detail: 'Plansız kentleşme yetersiz atık yönetim altyapısına, artan kirlilik yüküne ve ekosistemlerin tahribatına yol açar.' },
  { icon: '👥', title: 'Nüfus Artışı', badge: 'Uzun vadeli baskı', desc: 'Katılımcı K9: "İnsan neslinin çoğalması" kirliliğin temel sebeplerinden biri olarak gösterildi.', detail: 'Artan nüfus daha fazla atık, daha fazla kaynak tüketimi ve deniz ekosistemi üzerinde daha büyük baskı anlamına gelir.' },
]

const ETKILERI = [
  { icon: '🐠', title: 'Besin Zinciri Bozulması', desc: 'K3: "Kirli suda büyüyen balıkları yemek insan hayatını da olumsuz etkiler." Kirlilik sadece deniz canlılarını değil, insanları da tehdit eder.' },
  { icon: '🫁', title: 'Oksijen Azalması', desc: 'K25: "Balıklar ve mercanlar suda çözünmüş oksijenlerden yararlanır. Kirlilik bu oksijenin azalmasına neden olur."' },
  { icon: '🌿', title: 'Ekosistem Tahribatı', desc: 'K14: "Plastik vb. atıklardan dolayı balıkların oksijen almasına engel olmakta. Dolayısıyla ekosistemin bozulması söz konusu olur."' },
  { icon: '🌊', title: 'Marmara\'nın Çaresizliği', desc: 'Araştırma: Marmara Denizi artık Çanakkale ve İstanbul boğazlarından gerçekleşen su akımlarıyla bile kendini temizleyemiyor.' },
]

export default function NedenlerPage() {
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
          {[['← Ana Sayfa', '/'], ['Müsilaj', '/musilaj'], ['Su Ayak İzi', '/su-ayak-izi'], ['Çözümler', '/cozumler'], ['🎮 Quiz', '/oyunlar']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: 'rgba(202,240,248,0.65)', textDecoration: 'none', fontSize: 13, padding: '5px 12px', borderRadius: 20 }}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '70px 24px 50px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 80%, rgba(0,180,216,0.1) 0%, transparent 58%)', borderBottom: '1px solid rgba(0,180,216,0.12)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,180,216,0.14)', border: '1px solid rgba(0,180,216,0.32)', borderRadius: 20, padding: '5px 16px', fontSize: 11, fontWeight: 700, color: 'var(--ocean-foam)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>Araştırma Soruları 1 · 2 · 3</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 700, color: 'var(--ocean-surface)', marginBottom: 14 }}>
            Deniz Kirliliği Nedir?
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(202,240,248,0.68)', lineHeight: 1.8, marginBottom: 20 }}>
            BM Deniz Hukuku Sözleşmesi'ne göre deniz kirliliği; "zararlı etkilerle sonuçlanan
            madde veya enerjinin deniz çevresine girmesi" olarak tanımlanır.
          </p>
          <div style={{ background: 'rgba(14,61,92,0.45)', border: '1px solid rgba(0,180,216,0.2)', borderRadius: 12, padding: '18px 22px', textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ocean-bright)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>📋 Araştırma Soruları</div>
            <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.75)', lineHeight: 1.6, marginBottom: 6 }}>1. Deniz kirliliği nedir? Konusundaki görüşleriniz neler?</p>
            <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.75)', lineHeight: 1.6, marginBottom: 6 }}>2. Deniz kirliliğinin nedenleri neler olabilir?</p>
            <p style={{ fontSize: 14, color: 'rgba(202,240,248,0.75)', lineHeight: 1.6 }}>3. Deniz kirliliği, deniz canlılarını nasıl etkilemektedir?</p>
          </div>
        </div>
      </section>

      {/* BM Tanımı */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.22)', borderRadius: 14, padding: '28px 30px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ocean-bright)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>BM Deniz Hukuku Sözleşmesi — Resmi Tanım</div>
            <p style={{ fontSize: 16, color: 'rgba(202,240,248,0.85)', lineHeight: 1.8, fontStyle: 'italic' }}>
              "Deniz çevresinin kirlenmesi; insanların, doğrudan veya dolaylı olarak canlı kaynaklara, insan sağlığına,
              balıkçılık dâhil denizcilik faaliyetlerine engel olması, deniz suyunun kullanımında kalitenin bozulması
              ve görsel güzelliklerin azalması gibi zararlı etkilerle sonuçlanan madde veya enerjinin deniz çevresine girmesi."
            </p>
            <p style={{ fontSize: 12, color: 'rgba(202,240,248,0.45)', marginTop: 10 }}>Kaynak: BMDHS Madde 1/(4) · Tabanlı & Güneysu, 2021</p>
          </div>
        </div>
      </section>

      {/* Nedenler */}
      <section style={{ padding: '55px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--ocean-surface)', marginBottom: 10, textAlign: 'center' }}>
            Deniz Kirliliğinin Nedenleri
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 32 }}>
            Araştırmacının belirlediği nedenler ve katılımcıların kendi cevaplarından örnekler
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 18 }}>
            {NEDENLER.map((n, i) => (
              <div key={i} className="card-ocean" style={{ padding: '22px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{n.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ocean-foam)' }}>{n.title}</h3>
                    <div style={{ display: 'inline-block', background: 'rgba(139,69,19,0.22)', border: '1px solid rgba(139,69,19,0.38)', borderRadius: 10, padding: '2px 10px', fontSize: 11, color: '#e8a87c', marginTop: 2 }}>{n.badge}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.6)', lineHeight: 1.55, marginBottom: 8, fontStyle: 'italic', borderLeft: '2px solid rgba(0,180,216,0.25)', paddingLeft: 10 }}>{n.desc}</p>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.5)', lineHeight: 1.55 }}>{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etkileri */}
      <section style={{ padding: '55px 24px', background: 'rgba(13,33,55,0.7)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--ocean-surface)', marginBottom: 10, textAlign: 'center' }}>
            Deniz Canlılarına Etkileri
          </h2>
          <p style={{ color: 'rgba(202,240,248,0.5)', fontSize: 14, textAlign: 'center', marginBottom: 32 }}>Katılımcıların son test cevaplarından</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {ETKILERI.map((e, i) => (
              <div key={i} style={{ background: 'rgba(14,61,92,0.4)', border: '1px solid rgba(0,180,216,0.18)', borderRadius: 12, padding: '20px 18px' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{e.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ocean-foam)', marginBottom: 8 }}>{e.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(202,240,248,0.65)', lineHeight: 1.6, fontStyle: 'italic' }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/musilaj"><button className="btn-ocean">🦠 Müsilaj Sayfası</button></Link>
          <Link href="/cozumler">
            <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '12px 24px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>✅ Çözümler</button>
          </Link>
          <Link href="/oyunlar">
            <button style={{ background: 'transparent', color: 'var(--ocean-foam)', border: '1.5px solid rgba(0,180,216,0.38)', padding: '12px 24px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>🎮 Quiz'e Gir</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
