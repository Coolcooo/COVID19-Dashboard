import { generateCurrentList } from './GenerateListPages';
import { populationData } from './data_population';

// Global Cases container
const generateGlobalCasesContainer = () => {
  let template = '';
  const globalCases = document.createElement('div');
  globalCases.className = 'global-cases';
  template += '<div class="global-cases__title">Global Cases</div>';
  template += '<div class="global-cases__total-number"></div>';
  globalCases.innerHTML = template;
  return globalCases;
};
document.body.appendChild(generateGlobalCasesContainer());

// Generate Total Cases
async function generateGlobalCases() {
  const dataSummary = await fetchData('https://api.covid19api.com/summary');
  document.querySelector('.global-cases__total-number').innerHTML = `${dataSummary.Global.TotalConfirmed}`;
}
generateGlobalCases();

// Counties List
const generateCountriesList = () => {
  let template = '';
  const countriesList = document.createElement('div');
  countriesList.className = 'countries-list';
  template += '<div class="countries-list__switch">';
  template += '<button class="button switch__button_left"><</button>';
  template += '<div class="switch__title"></div>';
  template += '<button class="button switch__button_right">></button>';
  template += '</div>';
  template += '<div class="countries-list__container"></div>';
  countriesList.innerHTML = template;
  return countriesList;
};
document.body.appendChild(generateCountriesList());

document.body.querySelector('.switch__button_right').addEventListener('click', () => {
  handlerFlagRight();
  generateCountiesList();
  console.log(currentFlag);
});
document.body.querySelector('.switch__button_left').addEventListener('click', () => {
  handlerFlagLeft();
  generateCountiesList();
  console.log(currentFlag);
});

// _________________________________________________________________________________________________________________________//
async function fetchData(URL) {
  const data = await fetch(URL);
  const res = data.json();
  return res;
}
let dataSummary;
let dataFlags;
let dataFlag;

async function generateCountiesList() {
  dataSummary = await fetchData('https://api.covid19api.com/summary');
  dataFlags = await fetchData('https://restcountries.eu/rest/v2/all?fields=name;population;flag');
  dataFlag = populationData;
  generateCurrentList();
}
generateCountiesList();

// Link flag for cells
function currentLinkImage(name) {
  return populationData.filter((el) => el.name == name)[0].flag;
}
// Current population value
function currentPopulationValue(name) {
  return populationData.filter((el) => el.name == name)[0].population;
}

// Cell Country for Countries List
const generateCellCountry = (data) => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'countries-cell countries-list__country';
  cell.id = 'ckickble';

  template += `<img class="flag-image" id="ckickble" src="${data.flag}" alt="fgg">`;
  template += `${data.name} </br>`;
  template += `<div>${data.population}</div>`;
  cell.innerHTML = template;
  return cell;
};

// Cell Total confirmed for Countries List
const currentCountry = 0;
const generateCellTotalConfirmed = (data) => {
  let template = '';
  const cell = document.createElement('div');
  selectTableCurrentCountry(cell, data);

  cell.className = 'countries-cell countries-list__total-confirmed';
  cell.id = 'ckickble';
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="oups">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_yellow">${data.TotalConfirmed}</div>`;
  cell.innerHTML = template;
  return cell;
};
// Cell Total deatchs for Countries List
const generateCellTotalDeaths = (data) => {
  let template = '';
  const cell = document.createElement('div');

  cell.className = 'countries-cell countries-list__total-deaths';
  cell.id = 'ckickble';
  selectTableCurrentCountry(cell, data);
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_red">${data.TotalDeaths}</div>`;
  cell.innerHTML = template;
  return cell;
};

// Cell Total recovereed for Countries List
const generateCellTotalRecovered = (data) => {
  let template = '';
  const cell = document.createElement('div');

  cell.id = 'ckickble';
  selectTableCurrentCountry(cell, data);
  cell.className = 'countries-cell countries-list__total-recovered';
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_green">${data.TotalRecovered}</div>`;
  cell.innerHTML = template;
  return cell;
};
// Cell New Confirmed for Countries List
const generateCellNewConfirmed = (data) => {
  let template = '';
  const cell = document.createElement('div');
  cell.id = 'ckickble';
  cell.className = 'countries-cell countries-list__new-confirmed';
  selectTableCurrentCountry(cell, data);
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_yellow">${data.NewConfirmed}</div>`;
  cell.innerHTML = template;
  return cell;
};
// Cell New Deaths for Countries List
const generateCellNewDeaths = (data) => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'countries-cell countries-list__new-deaths';
  cell.id = 'ckickble';
  selectTableCurrentCountry(cell, data);
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_red">${data.NewDeaths}</div>`;
  cell.innerHTML = template;
  return cell;
};
// Cell New Recovered for Countries List
const generateCellNewRecovered = (data) => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'countries-cell countries-list__new-recovered';
  cell.id = 'ckickble';
  selectTableCurrentCountry(cell, data);
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  template += `<div class="countries-cell__value_green">${data.NewRecovered}</div>`;
  cell.innerHTML = template;
  return cell;
};

// Cell Total cases Confirmed per 100 thousand population for Countries List
const generateCellTotalConfirmedPer100thou = (data, param) => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'countries-cell countries-list__total-confirmed-per-100thou';
  cell.id = 'ckickble';
  selectTableCurrentCountry(cell, data);
  template += `<img class="flag-image" id="ckickble" src="${currentLinkImage(data.Country)}" alt="fgg">`;
  template += `${data.Country} </br>`;
  console.log(param);
  if (param === 'TotalConfirmed' || param === 'NewConfirmed') {
    template += `<div class="countries-cell__value_yellow">${Math.floor(data[param] / currentPopulationValue(data.Country) * 100000)}</div>`;
  } else if (param === 'TotalDeaths' || param === 'NewDeaths') {
    template += `<div class="countries-cell__value_red">${Math.floor(data[param] / currentPopulationValue(data.Country) * 100000)}</div>`;
  } else if (param === 'TotalRecovered' || param === 'NewRecovered') {
    template += `<div class="countries-cell__value_green">${Math.floor(data[param] / currentPopulationValue(data.Country) * 100000)}</div>`;
  }

  cell.innerHTML = template;
  return cell;
};

const listCategories = ['Total population', 'Total Confirmed', 'Total Deaths', 'Total Recovered', 'New Confirmed',
  'New Deaths', 'New Recovered', 'Total Confirmed/100 000', 'Total Deaths/100 000',
  'Total Recovered/100 000', 'New Confirmed/100 000', 'New Deaths/100 000', 'New Recovered/100 000'];

let currentFlag = 1;

function handlerFlagRight() {
  if (currentFlag >= listCategories.length - 1) {
    currentFlag = 1;
  } else {
    currentFlag += 1;
  }
}

function handlerFlagLeft() {
  if (currentFlag <= 1) {
    currentFlag = 12;
  } else {
    currentFlag -= 1;
  }
}

// Clickble List
document.querySelector('.countries-list__container').onclick = function (event) {
  const { target } = event; // где был клик?
  console.log(target);
  if (target.id != 'ckickble' && target.className != 'flag-image') return;
};

function selectTableCurrentCountry(cell, data) {
  cell.addEventListener('click', () => {
    document.querySelectorAll('.table-cell').forEach((el) => {
      if (el.id !== data.Country) {
        el.style = 'display: none';
      } else {
        el.style = 'display: block';
      }
    });
  });
}
export {
  generateGlobalCasesContainer, generateCellCountry, generateCellTotalConfirmed, generateCellTotalDeaths, generateCellTotalRecovered,
  generateCellNewConfirmed, generateCellNewDeaths, generateCellNewRecovered, generateCellTotalConfirmedPer100thou,
  fetchData, handlerFlagRight, handlerFlagLeft, currentPopulationValue, listCategories, currentFlag, dataSummary, dataFlags, dataFlag,
  generateCountiesList, currentCountry,
};
