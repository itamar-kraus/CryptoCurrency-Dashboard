import { useState } from "react";
import { CryptoCards } from "./CryptoCards/CryptoCards";
import { SelectCrypto } from "./SelectCrypto/SelectCrypto";
import { CryptoChart } from "./CryptoChart/CryptoChart";

export const Home = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <div className="flex flex-col h-full">
      <h2 className="center-align">Web Crypto Project</h2>
      <p>Select CryptoCurrency</p>
      <SelectCrypto setSelectedCoin={setSelectedCoin} />

      <CryptoCards selectedCoin={selectedCoin} />
      <CryptoChart selectedCoin={selectedCoin} />
    </div>
  );
};
