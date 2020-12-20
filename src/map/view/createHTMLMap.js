import mapWrapper from './mapWrapper';

export default function createHTMLMap(containerSelector) {
  const wrapper = document.querySelector(containerSelector);
  wrapper.appendChild(mapWrapper());
}
