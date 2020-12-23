export default function createSelect(arrayOptions) {
  const select = document.createElement('select');
  select.id = 'map__setting';
  for (let i = 0; i < arrayOptions.length; i += 1) {
    select.appendChild(arrayOptions[i]);
  }
  return select;
}
