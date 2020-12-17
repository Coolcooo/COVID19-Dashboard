import * as L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import geo from '../assets/json/countries.json';

export default function generateMap() {
  const mapboxAccessToken = 'pk.eyJ1IjoiY29vbGNvb28iLCJhIjoiY2tpcTZubWtxMDRpZTJ1b2J6cTV4MjFjOSJ9.MlAj0QDpM_1HasvFTpM3Rw';
  const settings = document.querySelector('#map__setting');

  const map = L.map('map', {
    minZoom: 2,
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
  })
    .setView([0, 0], 5);

  const getColor = (d, max) => {
    const arr = Array(7)
      .fill(undefined)
      .map((e, ind) => max / (ind + 2) ** 2);
    switch (true) {
      case (d > arr[0]):
        return '#800026';
      case (d > arr[1]):
        return '#BD0026';
      case (d > arr[2]):
        return '#E31A1C';
      case (d > arr[3]):
        return '#FC4E2A';
      case (d > arr[4]):
        return '#FD8D3C';
      case (d > arr[5]):
        return '#FEB24C';
      case (d > arr[6]):
        return '#FED976';
      default:
        return '#FFEDA0';
    }
  };
  const style = (setting, json) => function (feature) {
    return {
      fillColor: getColor(feature.properties[setting] || 0, json.features[`${setting}Max`]),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  const getCOVID = async () => {
    const data = await (await fetch('https://api.covid19api.com/summary', {
      headers: {
        'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
      },
    })).json();
    console.log(data);
    const json = geo;
    console.log(json);
    json.features.newConfirmedMax = 0;
    json.features.newDeathsMax = 0;
    json.features.newRecoveredMax = 0;
    json.features.totalConfirmedMax = 0;
    json.features.totalDeathsMax = 0;
    json.features.totalRecoveredMax = 0;
    json.features.newConfirmedPer100Max = 0;
    json.features.newDeathsPer100Max = 0;
    json.features.newRecoveredPer100Max = 0;
    json.features.totalConfirmedPer100Max = 0;
    json.features.totalDeathsPer100Max = 0;
    json.features.totalRecoveredPer100Max = 0;
    json.features.forEach((e) => {
      const geojsonProperty = e.properties;
      data.Countries.forEach((covidStatistics) => {
        if ((geojsonProperty.wb_a2 === covidStatistics.CountryCode)) {
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

          if (geojsonProperty.newConfirmed > json.features.newConfirmedMax) {
            json.features.newConfirmedMax = geojsonProperty.newConfirmed;
          }
          if (geojsonProperty.newDeaths > json.features.newDeathsMax) {
            json.features.newDeathsMax = geojsonProperty.newDeaths;
          }
          if (geojsonProperty.newRecovered > json.features.newRecoveredMax) {
            json.features.newCRecoveredMax = geojsonProperty.newRecovered;
          }
          if (geojsonProperty.totalConfirmed > json.features.totalConfirmedMax) {
            json.features.totalConfirmedMax = geojsonProperty.totalConfirmed;
          }
          if (geojsonProperty.totalDeaths > json.features.totalDeathsMax) {
            json.features.totalDeathsMax = geojsonProperty.totalDeaths;
          }
          if (geojsonProperty.totalRecovered > json.features.totalRecoveredMax) {
            json.features.totalRecoveredMax = geojsonProperty.totalRecovered;
          }
          if (geojsonProperty.newConfirmedPer100 > json.features.newConfirmedPer100Max) {
            json.features.newConfirmedPer100Max = parseFloat(geojsonProperty.newConfirmedPer100);
          }
          if (geojsonProperty.newDeathsPer100 > json.features.newDeathsPer100Max) {
            json.features.newDeathsPer100Max = parseFloat(geojsonProperty.newDeathsPer100);
          }
          if (geojsonProperty.newRecoveredPer100 > json.features.newRecoveredPer100Max) {
            json.features.newRecoveredPer100Max = parseFloat(geojsonProperty.newRecoveredPer100);
          }
          if (geojsonProperty.totalConfirmedPer100 > json.features.totalConfirmedPer100Max) {
            json.features.totalConfirmedPer100Max = parseFloat(geojsonProperty.totalConfirmedPer100);
          }
          if (geojsonProperty.totalDeathsPer100 > json.features.totalDeathsPer100Max) {
            json.features.totalDeathsPer100Max = parseFloat(geojsonProperty.totalDeathsPer100);
          }
          if (geojsonProperty.totalRecoveredPer100 > json.features.totalRecoveredPer100Max) {
            json.features.totalRecoveredPer100Max = parseFloat(geojsonProperty.totalRecoveredPer100);
          }
        }
      });
    });
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function () {
      this.div = L.DomUtil.create('div', 'info legend');
      this.update();
      return this.div;
    };

    legend.update = function update() {
      const max = json.features[`${settings.value}Max`];
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

    const info = L.control();

    let optionText = document.querySelector('#map__setting option:checked').innerText;
    info.onAdd = function () {
      this.div = L.DomUtil.create('div', 'info');
      this.update();
      return this.div;
    };
    info.update = function (props) {
      this.div.innerHTML = `<h4>${optionText}</h4>${props ? `<b>${props.name}</b><br />${props[settings.value]}` : 'Hover over a state'}`;
    };
    info.addTo(map);
    legend.addTo(map);

    let geojson;
    const highlightFeature = (e) => {
      const layer = e.target;
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
      info.update(layer.feature.properties);
    };

    const resetHighlight = (e) => {
      geojson.resetStyle(e.target);
      info.update();
    };

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    };

    geojson = L.geoJson(json, {
      style: style(settings.value, json),
      onEachFeature,
    })
      .addTo(map);
    legend.update();
    optionText = document.querySelector('#map__setting option:checked').innerText;
    info.update();

    const changeData = () => {
      geojson.setStyle(style(settings.value, json));
      legend.update();
      optionText = document.querySelector('#map__setting option:checked').innerText;
      info.update();
    };

    changeData();
    settings.addEventListener('change', changeData);
  };

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,

  })
    .addTo(map);

  document.addEventListener('DOMContentLoaded', () => {
    getCOVID();
  });
}
