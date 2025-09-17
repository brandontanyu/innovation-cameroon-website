// Innovation Cameroon (IC) - minimal interactivity

// Mobile navigation toggle
const navToggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (navToggleButton && navLinks) {
  navToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Lightbox for project images
function initLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  const overlayImg = overlay ? overlay.querySelector('img') : null;
  if (!overlay || !overlayImg) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox]');
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute('href') || trigger.getAttribute('data-src');
      if (src) {
        overlayImg.src = src;
        overlay.classList.add('active');
      }
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.lightbox-close')) {
      overlay.classList.remove('active');
      overlayImg.src = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
});


