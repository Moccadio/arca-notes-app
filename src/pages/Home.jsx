import { useEffect, useState } from "react";
import { getCards } from "../services/api";
import "./Home.css";

export default function Home({ navigate }) {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    getCards().then(cards => {
      if (!cards) return;
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setRandomCards(shuffled.slice(0, 3)); // tampilkan 3 kartu saja
    });
  }, []);

  return (
    <div className="home-container">
      <p className="home-subtitle">3 Kartu Tarot Untukmu Hari Ini</p>

      <div className="home-random-cards">
        {randomCards.map(card => (
          <div key={card.id} className="home-card">
            <img src={card.image_url} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      <button className="home-more-btn" onClick={() => navigate("catalog")}>
        Lihat Lebih Banyak
      </button>

    </div>
  );
}
