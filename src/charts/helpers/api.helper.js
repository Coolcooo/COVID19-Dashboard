import {
  chartData,
} from './chart.helper';
import dateArray from './dateChart.helper';

export default async function api(method = 'world', dataToShow = 'TotalConfirmed', isPer100k = false, countryName = 'Russia') {
  const countryPopulationMultiply = 1;
  const defaultLink = 'https://api.covid19api.com/';
  let getDataLink;
  if (method === 'world') {
    getDataLink = defaultLink + method;
  } else if (method === 'total') {
    getDataLink = `${defaultLink + method}/country/${countryName}`;
    console.log(getDataLink);
  } else if (method === 'summary') {
    getDataLink = `${defaultLink + method}`;
  } else if (method === 'new') {
    getDataLink = `${defaultLink}total/country/${countryName}`;
  }
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
    },
  };
  if (method === 'world') {
    fetch(getDataLink, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const characters = data;
        const characterData = [];
        characters.forEach((character) => {
          characterData.push(character);
        });
        return characterData;
      })
      .then((characterData) => characterData.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed))
      .then((apiData) => {
        const data = [];
        apiData.forEach((element) => {
          if (isPer100k) {
            data.push(Math.round(element[dataToShow] / 100000));
          } else {
            data.push(element[dataToShow]);
          }
        });
        data.sort((a, b) => a - b);
        chartData(data, dataToShow, dateArray(apiData));
        return data;
      });
  } else if (method === 'total') {
    fetch(getDataLink, requestOptions)
      .then((response) => response.json())
      .then((apiData) => {
        const data = [];
        [...dataToShow].forEach((element) => {
          apiData.forEach((element) => {
            data.push(element[dataToShow] / countryPopulationMultiply);
          });
        });
        chartData(data, dataToShow, dateArray(apiData));
      });
  } else if (method === 'new') {
    fetch(getDataLink, requestOptions)
      .then((response) => response.json())
      .then((apiData) => {
        // console.log(apiData);
        const data = [];
        const newData = [];
        apiData.forEach((element, index) => {
          if (isPer100k) {
            data.push(Math.round(element[dataToShow] / 100000));
          } else {
            data.push(element[dataToShow] / countryPopulationMultiply);
          }
          if (apiData[index + 1]) {
            newData.push(apiData[index + 1][dataToShow] - (apiData[index][dataToShow]));
          }
        });
        chartData(newData, dataToShow, dateArray(apiData));
      });
  } else if (method === 'summary') {
    fetch(getDataLink, requestOptions)
      .then((response) => response.json())
      .then((response) => response.Countries.sort((a, b) => a[dataToShow] - b[dataToShow]))
      .then((apiData) => {
        const data = [];
        const countries = [];
        apiData.forEach((element) => {
          if (isPer100k) {
            data.push(Math.round(element[dataToShow] / element.Premium.CountryStats.Population * 100000));
            countries.push(element.Country);
          } else {
            data.push(element[dataToShow]);
            countries.push(element.Country);
          }
        });
        data.sort((a, b) => a - b);
        chartData(data, dataToShow, countries);
        return data;
      });
  }
}
