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

// NumberWithKSuffix Component
// This component takes a number as a prop and returns it formatted with a 'K' suffix if it's in the thousands,
// making it easier to read. It uses the Intl.NumberFormat API for localization and formatting.
const NumberWithKSuffix = ({ number }) => {
  // Function to format the number with 'K' suffix
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

// CryptoCards Component
// This component is responsible for fetching and displaying cryptocurrency data in a card format.
// It updates the displayed data based on the selected cryptocurrency.
export const CryptoCards = ({ selectedCoin }) => {
  const [coinCardData, setCoinCardData] = useState(null);

  useEffect(() => {
    // Asynchronously fetches cryptocurrency data based on the selected coin
    const getCoinCardData = async () => {
      if (!selectedCoin?.id) return;
      try {
        // Construct the query URL with parameters for the selected coin
        const query =
          "simple/price?ids=" +
          selectedCoin?.id +
          "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=4";
        const coinCardData = await makeApiRequest(query);

        setCoinCardData(coinCardData[selectedCoin?.id]);
      } catch (error) {
        console.error("Error:", error); // Log any errors
        alert(error.message); // Notify the user of the error
      }
    };

    getCoinCardData(); // Invoke the data fetching function
  }, [selectedCoin?.id]); // Re-run the effect if the selected coin changes

  // Render the component UI
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
