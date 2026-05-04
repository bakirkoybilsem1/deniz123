'use client'

import { useState } from 'react'

export default function HomePage() {
  const [coffee, setCoffee] = useState(1)
  const [shower, setShower] = useState(1)
  const [quizResult, setQuizResult] = useState('')
  const waterTotal = coffee * 140 + shower * 60

  return (
    <main>
      <section className="hero">
        <div className="badge">Teorik Bilgi · Etkinlik · Oyunlaştırma</div>
        <h1>🌊 Deniz Kirliliğiyle Mücadele Kiti</h1>
        <p>Denizleri korumayı öğren, etkinliklerle uygula ve oyunlarla pekiştir.</p>
        <a href="#basla" className="btn">Başla</a>
      </section>

      <section id="basla" className="container">
        <h2>Öğrenme Modülleri</h2>

        <div className="grid">
          <div className="card">
            <h3>🌊 Deniz Kirliliği</h3>
            <p>Plastik, petrol, kimyasal atıklar ve bilinçsiz tüketimin deniz ekosistemine etkilerini öğren.</p>
          </div>

          <div className="card">
            <h3>🦠 Müsilaj</h3>
            <p>Müsilajın nasıl oluştuğunu, Marmara Denizi için neden önemli bir uyarı olduğunu keşfet.</p>
          </div>

          <div className="card">
            <h3>💧 Su Ayak İzi</h3>
            <p>Günlük yaşamda kullanılan ürünlerin görünmeyen su tüketimini fark et.</p>
          </div>

          <div className="card">
            <h3>✅ Çözümler</h3>
            <p>Plastik azaltma, atık ayrıştırma, su tasarrufu ve çevre farkındalığı için uygulanabilir adımlar öğren.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>🎯 Uygulamalı Etkinlik: Su Ayak İzi Hesapla</h2>

        <div className="activity">
          <label>
            Kahve sayısı
            <input
              type="number"
              min="0"
              value={coffee}
              onChange={(e) => setCoffee(Number(e.target.value))}
            />
          </label>

          <label>
            Duş sayısı
            <input
              type="number"
              min="0"
              value={shower}
              onChange={(e) => setShower(Number(e.target.value))}
            />
          </label>

          <div className="result">
            Bugünkü tahmini su ayak izin: <strong>{waterTotal} litre</strong>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>🎮 Mini Oyun: Doğru Cevabı Bul</h2>

        <div className="quiz">
          <p>Deniz kirliliğinin en önemli nedenlerinden biri hangisidir?</p>

          <button onClick={() => setQuizResult('Yanlış. Doğal olaylar olabilir ama en büyük etki çoğunlukla insan faaliyetleridir.')}>
            Doğal olaylar
          </button>

          <button onClick={() => setQuizResult('Doğru! Deniz kirliliğinde insan faaliyetleri çok büyük rol oynar.')}>
            İnsan faaliyetleri
          </button>

          <button onClick={() => setQuizResult('Yanlış. Yağmur tek başına temel neden değildir.')}>
            Yağmur
          </button>

          {quizResult && <div className="result">{quizResult}</div>}
        </div>
      </section>

      <footer>
        <p>Öğren · Uygula · Oyna · Denizleri Koru</p>
      </footer>
    </main>
  )
}
