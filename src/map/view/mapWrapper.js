import createLabel from './label';
import createSelect from './select';
import createOption from './option';

export default function mapWrapper() {
  const options = {
    totalDeaths: 'Total deaths',
    totalConfirmed: 'Total confirmed',
    totalRecovered: 'Total recovered',
    newDeaths: 'New deaths',
    newConfirmed: 'New confirmed',
    newRecovered: 'New recovered',
    newDeathsPer100: 'New deaths per 100000',
    newConfirmedPer100: 'New confirmed per 100000',
    newRecoveredPer100: 'New recovered per 100000',
    totalDeathsPer100: 'Total deaths per 100000',
    totalConfirmedPer100: 'Total confirmed per 100000',
    totalRecoveredPer100: 'Total recovered per 100000',
  };

  const wrapper = document.createElement('div');
  const label = createLabel('Map settings', 'map__setting');

  const optionsHTML = [];
  wrapper.className = 'map-wrapper';

  wrapper.appendChild(label);
  const optionsValue = Object.keys(options);
  for (let i = 0; i < optionsValue.length; i += 1) {
    optionsHTML.push(createOption(optionsValue[i], options[optionsValue[i]]));
  }
  const select = createSelect(optionsHTML);

  wrapper.appendChild(label);
  wrapper.appendChild(select);
  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';
  wrapper.appendChild(mapContainer);
  return wrapper;
}
