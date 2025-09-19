// Innovation Cameroon (IC) - minimal interactivity

// Mobile navigation toggle
const navToggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (navToggleButton && navLinks) {
  navToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Hero Carousel
let currentSlide = 0;
const carouselData = [
  {
    image: 'assets/images/gallery-1.jpg',
    message: 'Empowering students through hands-on technology projects'
  },
  {
    image: 'assets/images/gallery-2.jpg',
    message: 'Building bridges between education and industry'
  },
  {
    image: 'assets/images/gallery-3.jpg',
    message: 'Creating innovative solutions for community development'
  },
  {
    image: 'assets/images/gallery-4.jpg',
    message: 'Mentoring the next generation of tech professionals'
  },
  {
    image: 'assets/images/gallery-5.jpg',
    message: 'Mentoring the next generation of tech professionals'
  },
  {
    image: 'assets/images/gallery-6.jpg',
    message: 'Mentoring the next generation of tech professionals'
  }
];

function updateCarousel() {
  const image = document.getElementById('carousel-image');
  const text = document.getElementById('carousel-text');
  const dots = document.getElementById('carousel-dots');
  
  if (image && text && dots) {
    image.src = carouselData[currentSlide].image;
    text.textContent = carouselData[currentSlide].message;
    
    // Update dots
    dots.innerHTML = '';
    carouselData.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `carousel-dot ${index === currentSlide ? 'active' : ''}`;
      dot.onclick = () => goToSlide(index);
      dots.appendChild(dot);
    });
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselData.length;
  updateCarousel();
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Auto-advance carousel every 5 seconds
let carouselInterval;
function startCarousel() {
  carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
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
  updateCarousel();
  startCarousel();
  
  // Pause carousel on hover
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
  }
});


