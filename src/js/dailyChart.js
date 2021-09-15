var dailyChart = document.getElementById("daily-chart");

var barChart = new Chart(dailyChart, {
  type: "bar",
  data: {
    labels: [
      "02",
      "04",
      "06",
      "08",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "30",
    ],
    datasets: [
      {
        data: [
          77000, 91000, 72000, 91000, 76000, 68000, 97000, 76000, 95000, 77000,
          91000, 72000, 91000, 76000, 68000, 97000, 76000, 95000,
        ],
        backgroundColor: "#38C976",
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 20000,
        ticks: {
          stepSize: 20000,
        },
      },
      x: {
        grid: {
          color: "transparent",
        },
      },
    },
    barThickness: 5,
    borderRadius: {
      topLeft: 10,
      topRight: 10,
    },
  },
});
