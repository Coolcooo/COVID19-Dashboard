import geo from '../../assets/json/countries.json';
import getCOVID19Info from './getMap';

export const covid = getCOVID19Info();
const yesterdayCovid = getCOVID19Info(true);
export default async function updateCOVID19InfoGeojson() {
  const data = await covid;
  const yesterday = await yesterdayCovid;
  const json = geo;
  json.features.forEach((e) => {
    const geojsonProperty = e.properties;
    data.forEach((covidStatistics, ind) => {
      const isCorrectCountry = geojsonProperty.iso_a2 === covidStatistics.countryInfo.iso2;

      if (isCorrectCountry) {
        const per = 100000;
        const { population } = covidStatistics;
        geojsonProperty.newConfirmed = covidStatistics.todayCases || yesterday[ind].todayCases;
        geojsonProperty.newDeaths = covidStatistics.todayDeaths || yesterday[ind].todayDeaths;
        geojsonProperty.newRecovered = covidStatistics.todayRecovered || yesterday[ind].todayRecovered;
        geojsonProperty.totalConfirmed = covidStatistics.cases;
        geojsonProperty.totalDeaths = covidStatistics.deaths;
        geojsonProperty.totalRecovered = covidStatistics.recovered;
        geojsonProperty.newConfirmedPer100 = (((covidStatistics.todayCases || yesterday[ind].todayCases) / population) * per).toFixed(2);
        geojsonProperty.newDeathsPer100 = (((covidStatistics.todayDeaths || yesterday[ind].todayDeaths) / population) * per).toFixed(2);
        geojsonProperty.newRecoveredPer100 = (((covidStatistics.todayRecovered || yesterday[ind].todayRecovered) / population) * per).toFixed(2);
        geojsonProperty.totalConfirmedPer100 = ((covidStatistics.cases / population) * per).toFixed(2);
        geojsonProperty.totalDeathsPer100 = ((covidStatistics.deaths / population) * per).toFixed(2);
        geojsonProperty.totalRecoveredPer100 = ((covidStatistics.recovered / population) * per).toFixed(2);

        const maxParameters = json.max;
        if (geojsonProperty.newConfirmed > maxParameters.newConfirmedMax) {
          maxParameters.newConfirmedMax = geojsonProperty.newConfirmed;
        }
        if (geojsonProperty.newDeaths > maxParameters.newDeathsMax) {
          maxParameters.newDeathsMax = geojsonProperty.newDeaths;
        }
        if (geojsonProperty.newRecovered > maxParameters.newRecoveredMax) {
          maxParameters.newRecoveredMax = geojsonProperty.newRecovered;
        }
        if (geojsonProperty.totalConfirmed > maxParameters.totalConfirmedMax) {
          maxParameters.totalConfirmedMax = geojsonProperty.totalConfirmed;
        }
        if (geojsonProperty.totalDeaths > maxParameters.totalDeathsMax) {
          maxParameters.totalDeathsMax = geojsonProperty.totalDeaths;
        }
        if (geojsonProperty.totalRecovered > maxParameters.totalRecoveredMax) {
          maxParameters.totalRecoveredMax = geojsonProperty.totalRecovered;
        }
        if (geojsonProperty.newConfirmedPer100 > maxParameters.newConfirmedPer100Max) {
          maxParameters.newConfirmedPer100Max = parseFloat(geojsonProperty.newConfirmedPer100);
        }
        if (geojsonProperty.newDeathsPer100 > maxParameters.newDeathsPer100Max) {
          maxParameters.newDeathsPer100Max = parseFloat(geojsonProperty.newDeathsPer100);
        }
        if (geojsonProperty.newRecoveredPer100 > maxParameters.newRecoveredPer100Max) {
          maxParameters.newRecoveredPer100Max = parseFloat(geojsonProperty.newRecoveredPer100);
        }
        if (geojsonProperty.totalConfirmedPer100 > maxParameters.totalConfirmedPer100Max) {
          maxParameters.totalConfirmedPer100Max = parseFloat(geojsonProperty.totalConfirmedPer100);
        }
        if (geojsonProperty.totalDeathsPer100 > maxParameters.totalDeathsPer100Max) {
          maxParameters.totalDeathsPer100Max = parseFloat(geojsonProperty.totalDeathsPer100);
        }
        if (geojsonProperty.totalRecoveredPer100 > maxParameters.totalRecoveredPer100Max) {
          maxParameters.totalRecoveredPer100Max = parseFloat(geojsonProperty.totalRecoveredPer100);
        }
      }
    });
  });
  return json;
}
