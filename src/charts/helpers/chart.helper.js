import Chart from 'chart.js';
import api from './api.helper';
import dataArray from './dateChart.helper';
import {
  dataStorage,
  chartConfig,
} from './dataStorage.helper';

export const ctx = document.getElementById('myChart').getContext('2d');
export const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [].fill.call({
      length: 260,
    }, 1),
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

export function clearChart(label, dataset = chartConfig) {
  console.log(chartConfig);
  myChart.data.datasets.splice(0, 1);
  myChart.update();
}

export function chartData(charPoints, label) {
  const color = `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1`;
  chartConfig[0] = {
    label: `${label.replace(/([A-Z])/g, ' $1').trim()}`,
    data: charPoints,
    backgroundColor: [
      `rgba(${color})`,
    ],
    borderColor: [
      `rgba(${color})`,
    ],
    borderWidth: 1,
    fill: false,
  };
  myChart.update();
}

export function setChart(method = 'total', dataToShow = ['Confirmed', 'Active'], countryName = 'Russia', countryPopulationMultiply = 1) {
  api(method, dataToShow, countryName, countryPopulationMultiply);
  myChart.update();
}

// export function chartClear() {
//   chartConfig = [];
//   myChart.data.datasets.forEach(element => {
//     element.removeData();
//   });
//   myChart.update();
// }

setChart('world', 'TotalConfirmed', 'Russia');
// console.log(myChart.data.labels = []);
// myChart.update();