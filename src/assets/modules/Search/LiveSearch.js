const generateSearchInput = () => {
  let template = '';
  const cell = document.createElement('div');
  cell.className = 'input-container';
  template += '<input class="input" placeholder="Search for Country" type="text">';
  template += `<button  class="button button_keyboard icon_full-screen"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="30px" height="18px" viewBox="0 0 548.176 548.176" style="enable-background:new 0 0 548.176 548.176;"
  xml:space="preserve"><g>
  <path d="M537.468,120.342c-7.139-7.139-15.753-10.709-25.841-10.709H36.545c-10.088,0-18.699,3.571-25.837,10.709
      C3.571,127.48,0,136.094,0,146.179v255.815c0,10.089,3.571,18.698,10.708,25.837c7.139,7.139,15.749,10.712,25.837,10.712h475.082
      c10.088,0,18.702-3.573,25.841-10.712c7.135-7.139,10.708-15.748,10.708-25.837V146.179
      C548.176,136.094,544.603,127.48,537.468,120.342z M511.627,401.994H36.545V146.179h475.082V401.994z"/>
  <path d="M77.657,365.445h27.408c3.046,0,4.569-1.526,4.569-4.568v-27.408c0-3.039-1.52-4.568-4.569-4.568H77.657
      c-3.044,0-4.568,1.529-4.568,4.568v27.408C73.089,363.919,74.613,365.445,77.657,365.445z"/>
  <path d="M77.657,292.362h63.954c3.045,0,4.57-1.53,4.57-4.572v-27.41c0-3.045-1.525-4.565-4.57-4.568H77.657
      c-3.044,0-4.568,1.523-4.568,4.568v27.41C73.089,290.832,74.613,292.362,77.657,292.362z"/>
  <path d="M77.657,219.268h27.408c3.046,0,4.569-1.525,4.569-4.57v-27.406c0-3.046-1.52-4.565-4.569-4.57H77.657
      c-3.044,0-4.568,1.524-4.568,4.57v27.406C73.089,217.743,74.613,219.268,77.657,219.268z"/>
  <path d="M397.43,328.903H150.751c-3.046,0-4.57,1.526-4.57,4.572v27.404c0,3.039,1.524,4.572,4.57,4.572h246.67
      c3.046,0,4.572-1.526,4.572-4.572v-27.404C401.994,330.43,400.468,328.903,397.43,328.903z"/>
  <path d="M182.725,287.79c0,3.042,1.523,4.572,4.565,4.572h27.412c3.044,0,4.565-1.53,4.565-4.572v-27.41
      c0-3.045-1.518-4.565-4.565-4.568H187.29c-3.042,0-4.565,1.523-4.565,4.568V287.79z"/>
  <path d="M150.751,219.268h27.406c3.046,0,4.57-1.525,4.57-4.57v-27.406c0-3.046-1.524-4.565-4.57-4.57h-27.406
      c-3.046,0-4.57,1.524-4.57,4.57v27.406C146.181,217.743,147.706,219.268,150.751,219.268z"/>
  <path d="M255.813,287.79c0,3.042,1.524,4.572,4.568,4.572h27.408c3.046,0,4.572-1.53,4.572-4.572v-27.41
      c0-3.045-1.526-4.565-4.572-4.568h-27.408c-3.044,0-4.568,1.523-4.568,4.568V287.79z"/>
  <path d="M223.837,219.268h27.406c3.046,0,4.57-1.525,4.57-4.57v-27.406c0-3.046-1.521-4.565-4.57-4.57h-27.406
      c-3.046,0-4.57,1.524-4.57,4.57v27.406C219.267,217.743,220.791,219.268,223.837,219.268z"/>
  <path d="M328.904,287.79c0,3.042,1.525,4.572,4.564,4.572h27.412c3.045,0,4.564-1.53,4.564-4.572v-27.41
      c0-3.045-1.52-4.565-4.564-4.568h-27.412c-3.039,0-4.564,1.523-4.564,4.568V287.79z"/>
  <path d="M470.513,328.903h-27.404c-3.046,0-4.572,1.526-4.572,4.572v27.404c0,3.039,1.526,4.572,4.572,4.572h27.404
      c3.046,0,4.572-1.526,4.572-4.572v-27.404C475.085,330.43,473.562,328.903,470.513,328.903z"/>
  <path d="M296.928,219.268h27.411c3.046,0,4.565-1.525,4.565-4.57v-27.406c0-3.046-1.52-4.565-4.565-4.57h-27.411
      c-3.046,0-4.565,1.524-4.565,4.57v27.406C292.362,217.743,293.882,219.268,296.928,219.268z"/>
  <path d="M370.018,219.268h27.404c3.046,0,4.572-1.525,4.572-4.57v-27.406c0-3.046-1.526-4.565-4.572-4.57h-27.404
      c-3.046,0-4.572,1.524-4.572,4.57v27.406C365.445,217.743,366.972,219.268,370.018,219.268z"/>
  <path d="M401.991,287.79c0,3.042,1.522,4.572,4.568,4.572h63.953c3.046,0,4.572-1.53,4.572-4.572V187.292
      c0-3.046-1.522-4.565-4.572-4.57h-27.404c-3.046,0-4.572,1.524-4.572,4.57v68.52H406.56c-3.046,0-4.568,1.523-4.568,4.568V287.79z
      "/>
</g></button>`;
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
  const containerItems2 = document.querySelectorAll('.table-cell');
  if (inputValue !== '') {
    containerItems2.forEach((elem) => {
      if (elem.id.toLowerCase().search(inputValue) && elem.id.search(inputValue) == -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('.hide');
      }
    });
  } else {
    containerItems2.forEach((elem) => {
      elem.classList.remove('hide');
    });
  }
};
