import './map.css';
import { style } from './helpers/stylesForCountries';
import {
  createInfoTable, createLeafletCanvas, createLegend, createMapLayer, createVectorLayer,
} from './helpers/getMap';
import updateCOVID19InfoGeojson from './helpers/addInfo';
import createHTMLMap from './view/createHTMLMap';
import { selectTableCurrentCountry } from '../assets/modules/List/GenerateList';


export default function generateMap(containerSelector) {
  createHTMLMap(containerSelector);

  const settings = document.querySelector('#map__setting');
  const map = createLeafletCanvas();
  createMapLayer(map);

  async function getCOVID() {
    const json = await updateCOVID19InfoGeojson();
    const legend = createLegend(json);
    const info = createInfoTable();

    info.addTo(map);
    legend.addTo(map);

    let geojson = createVectorLayer(map, json, style(settings.value, json), info);
    console.log(geojson._layers[35].feature.properties);
    legend.update();
    info.update();

    const changeData = () => {
      map.removeLayer(geojson);
      geojson = createVectorLayer(map, json, style(settings.value, json), info);
      legend.update();
      info.update();
    };

    changeData();
    console.log(geojson._layers);
    settings.addEventListener('change', changeData);
    setTimeout(() => {
      const countries = document.querySelectorAll('.countries-cell');
      countries.forEach(((cell) => {
        let countryName = cell.textContent.split(' ');
        countryName = countryName.slice(0, countryName.length - 1).join(' ').trim();
        cell.addEventListener('click', () => {
          const geojsonKeys = Object.keys(geojson._layers);
          for (let i = 0; i < geojsonKeys.length; i += 1) {
            if (countryName === geojson._layers[geojsonKeys[i]].feature.properties.name_sort) {
              map.fitBounds(geojson._layers[geojsonKeys[i]].getBounds());
            }
          }
        });
      }));
    }, 500);
  }

  document.addEventListener('DOMContentLoaded', () => {
    getCOVID()
      .then((r) => r);
  });
}
