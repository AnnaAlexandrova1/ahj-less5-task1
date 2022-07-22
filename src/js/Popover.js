export default class Popover {
  constructor(elem) {
    this.elem = elem;
    this.popover = undefined;
  }

  show() {
    this.popover = document.createElement('div');
    this.popover.classList.add('tooltip');
    this.popover.innerHTML = "<h1>Popover title</h1><p>And here is some amazing content. It's very engaging. Right?</p>";
    this.elem.appendChild(this.popover);
    this.caklPlace();
  }

  caklPlace() {
    // const { top, left } = this.elem.getBoundingClientRect();
    // console.log(window.scrollY);
    this.popover.style.top = `${this.elem.offsetTop - this.popover.offsetHeight - 10}px`;
    this.popover.style.left = `${this.elem.offsetLeft - Math.abs(this.popover.offsetWidth - this.elem.offsetWidth) / 2}px`;
  }

  startShow() {
    return this.show();
  }
}
