import geo from '../../assets/json/countries.json';
import getCOVID19Info from './getMap';

export default async function updateCOVID19InfoGeojson() {
  const data = await getCOVID19Info();
  const json = geo;
  json.features.forEach((e) => {
    const geojsonProperty = e.properties;
    data.Countries.forEach((covidStatistics) => {
      const isCorrectCountry = geojsonProperty.wb_a2 === covidStatistics.CountryCode;

      if (isCorrectCountry) {
        const per = 100000;
        const population = covidStatistics.Premium.CountryStats.Population;
        geojsonProperty.newConfirmed = covidStatistics.NewConfirmed;
        geojsonProperty.newDeaths = covidStatistics.NewDeaths;
        geojsonProperty.newRecovered = covidStatistics.NewRecovered;
        geojsonProperty.totalConfirmed = covidStatistics.TotalConfirmed;
        geojsonProperty.totalDeaths = covidStatistics.TotalDeaths;
        geojsonProperty.totalRecovered = covidStatistics.TotalRecovered;
        geojsonProperty.newConfirmedPer100 = ((covidStatistics.NewConfirmed / population) * per).toFixed(2);
        geojsonProperty.newDeathsPer100 = ((covidStatistics.NewDeaths / population) * per).toFixed(2);
        geojsonProperty.newRecoveredPer100 = ((covidStatistics.NewRecovered / population) * per).toFixed(2);
        geojsonProperty.totalConfirmedPer100 = ((covidStatistics.TotalConfirmed / population) * per).toFixed(2);
        geojsonProperty.totalDeathsPer100 = ((covidStatistics.TotalDeaths / population) * per).toFixed(2);
        geojsonProperty.totalRecoveredPer100 = ((covidStatistics.TotalRecovered / population) * per).toFixed(2);

        const maxParameters = json.max;
        if (geojsonProperty.newConfirmed > maxParameters.newConfirmedMax) {
          maxParameters.newConfirmedMax = geojsonProperty.newConfirmed;
        }
        if (geojsonProperty.newDeaths > maxParameters.newDeathsMax) {
          maxParameters.newDeathsMax = geojsonProperty.newDeaths;
        }
        if (geojsonProperty.newRecovered > maxParameters.newRecoveredMax) {
          maxParameters.newCRecoveredMax = geojsonProperty.newRecovered;
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
