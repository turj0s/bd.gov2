const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav?.classList.toggle('open');
});

const dropdownButtons = document.querySelectorAll('.has-dropdown > button');
dropdownButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    const isOpen = parent.classList.contains('open');

    document.querySelectorAll('.has-dropdown').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      parent.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
});

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#site-search');
const feedback = document.querySelector('#search-feedback');

const searchableItems = [
  'Birth & Death Registration',
  'Passport Services',
  'Land Records',
  'Education Board Results',
  'Ministry of Finance',
  'Ministry of Education',
  'Ministry of Health and Family Welfare',
  'ICT Division',
  'National Emergency 999',
  'Citizen Helpline 333',
  'Cabinet Division circular'
];

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    feedback.textContent = 'Please enter a keyword to search services and information.';
    return;
  }

  const results = searchableItems.filter((item) => item.toLowerCase().includes(query));
  feedback.textContent = results.length
    ? `${results.length} result(s): ${results.join(' • ')}`
    : 'No direct match found. Try keywords like passport, ministry, land, notice, or hotline.';
});
