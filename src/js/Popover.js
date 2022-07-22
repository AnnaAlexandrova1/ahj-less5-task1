export default class Popover {
  constructor(elem) {
    this.elem = elem;
    this.tooltip = null;
    this.existTooltip = false;
  }

  start() {
    this.addTooltip();
    this.button = document.querySelector('.buttonTooltip');

    this.button.onclick = (event) => {
      event.preventDefault();
      this.showTooltip();
    };
  }

  static get markUp() {
    return `
    <div class="tooltip hidden">
<div class="tooltipText">
<h1 class="tooltipTitle">Popover title</h1>
<p class="tooltipText">And here's some amazing content.It's very engaging.Right?</p>
</div>
  </div>`;
  }

  addTooltip() {
    this.elem.insertAdjacentHTML('beforeend', this.constructor.markUp);
  }

  showTooltip() {
    this.tooltip = document.querySelector('.tooltip');
    this.tooltip.classList.toggle('hidden');
    this.existTooltip = !this.tooltip.classList.contains('hidden');
    this.calkPosition();
  }

  calkPosition() {
    this.tooltip.style.top = `${this.button.offsetTop - this.tooltip.offsetHeight - 15}px`;
    this.tooltip.style.left = `${this.button.offsetLeft - Math.abs(this.tooltip.offsetWidth - this.button.offsetWidth) / 2}px`;
  }
}
