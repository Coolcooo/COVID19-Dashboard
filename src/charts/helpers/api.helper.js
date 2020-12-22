import {
  dataStorage,
} from './dataStorage.helper';
import {
  chartData,
  myChart,
} from './chart.helper';

export default async function api(method = 'world', dataToShow = 'TotalConfirmed', countryName = 'Russia', countryPopulationMultiply = 1) {
  const defaultLink = 'https://api.covid19api.com/';
  let getDataLink;
  if (method === 'world') {
    getDataLink = defaultLink + method;
  } else if (method === 'total') {
    getDataLink = `${defaultLink + method}/country/${countryName}`;
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
        // characterData.forEach((character) => {
        //   dataStorage.NewConfirmed.push(character.NewConfirmed);
        //   dataStorage.TotalConfirmed.push(character.TotalConfirmed);
        //   dataStorage.NewDeaths.push(character.NewDeaths);
        //   dataStorage.TotalDeaths.push(character.TotalDeaths);
        //   dataStorage.NewRecovered.push(character.NewRecovered);
        //   dataStorage.TotalRecovered.push(character.TotalRecovered);
        //   myChart.update();
        // });
        const data = [];
        characterData.forEach(element => {
          data.push(element[dataToShow]);
        });
        chartData(data, dataToShow);
        // dataToShow.forEach((data) => {
        //   chartData(data);
        //   myChart.update();
        // });
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
        // characterData.forEach((character) => {
        //   dataStorage.Confirmed.push(character.Confirmed * countryPopulationMultiply);
        //   dataStorage.Deaths.push(character.Deaths * countryPopulationMultiply);
        //   dataStorage.Recovered.push(character.Recovered * countryPopulationMultiply);
        //   dataStorage.Active.push(character.Active * countryPopulationMultiply);
        //   myChart.update();

        const data = [];
        characterData.forEach(element => {
          data.push(element[dataToShow]);
        });
        chartData(data, dataToShow);
        // });
        // dataToShow.forEach((data) => {
        //   chartData(data);
        //   myChart.update();
        // });
      });
  }
}
