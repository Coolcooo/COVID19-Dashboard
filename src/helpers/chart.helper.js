import Chart from 'chart.js';
import { data } from 'jquery';
import api from './api.helper';
import './data.helper';
import dataArray from './data.helper';



const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }],
  },

  // Configuration options go here
  options: {},
});
chart.update();
api('world');
dataArray();