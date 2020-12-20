// const URL_BASIC_DATA_COUNTRIES = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;alpha2Code';
// const URL_ALL_DATA_COUNTRIES_COVID = 'https://api.covid19api.com/summary';

// async function getData() {
//   const basicRes = await fetch(URL_BASIC_DATA_COUNTRIES);
//   const basicDataCountries = await basicRes.json();
//   const allRes = await fetch(URL_ALL_DATA_COUNTRIES_COVID);
//   const allDataCountriesCovid = await allRes.json();
//   return { basic: basicDataCountries, all: allDataCountriesCovid };
// }

// async function renderApp() {
//   const allData = await getData();
//   const base = generateBase(allData);
// }

// function generateBase({ basic, all }) {
//   const base = {
//     category: 0,
//     date: all.Date,
//     globalData: all.Global,
//     dataCountries: generateDataCountries(basic, all.Countries),
//   };
//   return base;
// }

// function generateDataCountries(basic, countriesData) {
//   return basic.map((el) => {
//     const countryData = countriesData.filter((item) => item.CountryCode == el.alpha2Code)[0];
//     const totalConfirmedPer100thou = countryData ? Math.floor(countryData.TotalConfirmed / el.population * 100000) : null;

//     return {
//       ...el,
//       dataCovid: !!countryData,
//       totalConfirmedPer100thou,
//       ...countryData,
//     };
//   });
// }
