/* ============================================================
   Atelier Bois & Création — Pack Premium 790€ HT
   script.js — JavaScript global partagé (5 pages)
   ============================================================ */

'use strict';

/* ---- 1. Header : transparent → opaque au scroll ---- */
(function () {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---- 2. Menu hamburger (mobile) ---- */
(function () {
  const burger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  if (!burger || !navMobile) return;
  burger.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  // Fermer si clic sur un lien mobile
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---- 3. Active nav link selon la page courante ---- */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-main a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ---- 4. Animations au scroll — IntersectionObserver ---- */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
})();

/* ---- 5. Compteurs animés (stats) ---- */
(function () {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(el => animateCounter(el));
    return;
  }
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); statsObserver.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => statsObserver.observe(el));
})();

/* ---- 6. FAQ accordéon ---- */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Fermer tous
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Ouvrir si était fermé
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---- 7. Galerie filtres (realisations.html) ---- */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
        item.style.animation = show ? 'fadeIn 0.3s ease' : '';
      });
    });
  });
})();

/* ---- 8. Lightbox JS vanilla ---- */
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbContent = lightbox.querySelector('.lb-content');
  const lbTitle   = lightbox.querySelector('.lb-title');
  const lbCat     = lightbox.querySelector('.lb-category');
  const lbClose   = lightbox.querySelector('.lb-close');
  const lbPrev    = lightbox.querySelector('.lb-prev');
  const lbNext    = lightbox.querySelector('.lb-next');
  let currentIndex = 0;
  let items = [];

  function open(index) {
    items = [...document.querySelectorAll('.gallery-item:not(.hidden)')];
    currentIndex = index;
    update();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function update() {
    const item = items[currentIndex];
    if (!item) return;
    lbContent.style.background = item.style.background || 'var(--color-primary)';
    if (lbTitle) lbTitle.textContent = item.dataset.title || '';
    if (lbCat)   lbCat.textContent   = item.dataset.category || '';
  }

  document.querySelectorAll('.gallery-item').forEach((item, i, arr) => {
    item.addEventListener('click', () => {
      const visibleItems = [...document.querySelectorAll('.gallery-item:not(.hidden)')];
      const idx = visibleItems.indexOf(item);
      open(idx >= 0 ? idx : 0);
    });
  });

  lbClose?.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + items.length) % items.length; update(); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % items.length; update(); }
  });
  lbPrev?.addEventListener('click', () => { currentIndex = (currentIndex - 1 + items.length) % items.length; update(); });
  lbNext?.addEventListener('click', () => { currentIndex = (currentIndex + 1) % items.length; update(); });
})();

/* ---- 9. Formulaire contact — confirmation JS ---- */
(function () {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();

/* ---- 10. Smooth scroll ancres internes ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
