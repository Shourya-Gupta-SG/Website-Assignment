// Toggle Dark Mode
document.getElementById('toggleModeBtn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Back to Top
document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Testimonials auto-scroll (optional enhancement)
const slider = document.querySelector('.testimonial-slider');
if (slider) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 300;
    if (scrollAmount >= slider.scrollWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 4000);
}
