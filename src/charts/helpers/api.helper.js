import {
  chartData,
  myChart,
} from './chart.helper';
import dateArray from './dateChart.helper';

export default async function api(method = 'world', dataToShow = 'TotalConfirmed', countryName = 'Russia', countryPopulationMultiply = 1) {
  const defaultLink = 'https://api.covid19api.com/';
  let getDataLink;
  if (method === 'world') {
    getDataLink = defaultLink + method;
  } else if (method === 'total') {
    getDataLink = `${defaultLink + method}/country/${countryName}`;
  } else if (method === 'summary') {
    getDataLink = `${defaultLink + method}`;
  }
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
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
      .then((characterData) => {
        const data = [];
        characterData.forEach((element) => {
          data.push(element[dataToShow]);
        });
        chartData(data, dataToShow, dateArray(characterData));
      });
  } else if (method === 'total') {
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
      .then((characterData) => {
        const data = [];
        characterData.forEach((element) => {
          data.push(element[dataToShow]);
        });
        chartData(data, dataToShow, dateArray(characterData));
      });
  } else if (method === 'summary') {
    fetch(getDataLink, requestOptions)
      .then((response) => response.json())
      .then((apiData) => {
        const data = [];
        apiData.forEach((element) => {
          data.push(element[dataToShow]);
        });
        chartData(data, dataToShow, dateArray(apiData));
      });
  }
}
