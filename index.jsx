import React, { useState, useEffect } from "react";

const data = {
  "Ne Yesem?": ["Pizza", "Burger", "Kebap", "Mantı", "Sushi", "Lahmacun", "Çiğköfte", "Tavuk döner", "Makarna", "Tost", "Salata", "Tavuk kanat"],
  "Ne İzlesem?": ["Inception", "Interstellar", "The Dark Knight", "Dune", "The Office", "Friends", "Peaky Blinders", "Breaking Bad", "Fight Club", "La Casa de Papel"],
  "Ne Oynasam?": ["Valorant", "CS2", "GTA V", "Minecraft", "Elden Ring", "League of Legends", "Fortnite", "Terraria", "Rust", "Rocket League"],
  "Dışarıda Ne Yapayım?": ["Yürüyüşe çık", "Kafeye git", "Kitapçı gez", "Bisiklete bin", "Sahil kenarında otur", "Parkta vakit geçir", "Manzaraya karşı otur"],
  "Hediye Ne Alsam?": ["Kitap", "Parfüm", "Çiçek", "Kolye", "Saat", "Kupa bardak", "Oyuncak ayı", "Elektronik eşya", "Ajanda"],
  "Kendime Ne Alsam?": ["Yeni bir kıyafet", "Oyuncak", "Yeni bir kulaklık", "Kitap", "Oyun", "Tatlı bir şey"],
  "Şu An Ne Yapsam?": ["Film izle", "Kısa bir yürüyüş yap", "Arkadaşını ara", "Yeni müzik keşfet", "Günlük yaz", "Kafanı dinle"],
  "Nereye Tatile Gidilmeli?": ["Antalya", "Kapadokya", "Muğla", "İzmir", "Fethiye", "Ayvalık", "Sapanca", "Karadeniz turu"],
  "Günün Kitabı": ["1984", "Hayvan Çiftliği", "Simyacı", "Bülbülü Öldürmek", "Fahrenheit 451", "Yabancı", "Dönüşüm"],
  "Günün Motive Sözü": ["Pes etme, en iyi anlar zor zamanların ardından gelir.", "Bugün, geri kalan hayatının ilk günü.", "Başarı, azimle gelir.", "Kendine güven!"],
  // Daha fazla kategori eklersin buraya...
};

export default function KararVerici() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0c1e3e" : "#fff";
    document.body.style.color = darkMode ? "#f5f1e9" : "#111";
  }, [darkMode]);

  const handleChoose = () => {
    if (!currentCategory) return;
    setLoading(true);
    setResult("");
    setTimeout(() => {
      const items = data[currentCategory];
      const random = items[Math.floor(Math.random() * items.length)];
      setResult(random);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <style>{`
        * {
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s ease;
        }
        body {
          margin:0; padding:20px;
          background: ${darkMode ? "#0c1e3e" : "#fff"};
          color: ${darkMode ? "#f5f1e9" : "#111"};
          overflow-x: hidden;
        }
        h1 {
          font-weight: 800;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 30px;
          letter-spacing: 2px;
          text-shadow: ${darkMode ? "0 0 8px #a7a7a7" : "0 0 10px #aaa"};
          animation: fadeInDown 1s ease forwards;
        }
        .container {
          display: flex;
          max-width: 1000px;
          margin: 0 auto;
          gap: 40px;
        }
        .sidebar {
          flex-basis: 280px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: fadeInLeft 1s ease forwards;
          position: relative;
        }
        .category-btn {
          background-color: ${darkMode ? "#142b54" : "#f0f0f0"};
          border: none;
          padding: 14px 18px;
          font-size: 1.1rem;
          border-radius: 12px;
          color: ${darkMode ? "#f5f1e9" : "#222"};
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(0,0,0,0.12);
          transition: all 0.25s ease;
        }
        .category-btn:hover, .category-btn:focus {
          background-color: ${darkMode ? "#1f3a81" : "#d1d1d1"};
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.25);
          outline: none;
        }
        .category-btn.selected {
          background-color: ${darkMode ? "#2c4baf" : "#10b981"};
          color: #fff;
          font-weight: 700;
          box-shadow: 0 6px 20px #10b981aa;
          transform: scale(1.1);
        }
        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .chosen-category {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 1.5px;
          min-height: 40px;
          animation: fadeIn 0.7s ease forwards;
          color: ${darkMode ? "#dbe6ff" : "#065f46"};
          text-shadow: ${darkMode ? "0 0 6px #a7a7a7" : "none"};
        }
        .result-box {
          background-color: ${darkMode ? "#142b54" : "#e6f7f0"};
          padding: 40px 50px;
          border-radius: 18px;
          min-height: 240px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: fadeIn 1s ease forwards;
        }
        #result {
          font-size: 2.5rem;
          font-weight: 700;
          color: ${darkMode ? "#dbe6ff" : "#065f46"};
          margin-bottom: 25px;
          min-height: 60px;
          text-align: center;
          animation: fadeIn 1s ease forwards;
          user-select: none;
        }
        #choose-btn {
          background: linear-gradient(90deg, #10b981, #14ca8e);
          border: none;
          padding: 14px 36px;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 8px 15px #10b981aa;
          transition: all 0.25s ease;
          user-select: none;
        }
        #choose-btn:hover:enabled {
          background: linear-gradient(90deg, #0e9e68, #12b674);
          box-shadow: 0 10px 25px #0e9e6811;
          transform: scale(1.07);
        }
        #choose-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
        .dark-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: ${darkMode ? "#1f3a81" : "#f0f0f0"};
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: background-color 0.3s ease, transform 0.2s ease;
          z-index: 9999;
        }
        .dark-toggle:hover {
          transform: scale(1.15);
          background-color: ${darkMode ? "#2c4baf" : "#d1d1d1"};
        }
        svg {
          width: 26px;
          height: 26px;
          fill: ${darkMode ? "#f5f1e9" : "#111"};
          transition: fill 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <h1>Karar Veremiyorsan Yardımcı Olalım 💡</h1>

      <div className="container">
        <aside className="sidebar" aria-label="Kategoriler">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              className={`category-btn ${category === currentCategory ? "selected" : ""}`}
              onClick={() => {
                setCurrentCategory(category);
                setResult("");
              }}
              aria-pressed={category === currentCategory}
            >
              {category}
            </button>
          ))}
        </aside>

        <main className="main" aria-live="polite">
          <div className="chosen-category" role="heading" aria-level="2">
            {currentCategory ? `Seçilen Kategori: ${currentCategory}` : "Kategori Seçiniz"}
          </div>

          <section className="result-box" aria-label="Seçilen sonuç">
            <div id="result" aria-live="polite" aria-atomic="true">
              {loading ? "Karar veriliyor..." : result || "Lütfen kategori seçin ve butona basın"}
            </div>
            <button
              id="choose-btn"
              disabled={!currentCategory || loading}
              onClick={handleChoose}
              aria-disabled={!currentCategory || loading}
              aria-busy={loading}
            >
              {loading ? "Bekleyin..." : "Benim Yerime Seç"}
            </button>
          </section>
        </main>
      </div>

      <button
        aria-label="Karanlık mod aç kapa"
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {/* Güneş ikonu */}
            <path d="M12 4.5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm6.364 2.136a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM18 12a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1zm-6 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm-6.364-2.136a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM6 12a1 1 0 1 1 0-2H5a1 1 0 1 1 0 2h1zm6-6a1 1 0 0 1 0-1V4.5a1 1 0 1 1 2 0v1a1 1 0 0 1-2 0zm0 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {/* Ay ikonu */}
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        )}
      </button>
    </>
  );
}
