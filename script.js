document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navLinks.classList.toggle('is-open', opening);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
