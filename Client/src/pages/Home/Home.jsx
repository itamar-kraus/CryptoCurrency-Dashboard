import { useState } from "react";
import { CryptoCards } from "./CryptoCards/CryptoCards";
import { SelectCrypto } from "./SelectCrypto/SelectCrypto";
import { CryptoChart } from "./CryptoChart/CryptoChart";

export const Home = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <div className="flex flex-col h-full">
      <h2 className="center-align text-4xl font-bold mb-4 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text">
        Web Crypto Project
      </h2>
      <p className="font-semibold text-gray-800 dark:text-white">
        Select CryptoCurrency
      </p>
      <SelectCrypto setSelectedCoin={setSelectedCoin} />

      <CryptoCards selectedCoin={selectedCoin} />
      <CryptoChart selectedCoin={selectedCoin} />
    </div>
  );
};
