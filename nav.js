/* nav.js — shared scroll behaviour */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Scroll-triggered fade-up for elements with .reveal class
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity .7s ease ${(i % 4) * 0.08}s, transform .7s ease ${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
  });

  document.addEventListener('animationend', () => {});
});

// add .revealed styles inline for simplicity
const style = document.createElement('style');
style.textContent = `.revealed { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);
