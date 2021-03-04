import {
  generateCellTotalConfirmed, generateCellCountry, currentPopulationValue, generateCellTotalDeaths,
  generateCellTotalRecovered, generateCellNewConfirmed, generateCellNewDeaths, generateCellNewRecovered,
  generateCellTotalConfirmedPer100thou, listCategories, currentFlag, dataSummary, dataFlag,
} from './GenerateList';
import { setChart } from '../../../charts/helpers/chart.helper';

async function templeteRenderCells(data, param, func) {
  console.log(data)
  if (currentFlag <= 6) {
    data.sort((el1, el2) => el2[param] - el1[param]).map((el) => document.querySelector('.countries-list__container').appendChild(func(el, param)));
  } else if (currentFlag > 6) {
    data.sort((el1, el2) => (el2[param] / currentPopulationValue(el2.country)) * 100000 - (el1[param] / currentPopulationValue(el1.Country)) * 100000).map((el) => document.querySelector('.countries-list__container').appendChild(func(el, param)));
  }
  return data;
}

function generateCurrentList() {
  document.querySelector('.countries-list__container').innerHTML = '';
  if (currentFlag === 0) {
    templeteRenderCells(dataFlag, 'population', generateCellCountry);
  } else if (currentFlag === 1) {
    templeteRenderCells(dataSummary, 'cases', generateCellTotalConfirmed);
    setChart('world', 'cases');
  } else if (currentFlag === 2) {
    templeteRenderCells(dataSummary, 'deaths', generateCellTotalDeaths);
    setChart('world', 'deaths');
  } else if (currentFlag === 3) {
    templeteRenderCells(dataSummary, 'recovered', generateCellTotalRecovered);
    setChart('world', 'recovered');
  } else if (currentFlag === 4) {
    templeteRenderCells(dataSummary, 'todayCases', generateCellNewConfirmed);
    setChart('summary', 'todayCases');
  } else if (currentFlag === 5) {
    templeteRenderCells(dataSummary, 'todayDeaths', generateCellNewDeaths);
    setChart('summary', 'todayDeaths');
  } else if (currentFlag === 6) {
    templeteRenderCells(dataSummary, 'todayRecovered', generateCellNewRecovered);
    setChart('summary', 'todayRecovered');
  } else if (currentFlag === 7) {
    templeteRenderCells(dataSummary, 'cases', generateCellTotalConfirmedPer100thou);
    setChart('world', 'cases', 'true');
  } else if (currentFlag === 8) {
    templeteRenderCells(dataSummary, 'deaths', generateCellTotalConfirmedPer100thou);
    setChart('world', 'deaths', 'true');
  } else if (currentFlag === 9) {
    templeteRenderCells(dataSummary, 'recovered', generateCellTotalConfirmedPer100thou);
    setChart('world', 'recovered', 'true');
  } else if (currentFlag === 10) {
    templeteRenderCells(dataSummary, 'todayCases', generateCellTotalConfirmedPer100thou);
    setChart('summary', 'todayCases', 'true');
  } else if (currentFlag === 11) {
    templeteRenderCells(dataSummary, 'todayDeaths', generateCellTotalConfirmedPer100thou);
    setChart('summary', 'todayDeaths', 'true');
  } else if (currentFlag === 12) {
    templeteRenderCells(dataSummary, 'todayRecovered', generateCellTotalConfirmedPer100thou);
    setChart('summary', 'todayRecovered', 'true');
  }
  document.querySelector('.switch__title').innerHTML = listCategories[currentFlag];
}

export { generateCurrentList };
