export default class Popover {
  constructor(elem) {
    this.elem = elem;
    this.popover = undefined;
  }

  show() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.innerHTML = "<h1>Popover title</h1><p>And here is some amazing content. It's very engaging. Right?</p>";
    this.elem.appendChild(this.popover);
    this.caklPlace();
  }

  caklPlace() {
    const { top, left } = this.elem.getBoundingClientRect();
    this.popover.style.top = `${window.scrollY + top + this.elem.offsetHeight / 2 - this.popover.offsetHeight / 2}px`;
    this.popover.style.left = `${window.scrollX + left + this.elem.offsetWidth}px`;
  }

  startShow() {
    return this.show();
  }
}
