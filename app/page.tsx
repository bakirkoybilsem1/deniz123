<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Deniz Kirliliğiyle Mücadele Kiti</title>
<meta name="description" content="Deniz kirliliği, müsilaj ve su ayak izi konularını öğren, etkinliklerle uygula ve oyunlarla pekiştir.">

<style>
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#f4f9fb;
  color:#123;
}

header{
  background:#0a4f6e;
  color:white;
  padding:40px 20px;
  text-align:center;
}

header h1{
  margin:0;
  font-size:32px;
}

header p{
  margin-top:10px;
  opacity:0.9;
}

.container{
  max-width:1000px;
  margin:auto;
  padding:30px 20px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card{
  background:white;
  padding:20px;
  border-radius:10px;
  box-shadow:0 5px 15px rgba(0,0,0,0.05);
  transition:0.2s;
  cursor:pointer;
}

.card:hover{
  transform:translateY(-5px);
}

.card h3{
  margin-top:0;
  color:#0a4f6e;
}

.section{
  margin-top:40px;
}

button{
  background:#0a4f6e;
  color:white;
  border:none;
  padding:10px 20px;
  border-radius:6px;
  cursor:pointer;
}

.quiz-box{
  background:white;
  padding:20px;
  border-radius:10px;
}

.option{
  display:block;
  margin:10px 0;
  padding:10px;
  border:1px solid #ccc;
  border-radius:6px;
  cursor:pointer;
}

.option:hover{
  background:#eef7fb;
}

.result{
  margin-top:10px;
  font-weight:bold;
}

</style>
</head>

<body>

<header>
  <h1>🌊 Deniz Kirliliğiyle Mücadele Kiti</h1>
  <p>Öğren · Uygula · Oyna · Denizleri Koru</p>
</header>

<div class="container">

  <!-- MODÜLLER -->
  <div class="grid">
    <div class="card">
      <h3>🌊 Deniz Kirliliği</h3>
      <p>Deniz kirliliğinin nedenlerini ve etkilerini keşfet.</p>
    </div>

    <div class="card">
      <h3>🦠 Müsilaj</h3>
      <p>Müsilajın nasıl oluştuğunu ve neden tehlikeli olduğunu öğren.</p>
    </div>

    <div class="card">
      <h3>💧 Su Ayak İzi</h3>
      <p>Günlük hayatında ne kadar su tükettiğini fark et.</p>
    </div>

    <div class="card">
      <h3>✅ Çözümler</h3>
      <p>Denizleri korumak için neler yapabileceğini öğren.</p>
    </div>
  </div>

  <!-- ETKİNLİK -->
  <div class="section">
    <h2>🎯 Etkinlik: Günlük Su Ayak İzi Hesapla</h2>

    <div class="quiz-box">
      <label>Kahve (fincan):</label>
      <input type="number" id="coffee" value="1"><br><br>

      <label>Duş (kez):</label>
      <input type="number" id="shower" value="1"><br><br>

      <button onclick="calcWater()">Hesapla</button>

      <div class="result" id="waterResult"></div>
    </div>
  </div>

  <!-- OYUN -->
  <div class="section">
    <h2>🎮 Mini Quiz</h2>

    <div class="quiz-box">
      <p>Deniz kirliliğinin en büyük nedeni nedir?</p>

      <div class="option" onclick="checkAnswer(this,false)">Doğal olaylar</div>
      <div class="option" onclick="checkAnswer(this,true)">İnsan faaliyetleri</div>
      <div class="option" onclick="checkAnswer(this,false)">Yağmur</div>

      <div class="result" id="quizResult"></div>
    </div>
  </div>

</div>

<script>
function calcWater(){
  let coffee = document.getElementById("coffee").value * 140;
  let shower = document.getElementById("shower").value * 60;

  let total = coffee + shower;

  document.getElementById("waterResult").innerText =
    "Toplam su ayak izin: " + total + " litre";
}

function checkAnswer(el,correct){
  if(correct){
    document.getElementById("quizResult").innerText = "Doğru!";
    el.style.background = "#c8f7c5";
  }else{
    document.getElementById("quizResult").innerText = "Yanlış!";
    el.style.background = "#f7c5c5";
  }
}
</script>

</body>
</html>
