import React, { useEffect, useState } from "react";
import { makeApiRequest } from "../utils";
import "./cryptoCards.css";

const cryptoDataCards = [
  {
    name: "USD",
    class: "usd",
  },
  {
    name: "USD Market cap",
    class: "usd_market_cap",
  },
  {
    name: "USD 24h vol",
    class: "usd_24h_vol",
  },
  {
    name: "USD 24h change",
    class: "usd_24h_change",
  },
];

const NumberWithKSuffix = ({ number }) => {
  const formatNumberWithKSuffix = (number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1, // Control the number of digits after the decimal
    });
    return formatter.format(number);
  };

  return <span>{formatNumberWithKSuffix(number)}</span>;
};

export const CryptoCards = ({ selectedCoin }) => {
  const [coinCardData, setCoinCardData] = useState(null);

  useEffect(() => {
    const getCoinCardData = async () => {
      if (!selectedCoin?.id) return;
      try {
        const query =
          "simple/price?ids=" +
          selectedCoin?.id +
          "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=4";
        const coinCardData = await makeApiRequest(query);

        setCoinCardData(coinCardData[selectedCoin?.id]);
      } catch (error) {
        console.error("Error:", error);
        alert(error.message);
      }
    };

    getCoinCardData();
  }, [selectedCoin?.id]);

  return (
    <div id="cards" className="cards">
      {cryptoDataCards.map((card, index) => {
        return (
          <div key={card.name} className="card">
            <p className=" text-gray-800 dark:text-white">{card.name}</p>
            <p className={card.class} id={`card_${index}`}>
              <NumberWithKSuffix number={coinCardData?.[card.class]} />
            </p>
          </div>
        );
      })}
    </div>
  );
};
