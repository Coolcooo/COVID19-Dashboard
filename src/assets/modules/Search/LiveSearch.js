const generateSearchInput = () => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'input-container';
  template += '<input class="input" type="text">';
  template += '<button  class="button button_keyboard"><img class="icon_keyboard" src="../../img/icon_keyboard" alt="keyboard"></button>';
  cell.innerHTML = template;
  return cell;
};
document.body.appendChild(generateSearchInput());

// Live Search
document.querySelector('.input').oninput = function () {
  console.log('123');
  const inputValue = this.value.trim();
  const containerItems = document.querySelectorAll('.countries-cell');
  if (inputValue !== '') {
    containerItems.forEach((elem) => {
      if (elem.innerText.toLowerCase().search(inputValue) && elem.innerText.search(inputValue) == -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('.hide');
      }
    });
  } else {
    containerItems.forEach((elem) => {
      elem.classList.remove('hide');
    });
  }
};
