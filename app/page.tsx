'use client'

import { useMemo, useState } from 'react'

const missions = [
  {
    title: 'Kirliliği Tanı',
    icon: '🌊',
    text: 'Deniz kirliliğinin kaynaklarını, plastik atıkları, petrol sızıntılarını ve kimyasal etkileri öğren.',
  },
  {
    title: 'Müsilajı Anla',
    icon: '🦠',
    text: 'Müsilajın neden oluştuğunu, deniz ekosistemine etkilerini ve Marmara Denizi için ne anlama geldiğini keşfet.',
  },
  {
    title: 'Su Ayak İzini Hesapla',
    icon: '💧',
    text: 'Günlük tüketim alışkanlıklarının görünmeyen su kullanımına nasıl dönüştüğünü fark et.',
  },
  {
    title: 'Çözüm Üret',
    icon: '✅',
    text: 'Plastik azaltma, atık ayrıştırma, su tasarrufu ve farkındalık oluşturma yollarını uygula.',
  },
]

const quizQuestions = [
  {
    q: 'Müsilaj oluşumunu hızlandıran temel etkenlerden biri hangisidir?',
    options: ['Deniz suyunun tamamen donması', 'Azot ve fosfor yükünün artması', 'Balık sayısının artması'],
    answer: 1,
  },
  {
    q: 'Mikroplastikler neden tehlikelidir?',
    options: ['Sadece görüntü kirliliği yapar', 'Besin zincirine karışabilir', 'Deniz suyunu tatlandırır'],
    answer: 1,
  },
  {
    q: 'Su ayak izi neyi ifade eder?',
    options: ['Bir ürünün üretiminde kullanılan toplam suyu', 'Deniz seviyesini', 'Yağmur miktarını'],
    answer: 0,
  },
]

export default function HomePage() {
  const [coffee, setCoffee] = useState(1)
  const [shower, setShower] = useState(1)
  const [meat, setMeat] = useState(0)
  const [bread, setBread] = useState(2)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const waterTotal = useMemo(() => {
    return coffee * 140 + shower * 60 + meat * 500 + bread * 40
  }, [coffee, shower, meat, bread])

  function answerQuiz(index: number) {
    if (selected !== null) return

    setSelected(index)

    if (index === quizQuestions[currentQuestion].answer) {
      setScore((s) => s + 1)
    }
  }

  function nextQuestion() {
    if (currentQuestion + 1 === quizQuestions.length) {
      setFinished(true)
      return
    }

    setCurrentQuestion((q) => q + 1)
    setSelected(null)
  }

  function restartQuiz() {
    setCurrentQuestion(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  const q = quizQuestions[currentQuestion]

  return (
    <main>
      <section className="hero">
        <div className="heroOverlay" />

        <div className="heroContent">
          <div className="badge">Çevre Eğitimi · Etkileşimli Öğrenme · Oyunlaştırma</div>

          <h1>
            Denizleri Korumayı
            <span> Öğren, Uygula ve Oyuna Dönüştür</span>
          </h1>

          <p>
            Deniz kirliliği, müsilaj ve su ayak izi konularını sade teorik bilgiler,
            uygulamalı görevler ve oyunlaştırılmış mini etkinliklerle keşfet.
          </p>

          <div className="heroActions">
            <a href="#moduller" className="primaryBtn">Keşfetmeye Başla</a>
            <a href="#oyun" className="secondaryBtn">Mini Göreve Git</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>%70</strong>
          <span>Dünya yüzeyi denizlerle kaplıdır</span>
        </div>
        <div>
          <strong>450</strong>
          <span>Yıl plastik şişenin doğada kalma süresi</span>
        </div>
        <div>
          <strong>8M+</strong>
          <span>Ton plastik her yıl denizlere karışır</span>
        </div>
      </section>

      <section id="moduller" className="container">
        <div className="sectionHead">
          <span>01 · Teorik Öğrenme</span>
          <h2>Konuyu Parçalara Ayır, Adım Adım Öğren</h2>
          <p>
            Platform, araştırma raporu formatı yerine öğrenme modülleri üzerinden ilerler.
            Her modül kısa, anlaşılır ve uygulanabilir bilgi sunar.
          </p>
        </div>

        <div className="missionGrid">
          {missions.map((item) => (
            <article className="missionCard" key={item.title}>
              <div className="missionIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="container twoCol">
          <div>
            <span className="miniLabel">02 · Uygulamalı Etkinlik</span>
            <h2>Günlük Su Ayak İzi Simülatörü</h2>
            <p>
              Bu etkinlik, öğrencinin günlük davranışlarını sayısal bir sonuca dönüştürür.
              Böylece soyut bir çevre kavramı, kişisel ve anlaşılır bir deneyime dönüşür.
            </p>
          </div>

          <div className="calculator">
            <label>
              Kahve
              <input type="number" min="0" value={coffee} onChange={(e) => setCoffee(Number(e.target.value))} />
              <small>1 fincan ≈ 140 litre</small>
            </label>

            <label>
              Duş
              <input type="number" min="0" value={shower} onChange={(e) => setShower(Number(e.target.value))} />
              <small>1 duş ≈ 60 litre</small>
            </label>

            <label>
              Et tüketimi
              <input type="number" min="0" value={meat} onChange={(e) => setMeat(Number(e.target.value))} />
              <small>1 porsiyon ≈ 500 litre</small>
            </label>

            <label>
              Ekmek
              <input type="number" min="0" value={bread} onChange={(e) => setBread(Number(e.target.value))} />
              <small>1 dilim ≈ 40 litre</small>
            </label>

            <div className="waterResult">
              <span>Tahmini günlük su ayak izin</span>
              <strong>{waterTotal.toLocaleString('tr-TR')} litre</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="oyun" className="container">
        <div className="sectionHead">
          <span>03 · Oyunlaştırılmış Görev</span>
          <h2>Deniz Koruyucusu Mini Görevi</h2>
          <p>
            Kısa sorularla öğrencinin öğrendiği kavramları pekiştirmesi sağlanır.
            Doğru cevaplar ilerleme ve puan hissi oluşturur.
          </p>
        </div>

        <div className="gameCard">
          {!finished ? (
            <>
              <div className="progress">
                <span>Soru {currentQuestion + 1} / {quizQuestions.length}</span>
                <div>
                  <i style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
                </div>
              </div>

              <h3>{q.q}</h3>

              <div className="answers">
                {q.options.map((option, index) => {
                  const isCorrect = q.answer === index
                  const isSelected = selected === index

                  let className = 'answerBtn'
                  if (selected !== null && isCorrect) className += ' correct'
                  if (selected !== null && isSelected && !isCorrect) className += ' wrong'

                  return (
                    <button className={className} key={option} onClick={() => answerQuiz(index)}>
                      {option}
                    </button>
                  )
                })}
              </div>

              {selected !== null && (
                <button className="nextBtn" onClick={nextQuestion}>
                  {currentQuestion + 1 === quizQuestions.length ? 'Sonucu Gör' : 'Sonraki Soru'}
                </button>
              )}
            </>
          ) : (
            <div className="scoreBox">
              <span>Görev Tamamlandı</span>
              <strong>{score} / {quizQuestions.length}</strong>
              <p>
                {score === quizQuestions.length
                  ? 'Harika! Deniz koruyucusu rozetini kazandın.'
                  : 'Güzel başlangıç. Modülleri tekrar inceleyerek puanını artırabilirsin.'}
              </p>
              <button onClick={restartQuiz}>Tekrar Oyna</button>
            </div>
          )}
        </div>
      </section>

      <section className="container">
        <div className="callout">
          <h2>Bu Platformun Amacı</h2>
          <p>
            Bu sayfa bir araştırma raporu değildir. Amaç; öğrencilerin ve ailelerin deniz
            kirliliğini anlaması, günlük yaşamla ilişkilendirmesi ve çevre dostu davranışlar
            geliştirmesidir.
          </p>
        </div>
      </section>

      <footer>
        <strong>Deniz Kirliliğiyle Mücadele Kiti</strong>
        <span>Öğren · Uygula · Oyna · Denizleri Koru</span>
      </footer>
    </main>
  )
}
