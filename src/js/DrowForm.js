import Popover from './Popover';

export default class DrowForm {
  constructor(popover) {
    this.body = document.querySelector('body');
    this.popover = popover;
  }

  // отрисовка формы на странице
  drow() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    this.button = document.createElement('button');

    form.classList.add('form');
    input.classList.add('input');
    this.button.classList.add('button');

    input.type = 'text';
    this.button.type = 'submit';

    form.appendChild(input);
    form.appendChild(this.button);

    this.body.appendChild(form);
  }

  showall() {
    this.popover = new Popover(this.button);
    this.popover.startShow();
  }
}