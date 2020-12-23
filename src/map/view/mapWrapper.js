import createLabel from './label';
import createSelect from './select';
import createOption from './option';

export default function mapWrapper() {
  const options = {
    totalConfirmed: 'Total confirmed',
    totalDeaths: 'Total deaths',
    totalRecovered: 'Total recovered',
    newConfirmed: 'New confirmed',
    newDeaths: 'New deaths',
    newRecovered: 'New recovered',
    newConfirmedPer100: 'New confirmed/100000',
    newDeathsPer100: 'New deaths/100000',
    newRecoveredPer100: 'New recovered/100000',
    totalConfirmedPer100: 'Total confirmed/100000',
    totalDeathsPer100: 'Total deaths/100000',
    totalRecoveredPer100: 'Total recovered/100000',
  };

  const wrapper = document.createElement('div');
  const label = createLabel('', 'map__setting');

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
