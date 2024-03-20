import React, { useEffect } from "react";
import { makeApiRequest } from "../utils";
import { updateGraph } from "./utils";

export const CryptoChart = ({ selectedCoin }) => {
  useEffect(() => {
    if (!selectedCoin?.id) return;

    const getCoinGraphData = async () => {
      try {
        const query =
          "coins/" +
          selectedCoin?.id +
          "/market_chart?vs_currency=usd&days=365&interval=daily&precision=5";
        const coinData = await makeApiRequest(query);

        updateGraph(coinData);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    };

    getCoinGraphData();
  }, [selectedCoin?.id]);

  return (
    <div id="chart-container" className="p-6 rounded-lg shadow-md w-3/4 mx-auto">
      <canvas id="line-chart" className="w-full"></canvas>
    </div>
  );
};
