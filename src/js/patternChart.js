var patternChart = document.getElementById("pattern-chart");

var doughnutChart = new Chart(patternChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [56000, 80000, 233000, 390000, 46000],
        backgroundColor: [
          "#BD5B00",
          "#0057BD",
          "#00BDB2",
          "#FEC229",
          "#C4C4C4",
        ],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  },
});
