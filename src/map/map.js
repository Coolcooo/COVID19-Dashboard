import './map.css';
import { style } from './helpers/stylesForCountries';
import {
  createInfoTable, createLeafletCanvas, createLegend, createMapLayer, createVectorLayer,
} from './helpers/getMap';
import updateCOVID19InfoGeojson from './helpers/addInfo';
import createHTMLMap from './view/createHTMLMap';

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
  }

  document.addEventListener('DOMContentLoaded', () => {
    getCOVID()
      .then((r) => r);
  });
}
