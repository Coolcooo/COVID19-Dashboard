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

export function chartData(type) {
  const color = `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1`;
  chartConfig.push({
    label: `${type.replace(/([A-Z])/g, ' $1').trim()}`,
    data: dataStorage[`${type}`],
    backgroundColor: [
      `rgba(${color})`,
    ],
    borderColor: [
      `rgba(${color})`,
    ],
    borderWidth: 1,
    fill: false,
  });
}

export function setChart(method = 'total', dataToShow = ['Confirmed', 'Active'], countryName = 'Russia', countryPopulationMultiply = 1) {
  api(method, dataToShow, countryName, countryPopulationMultiply);
  myChart.update();
}

setChart();
