# PROMPT CLAUDE CODE — PACK PREMIUM 790€ HT

## RÔLE

Tu es un développeur web expert en création de sites vitrine haut de gamme pour artisans. Tu vas générer un site **multipage complet** (5 fichiers HTML + CSS + JS) à partir du fichier `config.json` fourni dans le dossier courant.

---

## ÉTAPE 1 — LIRE LE CONFIG

Lis `_templates/premium/config.json` (ou le config du client fourni).  
Extrais **toutes** les valeurs. Ne laisse aucune valeur codée en dur : tout vient du config.

---

## STACK TECHNIQUE

- **HTML5 sémantique + CSS3 + JS vanilla**
- **5 fichiers HTML** séparés + `style.css` + `script.js` = **7 fichiers**
- Navigation inter-pages via liens relatifs (`href="services.html"`, etc.)
- Google Fonts via CDN (`fontDisplay` + `fontBody` du config)
- CSS dans `style.css` partagé par toutes les pages
- JS dans `script.js` partagé par toutes les pages
- Zéro dépendance externe (pas de Bootstrap, jQuery, Alpine, Tailwind)
- Cible : chargement < 1,5 seconde

---

## DESIGN SYSTEM GLOBAL

```css
:root {
  --color-primary:   [colorPrimary];    /* ex: #3D2B1F */
  --color-secondary: [colorSecondary];  /* ex: #F5EFE6 */
  --color-accent:    [colorAccent];     /* ex: #C8A96E */
  --font-display:    '[fontDisplay]', Georgia, serif;
  --font-body:       '[fontBody]', system-ui, sans-serif;
  --radius-card:     12px;
  --radius-btn:      6px;
  --shadow-card:     0 4px 24px rgba(0,0,0,0.08);
  --shadow-hover:    0 8px 40px rgba(0,0,0,0.14);
  --transition:      0.3s ease;
  --max-width:       1200px;
}
```

- H1, H2, H3 : `var(--font-display)`
- Corps, nav, labels : `var(--font-body)`
- Boutons primaires : fond `--color-primary`, texte blanc, hover assombri 10%
- Boutons secondaires : bordure `--color-accent`, texte `--color-accent`, hover fond `--color-accent` texte blanc
- Sections alternées : fond blanc / fond `--color-secondary`
- Responsive : breakpoints **480px / 768px / 1024px**

---

## COMPOSANTS PARTAGÉS (injectés dans chaque page)

### HEADER — Navigation complète

```html
<header id="header">
  <div class="header-inner container">
    <a class="logo" href="index.html">[businessName]</a>
    <nav class="nav-main">
      <a href="index.html">Accueil</a>
      <a href="services.html">Services</a>
      <a href="realisations.html">Réalisations</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </nav>
    <a class="btn-header-cta" href="contact.html">Devis gratuit</a>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

CSS clés :
- Sticky `position: fixed; top: 0; width: 100%; z-index: 200`
- Transparent → fond `--color-primary` + `box-shadow` au scroll
- `.logo` : `font-family: var(--font-display)`, `color: --color-accent`, bold
- Hauteur 72px desktop / 60px mobile
- Page active : classe `.active` sur le `<a>` courant, souligné `--color-accent`
- Hamburger visible < 768px → menu vertical slide-down

### FOOTER — Identique sur toutes les pages

```html
<footer id="footer">
  <div class="footer-grid container">
    <div class="footer-col footer-brand">
      <h3>[businessName]</h3>
      <p>[description courte, 1 phrase]</p>
      <!-- Réseaux sociaux placeholders -->
      <div class="social-links">
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Google">G+</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="realisations.html">Réalisations</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <p>📍 [street], [postalCode] [city]</p>
      <p>☎ <a href="tel:[phone]">[phone]</a></p>
      <p>✉ <a href="mailto:[email]">[email]</a></p>
      <p>Lun–Ven 8h–18h · Sam 9h–12h</p>
    </div>
    <div class="footer-col">
      <h4>Zones d'intervention</h4>
      <p>Rayon de [radiusKm] km autour de [city]</p>
      <!-- Liste des communes clés -->
    </div>
  </div>
  <div class="footer-bottom">
    <p>SIRET : [siret] — TVA : [tva]</p>
    <p>© [année] [businessName] — <a href="#">Mentions légales</a> — <a href="#">CGV</a> — <a href="#">Politique de confidentialité</a></p>
    <p>[agencyCredit]</p>
  </div>
</footer>
```

---

## PAGE 1 — index.html (Accueil)

### Head

```html
<title>[seo.metaTitle]</title>
<meta name="description" content="[seo.metaDescription]">
<meta name="keywords" content="[keywords joints par virgule]">
```

Schema.org LocalBusiness complet (JSON-LD) :

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[businessName]",
  "description": "[description]",
  "telephone": "[phone]",
  "email": "[email]",
  "url": "[website]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[street]",
    "addressLocality": "[city]",
    "postalCode": "[postalCode]",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates" },
  "openingHoursSpecification": [...depuis openingHours...],
  "areaServed": [communes array],
  "priceRange": "€€€"
}
```

### Sections dans l'ordre

**1. HERO — pleine hauteur (100vh)**
- H1 : `[tagline]` — police `fontDisplay`, blanc, 3.5rem desktop
- Sous-titre : première phrase de `description`
- 2 CTA : "Voir nos réalisations" → `realisations.html` + "☎ Appeler" → `tel:[phone]`
- Fond : dégradé sombre sur pattern texture bois (CSS uniquement, pas d'image)
- Badge animé bas-droite : "[yearsExperience] ans d'expérience"
- Animation `fadeInUp` sur H1, sous-titre et CTAs (stagger 0.2s)

**2. BANDE DE CONFIANCE — Stats animées**
- 4 compteurs animés au scroll (IntersectionObserver) :
  - [interventions] chantiers réalisés
  - [satisfaction]% clients satisfaits
  - [soustraitance]% de sous-traitance
  - [garantieAns] ans de garantie
- Fond `--color-primary`, texte blanc, chiffres en `fontDisplay` 3rem

**3. SERVICES APERÇU (3 featured)**
- Afficher uniquement `services[]` avec `featured: true`
- Cards avec icône SVG inline, titre, 2 lignes de description
- Lien "Tous nos services →" → `services.html`

**4. RÉALISATIONS APERÇU (4 photos)**
- 4 placeholders CSS avec dégradés chaleureux (évocateurs du métier)
- Overlay au hover : nom du service + icône loupe
- Lien "Voir toutes nos réalisations →" → `realisations.html`

**5. POURQUOI NOUS — 4 arguments**
- Icônes SVG inline + titre + description courte
- Basé sur `sellingPoints` ou équivalent du config
- Layout 2×2 desktop, 1 col mobile

**6. TÉMOIGNAGES (3 sur 5)**
- Afficher les 3 premiers de `testimonials[]`
- 5 étoiles `--color-accent`, texte entre guillemets typographiques
- Prénom + ville + badge service
- Lien "Tous les avis →" → `realisations.html#temoignages`

**7. BLOG APERÇU (3 articles)**
- Condition : `options.showBlog === true`
- 3 cards avec titre, description 1 ligne, lien "Lire l'article →" vers `blog.html#[slug]`
- Lien "Voir tous les articles →" → `blog.html`

**8. CTA PRISE DE RDV**
- Bandeau pleine largeur fond `--color-accent`
- Titre : "Prenez rendez-vous en ligne"
- Si `rdv.calendlyUrl` non vide → bouton "Réserver un créneau" (Calendly)
- Sinon → bouton "☎ Appeler pour un RDV" → `tel:[phone]`

---

## PAGE 2 — services.html

### Head

```html
<title>Nos services menuiserie — [businessName] | [city]</title>
<meta name="description" content="Découvrez tous nos services de menuiserie à [city] : [liste 3 services]. Devis gratuit sous 48h.">
```

Schema.org Breadcrumb :

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "[website]" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "[website]/services.html" }
  ]
}
```

### Sections

**1. HERO COURT (400px)**
- H1 SEO : "Menuiserie sur mesure à [city] — Nos prestations"
- Fil d'Ariane : Accueil › Services
- Fond `--color-primary` avec motif CSS

**2. GRID SERVICES COMPLETS (8 cards)**
- Toutes les entrées de `services[]`
- Icône SVG inline 64px + titre H3 + description longue + badge "Populaire" si `featured: true`
- Grid 4 col desktop / 2 col tablette / 1 col mobile

**3. CERTIFICATIONS ET LABELS**
- Badges `certifications[]` avec icône bouclier SVG
- Fond `--color-secondary`, bordure `--color-accent`

**4. FAQ SERVICES (6 questions)**
- Accordéon CSS pur (transition `max-height`)
- Questions spécifiques au métier menuisier :
  1. "Quels types de bois utilisez-vous pour vos réalisations ?"
  2. "Réalisez-vous des meubles entièrement sur mesure ?"
  3. "Quels sont vos délais moyens pour un escalier sur mesure ?"
  4. "Intervenez-vous sur des bâtiments anciens et classés ?"
  5. "Quelle garantie proposez-vous sur vos ouvrages ?"
  6. "Comment se déroule un premier rendez-vous chantier ?"
- Réponses cohérentes avec les valeurs du config (`stats`, `certifications`)

**5. CTA DEVIS**
- Bandeau : "Demandez un devis gratuit sous 48h" → `contact.html`

---

## PAGE 3 — realisations.html

### Head

```html
<title>Réalisations menuiserie Lyon — [businessName] | Portfolio</title>
<meta name="description" content="Découvrez les réalisations de [businessName] : escaliers, parquets, meubles sur mesure à [city]. Photos avant/après.">
```

Schema.org Breadcrumb (Accueil › Réalisations)

### Sections

**1. HERO COURT (400px)**
- H1 : "Nos réalisations menuiserie — Portfolio à [city]"
- Fil d'Ariane : Accueil › Réalisations

**2. GALERIE 12 PHOTOS AVEC FILTRES JS**
- Boutons filtres : Tous · [galerie.categories]
- 12 placeholders CSS répartis entre les catégories (3 par catégorie)
- Chaque placeholder : gradient dégradé évocateur + label catégorie + nom service
- Filtre JS : `.gallery-item.hidden { display: none }` avec animation fade
- Lightbox JS vanilla au clic :
  - Fond noir 90% opacité
  - Navigation ← → entre photos
  - Fermeture : touche Échap ou clic extérieur
  - Titre du projet + catégorie affichés

**3. TÉMOIGNAGES COMPLETS (5)**
- Ancre `id="temoignages"`
- Tous les `testimonials[]` du config
- Layout : 2 col desktop, 1 col mobile
- Étoiles + texte + prénom/ville/service

**4. CTA DEVIS**
- Identique aux autres pages

---

## PAGE 4 — blog.html

### Head

```html
<title>Blog menuiserie Lyon — Conseils & Guides | [businessName]</title>
<meta name="description" content="Articles et conseils de [ownerName], artisan menuisier à [city] : choisir son parquet, réaliser un escalier sur mesure, comparer bois et composite.">
```

Schema.org Breadcrumb (Accueil › Blog)

### Sections

**1. HERO COURT (400px)**
- H1 : "Blog menuiserie — Conseils d'un artisan à [city]"
- Sous-titre : "Guides pratiques, comparatifs et tendances bois par [ownerName]"

**2. ARTICLES COMPLETS (3)**

Pour chaque article dans `blog.articles[]` :

```html
<article id="[slug]" class="blog-article">
  <header class="article-header">
    <span class="article-category">Menuiserie · Lyon</span>
    <h2>[titre]</h2>
    <div class="article-meta">
      Par [ownerName] · [date fictive réaliste] · 5 min de lecture
    </div>
  </header>
  <div class="article-body">
    <!-- Introduction + 3 paragraphes substantiels + liste de conseils pratiques -->
    <!-- Contenu réel et utile pour le SEO local, mentions de communes -->
  </div>
  <div class="article-cta">
    <p>Un projet en tête ? <a href="contact.html">Demandez un devis gratuit →</a></p>
  </div>
</article>
```

Contenu exigé par article :
- Introduction engageante (2 phrases)
- 3 paragraphes développés (4–5 phrases chacun), contenu concret et utile
- Liste `<ul>` "Conseils pratiques" (5 points)
- CTA en fin d'article
- Mentions naturelles des communes `zone.communes` pour le SEO local

**3. SIDEBAR (fixe à droite)**

```html
<aside class="blog-sidebar">
  <div class="sidebar-contact">
    <h3>Votre menuisier à [city]</h3>
    <p>[description 1 phrase]</p>
    <a href="tel:[phone]" class="btn-sidebar-call">☎ [phone]</a>
    <a href="contact.html" class="btn-sidebar-devis">Devis gratuit</a>
  </div>
  <div class="sidebar-articles">
    <h4>Autres articles</h4>
    <!-- Liens internes vers les autres articles -->
  </div>
</aside>
```

Layout : 70% article / 30% sidebar desktop — 1 col mobile

---

## PAGE 5 — contact.html

### Head

```html
<title>Contact & RDV — [businessName] | Menuisier [city]</title>
<meta name="description" content="Contactez [ownerName], menuisier à [city]. Formulaire de devis, prise de RDV en ligne, carte et horaires. Réponse sous 48h.">
```

Schema.org Breadcrumb (Accueil › Contact)

### Sections

**1. HERO COURT (400px)**
- H1 : "Contactez votre menuisier artisan à [city]"
- Sous-titre : "Devis gratuit · Réponse sous 48h · [phone]"

**2. BLOC PRINCIPAL (2 colonnes)**

Colonne gauche — Formulaire complet :

```html
<form id="contact-form" action="#" method="POST">
  <div class="form-row">
    <input type="text"  name="prenom"    placeholder="Prénom *"    required>
    <input type="text"  name="nom"       placeholder="Nom *"       required>
  </div>
  <div class="form-row">
    <input type="email" name="email"     placeholder="Email *"     required>
    <input type="tel"   name="telephone" placeholder="Téléphone *" required>
  </div>
  <select name="service" required>
    <option value="">Quel service vous intéresse ?</option>
    <!-- Options depuis services[].label -->
  </select>
  <input type="text" name="ville" placeholder="Votre ville / code postal *" required>
  <input type="text" name="budget" placeholder="Budget estimé (optionnel)">
  <textarea name="message" rows="5" placeholder="Décrivez votre projet en quelques mots..." required></textarea>
  <label class="checkbox-rgpd">
    <input type="checkbox" required>
    J'accepte que mes données soient utilisées pour répondre à ma demande.
  </label>
  <button type="submit" class="btn-submit">Envoyer ma demande →</button>
</form>
<!-- Message confirmation JS (caché par défaut) -->
<div id="form-success" class="form-success hidden">
  ✓ Votre demande a bien été envoyée ! Nous vous répondons sous 48h.
</div>
```

Colonne droite — Infos + RDV :

```html
<div class="contact-infos">
  <h3>Informations de contact</h3>
  <p>📍 [street], [postalCode] [city]</p>
  <p>☎ <a href="tel:[phone]">[phone]</a></p>
  <p>✉ <a href="mailto:[email]">[email]</a></p>

  <h4>Horaires</h4>
  <!-- Tableau horaires depuis openingHours — jours fermés grisés -->

  <!-- MODULE RDV -->
  <div class="rdv-module">
    <h4>Prise de RDV en ligne</h4>
    <!-- Si rdv.calendlyUrl non vide : -->
    <div class="calendly-inline-widget" data-url="[calendlyUrl]" style="min-width:320px;height:630px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    <!-- Sinon (fallback tel) : -->
    <p>Appelez-nous pour convenir d'un rendez-vous :</p>
    <a href="tel:[phone]" class="btn-rdv-tel">☎ Prendre RDV par téléphone</a>
  </div>
</div>
```

**3. GOOGLE MAPS PLACEHOLDER**

```html
<div class="map-section">
  <h3>Nous trouver</h3>
  <div class="map-placeholder">
    <iframe
      src="https://maps.google.com/maps?q=[postalCode]+[city]&output=embed"
      width="100%" height="400"
      style="border:0;" allowfullscreen="" loading="lazy"
      title="Localisation [businessName] à [city]">
    </iframe>
  </div>
</div>
```

**4. FAQ CONTACT (3 questions courtes)**

- "Quel est votre délai de réponse pour un devis ?"
- "Vous déplacez-vous pour estimer les travaux ?"
- "Travaillez-vous avec des architectes et décorateurs ?"

---

## STYLE.CSS — RÈGLES CLÉS

```css
/* Reset + base */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-body); color: #333; line-height: 1.6; }

/* Container */
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }

/* Sections */
section { padding: 5rem 0; }
.section-title { font-family: var(--font-display); font-size: 2.2rem; text-align: center; margin-bottom: 0.75rem; }
.section-subtitle { text-align: center; color: #666; margin-bottom: 3rem; }

/* Boutons */
.btn-primary { background: var(--color-primary); color: #fff; padding: 14px 32px; border-radius: var(--radius-btn); font-weight: 700; text-decoration: none; display: inline-block; transition: var(--transition); }
.btn-primary:hover { filter: brightness(0.88); }
.btn-secondary { border: 2px solid var(--color-accent); color: var(--color-accent); padding: 12px 30px; border-radius: var(--radius-btn); font-weight: 700; text-decoration: none; display: inline-block; transition: var(--transition); }
.btn-secondary:hover { background: var(--color-accent); color: #fff; }

/* Cards */
.card { background: #fff; border-radius: var(--radius-card); box-shadow: var(--shadow-card); padding: 2rem; transition: var(--transition); }
.card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }

/* Galerie filtres */
.gallery-filters { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.filter-btn { padding: 8px 20px; border: 2px solid var(--color-accent); border-radius: 24px; cursor: pointer; background: transparent; font-family: var(--font-body); transition: var(--transition); }
.filter-btn.active, .filter-btn:hover { background: var(--color-accent); color: #fff; }
.gallery-item.hidden { display: none !important; }

/* Lightbox */
.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.lightbox.active { opacity: 1; pointer-events: all; }

/* Animations scroll */
.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

/* Stats compteurs */
.stats-bar { background: var(--color-primary); padding: 3rem 0; }
.stat-item { text-align: center; }
.stat-number { font-family: var(--font-display); font-size: 3rem; color: var(--color-accent); display: block; }
.stat-label { color: rgba(255,255,255,0.8); font-size: 0.9rem; }

/* Responsive */
@media (max-width: 1024px) {
  .section-title { font-size: 1.9rem; }
}
@media (max-width: 768px) {
  section { padding: 3rem 0; }
  .section-title { font-size: 1.6rem; }
  .nav-main { display: none; }
  .hamburger { display: flex; }
}
@media (max-width: 480px) {
  .section-title { font-size: 1.35rem; }
  .btn-primary, .btn-secondary { padding: 12px 20px; font-size: 0.9rem; }
}
```

---

## SCRIPT.JS — COMPORTEMENTS

```javascript
// 1. Header : sticky + transparent → opaque au scroll
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
});

// 2. Menu hamburger
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-main').classList.toggle('open');
  document.querySelector('.hamburger').classList.toggle('open');
});

// 3. Animations scroll — IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// 4. Compteurs animés (page index.html)
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); statsObserver.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => statsObserver.observe(el));

// 5. Galerie filtres (page realisations.html)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});

// 6. Lightbox JS vanilla
const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.gallery-item').forEach((item, i, arr) => {
  item.addEventListener('click', () => openLightbox(i, arr));
});
function openLightbox(index, items) {
  if (!lightbox) return;
  lightbox.dataset.current = index;
  updateLightbox(index, items);
  lightbox.classList.add('active');
}
function updateLightbox(index, items) {
  const item = items[index];
  lightbox.querySelector('.lb-content').style.background = item.style.background || '#333';
  lightbox.querySelector('.lb-title').textContent = item.dataset.title || '';
  lightbox.querySelector('.lb-category').textContent = item.dataset.category || '';
}
lightbox?.querySelector('.lb-close')?.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox?.classList.remove('active'); });
lightbox?.querySelector('.lb-prev')?.addEventListener('click', () => {
  const items = [...document.querySelectorAll('.gallery-item')];
  const current = (parseInt(lightbox.dataset.current) - 1 + items.length) % items.length;
  lightbox.dataset.current = current;
  updateLightbox(current, items);
});
lightbox?.querySelector('.lb-next')?.addEventListener('click', () => {
  const items = [...document.querySelectorAll('.gallery-item')];
  const current = (parseInt(lightbox.dataset.current) + 1) % items.length;
  lightbox.dataset.current = current;
  updateLightbox(current, items);
});

// 7. Formulaire contact — confirmation JS
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('contact-form').classList.add('hidden');
  document.getElementById('form-success').classList.remove('hidden');
});

// 8. Active nav link selon page courante
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-main a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
```

---

## SEO AVANCÉ — RÈGLES GLOBALES

- Un seul H1 par page (dans le Hero)
- H2 sur chaque section principale, H3 pour les sous-éléments
- `alt` descriptif sur tous les placeholders images
- `lang="fr"` sur `<html>`
- `<link rel="canonical">` pointant vers l'URL de la page
- Mentions naturelles des communes `zone.communes` dans les textes (SEO local)
- Sitemap HTML dans le footer de chaque page :
  ```html
  <nav class="sitemap-footer" aria-label="Plan du site">
    <a href="index.html">Accueil</a> · <a href="services.html">Services</a> · ...
  </nav>
  ```

---

## LIVRABLES DANS L'ORDRE

Génère les fichiers dans cet ordre exact :

1. **index.html** — Page d'accueil
2. **services.html** — Page services
3. **realisations.html** — Galerie + témoignages
4. **blog.html** — 3 articles SEO complets
5. **contact.html** — Formulaire + RDV + carte
6. **style.css** — CSS global partagé
7. **script.js** — JS global partagé

À la fin, affiche :

```
✓ Pack Premium 790€ — 7 fichiers générés
   index.html · services.html · realisations.html · blog.html · contact.html
   style.css · script.js
```

---

## CONTRÔLE QUALITÉ

- [ ] `lang="fr"` sur tous les `<html>`
- [ ] Un seul H1 par page
- [ ] Navigation active (classe `.active`) sur la page courante
- [ ] Breadcrumb Schema.org sur toutes les pages internes
- [ ] LocalBusiness Schema.org complet sur index.html
- [ ] Google Fonts chargées (fontDisplay + fontBody)
- [ ] Galerie 12 photos avec 4 catégories filtrables
- [ ] Lightbox JS vanilla fonctionnelle
- [ ] Stats animées au scroll (IntersectionObserver)
- [ ] Compteurs animés sur les chiffres
- [ ] Module RDV : Calendly si URL fourni, sinon `tel:`
- [ ] Formulaire avec confirmation JS
- [ ] Formulaire : `action="#"` + tous les champs
- [ ] Maps iframe présent sur contact.html
- [ ] Blog : 3 articles complets avec contenu réel
- [ ] Footer identique sur les 5 pages
- [ ] Responsive 3 breakpoints (480/768/1024)
- [ ] Aucune image externe — placeholders CSS uniquement
- [ ] SIRET + TVA dans le footer
- [ ] Hamburger mobile fonctionnel
