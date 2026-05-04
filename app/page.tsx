
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{
--ocean:#0a4f6e;--ocean-mid:#1a7a9e;--ocean-light:#5bb8d4;
--seaweed:#2d6a4f;--seaweed-light:#74c69d;
--sand:#f5ede0;--sand-dark:#c9a87a;
--text:#1a2e3a;--muted:#5a7a8a;--bg:#f9f6f1;--white:#fff;
--accent:#e07b39;
}
body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--bg);line-height:1.65}
h1,h2,h3{font-family:'Playfair Display',serif}
.wrap{max-width:860px;margin:0 auto;padding:0 20px 60px}

nav{display:flex;align-items:center;justify-content:space-between;padding:18px 0 14px;border-bottom:1px solid rgba(10,79,110,0.1);margin-bottom:0}
.nav-brand{font-family:'Playfair Display',serif;font-size:16px;color:var(--ocean);font-weight:700}
.nav-brand em{font-style:normal;color:var(--accent)}
.nav-links{display:flex;gap:4px;flex-wrap:wrap}
.nav-links button{background:none;border:none;font-size:12.5px;color:var(--muted);cursor:pointer;padding:5px 10px;border-radius:6px;font-family:'DM Sans',sans-serif;transition:all 0.18s}
.nav-links button:hover,.nav-links button.active{color:var(--ocean);background:rgba(10,79,110,0.07)}

.page{display:none}.page.active{display:block}

/* HOME */
.hero{padding:52px 0 36px;display:grid;grid-template-columns:1.15fr 0.85fr;gap:44px;align-items:center}
.hero-tag{display:inline-block;font-size:10.5px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:var(--ocean-mid);background:rgba(91,184,212,0.13);border:1px solid rgba(91,184,212,0.28);border-radius:20px;padding:4px 12px;margin-bottom:16px}
.hero h1{font-size:clamp(1.9rem,3.5vw,2.7rem);line-height:1.1;color:var(--ocean);margin-bottom:14px}
.hero h1 em{font-style:normal;color:var(--accent)}
.hero p{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:24px}
.cta-row{display:flex;gap:10px;flex-wrap:wrap}
.btn-p{background:var(--ocean);color:#fff;border:none;border-radius:7px;padding:11px 22px;font-size:13.5px;font-weight:500;cursor:pointer;transition:background 0.2s;font-family:'DM Sans',sans-serif}
.btn-p:hover{background:var(--ocean-mid)}
.btn-o{background:transparent;color:var(--ocean);border:1.5px solid var(--ocean);border-radius:7px;padding:10px 18px;font-size:13.5px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.2s}
.btn-o:hover{background:rgba(10,79,110,0.07)}
.mod-list{display:flex;flex-direction:column;gap:8px}
.mod-pill{background:var(--white);border:1px solid rgba(10,79,110,0.1);border-radius:9px;padding:11px 14px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:10px}
.mod-pill:hover{border-color:rgba(10,79,110,0.3);transform:translateX(3px)}
.mp-icon{font-size:17px;width:26px;text-align:center}
.mp-text{font-size:13px;color:var(--text);font-weight:500;flex:1}
.mp-arr{color:var(--ocean-light);font-size:13px}

.divider{border:none;border-top:1px solid rgba(10,79,110,0.1);margin:40px 0}

.facts-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}
.fact-tile{background:var(--white);border:1px solid rgba(10,79,110,0.1);border-radius:9px;padding:16px 12px;text-align:center}
.ft-num{font-family:'Playfair Display',serif;font-size:1.7rem;color:var(--ocean);font-weight:700;line-height:1}
.ft-txt{font-size:11px;color:var(--muted);margin-top:5px;line-height:1.45}

/* LEARN */
.lh{padding:34px 0 22px}
.lh-tag{font-size:10.5px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:var(--ocean-mid);background:rgba(91,184,212,0.13);border:1px solid rgba(91,184,212,0.28);border-radius:20px;padding:4px 12px;display:inline-block;margin-bottom:12px}
.lh h2{font-size:clamp(1.4rem,2.8vw,2rem);color:var(--ocean);margin-bottom:10px}
.lh p{font-size:14px;color:var(--muted);line-height:1.75;max-width:640px}
.cards2{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:20px 0}
.card{background:var(--white);border:1px solid rgba(10,79,110,0.1);border-radius:10px;padding:18px 20px}
.card h4{font-size:12.5px;font-weight:500;color:var(--ocean);margin-bottom:7px;text-transform:uppercase;letter-spacing:0.05em}
.card p{font-size:13px;color:var(--text);line-height:1.65}
.highlight{background:rgba(91,184,212,0.09);border:1px solid rgba(91,184,212,0.22);border-radius:10px;padding:15px 18px;margin:16px 0;font-size:13.5px;color:var(--ocean);line-height:1.7}
.chain{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin:16px 0}
.ch-box{background:var(--white);border:1px solid rgba(10,79,110,0.12);border-radius:7px;padding:7px 13px;font-size:12.5px;color:var(--text)}
.ch-arr{color:var(--ocean-light);font-size:16px}

/* WATER FOOTPRINT */
.fp-list{display:flex;flex-direction:column;gap:10px;margin:20px 0}
.fp-row{background:var(--white);border:1px solid rgba(10,79,110,0.1);border-radius:9px;padding:12px 16px;display:flex;align-items:center;gap:12px}
.fp-em{font-size:19px;width:26px}
.fp-lbl{font-size:13px;color:var(--text);flex:1}
.fp-val{font-size:12px;font-weight:500;color:var(--ocean-mid);background:rgba(91,184,212,0.12);padding:3px 10px;border-radius:20px}
.calc-box{background:rgba(10,79,110,0.05);border-radius:10px;padding:22px;margin-top:20px}
.calc-box h4{font-size:13px;font-weight:500;color:var(--ocean);margin-bottom:16px;text-transform:uppercase;letter-spacing:0.06em}
.calc-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.calc-label{font-size:13px;color:var(--text);flex:1}
.calc-input{width:70px;border:1px solid rgba(10,79,110,0.2);border-radius:6px;padding:6px 8px;font-size:13px;text-align:center;font-family:'DM Sans',sans-serif;color:var(--text);background:var(--white)}
.calc-unit{font-size:12px;color:var(--muted);min-width:30px}
.calc-result{background:var(--ocean);border-radius:9px;padding:16px;text-align:center;margin-top:12px;color:#fff}
.cr-num{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700}
.cr-lbl{font-size:12px;color:rgba(202,240,248,0.75);margin-top:3px}

/* SOLUTIONS */
.sol-grid{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:20px 0}
.sol-card{background:var(--white);border:1px solid rgba(10,79,110,0.1);border-radius:10px;padding:16px 18px;display:flex;gap:12px;align-items:flex-start}
.sol-icon{font-size:22px;margin-top:2px}
.sol-title{font-size:13px;font-weight:500;color:var(--ocean);margin-bottom:5px}
.sol-desc{font-size:12.5px;color:var(--muted);line-height:1.6}

/* ACTIVITIES */
.act-tabs{display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap}
.atab{background:var(--white);border:1px solid rgba(10,79,110,0.12);border-radius:7px;padding:8px 14px;font-size:13px;cursor:pointer;color:var(--muted);transition:all 0.18s;font-family:'DM Sans',sans-serif}
.atab:hover,.atab.active{background:var(--ocean);color:#fff;border-color:var(--ocean)}
.act-panel{display:none}.act-panel.active{display:block}

/* Sort game */
.sort-pool{display:flex;flex-wrap:wrap;gap:8px;padding:12px;background:rgba(10,79,110,0.04);border:1.5px dashed rgba(10,79,110,0.15);border-radius:10px;min-height:52px;margin-bottom:18px}
.sort-tag{background:var(--white);border:1px solid rgba(10,79,110,0.15);border-radius:7px;padding:7px 13px;font-size:12.5px;cursor:grab;user-select:none;transition:all 0.18s;color:var(--text)}
.sort-tag:hover{border-color:var(--ocean-light);background:rgba(91,184,212,0.08)}
.sort-zones{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.s-zone{border:2px dashed rgba(10,79,110,0.15);border-radius:10px;padding:12px;min-height:90px;transition:all 0.18s}
.s-zone.over{border-color:var(--ocean-light);background:rgba(91,184,212,0.07)}
.s-zone-title{font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:9px}
.s-zone-title.human{color:var(--accent)}
.s-zone-title.nat{color:var(--seaweed)}
.s-zone-drop{display:flex;flex-wrap:wrap;gap:6px;min-height:30px}
.sort-fb{font-size:13px;padding:11px 14px;border-radius:8px;display:none}
.sort-fb.show{display:block}
.sort-fb.ok{background:rgba(45,106,79,0.1);color:#2d6a4f;border:1px solid rgba(45,106,79,0.2)}
.sort-fb.bad{background:rgba(192,57,43,0.07);color:#c0392b;border:1px solid rgba(192,57,43,0.15)}

/* Match game */
.match-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:16px}
.m-card{background:var(--ocean);border-radius:9px;aspect-ratio:1;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11.5px;color:transparent;transition:all 0.25s;user-select:none;border:1.5px solid transparent;text-align:center;padding:4px}
.m-card.flipped{background:var(--white);color:var(--text);border-color:var(--ocean-light)}
.m-card.matched{background:rgba(45,106,79,0.1);color:#2d6a4f;border-color:rgba(45,106,79,0.3);cursor:default}
.match-info{font-size:13px;color:var(--muted);text-align:center;margin-top:6px}

/* QUIZ */
.quiz-prog{display:flex;gap:5px;margin-bottom:26px}
.qp{width:36px;height:5px;border-radius:3px;background:rgba(10,79,110,0.12);transition:background 0.3s}
.qp.done{background:var(--seaweed-light)}
.qp.active{background:var(--ocean-light)}
.quiz-q{font-size:15.5px;font-weight:500;color:var(--text);margin-bottom:18px;line-height:1.55}
.quiz-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:18px}
.qopt{background:var(--white);border:1.5px solid rgba(10,79,110,0.12);border-radius:9px;padding:12px 16px;font-size:13.5px;cursor:pointer;text-align:left;transition:all 0.18s;color:var(--text);font-family:'DM Sans',sans-serif}
.qopt:hover:not(:disabled){border-color:rgba(10,79,110,0.3);background:rgba(10,79,110,0.03)}
.qopt.correct{border-color:#2d6a4f;background:rgba(45,106,79,0.08);color:#2d6a4f}
.qopt.wrong{border-color:#c0392b;background:rgba(192,57,43,0.07);color:#c0392b}
.quiz-fb{background:rgba(91,184,212,0.1);border:1px solid rgba(91,184,212,0.25);border-radius:9px;padding:13px 16px;font-size:13px;color:var(--ocean);line-height:1.65;margin-bottom:14px;display:none}
.quiz-fb.show{display:block}
.quiz-score{text-align:center;padding:36px 0}
.qs-big{font-family:'Playfair Display',serif;font-size:3.8rem;color:var(--ocean);font-weight:700}
.qs-lbl{font-size:15px;color:var(--muted);margin:6px 0 22px}

/* PAGE NAV */
.pnav{display:flex;align-items:center;justify-content:space-between;margin-top:30px;padding-top:18px;border-top:1px solid rgba(10,79,110,0.08)}
.pnav-btn{background:none;border:1px solid rgba(10,79,110,0.18);border-radius:7px;padding:8px 15px;font-size:13px;cursor:pointer;color:var(--ocean);font-family:'DM Sans',sans-serif;transition:all 0.18s}
.pnav-btn:hover{background:rgba(10,79,110,0.07)}
.pnav-mid{font-size:12px;color:var(--muted)}
</style>

<div class="wrap">
<nav>
  <div class="nav-brand">🌊 Deniz <em>Mücadele Kiti</em></div>
  <div class="nav-links">
    <button id="nb-home" class="active" onclick="show('home')">Ana Sayfa</button>
    <button id="nb-kirlilik" onclick="show('kirlilik')">Kirlilik</button>
    <button id="nb-musilaj" onclick="show('musilaj')">Müsilaj</button>
    <button id="nb-suayak" onclick="show('suayak')">Su Ayak İzi</button>
    <button id="nb-cozumler" onclick="show('cozumler')">Çözümler</button>
    <button id="nb-aktivite" onclick="show('aktivite')">Etkinlikler</button>
    <button id="nb-quiz" onclick="show('quiz')">Quiz</button>
  </div>
</nav>

<!-- HOME -->
<div id="page-home" class="page active">
  <section class="hero">
    <div>
      <div class="hero-tag">Deniz Bilimleri · MEB EBA</div>
      <h1>Deniz Kirliliğiyle<br><em>Mücadele Et</em></h1>
      <p>Denizlerimizi tehdit eden kirliliği tanı, müsilajı ve su ayak izini öğren — ardından etkileşimli etkinlikler ve quiz ile pekiştir.</p>
      <div class="cta-row">
        <button class="btn-p" onclick="show('kirlilik')">Öğrenmeye Başla</button>
        <button class="btn-o" onclick="show('quiz')">Quiz'e Git</button>
      </div>
    </div>
    <div class="mod-list">
      <div class="mod-pill" onclick="show('kirlilik')"><span class="mp-icon">🌊</span><span class="mp-text">Deniz Kirliliği Nedir?</span><span class="mp-arr">→</span></div>
      <div class="mod-pill" onclick="show('musilaj')"><span class="mp-icon">🦠</span><span class="mp-text">Müsilaj Rehberi</span><span class="mp-arr">→</span></div>
      <div class="mod-pill" onclick="show('suayak')"><span class="mp-icon">💧</span><span class="mp-text">Su Ayak İzi Hesapla</span><span class="mp-arr">→</span></div>
      <div class="mod-pill" onclick="show('cozumler')"><span class="mp-icon">✅</span><span class="mp-text">Bireysel Çözümler</span><span class="mp-arr">→</span></div>
      <div class="mod-pill" onclick="show('aktivite')"><span class="mp-icon">🎮</span><span class="mp-text">Etkinlikler & Oyunlar</span><span class="mp-arr">→</span></div>
      <div class="mod-pill" onclick="show('quiz')"><span class="mp-icon">🏆</span><span class="mp-text">Quiz ile Pekiştir</span><span class="mp-arr">→</span></div>
    </div>
  </section>
  <hr class="divider">
  <div class="facts-strip">
    <div class="fact-tile"><div class="ft-num">%70</div><div class="ft-txt">Dünya yüzeyini denizler kaplar</div></div>
    <div class="fact-tile"><div class="ft-num">8M</div><div class="ft-txt">Ton plastik her yıl denize karışır</div></div>
    <div class="fact-tile"><div class="ft-num">450</div><div class="ft-txt">Yıl plastik şişenin parçalanması</div></div>
    <div class="fact-tile"><div class="ft-num">2021</div><div class="ft-txt">Marmara'da büyük müsilaj krizi</div></div>
  </div>
</div>

<!-- KİRLİLİK -->
<div id="page-kirlilik" class="page">
  <div class="lh">
    <div class="lh-tag">Modül 1 · Deniz Kirliliği</div>
    <h2>Deniz Kirliliği Nedir?</h2>
    <p>BM Deniz Hukuku Sözleşmesi'ne göre deniz kirliliği; insan sağlığını, canlı kaynakları ve denizcilik faaliyetlerini tehdit eden madde ya da enerjinin deniz çevresine girmesidir. 20. yüzyılın başından bu yana küresel bir sorun haline gelmiştir.</p>
  </div>
  <div class="cards2">
    <div class="card"><h4>Plastik ve Mikro Plastik</h4><p>5 mm'den küçük plastik parçalar deniz canlılarının sindirim sistemine karışır. Besin zinciriyle insana ulaşır. Bir plastik şişenin parçalanması 450 yıl sürer.</p></div>
    <div class="card"><h4>Sanayi ve Kimyasal Atık</h4><p>Fabrika atıkları, tarımda kullanılan gübreler ve tarım ilaçları yağmur sularıyla denize ulaşır. Deniz suyundaki kimyasal dengeyi bozar.</p></div>
    <div class="card"><h4>Petrol Sızıntıları</h4><p>Deniz taşımacılığı kazaları ve kaçak deşarjlar; deniz yüzeyini kaplayan yağ tabakaları oluşturarak oksijen alışverişini engeller ve kuşları, balıkları öldürür.</p></div>
    <div class="card"><h4>Kentleşme ve Nüfus</h4><p>Çarpık kentleşme ve kontrolsüz nüfus artışı; atık miktarını, gereksiz su tüketimini ve kıyılara baskıyı artırır. Marmara Denizi bunun en belirgin örneğidir.</p></div>
  </div>
  <div class="highlight">🐟 <strong>Besin zinciri etkisi:</strong> Kirlilik planktondan başlar; küçük balık → büyük balık → insan zincirine yayılır. Denizde çözünmüş oksijen azaldıkça mercanlar, balıklar ve deniz bitkileri yaşayamaz hale gelir.</div>
  <p style="font-size:13px;color:var(--muted);margin-bottom:10px;font-weight:500;text-transform:uppercase;letter-spacing:0.06em">Kirlilik Yayılma Zinciri</p>
  <div class="chain">
    <div class="ch-box">Atık / Kimyasal</div><div class="ch-arr">→</div>
    <div class="ch-box">Deniz Suyu</div><div class="ch-arr">→</div>
    <div class="ch-box">Oksijen Azalır</div><div class="ch-arr">→</div>
    <div class="ch-box">Deniz Canlıları</div><div class="ch-arr">→</div>
    <div class="ch-box">Besin Zinciri</div><div class="ch-arr">→</div>
    <div class="ch-box">İnsan Sağlığı</div>
  </div>
  <div class="pnav">
    <button class="pnav-btn" onclick="show('home')">← Ana Sayfa</button>
    <span class="pnav-mid">1 / 4</span>
    <button class="pnav-btn" onclick="show('musilaj')">Müsilaj →</button>
  </div>
</div>

<!-- MÜSİLAJ -->
<div id="page-musilaj" class="page">
  <div class="lh">
    <div class="lh-tag">Modül 2 · Müsilaj</div>
    <h2>Müsilaj Nedir?</h2>
    <p>Müsilaj (deniz salyası), fitoplankton ve diğer mikroorganizmaların kontrolsüz biçimde çoğalmasıyla oluşan yapışkan, jel benzeri bir maddedir. İlk kez 2007'de İzmit Körfezi'nde görülmüş, 2021'de Marmara'yı tamamen kaplamıştır.</p>
  </div>
  <div class="cards2">
    <div class="card"><h4>Nasıl Oluşur?</h4><p>Denize karışan azot ve fosfor içeren atıklar, fitoplankton üremesini hızlandırır. Suyun ısınması ve durgunlaşması üremeyi daha da artırır. Organizmalar öldükten sonra yapışkan bir tabaka bırakır.</p></div>
    <div class="card"><h4>Denize Etkisi</h4><p>Müsilaj tabakası ışığı engeller; algler, mercanlar ve deniz çayırları mahvolur. Balık ve diğer canlılar oksijensiz kalır. Dipte birikerek tabanı tamamen örtebilir.</p></div>
    <div class="card"><h4>Kirlilikle İlişkisi</h4><p>Müsilaj kirliliğin sonucu değil, kirliliğin denize verdiği bir uyarıdır. Kirlilik arttıkça müsilaj da artar. Temiz bir denizde müsilaj oluşumu çok düşük kalır.</p></div>
    <div class="card"><h4>Marmara Denizi</h4><p>Marmara, Boğazlardan gelen su akımı sayesinde kendini temizleyebiliyordu. Artan kirlilik ve iklim değişikliği bu dengeyi bozdu. 2021 krizi bu dengesizliğin doruk noktasıydı.</p></div>
  </div>
  <div class="highlight">⚠️ <strong>Önemli fark:</strong> Müsilaj doğal bir süreç gibi görünse de yoğunluğu ve sıklığı tamamen insan kaynaklı kirlilikle bağlantılıdır. Kirlilik azalırsa müsilaj da azalır.</div>
  <div class="pnav">
    <button class="pnav-btn" onclick="show('kirlilik')">← Kirlilik</button>
    <span class="pnav-mid">2 / 4</span>
    <button class="pnav-btn" onclick="show('suayak')">Su Ayak İzi →</button>
  </div>
</div>

<!-- SU AYAK İZİ -->
<div id="page-suayak" class="page">
  <div class="lh">
    <div class="lh-tag">Modül 3 · Su Ayak İzi</div>
    <h2>Su Ayak İzi Nedir?</h2>
    <p>Bir ürünün üretim ve kullanım sürecinde harcanan toplam su miktarına su ayak izi denir. Sadece içtiğimiz suyu değil; yediğimiz yemeği, giydiğimiz kıyafeti ve kullandığımız ürünleri üretmek için gereken suyu kapsar.</p>
  </div>
  <div class="fp-list">
    <div class="fp-row"><span class="fp-em">☕</span><span class="fp-lbl">1 fincan kahve</span><span class="fp-val">140 litre</span></div>
    <div class="fp-row"><span class="fp-em">🍔</span><span class="fp-lbl">1 hamburger</span><span class="fp-val">2.400 litre</span></div>
    <div class="fp-row"><span class="fp-em">👕</span><span class="fp-lbl">1 pamuklu tişört</span><span class="fp-val">2.700 litre</span></div>
    <div class="fp-row"><span class="fp-em">📱</span><span class="fp-lbl">1 akıllı telefon</span><span class="fp-val">12.760 litre</span></div>
    <div class="fp-row"><span class="fp-em">🍞</span><span class="fp-lbl">1 dilim ekmek</span><span class="fp-val">40 litre</span></div>
    <div class="fp-row"><span class="fp-em">🥩</span><span class="fp-lbl">1 kg sığır eti</span><span class="fp-val">15.400 litre</span></div>
  </div>
  <div class="calc-box">
    <h4>Günlük Su Ayak İzi Hesapla</h4>
    <div class="calc-row"><span class="calc-label">Kahve içtim</span><input class="calc-input" id="c-kahve" type="number" value="1" min="0" oninput="calcFP()"><span class="calc-unit">fincan</span></div>
    <div class="calc-row"><span class="calc-label">Et yedim</span><input class="calc-input" id="c-et" type="number" value="0" min="0" oninput="calcFP()"><span class="calc-unit">porsiyon</span></div>
    <div class="calc-row"><span class="calc-label">Ekmek yedim</span><input class="calc-input" id="c-ekmek" type="number" value="2" min="0" oninput="calcFP()"><span class="calc-unit">dilim</span></div>
    <div class="calc-row"><span class="calc-label">Duş aldım</span><input class="calc-input" id="c-dus" type="number" value="1" min="0" oninput="calcFP()"><span class="calc-unit">kez (60 L)</span></div>
    <div class="calc-result">
      <div class="cr-num" id="fp-result">220</div>
      <div class="cr-lbl">litre / bugün için tahmini su ayak izin</div>
    </div>
  </div>
  <div class="pnav">
    <button class="pnav-btn" onclick="show('musilaj')">← Müsilaj</button>
    <span class="pnav-mid">3 / 4</span>
    <button class="pnav-btn" onclick="show('cozumler')">Çözümler →</button>
  </div>
</div>

<!-- ÇÖZÜMLER -->
<div id="page-cozumler" class="page">
  <div class="lh">
    <div class="lh-tag">Modül 4 · Çözümler</div>
    <h2>Bireysel Olarak Neler Yapabilirsin?</h2>
    <p>Deniz kirliliğiyle mücadele büyük projelerle başlamak zorunda değil. Her bireyin günlük hayatında alabileceği küçük ama güçlü adımlar büyük fark yaratır.</p>
  </div>
  <div class="sol-grid">
    <div class="sol-card"><span class="sol-icon">🛍️</span><div><div class="sol-title">Plastikten Kaçın</div><div class="sol-desc">Tek kullanımlık plastik yerine bez çanta, cam şişe ve yeniden doldurulabilir ürünler kullan.</div></div></div>
    <div class="sol-card"><span class="sol-icon">🗑️</span><div><div class="sol-title">Doğru Atık Yönetimi</div><div class="sol-desc">Atıkları ayrıştır: kağıt, plastik, cam, organik. Hiçbir zaman deniz veya su kenarına çöp bırakma.</div></div></div>
    <div class="sol-card"><span class="sol-icon">💧</span><div><div class="sol-title">Su Tasarrufu</div><div class="sol-desc">Duş süresini kısalt, akan suyu boşa harcama. Su ayak izini düşürmeye özen göster.</div></div></div>
    <div class="sol-card"><span class="sol-icon">🌿</span><div><div class="sol-title">Bilinçli Tüketim</div><div class="sol-desc">Daha az et tüket, mevsim ürünleri tercih et. Her satın aldığın ürünün su ayak izi var.</div></div></div>
    <div class="sol-card"><span class="sol-icon">📣</span><div><div class="sol-title">Farkındalık Yay</div><div class="sol-desc">Çevrendeki insanları bilgilendir; çocuklara ve aile üyelerine deniz kirliliğini anlat.</div></div></div>
    <div class="sol-card"><span class="sol-icon">🏖️</span><div><div class="sol-title">Sahil Temizliği</div><div class="sol-desc">Gönüllü sahil temizlikleri organize et ya da katıl. Her toplanan çöp bir deniz canlısını kurtarır.</div></div></div>
    <div class="sol-card"><span class="sol-icon">🧴</span><div><div class="sol-title">Kimyasalları Azalt</div><div class="sol-desc">Doğa dostu deterjan ve temizlik ürünleri tercih et. Kimyasallar kanalizasyondan denize ulaşır.</div></div></div>
    <div class="sol-card"><span class="sol-icon">✍️</span><div><div class="sol-title">Yetkilileri Baskıla</div><div class="sol-desc">Deniz koruma politikaları için yerel yönetimlere ve sivil toplum kuruluşlarına destek ver.</div></div></div>
  </div>
  <div class="pnav">
    <button class="pnav-btn" onclick="show('suayak')">← Su Ayak İzi</button>
    <span class="pnav-mid">4 / 4</span>
    <button class="pnav-btn" onclick="show('aktivite')">Etkinlikler →</button>
  </div>
</div>

<!-- ETKİNLİKLER -->
<div id="page-aktivite" class="page">
  <div class="lh">
    <div class="lh-tag">Etkinlikler & Oyunlar</div>
    <h2>Öğrendiklerini Pekiştir</h2>
    <p>İki farklı etkileşimli oyunla konuları pekiştir.</p>
  </div>
  <div class="act-tabs">
    <button class="atab active" onclick="switchAct('sort')">🗂️ Sınıflandırma Oyunu</button>
    <button class="atab" onclick="switchAct('match')">🃏 Eşleştirme Oyunu</button>
  </div>

  <!-- SORT -->
  <div id="act-sort" class="act-panel active">
    <p style="font-size:13.5px;color:var(--muted);margin-bottom:14px;line-height:1.7">Aşağıdaki kirlilik nedenlerini doğru kategoriye sürükle: <strong>İnsan Kaynaklı</strong> mı, <strong>Doğal</strong> mı?</p>
    <div class="sort-pool" id="sort-pool"></div>
    <div class="sort-zones">
      <div class="s-zone" id="zone-human" ondragover="allowDrop(event)" ondrop="dropItem(event,'human')">
        <div class="s-zone-title human">İnsan Kaynaklı</div>
        <div class="s-zone-drop" id="drop-human"></div>
      </div>
      <div class="s-zone" id="zone-nat" ondragover="allowDrop(event)" ondrop="dropItem(event,'nat')">
        <div class="s-zone-title nat">Doğal</div>
        <div class="s-zone-drop" id="drop-nat"></div>
      </div>
    </div>
    <div class="sort-fb" id="sort-fb"></div>
    <div style="display:flex;gap:10px;margin-top:12px">
      <button class="btn-p" onclick="checkSort()">Kontrol Et</button>
      <button class="btn-o" onclick="resetSort()">Sıfırla</button>
    </div>
  </div>

  <!-- MATCH -->
  <div id="act-match" class="act-panel">
    <p style="font-size:13.5px;color:var(--muted);margin-bottom:14px;line-height:1.7">Kavram kartlarını eşleştir! İki karta art arda tıkla. Doğru çiftleri bul.</p>
    <div class="match-grid" id="match-grid"></div>
    <p class="match-info" id="match-info">Bir karta tıkla</p>
    <button class="btn-o" style="margin-top:12px" onclick="resetMatch()">Yeniden Başla</button>
  </div>
</div>

<!-- QUIZ -->
<div id="page-quiz" class="page">
  <div class="lh">
    <div class="lh-tag">Quiz</div>
    <h2>Ne Kadar Öğrendin?</h2>
    <p>6 soruluk quiz ile deniz kirliliği hakkında bildiklerini test et.</p>
  </div>
  <div id="quiz-wrap">
    <div class="quiz-prog" id="quiz-prog"></div>
    <div class="quiz-q" id="quiz-q"></div>
    <div class="quiz-opts" id="quiz-opts"></div>
    <div class="quiz-fb" id="quiz-fb"></div>
    <button class="btn-p" id="quiz-next" style="display:none" onclick="nextQ()">Sonraki Soru →</button>
  </div>
  <div class="quiz-score" id="quiz-score" style="display:none">
    <div class="qs-big" id="qs-num"></div>
    <div class="qs-lbl">doğru / 6 soru</div>
    <p id="qs-msg" style="font-size:14px;color:var(--muted);max-width:420px;margin:0 auto 22px;line-height:1.7"></p>
    <div class="cta-row" style="justify-content:center">
      <button class="btn-p" onclick="restartQuiz()">Tekrar Dene</button>
      <button class="btn-o" onclick="show('aktivite')">Etkinliklere Git</button>
    </div>
  </div>
</div>

</div>

<script>
function show(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const nb=document.getElementById('nb-'+id);
  if(nb)nb.classList.add('active');
}

/* FP CALC */
function calcFP(){
  const k=+document.getElementById('c-kahve').value||0;
  const e=+document.getElementById('c-et').value||0;
  const ek=+document.getElementById('c-ekmek').value||0;
  const d=+document.getElementById('c-dus').value||0;
  const total=Math.round(k*140+e*500+ek*40+d*60);
  document.getElementById('fp-result').textContent=total.toLocaleString();
}
calcFP();

/* SORT GAME */
const sortItems=[
  {text:'Plastik atık',cat:'human'},{text:'Petrol sızıntısı',cat:'human'},
  {text:'Fabrika atığı',cat:'human'},{text:'Tarım ilacı',cat:'human'},
  {text:'Kanalizasyon',cat:'human'},{text:'Volkanik patlama',cat:'nat'},
  {text:'Fırtına taşıntısı',cat:'nat'},{text:'Deniz yosunu',cat:'nat'},
];
function buildSort(){
  const pool=document.getElementById('sort-pool');
  pool.innerHTML='';
  document.getElementById('drop-human').innerHTML='';
  document.getElementById('drop-nat').innerHTML='';
  const shuffled=[...sortItems].sort(()=>Math.random()-0.5);
  shuffled.forEach((item,i)=>{
    const el=document.createElement('div');
    el.className='sort-tag';
    el.textContent=item.text;
    el.draggable=true;
    el.dataset.cat=item.cat;
    el.dataset.id=i;
    el.addEventListener('dragstart',e=>{e.dataTransfer.setData('text',e.target.dataset.id+','+e.target.dataset.cat+','+e.target.textContent);e.target.style.opacity='0.4'});
    el.addEventListener('dragend',e=>{e.target.style.opacity='1'});
    pool.appendChild(el);
  });
}
function allowDrop(e){e.preventDefault();e.currentTarget.classList.add('over')}
function dropItem(e,zone){
  e.preventDefault();
  e.currentTarget.classList.remove('over');
  const [id,cat,text]=e.dataTransfer.getData('text').split(',');
  const src=document.querySelector(`[data-id="${id}"]`);
  if(!src)return;
  const tag=document.createElement('div');
  tag.className='sort-tag';
  tag.textContent=text;
  tag.draggable=true;
  tag.dataset.cat=cat;
  tag.dataset.id=id;
  tag.addEventListener('dragstart',ev=>{ev.dataTransfer.setData('text',ev.target.dataset.id+','+ev.target.dataset.cat+','+ev.target.textContent);ev.target.style.opacity='0.4'});
  tag.addEventListener('dragend',ev=>{ev.target.style.opacity='1'});
  document.getElementById('drop-'+zone).appendChild(tag);
  src.remove();
}
function checkSort(){
  const fb=document.getElementById('sort-fb');
  let wrong=0;
  ['human','nat'].forEach(zone=>{
    document.querySelectorAll(`#drop-${zone} .sort-tag`).forEach(t=>{
      if(t.dataset.cat!==zone)wrong++;
    });
  });
  const remaining=document.getElementById('sort-pool').children.length;
  if(remaining>0){fb.className='sort-fb show bad';fb.textContent='Henüz tüm kartları yerleştirmedin!';return;}
  if(wrong===0){fb.className='sort-fb show ok';fb.textContent='Mükemmel! Tüm kartları doğru yerleştirdin.';}
  else{fb.className='sort-fb show bad';fb.textContent=`${wrong} kart yanlış kategoride. Tekrar dene!`;}
}
function resetSort(){document.getElementById('sort-fb').className='sort-fb';buildSort();}
buildSort();

/* MATCH GAME */
const matchPairs=[
  {a:'Müsilaj',b:'Deniz salyası tabakası'},
  {a:'Su ayak izi',b:'Üretimde harcanan su'},
  {a:'Mikro plastik',b:'5mm altı plastik'},
  {a:'Fitoplankton',b:'Müsilaja neden olan organizma'},
  {a:'Besin zinciri',b:'Kirlilik yayılma yolu'},
  {a:'Marmara',b:'2021 müsilaj krizi'},
  {a:'Petrol',b:'Deniz yüzeyini kaplar'},
  {a:'BM Sözleşmesi',b:'Kirliliği tanımlayan belge'},
];
let mFlipped=[],mMatched=0,mLocked=false;
function buildMatch(){
  const grid=document.getElementById('match-grid');
  grid.innerHTML='';
  mFlipped=[];mMatched=0;mLocked=false;
  document.getElementById('match-info').textContent='Bir karta tıkla';
  const cards=[];
  matchPairs.forEach((p,i)=>{
    cards.push({id:i+'a',pair:i,text:p.a});
    cards.push({id:i+'b',pair:i,text:p.b});
  });
  cards.sort(()=>Math.random()-0.5);
  cards.forEach(c=>{
    const el=document.createElement('div');
    el.className='m-card';
    el.dataset.pair=c.pair;
    el.dataset.cid=c.id;
    el.dataset.text=c.text;
    el.textContent=c.text;
    el.addEventListener('click',()=>flipCard(el));
    grid.appendChild(el);
  });
}
function flipCard(el){
  if(mLocked||el.classList.contains('flipped')||el.classList.contains('matched'))return;
  el.classList.add('flipped');
  mFlipped.push(el);
  if(mFlipped.length===2){
    mLocked=true;
    const [a,b]=mFlipped;
    if(a.dataset.pair===b.dataset.pair){
      a.classList.add('matched');b.classList.add('matched');
      mFlipped=[];mMatched++;mLocked=false;
      document.getElementById('match-info').textContent=mMatched===matchPairs.length?'Tebrikler! Tüm çiftleri buldun 🎉':'Doğru eşleştirme!';
    } else {
      document.getElementById('match-info').textContent='Yanlış eşleştirme, tekrar dene!';
      setTimeout(()=>{a.classList.remove('flipped');b.classList.remove('flipped');mFlipped=[];mLocked=false;document.getElementById('match-info').textContent='Bir karta tıkla';},900);
    }
  }
}
function resetMatch(){buildMatch();}
buildMatch();

/* QUIZ */
const questions=[
  {q:'BM Deniz Hukuku Sözleşmesi\'ne göre deniz kirliliği aşağıdakilerden hangisini kapsar?',opts:['Yalnızca plastik atıkları','İnsan sağlığını ve canlı kaynakları tehdit eden madde veya enerji girişini','Sadece petrol sızıntılarını','Yalnızca sanayi atıklarını'],ans:1,fb:'Doğru! BM tanımına göre kirlilik; canlı kaynakları, insan sağlığını ve denizcilik faaliyetlerini tehdit eden her türlü madde ya da enerji girişidir.'},
  {q:'Müsilaj oluşumunun temel nedeni nedir?',opts:['Deniz suyunun soğuması','Fitoplankton gibi mikroorganizmaların kontrolsüz çoğalması','Balık popülasyonunun azalması','Tuz oranının yükselmesi'],ans:1,fb:'Doğru! Azot ve fosfor içeren atıklar ile ısınan su, fitoplankton üremesini hızlandırır; ölen organizmalar yapışkan tabaka bırakır.'},
  {q:'Su ayak izi neyi ifade eder?',opts:['Günlük içtiğimiz su miktarı','Denizlerin kapladığı alan','Bir ürünün üretim ve kullanımında harcanan toplam su','Yağmur sularının toplanma miktarı'],ans:2,fb:'Doğru! Su ayak izi; bir ürünün üretiminden kullanımına kadar harcanan toplam su miktarıdır. Örneğin bir tişört için yaklaşık 2.700 litre su gerekir.'},
  {q:'Plastik şişenin doğada parçalanması ne kadar sürer?',opts:['10 yıl','50 yıl','200 yıl','450 yıl'],ans:3,fb:'Doğru! Plastik şişeler doğada 450 yıl boyunca parçalanmadan kalır ve giderek küçülerek mikro plastiğe dönüşür.'},
  {q:'Marmara Denizi\'nde büyük müsilaj krizi hangi yılda yaşandı?',opts:['2007','2015','2019','2021'],ans:3,fb:'Doğru! 2021\'de Marmara Denizi\'ni kaplayan büyük müsilaj krizi, deniz kirliliğinin zirve noktasını gösterdi. İlk müsilaj görüntüsü ise 2007\'de İzmit Körfezi\'ndeydi.'},
  {q:'Deniz kirliliğini önlemek için bireysel olarak hangi adım en etkilidir?',opts:['Deniz kenarına yakın yaşamamak','Tek kullanımlık plastiği azaltmak, atıkları ayrıştırmak ve farkındalık yaymak','Denizde yüzmemek','Balık tüketimini artırmak'],ans:1,fb:'Doğru! Plastik azaltmak, doğru atık yönetimi ve farkındalık yaymak; bireysel düzeyde en güçlü çözüm adımlarıdır.'},
];
let qIdx=0,qScore=0;
function buildQuiz(){
  qIdx=0;qScore=0;
  document.getElementById('quiz-score').style.display='none';
  document.getElementById('quiz-wrap').style.display='block';
  renderQ();
}
function renderQ(){
  const prog=document.getElementById('quiz-prog');
  prog.innerHTML='';
  questions.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='qp'+(i<qIdx?' done':i===qIdx?' active':'');
    prog.appendChild(d);
  });
  const q=questions[qIdx];
  document.getElementById('quiz-q').textContent=(qIdx+1)+'. '+q.q;
  const opts=document.getElementById('quiz-opts');
  opts.innerHTML='';
  q.opts.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='qopt';b.textContent=o;
    b.onclick=()=>answerQ(i);
    opts.appendChild(b);
  });
  document.getElementById('quiz-fb').className='quiz-fb';
  document.getElementById('quiz-next').style.display='none';
}
function answerQ(i){
  const q=questions[qIdx];
  document.querySelectorAll('.qopt').forEach((b,j)=>{
    b.disabled=true;
    if(j===q.ans)b.classList.add('correct');
    else if(j===i&&i!==q.ans)b.classList.add('wrong');
  });
  if(i===q.ans)qScore++;
  const fb=document.getElementById('quiz-fb');
  fb.textContent=q.fb;fb.className='quiz-fb show';
  document.getElementById('quiz-next').style.display='inline-block';
  document.getElementById('quiz-next').textContent=qIdx===questions.length-1?'Sonuçları Gör':'Sonraki Soru →';
}
function nextQ(){
  qIdx++;
  if(qIdx>=questions.length){showScore();return;}
  renderQ();
}
function showScore(){
  document.getElementById('quiz-wrap').style.display='none';
  const sc=document.getElementById('quiz-score');
  sc.style.display='block';
  document.getElementById('qs-num').textContent=qScore+' / 6';
  const msgs=['Tekrar dene, her denemede öğreniyorsun!','İyi başlangıç! Biraz daha çalış.','Gayet iyi! Az kaldı.','Çok iyi! Denizler seni bekliyor.','Mükemmel! Gerçek bir deniz savunucususun! 🌊'];
  document.getElementById('qs-msg').textContent=msgs[Math.min(Math.floor(qScore/6*4),4)];
}
function restartQuiz(){buildQuiz();}
buildQuiz();

/* ACT TABS */
function switchAct(id){
  document.querySelectorAll('.act-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.atab').forEach(b=>b.classList.remove('active'));
  document.getElementById('act-'+id).classList.add('active');
  event.target.classList.add('active');
}
</script>
