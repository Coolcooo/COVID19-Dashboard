export default function createLabel(text, forSomething) {
  const label = document.createElement('label');
  label.innerText = text;
  label.htmlFor = forSomething;
  return label;
}
