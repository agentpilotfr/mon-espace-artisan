# Prompt — Pack Essentiel 290€ HT
## Génération d'un one-pager artisan

---

## OBJECTIF

Tu es un développeur web expert. Tu dois générer un site one-pager
complet pour un artisan à partir du fichier `config.json` fourni.

Le livrable est **un seul fichier `index.html`** autonome,
ultra-rapide, mobile-first.

---

## ÉTAPE 1 — LIRE LE CONFIG

Lis le fichier `_templates/essentiel/config.json` (ou le config
fourni pour ce client). Extrais toutes les valeurs dont tu as besoin.

---

## STACK TECHNIQUE

- **HTML5 + CSS3 + JS vanilla uniquement**
- Tout dans un seul fichier `index.html` :
  - CSS dans `<style>` dans le `<head>`
  - JS dans `<script>` avant `</body>`
- Google Fonts via CDN (fontDisplay + fontBody du config)
- **Aucune dépendance externe** (pas de Bootstrap, pas de jQuery,
  pas d'Alpine, pas de Tailwind)
- Cible : chargement < 1 seconde

---

## STRUCTURE — 5 SECTIONS EXACTEMENT

### SECTION 1 — BANDEAU URGENCE (conditionnel)

Si `urgency: true` dans le config :

```html
<div class="urgency-bar">
  ⚡ Urgence 24h/7j — Appelez maintenant : [phone]
</div>
```

CSS :
```css
.urgency-bar {
  background: #E63946;
  color: #fff;
  text-align: center;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
}
.urgency-bar a { color: #fff; text-decoration: underline; }
```

Le numéro de téléphone doit être un lien `tel:`.

---

### SECTION 2 — HEADER FIXE

```html
<header id="header">
  <div class="header-inner">
    <div class="logo">[businessName]</div>
    <a class="header-phone" href="tel:[phone]">☎ [phone]</a>
  </div>
</header>
```

CSS règles clés :
- `position: fixed; top: 0; width: 100%; z-index: 100`
- Si `urgency: true`, le header est positionné après le bandeau
  (via JS : `header.style.top = urgencyBar.offsetHeight + 'px'`)
- Fond `colorPrimary`, texte blanc
- Hauteur 64px desktop / 56px mobile
- Logo : police `fontDisplay`, bold, texte blanc
- Téléphone : visible desktop, icône seule sur mobile < 480px

---

### SECTION 3 — HERO (100vh)

```html
<section id="hero">
  <div class="hero-inner">
    <div class="hero-badge">[yearsExperience] ans d'expérience</div>
    <h1>[businessName] — [metier] à [city]</h1>
    <p class="hero-tagline">[tagline]</p>
    <a class="btn-cta" href="tel:[phone]">☎ Appeler maintenant</a>
  </div>
</section>
```

CSS règles clés :
- `min-height: 100vh` avec `padding-top` = hauteur header + urgency
- Fond `colorPrimary`
- Motif géométrique CSS subtil (lignes diagonales semi-transparentes) :
  ```css
  background-image: repeating-linear-gradient(
    135deg,
    rgba(255,255,255,0.03) 0px,
    rgba(255,255,255,0.03) 1px,
    transparent 1px,
    transparent 60px
  );
  ```
- H1 : blanc, `fontDisplay`, 2.8rem desktop / 1.8rem mobile
- Tagline : blanc 70% opacité, `fontBody`, 1.1rem
- Badge : petit encadré `colorAccent` arrondi, au-dessus du H1
- Bouton CTA :
  ```css
  .btn-cta {
    background: [colorAccent];
    color: #fff;
    padding: 16px 36px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-block;
    margin-top: 2rem;
    text-decoration: none;
  }
  ```

---

### SECTION 4 — SERVICES

```html
<section id="services">
  <div class="container">
    <h2>Nos prestations</h2>
    <div class="services-grid">
      <!-- Pour chaque service dans services[] -->
      <div class="service-card">
        <div class="service-icon">[icône SVG inline]</div>
        <span>[service]</span>
      </div>
    </div>
    <p class="zone-info">
      Intervention dans un rayon de [radiusKm] km autour de [city]
      — [communes rejoints par " · "]
    </p>
  </div>
</section>
```

CSS règles clés :
- Fond blanc
- Grid : `grid-template-columns: repeat(3, 1fr)` desktop /
  `1fr` mobile
- Chaque carte : bordure légère, padding 1.5rem, centré,
  hover → bordure `colorAccent`
- Icônes SVG inline adaptées au métier (outils, wrench, etc.)
  Taille : 48x48px, couleur `colorPrimary`
- `.zone-info` : fond `colorPrimary` 8% opacité, bord gauche
  `colorAccent` 4px, padding 1rem, margin-top 2rem, texte centré

**Icônes SVG à générer selon `metier`** (inline dans le HTML) :
- plombier : robinet, tuyau, clé, goutte, baignoire
- électricien : éclair, prise, ampoule, câble, tableau
- menuisier : scie, porte, marteau, bois, fenêtre
- paysagiste : feuille, tondeuse, arbre, cisailles, pelouse
- peintre : pinceau, rouleau, pot, palette, mur
- maçon : brique, truelle, mur, règle, niveau
- (défaut) : étoile générique pour tout autre métier

---

### SECTION 5 — CONTACT / DEVIS

```html
<section id="contact">
  <div class="container contact-grid">

    <div class="contact-form-wrap">
      <h2>Demandez votre devis gratuit</h2>
      <form action="mailto:[email]" method="GET" enctype="text/plain">
        <input type="text"  name="prenom"    placeholder="Prénom *"     required>
        <input type="tel"   name="telephone" placeholder="Téléphone *"  required>
        <input type="email" name="email"     placeholder="Email"        >
        <textarea           name="message"   placeholder="Votre message..." rows="4"></textarea>
        <button type="submit" class="btn-submit">Envoyer ma demande</button>
      </form>
      <p class="rgpd-note">Vos données ne sont pas partagées.</p>
    </div>

    <div class="contact-info">
      <h3>Nous contacter</h3>
      <p>📍 [street], [postalCode] [city]</p>
      <p>☎ <a href="tel:[phone]">[phone]</a></p>
      <p>✉ <a href="mailto:[email]">[email]</a></p>
      <p>🕐 Lun–Ven 8h–18h · Sam 9h–12h</p>
      <p>⚡ Urgences 24h/7j</p> <!-- si urgency: true -->
    </div>

  </div>
</section>
```

CSS règles clés :
- Fond `colorPrimary` à 6% (`rgba(colorPrimary, 0.06)`) — utiliser
  une couleur hex claire ou `#EEF3FB`
- Grid : 2 colonnes 55%/45% desktop / 1 colonne mobile
- Inputs : fond blanc, bordure 1px `#ddd`, padding 12px 16px,
  border-radius 3px, width 100%, font `fontBody`
- Textarea : idem, resize vertical uniquement
- Focus → bordure `colorAccent`
- `.btn-submit` : même style que `.btn-cta` mais fond `colorPrimary`
- `.rgpd-note` : texte gris 12px, margin-top 0.5rem

---

### SECTION 6 — FOOTER

```html
<footer id="footer">
  <div class="footer-inner">
    <span>[businessName]</span>
    <span>SIRET : [siret]</span>
    <a href="#mentions">Mentions légales</a>
    <span>© [année] — Tous droits réservés</span>
  </div>
</footer>
```

CSS règles clés :
- Fond `colorPrimary`, texte `rgba(255,255,255,0.7)`
- Flex row, gap 1.5rem, centré, padding 1rem 2rem
- Mobile : flex-direction column, gap 0.5rem
- Liens : couleur `rgba(255,255,255,0.9)`, hover blanc

---

## SEO — OBLIGATOIRE

Dans `<head>`, inclure :

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[metaDescription]">
<title>[metaTitle]</title>
<link rel="canonical" href="[website]">

<!-- Schema.org LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[businessName]",
  "description": "[tagline]",
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
  "areaServed": [communes array],
  "priceRange": "€€"
}
</script>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[fontDisplay]:wght@400;700&family=[fontBody]:wght@400;600&display=swap" rel="stylesheet">
```

---

## JS — COMPORTEMENTS MINIMAUX

```javascript
// 1. Scroll smooth pour les ancres internes
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});

// 2. Header scroll — ombre au scroll
window.addEventListener('scroll', () => {
  document.getElementById('header').classList
    .toggle('scrolled', window.scrollY > 10);
});
// CSS : header.scrolled { box-shadow: 0 2px 12px rgba(0,0,0,0.15); }

// 3. Ajustement top header si bandeau urgence présent
(function() {
  const bar = document.querySelector('.urgency-bar');
  const header = document.getElementById('header');
  if (bar && header) {
    const adjust = () => {
      header.style.top = bar.offsetHeight + 'px';
      document.getElementById('hero').style.paddingTop =
        (bar.offsetHeight + header.offsetHeight + 32) + 'px';
    };
    adjust();
    window.addEventListener('resize', adjust);
  }
})();
```

---

## CONTRÔLE QUALITÉ AVANT LIVRAISON

Vérifie point par point :

- [ ] `lang="fr"` sur `<html>`
- [ ] Un seul `<h1>` dans toute la page
- [ ] `<h2>` sur Services et Contact uniquement
- [ ] Numéros de téléphone tous en `href="tel:..."`
- [ ] Schema.org complet et valide (pas de placeholder)
- [ ] Google Fonts chargées (fontDisplay + fontBody)
- [ ] `urgency: true` → bandeau rouge présent
- [ ] Grid services responsive (3 col → 1 col)
- [ ] Formulaire avec `action="mailto:[email]"`
- [ ] SIRET visible dans le footer
- [ ] Aucune image externe non fournie
- [ ] Aucune dépendance JS externe
- [ ] CSS entièrement dans `<style>`
- [ ] JS entièrement dans `<script>` en fin de body

---

## LIVRABLE

Un seul fichier : `index.html`

À la toute fin de ta réponse, affiche :

```
✓ index.html — [X lignes] — Pack Essentiel prêt
```
