import * as L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import '../leafletFullscreen/Control.FullScreen.css';
import '../leafletFullscreen/Control.FullScreen';
import getColor from './stylesForCountries';
import { selectTableCurrentCountry } from '../../assets/modules/List/GenerateList';

import { setChart } from '../../charts/helpers/chart.helper';

export default async function getCOVID19Info(yesterday = false) {
  if (yesterday) {
    return (await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true')).json();
  }
  return (await fetch('https://disease.sh/v3/covid-19/countries')).json();
}

export const isStableBrowser = !L.Browser.ie && !L.Browser.opera && !L.Browser.edge;

export function createLeafletCanvas() {
  return L.map('map', {
    minZoom: 1,
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'topleft',
    },
  })
    .setView([0, 0], 5);
}

export function createLegend(json) {
  const settings = document.querySelector('#map__setting');
  const legend = L.control({ position: 'bottomright' });

  legend.onAdd = function addLegend() {
    this.div = L.DomUtil.create('div', 'info legend');
    this.update();
    return this.div;
  };

  legend.update = function update() {
    const max = json.max[`${settings.value}Max`];
    const grades = Array(8)
      .fill(undefined)
      .map((e, ind) => (max / (ind + 1) ** 2).toFixed(2));
    this.div.innerHTML = '';
    for (let i = 0; i < grades.length; i += 1) {
      this.div.innerHTML
        += `<i style="background:${getColor(grades[i], max)}"></i> ${
          grades[i]}${grades[i + 1] ? `&ndash;${grades[i + 1]}<br>` : '+'}`;
    }
  };
  return legend;
}

export function createInfoTable() {
  const settings = document.querySelector('#map__setting');
  const info = L.control();
  info.onAdd = function addInfo() {
    this.div = L.DomUtil.create('div', 'info');
    this.update();
    return this.div;
  };
  info.update = function updateInfo(props) {
    const optionText = document.querySelector('#map__setting option:checked').innerText;
    this.div.innerHTML = `<h4>${optionText}</h4>${props ? `<b>${props.name}</b><br />${props[settings.value]}` : 'Hover over a state'}`;
  };
  return info;
}

export function createVectorLayer(map, json, style, info) {
  let geojson;

  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
    });
    if (isStableBrowser) {
      layer.bringToFront();
    }
    info.update(layer.feature.properties);
  }

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    const countryName = e.target.feature.properties.iso_a3;
    document.querySelectorAll('.table-cell').forEach((el) => {
      if (countryName !== el.id) {
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
    });

    const settings = document.querySelector('#map__setting');
    const isTotal = settings.value.includes('total');
    const isPer100 = settings.value.includes('Per');
    const totalOrNew = isTotal ? 'total' : 'new';
    const option = settings.value.replace(totalOrNew, '').replace('Per100', '');
    setChart(totalOrNew, option, isPer100, countryName);
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }

  geojson = L.geoJson(json, {
    style,
    onEachFeature,
  })
    .addTo(map);
  return geojson;
}

export function createMapLayer(map) {
  const mapboxAccessToken = 'pk.eyJ1IjoiY29vbGNvb28iLCJhIjoiY2tpcTZubWtxMDRpZTJ1b2J6cTV4MjFjOSJ9.MlAj0QDpM_1HasvFTpM3Rw';
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
  })
    .addTo(map);
}
