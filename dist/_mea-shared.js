/* _mea-shared.js — MEA design system: CSS vars + Navbar + Footer
 * Injecté dans toutes les pages du dist Astro.
 * Règles Safari iOS : var, for, function — pas const/let/forEach/arrow.
 */
(function () {
  'use strict';

  // ─── FONTS ──────────────────────────────────────────────────────────────────
  var fontPreconn1 = document.createElement('link');
  fontPreconn1.rel = 'preconnect';
  fontPreconn1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontPreconn1);

  var fontPreconn2 = document.createElement('link');
  fontPreconn2.rel = 'preconnect';
  fontPreconn2.href = 'https://fonts.gstatic.com';
  fontPreconn2.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreconn2);

  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap';
  document.head.appendChild(fontLink);

  // ─── CSS VARS + UTILITIES ───────────────────────────────────────────────────
  var cssVars = document.createElement('style');
  cssVars.textContent = [
    ':root {',
    '  --mea-orange: #dd8142;',
    '  --mea-orange-deep: #b8632a;',
    '  --mea-dark: #1c1c1c;',
    '  --mea-dark-2: #2d2d2d;',
    '  --mea-gray: #777777;',
    '  --mea-gray-2: #a8a39b;',
    '  --mea-cream: #f4efe6;',
    '  --mea-paper: #eee7d8;',
    '  --mea-white: #ffffff;',
    '}',
    '.mea-d { font-family: "Archivo Black", "Archivo", sans-serif; letter-spacing: -0.01em; }',
    '.mea-mono { font-family: "JetBrains Mono", monospace; }',
    '.mea-uc { text-transform: uppercase; letter-spacing: 0.12em; }',
    '.mea-btn-primary {',
    '  display: inline-flex; align-items: center; gap: 0.75rem;',
    '  background: var(--mea-orange); color: var(--mea-dark);',
    '  padding: 0.7rem 1.1rem;',
    '  border: 1.5px solid var(--mea-dark);',
    '  font-family: "Archivo", sans-serif;',
    '  font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;',
    '  font-size: 0.72rem; text-decoration: none; cursor: pointer;',
    '  transition: transform 0.15s ease, box-shadow 0.15s ease;',
    '  box-shadow: 5px 5px 0 0 var(--mea-dark);',
    '}',
    '.mea-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 0 var(--mea-dark); }',
    '.mea-btn-primary:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 0 var(--mea-dark); }',
    '#mea-navbar { box-sizing: border-box; }',
    '#mea-navbar * { box-sizing: border-box; }',
    '#mea-footer { box-sizing: border-box; }',
    '#mea-footer * { box-sizing: border-box; }',
    '#mea-footer a { color: inherit; text-decoration: none; }',
    '#mea-footer a:hover { color: #fff; }',
    '#mea-navbar a { color: inherit; text-decoration: none; }',
    '.mea-overlay-link:hover { color: var(--mea-orange) !important; }',
    '@media (max-width: 960px) {',
    '  #mea-nav-desktop { display: none !important; }',
    '  #mea-nav-phone   { display: none !important; }',
    '  #mea-nav-cta     { display: none !important; }',
    '  #mea-burger      { display: flex !important; }',
    '}',
    '@media (max-width: 900px) {',
    '  #mea-foot-grid { grid-template-columns: 1fr 1fr !important; }',
    '}',
    '@media (max-width: 560px) {',
    '  #mea-foot-grid { grid-template-columns: 1fr !important; }',
    '}'
  ].join('\n');
  document.head.appendChild(cssVars);

  // ─── NAVBAR HTML ───────────────────────────────────────────────────────────
  var NAV_LINKS = [
    { href: '/',          label: 'Accueil'      },
    { href: '/tarifs',    label: 'Tarifs'       },
    { href: '/artisans',  label: 'Nos métiers' },
    { href: '/a-propos',  label: 'À propos' },
    { href: '/contact',   label: 'Contact'      }
  ];

  function buildNavDesktopLinks() {
    var out = '';
    for (var i = 0; i < NAV_LINKS.length; i++) {
      out += '<a href="' + NAV_LINKS[i].href + '" class="mea-mono mea-uc" style="font-size:0.72rem;letter-spacing:0.14em;color:var(--mea-dark);">' + NAV_LINKS[i].label + '</a>';
    }
    return out;
  }

  function buildNavOverlayLinks() {
    var out = '';
    for (var i = 0; i < NAV_LINKS.length; i++) {
      out += '<a href="' + NAV_LINKS[i].href + '" class="mea-d mea-overlay-link" style="font-size:clamp(2rem,8vw,3.2rem);color:var(--mea-cream);letter-spacing:-0.01em;padding:0.65rem 0;border-bottom:1px solid rgba(244,239,230,0.1);line-height:1.1;display:block;">' + NAV_LINKS[i].label + '</a>';
    }
    return out;
  }

  var navbarHTML = [
    '<header id="mea-navbar" style="position:sticky;top:0;z-index:1000;background:transparent;border-bottom:1.5px solid transparent;transition:all 0.25s ease;">',
    '  <div style="max-width:1360px;margin:0 auto;padding:0.9rem 1.75rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;">',
    '    <a href="/" style="display:flex;align-items:center;gap:0.55rem;flex-shrink:0;overflow:visible;">',
    '      <span class="mea-d" style="font-size:2rem;line-height:1;letter-spacing:-0.03em;color:var(--mea-dark);">M<span style="color:var(--mea-orange);">E</span>A</span>',
    '      <div style="display:flex;flex-direction:column;line-height:1.1;border-left:1.5px solid var(--mea-dark);padding-left:0.55rem;">',
    '        <span class="mea-d" style="font-size:0.72rem;letter-spacing:0.04em;color:var(--mea-dark);">Mon Espace</span>',
    '        <span class="mea-d" style="font-size:0.72rem;letter-spacing:0.04em;color:var(--mea-dark);">Artisan</span>',
    '      </div>',
    '    </a>',
    '    <nav id="mea-nav-desktop" style="display:flex;gap:2rem;align-items:center;">',
    buildNavDesktopLinks(),
    '    </nav>',
    '    <div style="display:flex;align-items:center;gap:0.85rem;">',
    '      <a href="tel:+33629817069" id="mea-nav-phone" class="mea-mono mea-uc" style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:var(--mea-dark);letter-spacing:0.1em;">📞 06 29 81 70 69</a>',
    '      <a href="/contact" id="mea-nav-cta" class="mea-btn-primary" style="padding:0.7rem 1.1rem;font-size:0.72rem;">Prendre rdv <span style="font-size:1rem;">↗</span></a>',
    '      <button id="mea-burger" aria-label="Ouvrir le menu" style="display:none;flex-direction:column;justify-content:center;gap:5px;padding:0.35rem;cursor:pointer;background:none;border:none;flex-shrink:0;">',
    '        <span id="mea-bar1" style="display:block;width:24px;height:2px;background:var(--mea-dark);transition:transform 0.2s,opacity 0.2s;"></span>',
    '        <span id="mea-bar2" style="display:block;width:18px;height:2px;background:var(--mea-dark);margin-left:auto;transition:opacity 0.2s;"></span>',
    '        <span id="mea-bar3" style="display:block;width:24px;height:2px;background:var(--mea-dark);transition:transform 0.2s,opacity 0.2s;"></span>',
    '      </button>',
    '    </div>',
    '  </div>',
    '  <div id="mea-overlay" style="display:none;position:fixed;inset:0;background:rgba(28,28,28,0.97);z-index:1001;flex-direction:column;align-items:center;justify-content:center;padding:2rem;">',
    '    <div style="position:absolute;top:0;left:0;right:0;padding:0.9rem 1.75rem;display:flex;justify-content:space-between;align-items:center;">',
    '      <span class="mea-d" style="font-size:2rem;color:var(--mea-cream);letter-spacing:-0.03em;">M<span style="color:var(--mea-orange);">E</span>A</span>',
    '      <button id="mea-close" style="background:none;border:none;color:var(--mea-cream);font-size:1.4rem;cursor:pointer;padding:0.3rem;line-height:1;">✕</button>',
    '    </div>',
    '    <nav style="display:flex;flex-direction:column;width:100%;max-width:360px;gap:0;">',
    buildNavOverlayLinks(),
    '    </nav>',
    '    <a href="/contact" class="mea-btn-primary" style="margin-top:2rem;font-size:0.9rem;padding:1rem 2rem;">Prendre rdv ↗</a>',
    '    <a href="tel:+33629817069" class="mea-mono mea-uc" style="margin-top:1.25rem;font-size:0.72rem;color:var(--mea-gray-2);letter-spacing:0.14em;">📞 06 29 81 70 69</a>',
    '  </div>',
    '</header>'
  ].join('\n');

  // ─── FOOTER HTML ───────────────────────────────────────────────────────────
  var GEO_LINKS = [
    ['Saint-Nazaire',          '/creation-site-web-saint-nazaire'],
    ['Pornichet',              '/creation-site-web-pornichet'],
    ['La Baule',               '/creation-site-web-la-baule'],
    ['Guérande',          '/creation-site-web-guerande'],
    ['Trignac',                '/creation-site-web-trignac'],
    ['Montoir-de-Bretagne',    '/creation-site-web-montoir-de-bretagne'],
    ['Pontchâteau',       '/creation-site-web-pontchateau'],
    ['Savenay',                '/creation-site-web-savenay'],
    ['Saint-Joachim',          '/creation-site-web-saint-joachim'],
    ['Saint-Brevin-les-Pins',  '/creation-site-web-saint-brevin-les-pins'],
    ['Saint-Malo-de-Guersac',  '/creation-site-web-saint-malo-de-guersac'],
    ['Donges',                 '/creation-site-web-donges'],
    ['Herbignac',              '/creation-site-web-herbignac'],
    ['Besné',             '/creation-site-web-besne'],
    ['La Chapelle-des-Marais', '/creation-site-web-la-chapelle-des-marais'],
    ['Paimboeuf',              '/creation-site-web-paimboeuf'],
    ['Saint-André-des-Eaux', '/creation-site-web-saint-andre-des-eaux'],
    ['Le Pouliguen',           '/creation-site-web-le-pouliguen'],
    ['Batz-sur-Mer',           '/creation-site-web-batz-sur-mer'],
    ['Le Croisic',             '/creation-site-web-le-croisic']
  ];

  function buildGeoLinks() {
    var out = '';
    for (var i = 0; i < GEO_LINKS.length; i++) {
      var sep = i < GEO_LINKS.length - 1 ? ' <span aria-hidden="true" style="color:rgba(244,239,230,0.2);">·</span> ' : '';
      out += '<a href="' + GEO_LINKS[i][1] + '" style="font-size:0.72rem;color:rgba(244,239,230,0.35);font-family:\'JetBrains Mono\',monospace;">Création site web ' + GEO_LINKS[i][0] + '</a>' + sep;
    }
    return out;
  }

  function buildFootCol(title, links) {
    var rows = '';
    for (var i = 0; i < links.length; i++) {
      rows += '<li style="padding:0.35rem 0;"><a href="' + links[i][1] + '" style="font-size:0.88rem;color:rgba(244,239,230,0.65);">' + links[i][0] + '</a></li>';
    }
    return [
      '<div>',
      '  <div class="mea-mono mea-uc" style="font-size:0.7rem;color:var(--mea-orange);margin-bottom:1rem;letter-spacing:0.14em;">' + title + '</div>',
      '  <ul style="list-style:none;margin:0;padding:0;">' + rows + '</ul>',
      '</div>'
    ].join('\n');
  }

  var footerHTML = [
    '<footer id="mea-footer" style="background:var(--mea-dark);color:var(--mea-cream);padding:3rem 1.75rem 1.5rem;border-top:1.5px solid var(--mea-orange);">',
    '  <div style="max-width:1360px;margin:0 auto;">',
    '    <div id="mea-foot-grid" style="display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:2rem;margin-bottom:3rem;">',
    '      <div>',
    '        <div class="mea-d" style="font-size:clamp(3rem,6vw,5rem);line-height:0.9;letter-spacing:-0.03em;">M<span style="color:var(--mea-orange);">E</span>A</div>',
    '        <div style="height:3px;width:60px;background:var(--mea-orange);margin:0.5rem 0 1rem;"></div>',
    '        <div class="mea-mono mea-uc" style="font-size:0.72rem;letter-spacing:0.16em;">Mon Espace Artisan</div>',
    '        <div class="mea-mono mea-uc" style="font-size:0.62rem;color:var(--mea-gray-2);margin-top:2px;">Normandie &amp; toute la France ⚒</div>',
    '        <p style="margin-top:1.25rem;font-size:0.88rem;color:var(--mea-gray-2);max-width:280px;line-height:1.5;">Votre site internet en 48h, créé par un humain. Sans jargon, sans engagement.</p>',
    '      </div>',
    buildFootCol('Naviguer', [
      ['Accueil',       '/'],
      ['Tarifs',        '/tarifs'],
      ['Nos métiers', '/artisans'],
      ['À propos', '/a-propos'],
      ['Contact',       '/contact']
    ]),
    buildFootCol('Nos métiers', [
      ['Plombier',       '/artisans#plombier'],
      ['Électricien', '/artisans#electricien'],
      ['Peintre',        '/artisans#peintre'],
      ['Menuisier',      '/artisans#menuisier'],
      ['Couvreur',       '/artisans#couvreur'],
      ['Paysagiste',     '/artisans#paysagiste']
    ]),
    buildFootCol('Contact &amp; légal', [
      ['06 29 81 70 69',       'tel:+33629817069'],
      ['contact@mon-espace-artisan.fr', 'mailto:contact@mon-espace-artisan.fr'],
      ['Mentions légales', '/mentions-legales'],
      ['CGV',                '/cgv'],
      ['Confidentialité', '/confidentialite']
    ]),
    '    </div>',
    '    <div style="border-top:1px solid rgba(244,239,230,0.12);padding-top:1rem;margin-bottom:1rem;">',
    '      <div class="mea-mono mea-uc" style="font-size:0.65rem;color:var(--mea-gray-2);margin-bottom:0.6rem;">Zones d&rsquo;intervention — Loire-Atlantique (44)</div>',
    '      <div style="line-height:2;">' + buildGeoLinks() + '</div>',
    '    </div>',
    '    <div style="border-top:1px solid rgba(244,239,230,0.1);padding-top:1.25rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">',
    '      <div class="mea-mono mea-uc" style="font-size:0.65rem;color:var(--mea-gray-2);">© 2026 Mon Espace Artisan · Basé en Normandie (76)</div>',
    '      <div class="mea-mono mea-uc" style="font-size:0.65rem;color:var(--mea-gray-2);">Assemblé à la main · hébergé sur Cloudflare</div>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  // ─── INJECT ────────────────────────────────────────────────────────────────
  function init() {
    var existingHeader = document.querySelector('header');
    var existingFooter = document.querySelector('footer');

    if (existingHeader) {
      existingHeader.outerHTML = navbarHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    if (existingFooter) {
      existingFooter.outerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    setupNavbar();
  }

  // ─── NAVBAR BEHAVIOR ───────────────────────────────────────────────────────
  function setupNavbar() {
    var header  = document.getElementById('mea-navbar');
    var burger  = document.getElementById('mea-burger');
    var overlay = document.getElementById('mea-overlay');
    var closeBtn = document.getElementById('mea-close');
    var bar1    = document.getElementById('mea-bar1');
    var bar2    = document.getElementById('mea-bar2');
    var bar3    = document.getElementById('mea-bar3');

    if (!header || !burger || !overlay || !closeBtn) return;

    var menuOpen = false;

    function openMenu() {
      menuOpen = true;
      overlay.style.display = 'flex';
      bar1.style.transform = 'rotate(45deg) translate(5px,5px)';
      bar2.style.opacity   = '0';
      bar3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      burger.setAttribute('aria-label', 'Fermer le menu');
    }

    function closeMenu() {
      menuOpen = false;
      overlay.style.display = 'none';
      bar1.style.transform = 'none';
      bar2.style.opacity   = '1';
      bar3.style.transform = 'none';
      burger.setAttribute('aria-label', 'Ouvrir le menu');
    }

    burger.addEventListener('click', function () {
      if (menuOpen) { closeMenu(); } else { openMenu(); }
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeMenu();
    });

    var overlayLinks = overlay.querySelectorAll('a');
    for (var i = 0; i < overlayLinks.length; i++) {
      overlayLinks[i].addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeMenu();
    });

    var raf = 0;
    window.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var scrolled = window.scrollY > 80;
        header.style.background      = scrolled ? 'rgba(244,239,230,0.82)' : 'transparent';
        header.style.borderBottom    = scrolled ? '1.5px solid #1c1c1c'   : '1.5px solid transparent';
        header.style.boxShadow       = scrolled ? '0 2px 0 0 rgba(28,28,28,0.15)' : 'none';
        header.style.backdropFilter        = scrolled ? 'blur(8px)' : 'none';
        header.style.webkitBackdropFilter  = scrolled ? 'blur(8px)' : 'none';
      });
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
