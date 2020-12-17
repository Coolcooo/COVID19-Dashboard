import { dataStorage } from './dataStorage.helper';
import {chartData, myChart} from './chart.helper';

export default async function api(method = 'summary', countryName = 'Russia') {
  const obj = [];
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch(`https://api.covid19api.com/${method}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const characters = data;
      const characterData = [];
      characters.forEach((character) => {
        characterData.push(character);
      });
      // dataStorage.TotalConfirmed.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
      return characterData;
    })
    .then((characterData) => characterData.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed))
    .then((characterData) => {
      characterData.forEach(character => {
        dataStorage.NewConfirmed.push(character.NewConfirmed);
        dataStorage.TotalConfirmed.push(character.TotalConfirmed);
        dataStorage.NewDeaths.push(character.NewDeaths);
        dataStorage.TotalDeaths.push(character.TotalDeaths);
        dataStorage.NewRecovered.push(character.NewRecovered);
        dataStorage.TotalRecovered.push(character.TotalRecovered);
        myChart.update();
      });
      console.log(dataStorage);
      chartData('NewConfirmed');
      chartData('TotalConfirmed');
      chartData('NewDeaths');
      chartData('TotalDeaths');
      chartData('NewRecovered');
      chartData('TotalRecovered');
      myChart.update();
    });
}
