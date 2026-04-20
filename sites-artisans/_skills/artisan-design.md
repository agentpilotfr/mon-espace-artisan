---
name: artisan-design
description: Design system premium pour sites artisans français.
À lire AVANT de générer tout site artisan.
---

# Artisan Design System — Premium

## Philosophie
Chaque site artisan doit avoir un caractère visuel fort et unique.
Pas de design générique. Chaque métier a son identité visuelle propre.
L'objectif : que le prospect dise "wow" en 3 secondes.

## Règles absolues

### 1. TYPOGRAPHIE — Le choix fait tout

Chaque métier a sa paire de fonts OBLIGATOIRE :

MENUISIER    → Display: Playfair Display italic | Body: Lato 300
PLOMBIER     → Display: Oswald 700 uppercase | Body: Open Sans
ELECTRICIEN  → Display: Barlow Condensed 800 | Body: Inter
PEINTRE      → Display: Cormorant Garamond 600 italic | Body: DM Sans
MACON        → Display: Bebas Neue | Body: Roboto 300
PAYSAGISTE   → Display: Cormorant Garamond italic | Body: Lato
COUVREUR     → Display: Oswald 700 | Body: Open Sans
CHAUFFAGISTE → Display: Barlow Condensed 700 | Body: Inter

Règles typo :
- H1 : clamp(2.8rem, 6vw, 5rem) — jamais moins
- H2 : clamp(2rem, 4vw, 3.2rem)
- Line-height titres : 0.95 (serré = impact)
- Letter-spacing uppercase : 0.12em minimum
- JAMAIS Arial, Roboto seul, ou system fonts pour les titres

### 2. COULEURS — Contraste et caractère

Chaque métier a son système de couleurs STRICT :

MENUISIER :
  --primary:   #3D2B1F    (bois sombre)
  --secondary: #F5EFE6    (bois clair)
  --accent:    #C8A96E    (chêne doré)
  --dark:      #1C1108
  --light:     #FDFAF6

PLOMBIER :
  --primary:   #1B3A6B    (marine profond)
  --secondary: #F0F4FF    (bleu très clair)
  --accent:    #FF6B35    (orange vif)
  --dark:      #0A1628
  --light:     #FAFCFF

ELECTRICIEN :
  --primary:   #0D0D1A    (noir électrique)
  --secondary: #1A1A2E    (navy)
  --accent:    #FFD700    (jaune électrique)
  --dark:      #050510
  --light:     #FFFFF0

PEINTRE :
  --primary:   #1A1A1A    (noir encre)
  --secondary: #F8F4EF    (blanc cassé)
  --accent:    #E63946    (rouge vif)
  --dark:      #0A0A0A
  --light:     #FDFBF8

MACON :
  --primary:   #2C2C2C    (béton)
  --secondary: #F4F1EC    (pierre)
  --accent:    #E67E22    (terre cuite)
  --dark:      #1A1A1A
  --light:     #FAF8F5

PAYSAGISTE :
  --primary:   #1B4332    (forêt profonde)
  --secondary: #F0F7F4    (vert très clair)
  --accent:    #52B788    (vert prairie)
  --dark:      #0A1F18
  --light:     #F8FDF9

COUVREUR :
  --primary:   #1C2B3A    (ardoise)
  --secondary: #F2F4F6    (zinc clair)
  --accent:    #E74C3C    (tuile rouge)
  --dark:      #0D1520
  --light:     #F8F9FA

CHAUFFAGISTE :
  --primary:   #6B2400    (braise)
  --secondary: #FFF5F0    (flamme claire)
  --accent:    #FF8C42    (orange feu)
  --dark:      #3D1100
  --light:     #FFFAF7

### 3. LAYOUTS — Sortir du générique

#### Hero — OBLIGATOIRE : une de ces 3 approches

APPROCHE A — "Split screen" (desktop)
  Gauche 55% : fond --primary, texte blanc, CTA
  Droite 45% : photo en pleine hauteur, clip-path diagonal
  CSS :
  .hero { display: grid; grid-template-columns: 55fr 45fr; min-height: 100vh; }
  .hero-image { clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%); }

APPROCHE B — "Full immersion"
  Photo pleine largeur, overlay gradient --primary à 75%
  Texte centré ou aligné bas-gauche
  CSS :
  .hero {
    background: linear-gradient(
      135deg,
      rgba(var(--primary-rgb), 0.85) 0%,
      rgba(var(--primary-rgb), 0.6) 100%
    ), url('images/hero.jpg') center/cover;
    min-height: 100vh;
  }

APPROCHE C — "Editorial" (haut de gamme)
  Fond --secondary (clair), grand titre --primary
  Photo en position absolue à droite, dépasse le cadre
  Stats verticales sur le côté gauche

#### Sections — Alterner les fonds
Section 1 : fond --light
Section 2 : fond --primary (texte clair)
Section 3 : fond --secondary
Section 4 : fond white
Jamais 2 sections identiques consécutives

#### Séparateurs — clip-path obligatoire entre sections
```css
.section-divider {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  margin-bottom: -4rem;
}
/* OU */
.section-wave {
  clip-path: ellipse(55% 100% at 50% 0%);
}
```

### 4. COMPOSANTS SIGNATURE

#### Boutons — Impact visuel

Primaire :
```css
.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 16px 40px;
  border-radius: 3px;           /* volontairement peu arrondi = sérieux */
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  filter: brightness(1.08);
}
```

Secondaire (ghost) :
```css
.btn-ghost {
  border: 2px solid currentColor;
  color: inherit;
  padding: 14px 38px;
  border-radius: 3px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: transparent;
  transition: all 0.25s;
}
.btn-ghost:hover {
  background: currentColor;     /* fond = couleur du texte */
  color: var(--primary);        /* texte = fond sombre */
}
```

CTA urgence :
```css
.btn-cta-urgence {
  background: #E63946;
  color: #fff;
  padding: 18px 44px;
  border-radius: 3px;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.06em;
  animation: pulse-urgence 2s infinite;
}
@keyframes pulse-urgence {
  0%, 100% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(230, 57, 70, 0); }
}
```

#### Cards — Trois niveaux de profondeur
```css
/* Niveau 1 — subtil */
.card-l1 { box-shadow: 0 2px 8px rgba(0,0,0,0.06); }

/* Niveau 2 — standard */
.card-l2 { box-shadow: 0 4px 24px rgba(0,0,0,0.10); }

/* Niveau 3 — mise en avant */
.card-l3 { box-shadow: 0 12px 48px rgba(0,0,0,0.18); }

/* Hover universel */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 56px rgba(0,0,0,0.16);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* spring */
}
```

#### Badge "featured" — Toujours en accent
```css
.badge-featured {
  position: absolute;
  top: -1px; right: -1px;
  background: var(--accent);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 0 var(--radius-card) 0 8px;
}
```

#### Ligne de stats — Toujours sur fond --primary
```css
.stats-band {
  background: var(--primary);
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 0;
}
.stat-num {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--accent);
  line-height: 1;
  font-weight: 700;
  display: block;
}
.stat-label {
  color: rgba(255,255,255,0.65);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.4rem;
}
/* Séparateur vertical entre stats */
.stat-item + .stat-item {
  border-left: 1px solid rgba(255,255,255,0.12);
}
```

### 5. MICROINTERACTIONS — Différenciateur premium

#### Apparition au scroll (obligatoire sur toutes les sections)
```js
// Observer une seule fois, puis détacher
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
[data-reveal="left"]  { transform: translateX(-40px); }
[data-reveal="right"] { transform: translateX(40px); }
[data-reveal="scale"] { transform: scale(0.92); }
[data-reveal].is-visible { opacity: 1; transform: none; }

/* Stagger pour les grilles */
[data-reveal]:nth-child(2) { transition-delay: 0.1s; }
[data-reveal]:nth-child(3) { transition-delay: 0.2s; }
[data-reveal]:nth-child(4) { transition-delay: 0.3s; }
```

#### Header scroll — Transition transparente → opaque
```js
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 80);
  header.classList.toggle('is-hidden', y > lastScroll && y > 300);
  lastScroll = y;
}, { passive: true });
```

```css
#header { transition: background 0.4s, box-shadow 0.4s, transform 0.3s; }
#header.is-scrolled {
  background: var(--primary);
  box-shadow: 0 2px 20px rgba(0,0,0,0.2);
}
#header.is-hidden { transform: translateY(-100%); }
```

#### Compteurs animés — Easing cubic pour fluidité
```js
function animateValue(el, target, duration = 2200) {
  const suffix = el.dataset.suffix || '';
  const start  = Date.now();
  const tick   = () => {
    const p = Math.min((Date.now() - start) / duration, 1);
    const v = Math.round((1 - Math.pow(1 - p, 3)) * target); // ease-out cubic
    el.textContent = v.toLocaleString('fr-FR') + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
```

#### Hover sur image — Zoom doux + overlay
```css
.img-hover-wrap { overflow: hidden; border-radius: var(--radius-card); }
.img-hover-wrap img {
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.img-hover-wrap:hover img { transform: scale(1.06); }
.img-hover-wrap .overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.4s;
}
.img-hover-wrap:hover .overlay { background: rgba(0,0,0,0.45); }
```

### 6. SEO — NON NÉGOCIABLE

Chaque page générée DOIT contenir :

```html
<!-- Dans <head> -->
<title>[Métier] [Ville] — [businessName] | [tagline courte]</title>
<meta name="description" content="[Métier] à [Ville]. [Service 1], [Service 2], [Service 3]. Devis gratuit. ☎ [phone]">
<link rel="canonical" href="[url-complete]">

<!-- Open Graph -->
<meta property="og:title" content="[même que title]">
<meta property="og:description" content="[même que meta description]">
<meta property="og:type" content="website">
<meta property="og:url" content="[url-complete]">
```

Schema.org LocalBusiness COMPLET (pas de champs vides) :
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "",
  "description": "",
  "telephone": "",
  "email": "",
  "url": "",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "postalCode": "",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0,
    "longitude": 0
  },
  "openingHoursSpecification": [],
  "areaServed": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations",
    "itemListElement": []
  }
}
```

Règles de contenu SEO :
- H1 unique, toujours : "[Métier] [Ville] — [businessName]"
- H2 sur chaque section (Services, Réalisations, À propos, Contact)
- H3 sur les sous-éléments (cards de services, questions FAQ)
- `alt` descriptifs sur toutes les images : "[service] à [ville] — [businessName]"
- Mentions des communes dans le texte courant (naturellement, pas en liste seule)
- Ancre `id` sur chaque section pour le maillage interne

### 7. RESPONSIVE — Breakpoints standardisés

```css
/* Mobile first — 3 breakpoints fixes */
/* Base : < 480px (mobile portrait) */

@media (min-width: 480px) {
  /* Mobile paysage / petite tablette */
  /* Grilles 2 colonnes pour services, galerie */
}

@media (min-width: 768px) {
  /* Tablette */
  /* Navigation affichée, hero 2 colonnes, grilles 3 colonnes */
}

@media (min-width: 1024px) {
  /* Desktop */
  /* Grilles 4 colonnes, hero split screen, sidebar blog */
}

/* Max width content */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}
```

Règles responsive impératives :
- Menu hamburger < 768px, navigation complète ≥ 768px
- Hero : full-height desktop, 80vh mobile
- Stats : 4 col desktop → 2 col tablette → 2 col mobile
- Services : 4 col → 2 col → 1 col
- Galerie : 4 col → 3 col → 2 col
- Footer : 4 col → 2 col → 1 col
- Blog layout : sidebar disparaît < 1024px (contenu full width)

### 8. PERFORMANCES — Score Lighthouse > 90

- Google Fonts : `display=swap` + `preconnect` obligatoires
- Images : `loading="lazy"` sur tout ce qui est sous la fold
- CSS critique inline dans `<style>` pour le hero uniquement
- JS : `defer` sur les scripts non-critiques
- Placeholders CSS uniquement (pas d'images externes non fournies)
- Pas de librairies tierces (Bootstrap, jQuery, etc.)
- Tout le CSS dans `<style>` ou `style.css` — pas de `style=""` inline sauf exceptions justifiées

```html
<!-- Chargement Google Fonts optimal -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[Font1]:wght@400;700&family=[Font2]:wght@300;400;600&display=swap" rel="stylesheet">
```

### 9. CHECKLIST AVANT LIVRAISON

Cocher chaque point avant de déclarer un site terminé :

TYPOGRAPHIE
- [ ] Font Display correcte pour le métier (voir §1)
- [ ] Font Body correcte pour le métier (voir §1)
- [ ] H1 ≥ clamp(2.8rem, 6vw, 5rem)
- [ ] Un seul H1 par page

COULEURS
- [ ] Palette correcte pour le métier (voir §2)
- [ ] Variables CSS déclarées dans :root
- [ ] Contraste texte/fond WCAG AA minimum

LAYOUT
- [ ] Hero approche A, B ou C — pas de hero générique
- [ ] Sections alternées (jamais 2 fonds identiques consécutifs)
- [ ] clip-path ou séparateur entre au moins 2 sections

COMPOSANTS
- [ ] Stats animées sur fond --primary
- [ ] Boutons conformes (padding, uppercase, letter-spacing)
- [ ] Cards avec niveaux de profondeur cohérents

INTERACTIONS
- [ ] data-reveal sur toutes les sections
- [ ] Header scroll : transparent → opaque
- [ ] Hamburger mobile fonctionnel
- [ ] Compteurs animés (IntersectionObserver)

SEO
- [ ] title + meta description uniques et remplis
- [ ] Schema.org LocalBusiness complet
- [ ] canonical présent
- [ ] alt descriptifs sur tous les placeholders

RESPONSIVE
- [ ] Testé mentalement à 375px, 768px, 1280px
- [ ] Hamburger < 768px
- [ ] Aucun débordement horizontal

PERFORMANCES
- [ ] Google Fonts avec preconnect + display=swap
- [ ] Pas d'images externes non fournies
- [ ] Pas de dépendances JS tierces
- [ ] loading="lazy" sur les images sous la fold

---

## Rappel final

Un site artisan premium, c'est :
1. Une typographie qui fait la différence dès le titre
2. Des couleurs qui racontent un métier
3. Un hero qui capte l'attention en 3 secondes
4. Des transitions qui donnent vie sans alourdir
5. Un SEO local qui ramène des prospects réels

Si le site ressemble à un template Bootstrap de 2018, recommencer.
