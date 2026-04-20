# PROMPT CLAUDE CODE — TEMPLATE MENUISIER

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un menuisier à partir du fichier `config.json` fourni dans le dossier courant.

## STACK TECHNIQUE
- HTML5 sémantique (une seule page `index.html`)
- CSS3 custom properties (variables CSS) + Flexbox + Grid
- JavaScript vanilla — pas de framework, pas de CDN externe
- Google Fonts chargées via `<link>` dans le `<head>`
- Toutes les icônes en SVG inline dans le HTML
- Zéro dépendance externe : tout est autonome dans `index.html`

## LECTURE CONFIG
Commence par lire `config.json` dans le dossier courant.
Extrais toutes les valeurs et injecte-les dynamiquement dans chaque section.
Ne laisse aucune valeur en dur : tout vient du config.

## STRUCTURE DES SECTIONS

### 1. HEADER / NAVIGATION
- Logo textuel (`businessName`) en `fontDisplay`, couleur `colorAccent`
- Navigation : Accueil · Services · Réalisations · À propos · Contact
- Bouton CTA : "Devis gratuit" (fond `colorAccent`, texte blanc)
- Sticky au scroll : transparent → fond `colorPrimary` avec box-shadow
- Menu hamburger responsive sur mobile

### 2. HERO
- H1 : `tagline` du config
- Sous-titre : première phrase de `description`
- 2 CTA : "Voir nos réalisations" + "☎ Nous appeler" (lien `tel:phone`)
- Fond : overlay sombre sur texture bois (dégradé CSS simulant le bois)
- Badge animé en bas à droite : "X ans d'expérience" (`yearsExperience`)

### 3. SERVICES (8 cards)
- Grid 4×2 (2×4 sur mobile)
- Icône SVG inline spécifique pour chaque service menuisier :
  parquet (planche), fabrication sur mesure (équerre), escaliers (marches),
  dressing (penderie), fenêtres bois (fenêtre), portes (porte),
  terrasse (sol extérieur), restauration (main + bois)
- Services `featured: true` mis en avant (bordure `colorAccent`, badge "Populaire")
- Hover : élévation + couleur de fond

### 4. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- Grid 3 colonnes (2 sur tablette, 1 sur mobile)
- 6 placeholders avec dégradés chaleureux évoquant le bois
- Chaque placeholder porte le nom d'un service menuisier
- Overlay au hover avec nom du service et icône loupe

### 5. À PROPOS
- Colonne gauche : avatar placeholder circulaire + `ownerName` + titre "Artisan Menuisier"
- Colonne droite : `description` complète
- Ligne de stats : `interventions` chantiers · `satisfaction`% de satisfaction · `soustraitance`% sous-traitance · `garantieAns` ans de garantie
- Badges certifications (`certifications[]`) avec icône bouclier

### 6. ZONE D'INTERVENTION
- Titre : "Nos zones d'intervention"
- Texte : "Nous intervenons dans un rayon de `radiusKm` km autour de `city`"
- Grille de badges pour chaque commune (`communes[]`)
- Encadré mis en avant pour la ville principale avec couronne/étoile

### 7. TÉMOIGNAGES
- 3 cards côte à côte (scroll horizontal sur mobile)
- 5 étoiles dorées (couleur `colorAccent`)
- Texte du témoignage entre guillemets typographiques
- Prénom + ville + badge service concerné en bas de card

### 8. FAQ MENUISIER (condition : `showFaq === true`)
- Accordéon CSS pur (pas de JS) — animation `max-height` en transition
- 5 questions spécifiques au menuisier :
  1. "Quels types de bois utilisez-vous pour vos réalisations ?"
  2. "Réalisez-vous des meubles entièrement sur mesure ?"
  3. "Quels sont vos délais moyens pour un escalier sur mesure ?"
  4. "Intervenez-vous sur des bâtiments anciens et classés ?"
  5. "Quelle garantie proposez-vous sur vos ouvrages ?"
- Réponses cohérentes avec les valeurs du config

### 9. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de projet (select depuis `services[].label`), Description du projet, Message
- Colonne droite : adresse, téléphone (lien tel:), email (lien mailto:), horaires hebdomadaires
- Horaires : afficher chaque jour depuis `openingHours` — griser les jours fermés
- Pas de backend : formulaire avec `action="#"` + message de confirmation JS

### 10. FOOTER
- Colonne 1 : `businessName` + `description` courte + réseaux sociaux (placeholders)
- Colonne 2 : liens rapides (ancres vers sections)
- Colonne 3 : `address` complète + SIRET + TVA + `agencyCredit`
- Bas de footer : Copyright `©` année courante + Mentions légales / CGV / Politique de confidentialité (liens `#`)

## DESIGN SYSTEM

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
  --transition:      0.3s ease;
}
```

- H1, H2, H3 : `var(--font-display)`
- Corps, navigation, labels : `var(--font-body)`
- Boutons primaires : fond `colorPrimary`, texte blanc, hover assombri de 10%
- Boutons secondaires : bordure `colorAccent`, texte `colorAccent`, hover fond `colorAccent` texte blanc
- Sections alternées : fond blanc / fond `colorSecondary`

## CONTRAINTES SEO

Injecter dans le `<head>` :
```html
<title>[seo.metaTitle]</title>
<meta name="description" content="[seo.metaDescription]">
<meta name="keywords" content="[seo.keywords joints par virgule]">
<meta property="og:title" content="[seo.metaTitle]">
<meta property="og:description" content="[seo.metaDescription]">
<meta property="og:type" content="website">
<meta property="og:url" content="[contact.website]">
<link rel="canonical" href="[contact.website]">
```

Schema.org LocalBusiness en JSON-LD :
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[businessName]",
  "description": "[description]",
  "telephone": "[contact.phone]",
  "email": "[contact.email]",
  "url": "[contact.website]",
  "address": { "@type": "PostalAddress", ... },
  "geo": { "@type": "GeoCoordinates" },
  "openingHoursSpecification": [ ... ],
  "sameAs": []
}
```

- Un seul H1 par page (dans le Hero)
- H2 pour chaque section principale
- Alt text sur toutes les images et placeholders
- Ancres `id` sur chaque section pour navigation interne

## LIVRABLES

Un seul fichier `index.html` autonome contenant :
- Tout le CSS dans `<style>` dans le `<head>`
- Tout le JavaScript dans `<script>` juste avant `</body>`
- Toutes les icônes SVG inline
- Commentaire en tête de fichier :
  `<!-- Généré pour [businessName] — [ownerName] — [date du jour] -->`
- Responsive : mobile first, breakpoints à 768px et 1200px
- Performance : pas d'images réelles, placeholders CSS uniquement
