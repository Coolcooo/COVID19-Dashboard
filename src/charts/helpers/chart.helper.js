import Chart from 'chart.js';
import api from './api.helper';

import {
  dataStorage,
  chartConfig,
} from './dataStorage.helper';

export const ctx = document.getElementById('myChart').getContext('2d');
export const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [].fill.call({
      length: 300,
    }, 0),
    datasets: chartConfig,
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        // stacked: true,
      }],
    },
  },
});

// export function clearChart(label, dataset = chartConfig) {
//   console.log(chartConfig);
//   myChart.data.datasets.splice(0, 1);
//   myChart.update();
// }

export function chartData(charPoints, labelsY, labelsX) {
  const color = '255,255,255, 1';
  chartConfig[0] = {
    label: `${labelsY.replace(/([A-Z])/g, ' $1').trim()}`,
    data: charPoints,
    backgroundColor: [
      `rgba(${color})`,
    ],
    borderColor: [
      `rgba(${color})`,
    ],
    borderWidth: 5,
    fill: false,
  };
  myChart.data.labels = labelsX;
  myChart.update();
}

export function setChart(method = 'total', dataToShow = 'Confirmed', isPer100k = false, countryName = 'Russia') {
  api(method, dataToShow, isPer100k, countryName);
  myChart.update();
}

// setChart('world', 'TotalConfirmed');
