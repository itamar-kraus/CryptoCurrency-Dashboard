import { useEffect, useState } from "react";
import { makeApiRequest } from "../utils";

export const SelectCrypto = ({ setSelectedCoin }) => {
  const [cryptoCoins, setCryptoCoins] = useState([]);

  useEffect(() => {
    const getTopCoinsByUSDValue = async () => {
      try {
        // Fetching the market data for coins sorted by market cap (a proxy to get popular/high-value coins)
        const marketData = await makeApiRequest(
          "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"
        );
        // Sorting the fetched coins by their current price in USD in descending order
        const sortedByValue = marketData.sort(
          (a, b) => b.current_price - a.current_price
        );
        // Slicing the array to get the top 10 coins
        const topCoins = sortedByValue.slice(0, 10);

        setCryptoCoins(topCoins);
        setSelectedCoin(topCoins[0]);
      } catch (error) {
        console.error("Error in getTopCoinsByUSDValue:", error);
        throw error;
      }
    };

    getTopCoinsByUSDValue();
  }, [setCryptoCoins, setSelectedCoin]);

  const handleChangeSelect = (event) => {
    const id = event.target.value;
    const selectedCoin = cryptoCoins.find((coin) => coin.symbol === id);
    setSelectedCoin(selectedCoin);
  };

  return (
    <div>
      <select
        id="coinsellector"
        className="dark:bg-gray-700 w-56 h-8 text-gray-800 dark:text-white"
        onChange={handleChangeSelect}
      >
        {cryptoCoins.map((cryptoCoin) => (
          <option
            key={cryptoCoin.id}
            id={cryptoCoin.id}
            value={cryptoCoin.sybmol}
          >
            {cryptoCoin.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};
