'use client'

import { useMemo, useState } from 'react'

/* ─── Game Data ─────────────────────────────────────────── */

const trashItems = [
  { name: 'Plastik Şişe', type: 'bad', icon: '🥤' },
  { name: 'Balık', type: 'good', icon: '🐟' },
  { name: 'Petrol Atığı', type: 'bad', icon: '🛢️' },
  { name: 'Deniz Çayırı', type: 'good', icon: '🌱' },
  { name: 'Poşet', type: 'bad', icon: '🛍️' },
  { name: 'Mercan', type: 'good', icon: '🪸' },
]

const riskQuestions = [
  {
    title: 'Fabrika atığı denize karışıyor.',
    options: [
      { text: 'Görmezden gel', point: -1 },
      { text: 'Yetkililere bildir', point: 2 },
    ],
  },
  {
    title: 'Sahilde plastik atık gördün.',
    options: [
      { text: 'Toplama kutusuna at', point: 2 },
      { text: 'Orada bırak', point: -1 },
    ],
  },
  {
    title: 'Evde gereksiz su akıyor.',
    options: [
      { text: 'Musluğu kapat', point: 2 },
      { text: 'Açık bırak', point: -1 },
    ],
  },
]

/* ─── Static Content ────────────────────────────────────── */

const pollutionTypes = [
  {
    icon: '🌊',
    title: 'Fiziksel Kirlilik',
    desc: 'Plastik, poşet, cam ve katı atıkların denize karışması. Deniz canlıları bu atıkları yiyecek zannedebilir.',
    accent: '#1e6fa5',
  },
  {
    icon: '🛢️',
    title: 'Kimyasal Kirlilik',
    desc: 'Sanayi tesislerinden sızan petrol, ağır metaller ve kimyasallar deniz ekosistemine kalıcı zarar verir.',
    accent: '#e74c3c',
  },
  {
    icon: '🌿',
    title: 'Biyolojik Kirlilik',
    desc: 'Tarım ve evsel atık suların denize karışmasıyla oluşan aşırı besin yüklenmesi (ötrofikasyon).',
    accent: '#f39c12',
  },
  {
    icon: '🌡️',
    title: 'Termal Kirlilik',
    desc: 'Fabrikaların soğutma suları deniz sıcaklığını yükselterek oksijen dengesini bozar.',
    accent: '#00b894',
  },
]

const causes = [
  {
    color: '#e74c3c',
    title: 'Evsel ve kentsel atıklar',
    desc: 'Arıtılmadan denize bırakılan evsel atık sular ve katı çöpler, en yaygın kirlilik kaynağıdır.',
  },
  {
    color: '#e67e22',
    title: 'Sanayi ve fabrika atıkları',
    desc: 'Kıyı bölgelerindeki tesislerin denetimsiz atıkları, su kaynaklarına karışarak denize ulaşmaktadır.',
  },
  {
    color: '#f1c40f',
    title: 'Tarım ilaçları ve gübreleri',
    desc: 'Yağmur suları ile taşınan kimyasallar besin tuzlarını artırır; müsilaj oluşumunu tetikler.',
  },
  {
    color: '#1e6fa5',
    title: 'Denizcilik ve petrol sızıntıları',
    desc: 'Tanker kazaları ve balıkçı teknelerinin yakıt sızıntıları deniz ekosistemini doğrudan etkiler.',
  },
  {
    color: '#8e44ad',
    title: 'Plastik ve mikroplastikler',
    desc: 'Parçalanan plastikler mikroplastiğe dönüşür; besin zinciriyle canlılara geçerek insan sağlığını tehdit eder.',
  },
]

const effects = [
  { icon: '🐠', title: 'Biyoçeşitlilik kaybı', desc: 'Kirlilik arttıkça deniz canlılarının yaşam alanları yok olmakta, türler tehlike altına girmektedir.', variant: 'danger' },
  { icon: '🦠', title: 'Müsilaj sorunu', desc: 'İlk kez 2007\'de İzmit Körfezi\'nde görülen müsilaj, balıkçılığı ve turizmi ciddi ölçüde sekteye uğratmaktadır.', variant: 'danger' },
  { icon: '🎣', title: 'Balıkçılık ekonomisi', desc: 'Deniz ürünleri stoklarının azalması, kıyı topluluklarının geçim kaynağını doğrudan tehdit etmektedir.', variant: 'warn' },
  { icon: '🏖️', title: 'Turizm ve kıyı yaşamı', desc: 'Kirli sahiller turizmi olumsuz etkiler; görsel güzellikler bozulurken sağlık riskleri artar.', variant: 'warn' },
  { icon: '💧', title: 'Su döngüsü bozulması', desc: 'Marmara Denizi artık boğaz akıntılarıyla kendini yeterince temizleyememektedir.', variant: 'blue' },
  { icon: '🌍', title: 'İklim değişikliği', desc: 'Denizlerin karbon emme kapasitesi azaldıkça küresel ısınma hız kazanmaktadır.', variant: 'blue' },
]

const actions = [
  { title: 'Tek kullanımlık plastiği azalt', desc: 'Matara ve bez çanta kullanarak denize karışan plastik miktarını azaltabilirsin.' },
  { title: 'Atıkları ayrıştır', desc: 'Geri dönüşüm kutularına doğru atık bırakmak, atıkların denize ulaşmasını önler.' },
  { title: 'Kıyı temizliklerine katıl', desc: 'Yerel gönüllü temizlik etkinlikleri deniz kirliliğiyle mücadelede doğrudan etki yaratır.' },
  { title: 'Yetkilileri bilgilendir', desc: 'Fabrika atıkları veya yasadışı döküntü gördüğünde ilgili kurumları haberdar et.' },
  { title: 'Bilinçli tüketici ol', desc: 'Sürdürülebilir balıkçılık ürünlerini tercih ederek deniz ekosistemini destekle.' },
  { title: 'Farkındalık yay', desc: 'Öğrendiklerini çevrendekilerle paylaşmak, değişimin en güçlü araçlarından biridir.' },
]

/* ─── Component ─────────────────────────────────────────── */

export default function Page() {
  /* game state */
  const [cleaned, setCleaned] = useState<string[]>([])
  const [wrong, setWrong] = useState(0)
  const [waterChoices, setWaterChoices] = useState({
    bottle: false, shortShower: false, lessMeat: false, recycle: false,
  })
  const [riskIndex, setRiskIndex] = useState(0)
  const [riskScore, setRiskScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const cleanScore  = cleaned.length
  const waterScore  = Object.values(waterChoices).filter(Boolean).length
  const totalScore  = useMemo(() => cleanScore + waterScore + riskScore, [cleanScore, waterScore, riskScore])

  function clickSeaItem(item: typeof trashItems[number]) {
    if (item.type === 'bad') {
      if (!cleaned.includes(item.name)) setCleaned([...cleaned, item.name])
    } else {
      setWrong(wrong + 1)
    }
  }

  function answerRisk(point: number) {
    setRiskScore(riskScore + point)
    if (riskIndex === riskQuestions.length - 1) setFinished(true)
    else setRiskIndex(riskIndex + 1)
  }

  function resetGame() {
    setCleaned([])
    setWrong(0)
    setWaterChoices({ bottle: false, shortShower: false, lessMeat: false, recycle: false })
    setRiskIndex(0)
    setRiskScore(0)
    setFinished(false)
  }

  const effectVariant: Record<string, string> = {
    danger: 'effectDanger',
    warn:   'effectWarn',
    blue:   'effectBlue',
  }

  return (
    <main style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: '#f0f8ff', color: '#1a1a2e' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(160deg, #0a3d62 0%, #1e6fa5 60%, #1abc9c 100%)',
        minHeight: 520, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', padding: '3rem 2rem 5rem',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.15)',
            color: '#fff', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            fontWeight: 500, padding: '5px 14px', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1.2rem',
          }}>
            Çevre Farkındalığı
          </span>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff',
            fontWeight: 700, lineHeight: 1.2, margin: '0 0 1rem',
          }}>
            Denizlerimiz <span style={{ color: '#7fecad' }}>Tehlikede</span>
          </h1>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 2rem' }}>
            Dünyanın %70'ini kaplayan okyanuslar binlerce yıldır yaşamın kaynağı olmuştur.
            Ancak insan faaliyetleri sonucunda deniz kirliliği küresel bir kriz hâline gelmiştir.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { num: '%70', lbl: 'Dünya yüzeyi' },
              { num: '8M+', lbl: 'Ton plastik / yıl' },
              { num: '2007', lbl: 'İlk müsilaj' },
              { num: '100+', lbl: 'Yıldır süren kriz' },
            ].map(s => (
              <div key={s.lbl} style={{
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 12, padding: '0.75rem 1.25rem', textAlign: 'center', minWidth: 110,
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.05em', marginTop: 2 }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          <a href="#bilgi" style={{
            display: 'inline-block', marginTop: '2rem',
            background: 'rgba(255,255,255,0.18)', color: '#fff',
            padding: '0.75rem 1.75rem', borderRadius: 10, fontWeight: 500, fontSize: '0.95rem',
            textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)',
          }}>
            Daha Fazla Öğren ↓
          </a>
        </div>

        {/* Wave */}
        <svg style={{ position: 'absolute', bottom: -2, left: 0, right: 0, width: '100%' }}
          viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0f8ff" />
        </svg>
      </section>

      {/* ── KIRLILIK NEDİR ── */}
      <section id="bilgi" style={{ padding: '3.5rem 1.5rem', background: '#f0f8ff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: '#1e6fa5', marginBottom: '0.4rem' }}>Temel Kavramlar</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0a3d62', margin: '0 0 0.75rem' }}>Deniz Kirliliği Nedir?</h2>
          <p style={{ fontSize: '0.95rem', color: '#5a6a7a', lineHeight: 1.75, maxWidth: 620, marginBottom: '2rem' }}>
            BM Deniz Hukuku Sözleşmesi'ne göre; insanların deniz çevresine zarar veren madde ya da enerji bırakması,
            bunun canlı kaynaklara, insan sağlığına ve deniz faaliyetlerine zarar vermesidir.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
            {pollutionTypes.map(t => (
              <div key={t.title} style={{
                background: '#fff', borderRadius: 14, padding: '1.25rem 1.25rem 1.5rem',
                border: '0.5px solid #d0e8f5', position: 'relative', overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: t.accent, borderRadius: '14px 14px 0 0' }} />
                <div style={{ fontSize: '1.5rem', margin: '0.5rem 0 0.75rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0a3d62', marginBottom: '0.4rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#5a6a7a', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEDENLER ── */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: '#1e6fa5', marginBottom: '0.4rem' }}>Nedenler</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0a3d62', margin: '0 0 0.75rem' }}>Kirliliğin Başlıca Kaynakları</h2>
          <p style={{ fontSize: '0.95rem', color: '#5a6a7a', lineHeight: 1.75, marginBottom: '2rem' }}>
            Deniz kirliliği tek bir kaynaktan değil, birbiriyle bağlantılı pek çok insan faaliyetinden kaynaklanmaktadır.
          </p>

          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#d0e8f5', borderRadius: 2 }} />
            {causes.map(c => (
              <div key={c.title} style={{ position: 'relative', marginBottom: '1.75rem', paddingLeft: '1.25rem' }}>
                <div style={{
                  position: 'absolute', left: '-1.75rem', top: 3,
                  width: 14, height: 14, borderRadius: '50%',
                  background: c.color, border: '2px solid #fff',
                  boxShadow: `0 0 0 2px ${c.color}`,
                }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0a3d62', marginBottom: 3 }}>{c.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#5a6a7a', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETKİLER ── */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f0f8ff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: '#1e6fa5', marginBottom: '0.4rem' }}>Sonuçlar</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0a3d62', margin: '0 0 0.75rem' }}>Kirliliğin Etkileri</h2>
          <p style={{ fontSize: '0.95rem', color: '#5a6a7a', lineHeight: 1.75, marginBottom: '2rem' }}>
            Deniz kirliliği yalnızca deniz canlılarını değil; insan sağlığını, ekonomiyi ve iklim dengesini de tehdit etmektedir.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: '1rem' }}>
            {effects.map(e => {
              const styles: Record<string, React.CSSProperties> = {
                danger: { background: '#fdf0ef', border: '0.5px solid #f5c6c4', color: '#c0392b' },
                warn:   { background: '#fef9ec', border: '0.5px solid #f5e0a0', color: '#856404' },
                blue:   { background: '#eaf4fc', border: '0.5px solid #a8d4ef', color: '#1a5276' },
              }
              const s = styles[e.variant]
              return (
                <div key={e.title} style={{ borderRadius: 14, padding: '1.25rem', textAlign: 'center', ...s }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{e.icon}</div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.4rem' }}>{e.title}</h4>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.55, opacity: 0.85 }}>{e.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ALINTI ── */}
      <section style={{ background: '#0a3d62', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <blockquote style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: '#fff',
          lineHeight: 1.7, maxWidth: 640, margin: '0 auto', fontStyle: 'italic',
        }}>
          "Denizler, insanlığın gündelik ve ekonomik hayatında önemli bir yere sahiptir.
          İnsanlar faaliyetlerini artırdıkça kirliliğin oranı artmakta ve biyoçeşitlilik giderek azalmaktadır."
        </blockquote>
        <cite style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'normal', letterSpacing: '0.08em' }}>
          Deniz Kirliliğiyle Mücadele Araştırması, İstanbul
        </cite>
      </section>

      {/* ── ÇÖZÜM ÖNERİLERİ ── */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: '#00b894', marginBottom: '0.4rem' }}>Ne Yapabiliriz?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0a3d62', margin: '0 0 0.75rem' }}>Çözüm Önerileri</h2>
          <p style={{ fontSize: '0.95rem', color: '#5a6a7a', lineHeight: 1.75, marginBottom: '2rem' }}>
            Bireysel davranışlar küçük görünse de toplu değişimin temelini oluşturur. İşte başlangıç noktaları:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(215px, 1fr))', gap: '1rem' }}>
            {actions.map(a => (
              <div key={a.title} style={{
                background: '#f5fafa', borderRadius: 14, padding: '1.2rem 1.2rem 1.4rem',
                borderLeft: '3px solid #00b894',
              }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 500, color: '#006653', marginBottom: '0.35rem' }}>{a.title}</h4>
                <p style={{ fontSize: '0.81rem', color: '#5a6a7a', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="#oyun" style={{
              display: 'inline-block', background: '#0a3d62', color: '#fff',
              padding: '0.9rem 2rem', borderRadius: 12, fontWeight: 500, fontSize: '0.95rem',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1e6fa5')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0a3d62')}
            >
              Oyuna Geç — Denizi Koru ↓
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OYUN BÖLÜMÜ
      ══════════════════════════════════════ */}
      <section id="oyun" style={{ padding: '3rem 1.5rem', background: '#f0f8ff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: '#1e6fa5', marginBottom: '0.4rem' }}>Etkileşimli Oyun</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0a3d62', margin: '0 0 2rem' }}>Deniz Görevleri</h2>

          {/* Score Panel */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem',
            background: '#fff', borderRadius: 14, padding: '1rem 1.25rem',
            border: '0.5px solid #d0e8f5',
          }}>
            {[
              { label: 'Temizlik', value: `${cleanScore} / 3` },
              { label: 'Karar',    value: `${waterScore} / 4` },
              { label: 'Risk',     value: `${riskScore}` },
              { label: 'Toplam',   value: `${totalScore}` },
            ].map(s => (
              <div key={s.label} style={{ flex: 1, minWidth: 80, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a6a7a', marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0a3d62' }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Mission Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>

            {/* Görev 1 */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '0.5px solid #d0e8f5' }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: '#1e6fa5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Görev 1</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0a3d62', margin: '0.25rem 0 0.35rem' }}>Denizi Temizle</h3>
              <p style={{ fontSize: '0.82rem', color: '#5a6a7a', marginBottom: '1rem' }}>Kirleticileri seç. Canlılara dokunma.</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {trashItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => clickSeaItem(item)}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      gap: 4, padding: '0.6rem 0.8rem', borderRadius: 10, cursor: 'pointer',
                      border: cleaned.includes(item.name)
                        ? '1.5px solid #00b894'
                        : '0.5px solid #d0e8f5',
                      background: cleaned.includes(item.name) ? '#e8faf5' : '#f8fbfe',
                      opacity: cleaned.includes(item.name) ? 0.6 : 1,
                      transition: 'all 0.15s',
                      minWidth: 72,
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <span style={{ fontSize: 11, color: '#5a6a7a', whiteSpace: 'nowrap' }}>{item.name}</span>
                  </button>
                ))}
              </div>

              {wrong > 0 && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#c0392b', background: '#fdf0ef', borderRadius: 8, padding: '0.5rem 0.75rem' }}>
                  ⚠️ Deniz canlılarına dokunma. Sadece kirleticileri temizle.
                </div>
              )}
            </div>

            {/* Görev 2 */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '0.5px solid #d0e8f5' }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: '#1e6fa5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Görev 2</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0a3d62', margin: '0.25rem 0 0.35rem' }}>Doğru Kararları Seç</h3>
              <p style={{ fontSize: '0.82rem', color: '#5a6a7a', marginBottom: '1rem' }}>Denizi koruyan davranışları işaretle.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {([
                  { key: 'bottle',      label: 'Matara kullanırım' },
                  { key: 'shortShower', label: 'Duş süremi azaltırım' },
                  { key: 'lessMeat',    label: 'Daha bilinçli tüketirim' },
                  { key: 'recycle',     label: 'Atıkları ayrıştırırım' },
                ] as const).map(c => (
                  <label key={c.key} style={{
                    display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
                    fontSize: '0.88rem', color: '#1a1a2e',
                  }}>
                    <input
                      type="checkbox"
                      checked={waterChoices[c.key]}
                      onChange={e => setWaterChoices({ ...waterChoices, [c.key]: e.target.checked })}
                      style={{ accentColor: '#00b894', width: 16, height: 16 }}
                    />
                    {c.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Görev 3 */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '0.5px solid #d0e8f5' }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: '#1e6fa5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Görev 3</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0a3d62', margin: '0.25rem 0 0.35rem' }}>Müsilaj Risk Kararı</h3>
              <p style={{ fontSize: '0.82rem', color: '#5a6a7a', marginBottom: '1rem' }}>Her durumda denizi koruyan seçimi yap.</p>

              {!finished ? (
                <div>
                  <p style={{ fontSize: '0.92rem', fontWeight: 500, color: '#0a3d62', marginBottom: '0.75rem' }}>
                    {riskQuestions[riskIndex].title}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {riskQuestions[riskIndex].options.map(opt => (
                      <button
                        key={opt.text}
                        onClick={() => answerRisk(opt.point)}
                        style={{
                          padding: '0.65rem 1rem', borderRadius: 10, cursor: 'pointer',
                          background: '#f0f8ff', border: '0.5px solid #a8d4ef',
                          fontSize: '0.88rem', color: '#0a3d62', textAlign: 'left',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#d0e8f5')}
                        onMouseLeave={e => (e.currentTarget.style.background = '#f0f8ff')}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <p style={{ fontSize: '0.92rem', fontWeight: 500, color: '#0a3d62' }}>Görev tamamlandı</p>
                  <p style={{ fontSize: '0.82rem', color: '#5a6a7a', marginTop: 4 }}>Risk puanın: {riskScore}</p>
                </div>
              )}
            </div>

            {/* Final */}
            <div style={{
              background: 'linear-gradient(135deg, #0a3d62 0%, #1e6fa5 100%)',
              borderRadius: 16, padding: '1.5rem', textAlign: 'center', color: '#fff',
            }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Final</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#fff', margin: '0.25rem 0 0.35rem' }}>Deniz Koruyucusu Rozeti</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', marginBottom: '1rem' }}>Görevlerden topladığın puana göre rozet kazan.</p>

              <div style={{ fontSize: '3rem', margin: '0.5rem 0' }}>
                {totalScore >= 10 ? '🏆' : totalScore >= 6 ? '🥈' : '🌊'}
              </div>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#7fecad', marginBottom: '1rem' }}>
                {totalScore >= 10 ? 'Usta Deniz Koruyucusu' : totalScore >= 6 ? 'Deniz Gönüllüsü' : 'Göreve Devam'}
              </p>

              <button
                onClick={resetGame}
                style={{
                  background: 'rgba(255,255,255,0.2)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.4)',
                  padding: '0.6rem 1.5rem', borderRadius: 10, cursor: 'pointer',
                  fontSize: '0.88rem', fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              >
                Baştan Oyna
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: '#0a3d62', color: 'rgba(255,255,255,0.75)',
        textAlign: 'center', padding: '1.5rem',
        display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.85rem',
      }}>
        <strong style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}>Deniz Görevleri</strong>
        <span>Öğren · Oyna · Karar Ver · Denizleri Koru</span>
      </footer>
    </main>
  )
}
