/* =====================================================
   TURNKEY — JavaScript
   Pixel-perfect clone of uppish-master-convert-flow.base44.app
   ===================================================== */

(function () {
  'use strict';

  /* ---- NAV SCROLL ---- */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---- MOBILE MENU ---- */
  window.toggleMenu = function () {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  };

  /* ---- SCROLL REVEAL (IntersectionObserver) ---- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '-5% 0px -5% 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ---- ACTIVE NAV LINK ---- */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { threshold: 0, rootMargin: '-40% 0px -40% 0px' }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  /* ---- FAQ ACCORDION ---- */
  window.toggleFaq = function (item) {
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  };

  /* ---- FORM SUBMIT ---- */
  window.submitForm = function (event, formId) {
    event.preventDefault();
    const form = document.getElementById(formId);
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Sending…
    `;

    // Simulate async send
    setTimeout(() => {
      const successId = formId === 'heroForm' ? 'heroSuccess' : 'contactSuccess';
      form.classList.add('hidden');
      document.getElementById(successId).classList.remove('hidden');
    }, 1200);
  };

  window.resetForm = function (formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    // Reset form fields
    form.reset();
    // Reset button
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = false;
    btn.innerHTML = `Book a Call <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
    // Swap visibility
    success.classList.add('hidden');
    form.classList.remove('hidden');
  };

  /* ---- SPIN ANIMATION (for submit button) ---- */
  const spinStyle = document.createElement('style');
  spinStyle.textContent = `
    @keyframes spin { to { transform: rotate(360deg); } }
    .spin-icon { animation: spin 1s linear infinite; }
  `;
  document.head.appendChild(spinStyle);

  /* ---- SMOOTH SCROLL for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
