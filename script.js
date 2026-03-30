// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

// ===== Animate tech bars on scroll =====
function animateBars() {
  const bars = document.querySelectorAll('.tech-fill');
  bars.forEach(function (bar) {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    }
  });
}

window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);

// ===== Navbar background on scroll =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 18, 25, 0.95)';
  } else {
    navbar.style.background = 'rgba(15, 18, 25, 0.8)';
  }
});

// ===== Scroll reveal animation =====
function revealOnScroll() {
  const elements = document.querySelectorAll('.section-title, .interest-card, .project-card, .tech-item, .about-text, .about-info');
  elements.forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Set initial state for scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.section-title, .interest-card, .project-card, .tech-item, .about-text, .about-info');
  elements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  // Trigger once on load
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);
