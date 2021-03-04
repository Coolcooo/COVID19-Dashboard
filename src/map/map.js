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
    legend.update();
    info.update();

    const changeData = () => {
      map.removeLayer(geojson);
      geojson = createVectorLayer(map, json, style(settings.value, json), info);
      legend.update();
      info.update();
    };

    changeData();
    settings.addEventListener('change', changeData);
    const geojsonLayers = geojson._layers;
    const geojsonKeys = Object.keys(geojsonLayers);
    const countriesList = document.querySelector('.countries-list__container');

    function clickTable(e) {
      const clickElem = e.target.closest('.countries-cell');
      if (clickElem) {
        const countryName = clickElem.id;
        for (let i = 0; i < geojsonKeys.length; i += 1) {
          if (countryName === geojsonLayers[geojsonKeys[i]].feature.properties.iso_a3) {
            map.fitBounds(geojsonLayers[geojsonKeys[i]].getBounds());
          }
        }
      }
    }
    countriesList.addEventListener('click', clickTable);
  }

  document.addEventListener('DOMContentLoaded', () => {
    getCOVID()
      .then((r) => r);
  });
}
