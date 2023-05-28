const faqContainer = document.querySelector('.faq-container');
const faqTitle = document.querySelector('.faq-title');
const faqContent = document.querySelector('.faq-content');
const faqIcon = document.querySelector('.faq-icon');

const burger = document.querySelector('.burger');
const dropdownMenu = document.querySelector('.dropdown');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.remove('hidden');
    nav.style.backgroundColor = 'white';
  } else {
    dropdownMenu.classList.add('hidden');
    nav.style.backgroundColor = '#FBBE24';
  }
});

faqContainer.addEventListener('click', (event) => {
  // event.target = element that we click
  const clickedArticle = event.target.closest('article');
  const clickedFaqContent = clickedArticle.querySelector('.faq-content');
  const clickedFaqIcon = clickedArticle.querySelector('.faq-icon');

  clickedFaqContent.classList.toggle('show');
  clickedFaqIcon.classList.toggle('rotate-45');
});
