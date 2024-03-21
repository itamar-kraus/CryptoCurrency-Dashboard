import React, { useEffect, useState } from "react";
import { makeApiRequest } from "../utils";
import "./cryptoCards.css";

const cryptoDataCards = [
  {
    name: "usd",
    class: "usd",
  },
  {
    name: "usd market cap",
    class: "usd_market_cap",
  },
  {
    name: "usd 24h vol",
    class: "usd_24h_vol",
  },
  {
    name: "usd 24h change",
    class: "usd_24h_change",
  },
];

export const CryptoCards = ({ selectedCoin }) => {
  const [coinCardData, setCoinCardData] = useState(null);

  useEffect(() => {
    const getCoinCardData = async () => {
      if (!selectedCoin?.id) return
      try {
        const query =
          "simple/price?ids=" +
          selectedCoin?.id +
          "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=4";
        const coinCardData = await makeApiRequest(query);

        setCoinCardData(coinCardData[selectedCoin?.id]);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    };

    getCoinCardData();
  }, [selectedCoin?.id]);

  
  return (
    <div id="cards" className="cards">
      {cryptoDataCards.map((card, index) => {
        return (
          <div key={card.name} className="card">
            <p>{card.name}</p>
            <p className={card.class} id={`card_${index}`}>
              {coinCardData?.[card.class]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
