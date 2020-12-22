// import {generateGlobalCases, dataSummary} from '../List/GenerateList'

// Last Date of update container
const generateLastUpdateDate = () => {
    let template = '';
    const lastUpdateDate = document.createElement('div');
    lastUpdateDate.className = 'last-update-date__container';
    template += '<div class="last-update-date__title">Last Updated at (Y/M/D/YYYY)</div>';
    template += '<div class="last-update-date__value"></div>';
    lastUpdateDate.innerHTML = template;
    return lastUpdateDate;
  };
  document.querySelector('.right-container').appendChild(generateLastUpdateDate());

async function generateGlobalCases() {
    const dataSummary = await fetchData('https://api.covid19api.com/summary');
    document.querySelector('.last-update-date__value').innerHTML = `${dataSummary.Countries[0].Date}`;
  }
  generateGlobalCases();
async function fetchData(URL) {
    const data = await fetch(URL);
    const res = data.json();
    return res;
  }

  // Generate Total Cases
async function generateLastUpdateDateValue() {
    console.log('')
    // document.querySelector('.last-update-date__value').innerHTML = `${dataSummary.Countries.Date}`;
  }
  generateLastUpdateDateValue();

  export {generateLastUpdateDate}