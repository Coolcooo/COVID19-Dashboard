export default function getColor(d, max) {
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
}

export function style(setting, json) {
  return function styleForTile(feature) {
    return {
      fillColor: getColor(feature.properties[setting] || 0, json.max[`${setting}Max`]),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };
}
