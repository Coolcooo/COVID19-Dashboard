import Chart from 'chart.js';
import api from './api.helper';
import dataArray from './dateChart.helper';
import {
  dataStorage,
  chartConfig,
} from './dataStorage.helper';

const ctx = document.getElementById('myChart').getContext('2d');
export const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [].fill.call({
      length: 260,
    }, 4),
    datasets: chartConfig,
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});

export function chartData(type) {
  const color = `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1`;
  chartConfig.push({
    label: `${type}`,
    data: dataStorage.[`${type}`],
    backgroundColor: [
      `rgba(${color})`,
    ],
    borderColor: [
      `rgba(${color})`,
    ],
    borderWidth: 3,
    fill: false,
    // chartArea: {
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // },
  });
  // console.log(chartConfig);
  // console.log(dataStorage);
}

dataArray();
api('world');
// console.log(dataStorage.TotalConfirmed);

// dataStorage.NewConfirmed.sort((a, b) => a.NewConfirmed < b.NewConfirmed);
// console.log(dataStorage.TotalConfirmed);
myChart.update();
