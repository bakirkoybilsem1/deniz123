'use client'

import { useMemo, useState } from 'react'

const stations = [
  {
    no: '01',
    title: 'Kirlilik Kaynakları',
    tag: 'Keşif',
    desc: 'Plastik, petrol, kimyasal atık ve bilinçsiz tüketimin denize nasıl ulaştığını öğren.',
    icon: '🌊',
  },
  {
    no: '02',
    title: 'Müsilaj Alarmı',
    tag: 'Analiz',
    desc: 'Azot-fosfor yükü, sıcaklık artışı ve durgun suyun müsilajla ilişkisini çöz.',
    icon: '🦠',
  },
  {
    no: '03',
    title: 'Su Ayak İzi Lab',
    tag: 'Simülasyon',
    desc: 'Günlük seçimlerinin görünmeyen su tüketimine nasıl dönüştüğünü hesapla.',
    icon: '💧',
  },
  {
    no: '04',
    title: 'Çözüm Planı',
    tag: 'Eylem',
    desc: 'Plastik azaltma, atık ayrıştırma ve bilinçli tüketim için uygulanabilir kararlar al.',
    icon: '✅',
  },
]

const quiz = [
  {
    q: 'Müsilaj oluşumunu hızlandıran önemli etken hangisidir?',
    options: ['Azot ve fosfor yükünün artması', 'Deniz suyunun tamamen donması', 'Balık sayısının artması'],
    answer: 0,
  },
  {
    q: 'Mikroplastikler neden tehlikelidir?',
    options: ['Besin zincirine karışabilir', 'Denizi mavi yaptığı için', 'Sadece sahilde kalır'],
    answer: 0,
  },
  {
    q: 'Su ayak izi neyi gösterir?',
    options: ['Bir ürün ya da davranış için harcanan toplam suyu', 'Deniz dalga boyunu', 'Sadece içilen suyu'],
    answer: 0,
  },
]

export default function Page() {
  const [coffee, setCoffee] = useState(1)
  const [shower, setShower] = useState(1)
  const [meat, setMeat] = useState(0)
  const [textile, setTextile] = useState(0)

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const water = useMemo(() => {
    return coffee * 140 + shower * 60 + meat * 500 + textile * 2700
  }, [coffee, shower, meat, textile])

  function selectAnswer(i: number) {
    if (selected !== null) return
    setSelected(i)
    if (i === quiz[step].answer) setScore(score + 1)
  }

  function next() {
    if (step === quiz.length - 1) {
      setDone(true)
      return
    }
    setStep(step + 1)
    setSelected(null)
  }

  function reset() {
    setStep(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  const active = quiz[step]

  return (
    <main>
      <section className="hero">
        <div className="noise" />

        <nav className="nav">
          <div className="brand">
            <span>🌊</span>
            <b>Deniz Koruyucuları</b>
          </div>

          <div className="navLinks">
            <a href="#rota">Rota</a>
            <a href="#lab">Laboratuvar</a>
            <a href="#gorev">Görev</a>
          </div>
        </nav>

        <div className="heroInner">
          <div className="kicker">Oyunlaştırılmış çevre farkındalık deneyimi</div>

          <h1>
            Deniz kirliliğini
            <span>görevlerle keşfet.</span>
          </h1>

          <p>
            Bu platform bir araştırma raporu değildir. Deniz kirliliği, müsilaj ve su ayak izi
            konularını görev istasyonları, simülasyon ve mini sınamalarla öğretir.
          </p>

          <div className="heroButtons">
            <a className="mainBtn" href="#rota">Göreve Başla</a>
            <a className="ghostBtn" href="#lab">Su Ayak İzi Lab</a>
          </div>
        </div>
      </section>

      <section className="dashboard">
        <div>
          <small>Platform türü</small>
          <strong>Etkileşimli öğrenme</strong>
        </div>
        <div>
          <small>İçerik dili</small>
          <strong>Teorik + uygulamalı</strong>
        </div>
        <div>
          <small>Hedef davranış</small>
          <strong>Fark et · karar al · uygula</strong>
        </div>
      </section>

      <section id="rota" className="section">
        <div className="head">
          <span>Görev Rotası</span>
          <h2>Deniz Koruyucusu olmak için 4 istasyonu tamamla.</h2>
        </div>

        <div className="map">
          {stations.map((s) => (
            <article className="station" key={s.no}>
              <div className="stationTop">
                <span>{s.no}</span>
                <em>{s.tag}</em>
              </div>
              <div className="stationIcon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="lab">
        <div className="section labGrid">
          <div>
            <span className="eyebrow">Su Ayak İzi Laboratuvarı</span>
            <h2>Günlük seçimlerini sayısal bir etkiye dönüştür.</h2>
            <p>
              Öğrenci burada tüketim davranışlarını girer ve görünmeyen su kullanımını fark eder.
              Amaç yargılamak değil; farkındalık oluşturmaktır.
            </p>
          </div>

          <div className="panel">
            <label>
              Kahve
              <input type="number" min="0" value={coffee} onChange={(e) => setCoffee(Number(e.target.value))} />
            </label>

            <label>
              Duş
              <input type="number" min="0" value={shower} onChange={(e) => setShower(Number(e.target.value))} />
            </label>

            <label>
              Et porsiyonu
              <input type="number" min="0" value={meat} onChange={(e) => setMeat(Number(e.target.value))} />
            </label>

            <label>
              Pamuklu ürün
              <input type="number" min="0" value={textile} onChange={(e) => setTextile(Number(e.target.value))} />
            </label>

            <div className="total">
              <small>Tahmini günlük etki</small>
              <strong>{water.toLocaleString('tr-TR')} L</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="gorev" className="section">
        <div className="head">
          <span>Mini Görev</span>
          <h2>Bilgini test et, Deniz Koruyucusu rozetini kazan.</h2>
        </div>

        <div className="mission">
          {!done ? (
            <>
              <div className="missionHeader">
                <b>Görev {step + 1} / {quiz.length}</b>
                <div className="bar">
                  <i style={{ width: `${((step + 1) / quiz.length) * 100}%` }} />
                </div>
              </div>

              <h3>{active.q}</h3>

              <div className="options">
                {active.options.map((o, i) => {
                  let cls = 'option'
                  if (selected !== null && i === active.answer) cls += ' correct'
                  if (selected === i && i !== active.answer) cls += ' wrong'

                  return (
                    <button key={o} className={cls} onClick={() => selectAnswer(i)}>
                      {o}
                    </button>
                  )
                })}
              </div>

              {selected !== null && (
                <button className="continue" onClick={next}>
                  {step === quiz.length - 1 ? 'Rozeti Gör' : 'Sonraki Görev'}
                </button>
              )}
            </>
          ) : (
            <div className="badgeBox">
              <div className="bigBadge">🏅</div>
              <h3>Deniz Koruyucusu Rozeti</h3>
              <strong>{score} / {quiz.length}</strong>
              <p>
                {score === quiz.length
                  ? 'Mükemmel! Tüm görevleri başarıyla tamamladın.'
                  : 'Görev tamamlandı. Daha yüksek puan için tekrar deneyebilirsin.'}
              </p>
              <button onClick={reset}>Tekrar Başlat</button>
            </div>
          )}
        </div>
      </section>

      <footer>
        <b>Deniz Koruyucuları Akademisi</b>
        <span>Öğren · Uygula · Görevleri Tamamla</span>
      </footer>
    </main>
  )
}
