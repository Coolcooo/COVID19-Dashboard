import { generateCurrentList } from './GenerateListPages';
import { populationData } from './data_population';
import { setChart } from '../../../charts/helpers/chart.helper';

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
document.querySelector('.left-container').appendChild(generateGlobalCasesContainer());

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
  template += `<div class="countries-list__icon_full-screen icon_full-screen"><svg version="1.1" id="Capa_1" 
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
  template += `<div class="countries-list__icon_full-screen icon_full-screen exit-full-screen hide"><svg version="1.1" id="Capa_1" 
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
document.querySelector('.left-container').appendChild(generateCountriesList());

// add full screen List
document.querySelector('.countries-list__icon_full-screen').addEventListener('click', () => {
  document.querySelector('.countries-list').classList.add('countries-list_fool-screen');
  document.querySelector('.countries-list__icon_full-screen').classList.add('hide');
  document.querySelector('.exit-full-screen').classList.remove('hide');
});
// remove full screen List
document.querySelector('.exit-full-screen').addEventListener('click', () => {
  document.querySelector('.countries-list').classList.remove('countries-list_fool-screen');
  document.querySelector('.countries-list__icon_full-screen').classList.remove('hide');
  document.querySelector('.exit-full-screen').classList.add('hide');
});

// switch buttons
document.body.querySelector('.switch__button_right').addEventListener('click', () => {
  handlerFlagRight();
  generateCountiesList();
});
document.body.querySelector('.switch__button_left').addEventListener('click', () => {
  handlerFlagLeft();
  generateCountiesList();
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
  return populationData.filter((el) => el.name === name)[0].flag;
}
// Current population value
function currentPopulationValue(name) {
  return populationData.filter((el) => el.name === name)[0].population;
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
  if (param === 'TotalConfirmed' || param === 'NewConfirmed') {
    template += `<div class="countries-cell__value_yellow">${Math.floor((data[param] / currentPopulationValue(data.Country)) * 100000)}</div>`;
  } else if (param === 'TotalDeaths' || param === 'NewDeaths') {
    template += `<div class="countries-cell__value_red">${Math.floor((data[param] / currentPopulationValue(data.Country)) * 100000)}</div>`;
  } else if (param === 'TotalRecovered' || param === 'NewRecovered') {
    template += `<div class="countries-cell__value_green">${Math.floor((data[param] / currentPopulationValue(data.Country)) * 100000)}</div>`;
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
  if (target.id !== 'ckickble' && target.className !== 'flag-image') return;
};

export function selectTableCurrentCountry(cell, data) {
  cell.addEventListener('click', () => {
    document.querySelectorAll('.table-cell').forEach((el) => {
      if (el.id !== data.Country) {
        el.style = 'display: none';
      } else {
        el.style = 'display: block';
        if (currentFlag === 1) {
          setChart('total', 'Confirmed', false, `${data.Country}`);
        } else if (currentFlag === 2) {
          setChart('total', 'Deaths', false, `${data.Country}`);
        } else if (currentFlag === 3) {
          setChart('total', 'Recovered', false, `${data.Country}`);
          console.log('Recovered');
        } else if (currentFlag === 4) {
          setChart('new', 'Confirmed', false, `${data.Country}`);
        } else if (currentFlag === 5) {
          setChart('new', 'Deaths', false, `${data.Country}`);
        } else if (currentFlag === 6) {
          setChart('new', 'Recovered', false, `${data.Country}`);
        } else if (currentFlag === 7) {
          setChart('total', 'Confirmed', true, `${data.Country}`);
        } else if (currentFlag === 8) {
          setChart('total', 'Deaths', true, `${data.Country}`);
        } else if (currentFlag === 9) {
          setChart('total', 'Recovered', true, `${data.Country}`);
        } else if (currentFlag === 10) {
          setChart('new', 'Confirmed', true, `${data.Country}`);
        } else if (currentFlag === 11) {
          setChart('new', 'Deaths', true, `${data.Country}`);
        } else if (currentFlag === 12) {
          setChart('new', 'Recovered', true, `${data.Country}`);
        }
      }
    });
  });
}

export {
  generateGlobalCasesContainer, generateGlobalCases, generateCountriesList, generateCellCountry, generateCellTotalConfirmed,
  generateCellTotalDeaths, generateCellTotalRecovered, generateCellNewConfirmed, generateCellNewDeaths, generateCellNewRecovered,
  generateCellTotalConfirmedPer100thou, fetchData, handlerFlagRight, handlerFlagLeft, currentPopulationValue, listCategories,
  currentFlag, dataSummary, dataFlags, dataFlag, generateCountiesList, currentCountry,
};
