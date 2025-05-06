// Scroll reveal animation
const revealCards = () => {
  const cards = document.querySelectorAll('.card');
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Theme toggler
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'Dark' : 'Light';
  themeToggleBtn.textContent = `${theme} Mode`;
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Placeholder for carousel behavior (can be enhanced with libraries or custom logic)
const testimonials = document.querySelectorAll('.testimonial-carousel > div');
if (testimonials.length) {
  let index = 0;
  setInterval(() => {
    testimonials.forEach((t, i) => {
      t.style.opacity = i === index ? '1' : '0.4';
    });
    index = (index + 1) % testimonials.length;
  }, 4000);
}
