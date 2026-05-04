'use client'

import { useMemo, useState } from 'react'

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

export default function Page() {
  const [cleaned, setCleaned] = useState<string[]>([])
  const [wrong, setWrong] = useState(0)

  const [waterChoices, setWaterChoices] = useState({
    bottle: false,
    shortShower: false,
    lessMeat: false,
    recycle: false,
  })

  const [riskIndex, setRiskIndex] = useState(0)
  const [riskScore, setRiskScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const cleanScore = cleaned.length
  const waterScore = Object.values(waterChoices).filter(Boolean).length

  const totalScore = useMemo(() => {
    return cleanScore + waterScore + riskScore
  }, [cleanScore, waterScore, riskScore])

  function clickSeaItem(item: typeof trashItems[number]) {
    if (item.type === 'bad') {
      if (!cleaned.includes(item.name)) {
        setCleaned([...cleaned, item.name])
      }
    } else {
      setWrong(wrong + 1)
    }
  }

  function answerRisk(point: number) {
    setRiskScore(riskScore + point)

    if (riskIndex === riskQuestions.length - 1) {
      setFinished(true)
    } else {
      setRiskIndex(riskIndex + 1)
    }
  }

  function resetGame() {
    setCleaned([])
    setWrong(0)
    setWaterChoices({
      bottle: false,
      shortShower: false,
      lessMeat: false,
      recycle: false,
    })
    setRiskIndex(0)
    setRiskScore(0)
    setFinished(false)
  }

  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <span className="label">Etkileşimli çevre oyunu</span>
          <h1>Deniz Görevleri</h1>
          <p>
            Denizi kirletenleri bul, doğru kararları ver, deniz koruyucusu rozetini kazan.
          </p>
          <a href="#oyun" className="startBtn">Oyuna Başla</a>
        </div>
      </section>

      <section id="oyun" className="gameWrap">
        <div className="scorePanel">
          <div>
            <small>Temizlik</small>
            <strong>{cleanScore} / 3</strong>
          </div>
          <div>
            <small>Karar</small>
            <strong>{waterScore} / 4</strong>
          </div>
          <div>
            <small>Risk</small>
            <strong>{riskScore}</strong>
          </div>
          <div>
            <small>Toplam</small>
            <strong>{totalScore}</strong>
          </div>
        </div>

        <div className="missionGrid">
          <section className="missionCard seaMission">
            <div className="missionHead">
              <span>Görev 1</span>
              <h2>Denizi Temizle</h2>
              <p>Kirleticileri seç. Canlılara dokunma.</p>
            </div>

            <div className="seaBox">
              {trashItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => clickSeaItem(item)}
                  className={cleaned.includes(item.name) ? 'seaItem cleaned' : 'seaItem'}
                >
                  <span>{item.icon}</span>
                  <small>{item.name}</small>
                </button>
              ))}
            </div>

            {wrong > 0 && (
              <div className="warning">
                Deniz canlılarına dokunma. Sadece kirleticileri temizle.
              </div>
            )}
          </section>

          <section className="missionCard">
            <div className="missionHead">
              <span>Görev 2</span>
              <h2>Doğru Kararları Seç</h2>
              <p>Denizi koruyan davranışları işaretle.</p>
            </div>

            <div className="choiceList">
              <label>
                <input
                  type="checkbox"
                  checked={waterChoices.bottle}
                  onChange={(e) => setWaterChoices({ ...waterChoices, bottle: e.target.checked })}
                />
                Matara kullanırım
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={waterChoices.shortShower}
                  onChange={(e) => setWaterChoices({ ...waterChoices, shortShower: e.target.checked })}
                />
                Duş süremi azaltırım
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={waterChoices.lessMeat}
                  onChange={(e) => setWaterChoices({ ...waterChoices, lessMeat: e.target.checked })}
                />
                Daha bilinçli tüketirim
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={waterChoices.recycle}
                  onChange={(e) => setWaterChoices({ ...waterChoices, recycle: e.target.checked })}
                />
                Atıkları ayrıştırırım
              </label>
            </div>
          </section>

          <section className="missionCard">
            <div className="missionHead">
              <span>Görev 3</span>
              <h2>Müsilaj Risk Kararı</h2>
              <p>Her durumda denizi koruyan seçimi yap.</p>
            </div>

            {!finished ? (
              <div className="riskBox">
                <h3>{riskQuestions[riskIndex].title}</h3>

                {riskQuestions[riskIndex].options.map((option) => (
                  <button key={option.text} onClick={() => answerRisk(option.point)}>
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="resultBox">
                <h3>Görev tamamlandı</h3>
                <p>Risk puanın: {riskScore}</p>
              </div>
            )}
          </section>

          <section className="missionCard finalCard">
            <div className="missionHead">
              <span>Final</span>
              <h2>Deniz Koruyucusu Rozeti</h2>
              <p>Görevlerden topladığın puana göre rozet kazan.</p>
            </div>

            <div className="badge">
              {totalScore >= 10 ? '🏆' : totalScore >= 6 ? '🥈' : '🌊'}
            </div>

            <h3>
              {totalScore >= 10
                ? 'Usta Deniz Koruyucusu'
                : totalScore >= 6
                ? 'Deniz Gönüllüsü'
                : 'Göreve Devam'}
            </h3>

            <button className="resetBtn" onClick={resetGame}>
              Baştan Oyna
            </button>
          </section>
        </div>
      </section>

      <footer>
        <strong>Deniz Görevleri</strong>
        <span>Oyna · Karar Ver · Denizleri Koru</span>
      </footer>
    </main>
  )
}
