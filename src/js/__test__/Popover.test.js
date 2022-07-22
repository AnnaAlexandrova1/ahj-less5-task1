import Popover from '../Popover';

const elem = document.createElement('div');
const popover = new Popover(elem);
popover.addTooltip();

test('bindToDOM enables markup DOM', () => {
  expect(popover.elem.innerHTML).toEqual(Popover.markUp);
});

test('tooltip добавлен в контейнер', () => {
  expect(popover.elem.hasChildNodes('.tooltip')).toBeTruthy();
});
