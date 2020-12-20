export default function createOption(value, text) {
  const option = document.createElement('option');
  option.value = value;
  option.innerText = text;
  return option;
}
