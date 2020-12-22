import {
  generateCellTotalConfirmed, generateCellCountry, currentPopulationValue, generateCellTotalDeaths,
  generateCellTotalRecovered, generateCellNewConfirmed, generateCellNewDeaths, generateCellNewRecovered,
  generateCellTotalConfirmedPer100thou, listCategories, currentFlag, dataSummary, dataFlag,
} from './GenerateList';
import { setChart } from '../../../helpers/chart.helper';
// import {changeData} from '../../../map/map'
function templeteRenderCells(data, param, func) {
  if (currentFlag <= 6) {
    data.sort((el1, el2) => el2[param] - el1[param]).map((el) => document.querySelector('.countries-list__container').appendChild(func(el, param)));
  } else if (currentFlag > 6) {
    data.sort((el1, el2) => el2[param] / currentPopulationValue(el2.Country) * 100000 - el1[param] / currentPopulationValue(el1.Country) * 100000).map((el) => document.querySelector('.countries-list__container').appendChild(func(el, param)));
  }
  return data;
}

function generateCurrentList() {
  document.querySelector('.countries-list__container').innerHTML = '';
  if (currentFlag === 0) {
    templeteRenderCells(dataFlag, 'population', generateCellCountry);
  } else if (currentFlag === 1) {
    templeteRenderCells(dataSummary.Countries, 'TotalConfirmed', generateCellTotalConfirmed);
    setChart('world', ['TotalConfirmed']);
    
  } else if (currentFlag === 2) {
    templeteRenderCells(dataSummary.Countries, 'TotalDeaths', generateCellTotalDeaths);
    setChart('world', ['TotalDeaths']);
  } else if (currentFlag === 3) {
    templeteRenderCells(dataSummary.Countries, 'TotalRecovered', generateCellTotalRecovered);
    setChart('world', ['TotalRecovered']);
  } else if (currentFlag === 4) {
    templeteRenderCells(dataSummary.Countries, 'NewConfirmed', generateCellNewConfirmed);
    setChart('world', ['NewConfirmed']);
  } else if (currentFlag === 5) {
    templeteRenderCells(dataSummary.Countries, 'NewDeaths', generateCellNewDeaths);
    setChart('world', ['NewDeaths']);
  } else if (currentFlag === 6) {
    templeteRenderCells(dataSummary.Countries, 'NewRecovered', generateCellNewRecovered);
    setChart('world', ['NewRecovered']);
  } else if (currentFlag === 7) {
    templeteRenderCells(dataSummary.Countries, 'TotalConfirmed', generateCellTotalConfirmedPer100thou);
    setChart('Total', ['Confirmed']);
  } else if (currentFlag === 8) {
    templeteRenderCells(dataSummary.Countries, 'TotalDeaths', generateCellTotalConfirmedPer100thou);
  } else if (currentFlag === 9) {
    templeteRenderCells(dataSummary.Countries, 'TotalRecovered', generateCellTotalConfirmedPer100thou);
  } else if (currentFlag === 10) {
    templeteRenderCells(dataSummary.Countries, 'NewConfirmed', generateCellTotalConfirmedPer100thou);
  } else if (currentFlag === 11) {
    templeteRenderCells(dataSummary.Countries, 'NewDeaths', generateCellTotalConfirmedPer100thou);
  } else if (currentFlag === 12) {
    templeteRenderCells(dataSummary.Countries, 'NewRecovered', generateCellTotalConfirmedPer100thou);
  }
  document.querySelector('.switch__title').innerHTML = listCategories[currentFlag];
}

export { generateCurrentList };
