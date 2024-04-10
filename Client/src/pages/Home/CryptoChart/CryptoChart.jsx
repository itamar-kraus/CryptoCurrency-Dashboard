import React, { useEffect, useState } from "react";
import { makeApiRequest } from "../utils";
import { Line } from "react-chartjs-2";
import { useMode } from "../../../modeContext";

// Utility function to compute a date given an index relative to the start of the current year.
// This function is used to generate labels for the X-axis of the chart.
const getDateAtIndex = (index) => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date(currentYear, 0, 1);
  currentDate.setDate(currentDate.getDate() + index);
  return currentDate;
};

// Generate an array of dates for the year to serve as labels for the chart
const newDays = Array.from({ length: 365 }, (_, i) => getDateAtIndex(i));

// CryptoChart Component
// This component is responsible for rendering a line chart that shows the price history of a selected cryptocurrency over the last year.
export const CryptoChart = ({ selectedCoin }) => {
  const { isDarkMode } = useMode();

  const [chartData, setChartData] = useState([]);

  // Chart.js configuration object for the chart data
  const data = {
    labels: newDays,
    datasets: [
      {
        data: chartData,
        borderWidth: 2,
        backgroundColor: isDarkMode ? "gray" : "gray",
        borderColor: isDarkMode ? "white" : "black",
        pointRadius: 0,
        pointHoverRadius: 10,
        label: "Prices in USD",
      },
    ],
  };

  // Effect hook to fetch cryptocurrency data when the selectedCoin changes
  useEffect(() => {
    const getGraphData = async () => {
      try {
        if (!selectedCoin?.id) return;

        const coinData = await makeApiRequest(
          `coins/${selectedCoin?.id}/market_chart?vs_currency=usd&days=365&interval=daily&precision=5`
        );

        const chartPrices = coinData.prices.map((subList) => subList[1]);
        setChartData(chartPrices);
      } catch (err) {
        console.warn(err);

        alert(err.message);
      }
    };

    getGraphData(); // Invoke the data fetching function
  }, [selectedCoin?.id]);

  // Chart.js configuration object for the chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? "white" : "black",
        },
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: isDarkMode ? "white" : "black",
        },
      },
    },
  };

  // Render the line chart with the configured data and options
  return (
    <div
      id="chart-container"
      className="p-2 md:p-6 rounded-lg shadow-md w-full md:w-3/4 mx-auto flex-1"
    >
      <Line data={data} options={options} />
    </div>
  );
};
