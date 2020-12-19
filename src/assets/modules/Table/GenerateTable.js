import { fetchData, currentCountry } from '../List/GenerateList';
import { generateCurrentTable } from './GenerateTablePages';
import { populationData } from '../List/data_population';

// Counties Table
const generateCountriesTable = () => {
  let template = '';
  const countriesList = document.createElement('div');
  countriesList.className = 'countries-table';
  template += '<div class="countries-table__switch">';
  template += '<button class="button switch-table__button_left"><</button>';
  template += '<div class="switch-table__title"></div>';
  template += '<button class="button switch-table__button_right">></button>';
  template += '</div>';
  template += '<div class="countries-table__container"></div>';
  countriesList.innerHTML = template;
  return countriesList;
};
document.body.appendChild(generateCountriesTable());

// Cell Total cases for Table
const generateCellTotalCases = (data) => {
  let template = '';
  const cell = document.createElement('div');
  cell.id = data.Country;
  cell.className = 'table-cell countries-table__total-cases';
  template += `<div class="table-cell__country"><b>Country:</b> ${data.Country} </div>`;
  template += '<div class="table-cell__categories">';
  template += `<div class="table-cell__categories_confirmed"> Confirmed:</br> ${data.TotalConfirmed} </div>`;
  template += `<div class="table-cell__categories_deaths"> Deaths:</br> ${data.TotalDeaths} </div>`;
  template += `<div class="table-cell__categories_recovered"> Recovered:</br> ${data.TotalRecovered} </div>`;
  template += '</div>';
  cell.innerHTML = template;
  return cell;
};

const tableCategories = ['Total Cases', 'New Cases', 'Total Cases/100 000 ', 'New Cases/100 000'];

let currentTableFlag = 0;
function TableHandlerFlagRight() {
  if (currentTableFlag >= tableCategories.length - 1) {
    currentTableFlag = 0;
  } else {
    currentTableFlag += 1;
  }
}

function TableHandlerFlagLeft() {
  if (currentTableFlag < 1) {
    currentTableFlag = 3;
  } else {
    currentTableFlag -= 1;
  }
}
document.body.querySelector('.switch-table__button_right').addEventListener('click', () => {
  TableHandlerFlagRight();
  generateTable();
  console.log(currentTableFlag);
});
document.body.querySelector('.switch-table__button_left').addEventListener('click', () => {
  TableHandlerFlagLeft();
  generateTable();
  console.log(currentTableFlag);
});

let dataSummary;
let dataFlags;
let dataFlag;
async function generateTable() {
  dataSummary = await fetchData('https://api.covid19api.com/summary');
  dataFlags = await fetchData('https://restcountries.eu/rest/v2/all?fields=name;population;flag');
  dataFlag = populationData;
  generateCurrentTable();
}
generateTable();

// document.querySelectorAll('.table-cell').map()
// Sort table by click on list
// function qwerty() {
//     if (currentCountry != document.querySelector(`${currentCountry`))
// }

export {
  generateCountriesTable, generateCurrentTable, generateCellTotalCases, tableCategories, dataSummary, currentTableFlag,
};
