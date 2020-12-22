import './style.css';

export default function initKeyboard() {
  const Keyboard = {
    elements: {
      main: null,
      keysContainer: null,
      keys: [],
    },

    eventHandlers: {
      oninput: null,
      onclose: null,
    },

    properties: {
      value: '',
      capsLock: false,
      shift: false,
      micro: false,
      volume: false,
    },

    init() {
      // Create main elements
      this.elements.main = document.createElement('div');
      this.elements.keysContainer = document.createElement('div');

      // Setup main elements
      this.elements.main.classList.add('keyboard', 'keyboard--hidden');
      this.elements.keysContainer.classList.add('keyboard__keys');
      this.elements.keysContainer.appendChild(this._createKeys());

      this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

      // Add to DOM
      this.elements.main.appendChild(this.elements.keysContainer);
      document.body.appendChild(this.elements.main);

      // Automatically use keyboard for elements with .use-keyboard-input
      const input = document.querySelector('.input');
      document.querySelectorAll('.button_keyboard').forEach((element) => {
        element.addEventListener('click', () => {
          this.open(input.value, (currentValue) => {
            input.value = currentValue;
          });
        });
      });
    },

    _createKeys() {
      function checkSound(property) {
        const key = document.querySelectorAll('.keyboard__key');
        if (property) {
          let sound;
          if (key[52].textContent === 'en') {
            sound = document.querySelector("audio[data-key='tink']");
          } else {
            sound = document.querySelector("audio[data-key='snare']");
          }
          sound.currentTime = 0;
          sound.play();
        }
      }

      const fragment = document.createDocumentFragment();
      const keyLayoutEN = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
        'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
        'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift',
        'space', 'switch', 'micro', 'arrowLeft', 'arrowRight', 'volume',
      ];

      // Creates HTML for an icon
      const
        createIconHTML = (icon_name) => `<i class="material-icons">${icon_name}</i>`;

      const focusKey = document.querySelector('.input');
      let cursorPos = focusKey.selectionStart;
      document.querySelector('.button_keyboard').addEventListener('click', () => {
        focusKey.focus();
      });
      keyLayoutEN.forEach((key) => {
        const keyElement = document.createElement('button');
        const insertLineBreak = ['backspace', '\\', 'enter', 'Shift'].indexOf(key) !== -1;

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');

        switch (key) {
          case 'caps':
            const tipCaps = (e) => {
              if (e.repeat) {
                return;
              }
              if (e.type === 'click' || e.code === 'CapsLock') {
                if (this.properties.volume) {
                  const sound = document.querySelector("audio[data-key='kick']");
                  sound.currentTime = 0;
                  sound.play();
                }
                this._toggleCapsLock(e);
                keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
                focusKey.focus();
                focusKey.setSelectionRange(cursorPos, cursorPos);
              }
              e.stopPropagation();
            };
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.innerHTML = createIconHTML('keyboard_capslock');

            keyElement.addEventListener('click', tipCaps);
            document.addEventListener('keydown', tipCaps);
            break;

          case 'Shift':
            const tipShift = (e) => {
              if (e.repeat) {
                return;
              }
              if (e.type === 'click' || e.key === 'Shift') {
                if (this.properties.volume) {
                  const sound = document.querySelector("audio[data-key='tom']");
                  sound.currentTime = 0;
                  sound.play();
                }
                this._toggleCapsLock(e);

                if (e.type === 'keydown') {
                  keyElement.classList.add('keyboard__key--active');
                } else if (e.type === 'keyup') {
                  keyElement.classList.remove('keyboard__key--active');
                }
                focusKey.focus();
                focusKey.setSelectionRange(cursorPos, cursorPos);
              }
              e.stopPropagation();
            };
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.innerText = 'Shift';

            keyElement.addEventListener('click', tipShift);
            document.addEventListener('keydown', tipShift);
            document.addEventListener('keyup', tipShift);

            break;

          case 'micro':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.innerHTML = createIconHTML('keyboard_voice');
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.addEventListener('result', (e) => {
              const transcript = Array.from(e.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join('');
              if (e.results[0].isFinal) {
                this.properties.value = `${this.properties.value.substring(0, cursorPos) + transcript} ${this.properties.value.substring(cursorPos, this.properties.value.length)}`;
                cursorPos += transcript.length + 1;
                this._triggerEvent('oninput');
              }
              focusKey.focus();
              focusKey.setSelectionRange(cursorPos, cursorPos);
            });
            keyElement.addEventListener('click', () => {
              checkSound(this.properties.volume);
              this._toggleMicro(recognition);
              keyElement.classList.toggle('keyboard__key--active', this.properties.micro);
              focusKey.focus();
              focusKey.setSelectionRange(cursorPos, cursorPos);
            });
            break;
          case 'volume':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.innerHTML = createIconHTML('volume_up');

            keyElement.addEventListener('click', () => {
              this.properties.volume = !this.properties.volume;
              keyElement.classList.toggle('keyboard__key--active', this.properties.volume);
              focusKey.focus();
              focusKey.setSelectionRange(cursorPos, cursorPos);
            });

            break;

          case 'arrowLeft':
            const tipArrowLeft = (e) => {
              if (e.key === 'ArrowLeft' || e.type === 'click') {
                if (e.type === 'keydown' || e.type === 'click') {
                  checkSound(this.properties.volume);
                  focusKey.focus();
                  cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }
                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  e.preventDefault();
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };

            keyElement.innerHTML = createIconHTML('keyboard_arrow_left');

            keyElement.addEventListener('click', tipArrowLeft);
            document.addEventListener('keydown', tipArrowLeft);
            document.addEventListener('keyup', tipArrowLeft);

            break;

          case 'arrowRight':
            const tipArrowRight = (e) => {
              if (e.key === 'ArrowRight' || e.type === 'click') {
                if (e.type === 'keydown' || e.type === 'click') {
                  focusKey.blur();
                  checkSound(this.properties.volume);
                  focusKey.focus();
                  cursorPos = cursorPos >= this.properties.value.length ? cursorPos : cursorPos + 1;
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }
                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  e.preventDefault();
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };
            keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
            keyElement.addEventListener('click', tipArrowRight);
            document.addEventListener('keydown', tipArrowRight);
            document.addEventListener('keyup', tipArrowRight);

            break;

          case 'enter':
            const tipEnter = (e) => {
              if (e.type === 'click' || e.key === 'Enter') {
                if (e.type === 'keydown' || e.type === 'click') {
                  if (this.properties.volume) {
                    const sound = document.querySelector("audio[data-key='clap']");
                    sound.currentTime = 0;
                    sound.play();
                  }
                  this.properties.value = `${this.properties.value.substring(0, cursorPos)}\n${this.properties.value.substring(cursorPos, this.properties.value.length)}`;
                  cursorPos += 1;

                  this._triggerEvent('oninput');

                  focusKey.focus();
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }
                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  e.preventDefault();
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_return');

            keyElement.addEventListener('click', tipEnter);
            document.addEventListener('keydown', tipEnter);
            document.addEventListener('keyup', tipEnter);

            break;
          case 'backspace':
            const tipBackspace = (e) => {
              if (e.key === 'Backspace' || e.type === 'click') {
                if (e.type === 'keydown' || e.type === 'click') {
                  if (this.properties.volume) {
                    const sound = document.querySelector("audio[data-key='boom']");
                    sound.currentTime = 0;
                    sound.play();
                  }
                  this.properties.value = this.properties.value.substring(0, cursorPos - 1) + this.properties.value.substring(cursorPos, this.properties.value.length);
                  cursorPos = cursorPos > 0 ? cursorPos - 1 : 0;

                  this._triggerEvent('oninput');

                  focusKey.focus();
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }

                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('backspace');

            keyElement.addEventListener('click', tipBackspace);
            document.addEventListener('keydown', tipBackspace);
            document.addEventListener('keyup', tipBackspace);

            break;
          case 'space':
            keyElement.classList.add('keyboard__key--extra-wide');
            keyElement.innerHTML = createIconHTML('space_bar');
            const tipSpace = (e) => {
              if (e.type === 'click' || e.key === ' ') {
                if (e.type === 'keydown' || e.type === 'click') {
                  checkSound(this.properties.volume);
                  this.properties.value = `${this.properties.value.substring(0, cursorPos)} ${this.properties.value.substring(cursorPos, this.properties.value.length)}`;
                  cursorPos += 1;
                  this._triggerEvent('oninput');
                  focusKey.focus();
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }
                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };
            keyElement.addEventListener('click', tipSpace);
            document.addEventListener('keydown', tipSpace);
            document.addEventListener('keyup', tipSpace);
            break;

          case 'done':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
            keyElement.innerHTML = createIconHTML('check_circle');
            keyElement.addEventListener('click', () => {
              checkSound(this.properties.volume);
              this.close();
              this._triggerEvent('onclose');
            });

            break;

          case 'switch':
            let firstClick = true;
            keyElement.textContent = 'en';

            keyElement.addEventListener('click', (e) => {
              checkSound(this.properties.volume);
              focusKey.focus();
              if (firstClick) {
                keyElement.textContent = 'ru';
                firstClick = false;
                this._toggleSwitch(e);
              } else {
                keyElement.textContent = 'en';
                firstClick = true;
                this._toggleSwitch(e);
              }
              focusKey.focus();
              focusKey.setSelectionRange(cursorPos, cursorPos);
            });
            break;
          default:
            const tipKey = (e) => {
              if (e.type === 'click' || e.key.toLowerCase() === keyElement.textContent.toLowerCase()) {
                if (e.type === 'keydown' || e.type === 'click') {
                  checkSound(this.properties.volume);
                  this.properties.value = this.properties.value.substring(0, cursorPos)
                    + keyElement.textContent
                    + this.properties.value.substring(cursorPos, this.properties.value.length);
                  this._triggerEvent('oninput');
                  cursorPos += 1;
                  focusKey.focus();
                  focusKey.setSelectionRange(cursorPos, cursorPos);
                }
                if (e.type === 'keydown') {
                  e.preventDefault();
                  keyElement.classList.add('keyboard__key_active');
                } else if (e.type === 'keyup') {
                  e.preventDefault();
                  keyElement.classList.remove('keyboard__key_active');
                }
              }
              e.stopPropagation();
            };
            keyElement.textContent = key.toLowerCase();
            keyElement.addEventListener('click', tipKey);
            document.addEventListener('keydown', tipKey);
            document.addEventListener('keyup', tipKey);

            break;
        }

        fragment.appendChild(keyElement);

        if (insertLineBreak) {
          fragment.appendChild(document.createElement('br'));
        }
      });

      return fragment;
    },

    _triggerEvent(handlerName) {
      if (typeof this.eventHandlers[handlerName] === 'function') {
        this.eventHandlers[handlerName](this.properties.value);
      }
    },

    _toggleCapsLock(e) {
      const numberPadEnShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      const numberPadUnshift = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
      const firstLineEnShift = ['{', '}', '|'];
      const secondLineEnShift = [':', '"'];
      const thirdLineEnShift = ['<', '>', '?'];
      const firstLineEnUnshift = ['[', ']', '\\'];
      const secondLineEnUnshift = [';', "'"];
      const thirdLineEnUnshift = [',', '.', '/'];
      const numberPadRuShift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
      const firstLineRuShift = ['/'];
      const thirdLineRuShift = [','];
      const firstLineRuUnshift = ['\\'];
      const thirdLineRuUnshift = ['.'];

      if (e.target.innerText === 'Shift' || e.key === 'Shift') {
        this.properties.shift = !this.properties.shift;
      } else if (e.target.innerText === 'keyboard_capslock' || e.key === 'CapsLock') {
        this.properties.capsLock = !this.properties.capsLock;
      }
      if (this.properties.shift) {
        if (this.elements.keys[52].textContent === 'en') {
          for (let i = 0; i < 12; i++) {
            this.elements.keys[i].textContent = numberPadEnShift[i];
          }
          for (let i = 23; i < 26; i++) {
            this.elements.keys[i].textContent = firstLineEnShift[i - 23];
          }

          for (let i = 36; i < 38; i++) {
            this.elements.keys[i].textContent = secondLineEnShift[i - 36];
          }
          for (let i = 47; i < 50; i++) {
            this.elements.keys[i].textContent = thirdLineEnShift[i - 47];
          }
        } else {
          for (let i = 0; i < 12; i++) {
            this.elements.keys[i].textContent = numberPadRuShift[i];
          }
          this.elements.keys[25].textContent = firstLineRuShift[0];
          this.elements.keys[49].textContent = thirdLineRuShift[0];
        }
      } else if (this.elements.keys[52].textContent === 'en') {
        for (let i = 0; i < 12; i++) {
          this.elements.keys[i].textContent = numberPadUnshift[i];
        }
        for (let i = 23; i < 26; i++) {
          this.elements.keys[i].textContent = firstLineEnUnshift[i - 23];
        }

        for (let i = 36; i < 38; i++) {
          this.elements.keys[i].textContent = secondLineEnUnshift[i - 36];
        }
        for (let i = 47; i < 50; i++) {
          this.elements.keys[i].textContent = thirdLineEnUnshift[i - 47];
        }
      } else {
        for (let i = 0; i < 12; i++) {
          this.elements.keys[i].textContent = numberPadUnshift[i];
        }
        this.elements.keys[25].textContent = firstLineRuUnshift[0];
        this.elements.keys[49].textContent = thirdLineRuUnshift[0];
      }
      for (const key of this.elements.keys) {
        if (key.textContent !== 'Shift' && key.textContent !== 'ru' && key.textContent !== 'en') {
          if (key.childElementCount === 0) {
            key.textContent = this.properties.capsLock ^ this.properties.shift ? key.textContent.toUpperCase()
              : key.textContent.toLowerCase();
          }
        }
      }
    },

    _toggleSwitch(e) {
      const alphaEN = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
      ];
      const alphaRU = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
        'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
        'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
      if (this.elements.keys[52].textContent === 'en') {
        for (let i = 13; i < 23; i++) {
          this.elements.keys[i].textContent = alphaEN[i - 13];
        }
        for (let i = 27; i < 36; i++) {
          this.elements.keys[i].textContent = alphaEN[i - 17];
        }
        for (let i = 40; i < 47; i++) {
          this.elements.keys[i].textContent = alphaEN[i - 21];
        }
      } else {
        for (let i = 13; i < 25; i++) {
          this.elements.keys[i].textContent = alphaRU[i - 13];
        }
        for (let i = 27; i < 37; i++) {
          this.elements.keys[i].textContent = alphaRU[i - 14];
        }
        for (let i = 40; i < 49; i++) {
          this.elements.keys[i].textContent = alphaRU[i - 17];
        }
      }
      this._toggleCapsLock(e);
    },
    _toggleMicro(recognition) {
      recognition.interimResults = true;
      this.properties.micro = !this.properties.micro;

      if (this.elements.keys[52].textContent === 'en') {
        recognition.lang = 'en-US';
      } else {
        recognition.lang = 'ru-RU';
      }

      if (this.properties.micro) {
        recognition.addEventListener('end', recognition.start);
        recognition.start();
      } else {
        recognition.abort();
        recognition.stop();
        recognition.removeEventListener('end', recognition.start);
      }
    },

    open(initialValue, oninput, onclose) {
      this.properties.value = initialValue || '';
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.remove('keyboard--hidden');
    },

    close() {
      this.properties.value = '';
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.add('keyboard--hidden');
    },
  };

  window.addEventListener('DOMContentLoaded', () => {
    Keyboard.init();
  });
}
