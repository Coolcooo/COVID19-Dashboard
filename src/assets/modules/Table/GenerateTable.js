import { fetchData } from '../List/GenerateList';
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
  template += `<div class="countries-list__icon_full-screen countries-table__icon_full-screen icon_full-screen"><svg version="1.1"
    id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="15px" height="15px" viewBox="0 0 402.996 402.996" style="enable-background:new 0 0 402.996 402.996;"
    xml:space="preserve">
    <path d="M392.996,1.985H258.33c-5.523,0-10,4.477-10,10V31.01c0,5.523,4.477,10,10,10h78.046L224.955,152.431
	  c-3.905,3.905-3.905,10.237,0,14.142l13.453,13.453c1.953,1.953,4.512,2.929,7.07,2.929c2.56,0,5.119-0.977,7.071-2.929
	  L363.972,68.604v78.047c0,5.523,4.478,10,10,10h19.024c5.523,0,10-4.477,10-10V11.985C402.996,6.462,398.52,1.985,392.996,1.985z"
	  />
	  <path d="M66.62,41.01h78.046c5.523,0,10-4.477,10-10V11.985c0-5.523-4.477-10-10-10H10c-5.523,0-10,4.477-10,10v134.666
	  c0,5.523,4.477,10,10,10h19.024c5.523,0,10-4.477,10-10V68.604l111.422,111.421c1.952,1.953,4.512,2.929,7.071,2.929
	  s5.119-0.977,7.071-2.929l13.453-13.453c3.905-3.905,3.905-10.237,0-14.142L66.62,41.01z"/>
	  <path d="M392.996,246.344h-19.024c-5.522,0-10,4.478-10,10v78.047L252.55,222.97c-3.903-3.905-10.237-3.905-14.142,0
	  l-13.453,13.453c-3.905,3.904-3.905,10.236,0,14.142l111.421,111.421H258.33c-5.523,0-10,4.477-10,10v19.023
	  c0,5.523,4.477,10,10,10h134.666c5.523,0,10-4.477,10-10V256.344C402.996,250.821,398.52,246.344,392.996,246.344z"/>
    <path d="M164.588,222.97c-3.905-3.905-10.238-3.905-14.142,0L39.024,334.392v-78.047c0-5.523-4.477-10-10-10H10
	  c-5.523,0-10,4.477-10,10v134.666c0,5.523,4.477,10,10,10h134.666c5.523,0,10-4.477,10-10v-19.023c0-5.523-4.477-10-10-10H66.62
    l111.421-111.422c3.905-3.904,3.905-10.236,0-14.143L164.588,222.97z"/></div>`;
  template += `<div class="countries-list__icon_full-screen icon_full-screen table-exit-full-screen hide"><svg version="1.1" id="Capa_1"
   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px"
  viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve">
  <path d="M160,0H10.667C4.771,0,0,4.771,0,10.667V160c0,5.896,4.771,10.667,10.667,10.667H32c5.896,0,10.667-4.771,10.667-10.667
  V42.667H160c5.896,0,10.667-4.771,10.667-10.667V10.667C170.667,4.771,165.896,0,160,0z"/>
  <path d="M458.667,0H309.333c-5.896,0-10.667,4.771-10.667,10.667V32c0,5.896,4.771,10.667,10.667,10.667h117.333V160
  c0,5.896,4.771,10.667,10.667,10.667h21.333c5.896,0,10.667-4.771,10.667-10.667V10.667C469.333,4.771,464.563,0,458.667,0z"/>
  <path d="M458.667,298.667h-21.333c-5.896,0-10.667,4.771-10.667,10.667v117.333H309.333c-5.896,0-10.667,4.771-10.667,10.667
  v21.333c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V309.333
  C469.333,303.437,464.563,298.667,458.667,298.667z"/>
  <path d="M160,426.667H42.667V309.333c0-5.896-4.771-10.667-10.667-10.667H10.667C4.771,298.667,0,303.437,0,309.333v149.333
  c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667v-21.333
  C170.667,431.438,165.896,426.667,160,426.667z"/></div>`;
  countriesList.innerHTML = template;
  return countriesList;
};
document.querySelector('.right-container').appendChild(generateCountriesTable());

// add full screen Table
document.querySelector('.countries-table__icon_full-screen').addEventListener('click', () => {
  document.querySelector('.countries-table').classList.add('countries-table_full-screen');
  document.querySelector('.countries-table__icon_full-screen').classList.add('hide');
  document.querySelector('.table-exit-full-screen').classList.remove('hide');
});
// remove full screen Table
document.querySelector('.table-exit-full-screen').addEventListener('click', () => {
  document.querySelector('.countries-table').classList.remove('countries-table_full-screen');
  document.querySelector('.countries-table__icon_full-screen').classList.remove('hide');
  document.querySelector('.table-exit-full-screen').classList.add('hide');
});

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

export {
  generateCountriesTable, generateCurrentTable, generateCellTotalCases, tableCategories, dataSummary, currentTableFlag,
};
