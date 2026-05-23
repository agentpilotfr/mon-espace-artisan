// L'Art du Bois Français — Thomas Lefebvre — 2026-04-10

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────
     Sticky header
  ────────────────────────────── */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ──────────────────────────────
     Mobile menu
  ────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  const openMenu  = () => { hamburger.classList.add('active'); mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { hamburger.classList.remove('active'); mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', () => mobileNav.classList.contains('open') ? closeMenu() : openMenu());
  mobileClose.addEventListener('click', closeMenu);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* ──────────────────────────────
     Active nav link on scroll
  ────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  /* ──────────────────────────────
     Contact form
  ────────────────────────────── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#E57373';
          valid = false;
        }
      });
      if (!valid) return;
      form.style.display = 'none';
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ──────────────────────────────
     Smooth scroll (fallback)
  ────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

});
