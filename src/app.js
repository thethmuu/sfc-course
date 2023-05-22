const faqContainer = document.querySelector('.faq-container');
const faqTitle = document.querySelector('.faq-title');
const faqContent = document.querySelector('.faq-content');
const faqIcon = document.querySelector('.faq-icon');

faqContainer.addEventListener('click', (event) => {
  // event.target = element that we click
  const clickedArticle = event.target.closest('article');
  const clickedFaqContent = clickedArticle.querySelector('.faq-content');
  const clickedFaqIcon = clickedArticle.querySelector('.faq-icon');

  clickedFaqContent.classList.toggle('show');
  clickedFaqIcon.classList.toggle('rotate-45');
});