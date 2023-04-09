function highlight(section) {
  const element = document.querySelector(`.${section}`);
  element.classList.toggle('highlighted');
}
const sections = document.querySelector('.sections');

sections.addEventListener('click', (event) => {
  const section = event.target.closest('.section');

  if (!section) return;

  const title = section.querySelector('.section-title');
  const content = section.querySelector('ul');

  if (event.target === title) {
    content.classList.toggle('highlight');
  }
});

const buttons = document.querySelectorAll('.section-button');

buttons.forEach(button => {
  const section = button.parentElement;
  const title = section
