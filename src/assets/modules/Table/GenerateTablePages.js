import {
  generateCellTotalCases, tableCategories, dataSummary, currentTableFlag,
} from './GenerateTable';
import { currentPopulationValue } from '../List/GenerateList';

function templeteRenderTableCells(data, param, func) {
  if (currentTableFlag < 2) {
    data.sort((el1, el2) => el2[param] - el1[param]).map((el) => document.querySelector('.countries-table__container').appendChild(func(el, param)));
  } else if (currentTableFlag >= 2) {
    data.sort((el1, el2) => (el2[param] / currentPopulationValue(el2.country)) * 100000 - (el1[param] / currentPopulationValue(el1.Country)) * 100000).map((el) => document.querySelector('.countries-table__container').appendChild(func(el, param)));
  }
}

function generateCurrentTable() {
  document.querySelector('.countries-table__container').innerHTML = '';
  if (currentTableFlag === 0) {
    templeteRenderTableCells(dataSummary, 'cases', generateCellTotalCases);
  } else if (currentTableFlag === 1) {
    templeteRenderTableCells(dataSummary, 'todayCases', generateCellTotalCases);
  } else if (currentTableFlag === 2) {
    templeteRenderTableCells(dataSummary, 'cases', generateCellTotalCases);
  } else if (currentTableFlag === 3) {
    templeteRenderTableCells(dataSummary, 'todayCases', generateCellTotalCases);
  }
  document.querySelector('.switch-table__title').innerHTML = tableCategories[currentTableFlag];
}

export { generateCurrentTable };
