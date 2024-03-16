import { Chart } from "chart.js/auto";

const getDateAtIndex = (index) => {
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Create a new date object for January 1st of the current year
  var currentDate = new Date(currentYear, 0, 1);

  // Add the index number of days to the current date
  currentDate.setDate(currentDate.getDate() + index);

  return currentDate;
};

let priceChart;

export const updateGraph = (chartData) => {
  const days = [];
  for (var i = 0; i < 365; i++) {
    days.push(getDateAtIndex(i));
  }
  const chartPrices = chartData.prices.map((subList) => subList[1]);
  //const chartMarketCap = chartData.market_caps.map(extractSecondElement);

  // Check if dark mode is enabled
  const isDarkMode = document.documentElement.classList.contains("dark");
  // Define background color based on dark mode
  const chartBackgroundColor = isDarkMode ? "gray" : "gray";
  const chartLineColor = isDarkMode ? "white" : "black"; // Set the line color based on dark mode

  // Check if the chart is already initialized
  if (priceChart) {
    priceChart.data.datasets[0].data = chartPrices;
    priceChart.data.datasets[0].backgroundColor = chartBackgroundColor;
    //priceChart.data.datasets[1].data = chartMarketCap;
    //priceChart.data.datasets[1].backgroundColor = chartBackgroundColor;

    // Update the legend label color
    priceChart.options.plugins.legend.labels.color = isDarkMode
      ? "white"
      : "black";

    // Update the grid and ticks colors
    priceChart.options.scales.x.grid.color = isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)";
    priceChart.options.scales.x.ticks.color = isDarkMode ? "white" : "black";
    priceChart.options.scales.y.grid.color = isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)";
    priceChart.options.scales.y.ticks.color = isDarkMode ? "white" : "black";
    priceChart.data.datasets[0].borderColor = chartLineColor;

    // Update the chart
    priceChart.update();
  } else {
    // Initialize a new chart
    const priceChartCanvas = document.getElementById("line-chart");
    priceChart = new Chart(priceChartCanvas, {
      type: "line",
      data: {
        labels: days,
        datasets: [
          {
            data: chartPrices,
            borderWidth: 2,
            backgroundColor: chartBackgroundColor,
            borderColor: "white",
            pointRadius: 0,
            pointHoverRadius: 10,
            label: "Prices in USD",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "white",
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "white",
            },
          },
        },
      },
    });
  }
};
