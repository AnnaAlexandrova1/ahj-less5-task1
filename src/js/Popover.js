export default class Popover {
  constructor(elem) {
    this.elem = elem;
  }

  show() {
    const formError = document.createElement('div');
    formError.classList.add('form-error');
    this.elem.appendChild(formError);
    formError.style.top = `${this.elem.offsetTop + this.elem.offsetHeight / 2 - formError.offsetHeight / 2}px`;
    formError.style.left = `${this.elem.offsetLeft + this.elem.offsetWidth}px`;
  }

  startShow() {
    return this.show();
  }
}
