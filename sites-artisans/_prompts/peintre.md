# PROMPT CLAUDE CODE — TEMPLATE PEINTRE

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un peintre en bâtiment à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : pinceau SVG rouge (`colorAccent`) + `businessName` en `fontDisplay` élégant
- Navigation : Accueil · Services · Galerie · À propos · Contact
- CTA : "Devis colorimétrie gratuit"
- Sticky sobre : fond blanc avec ligne rouge `colorAccent` en bas

### 2. HERO
- H1 : `tagline`
- Fond : dégradé composé de touches de couleur (effet aquarelle CSS avec blur)
- Palette de couleurs décorative sur la droite (cercles de couleur SVG)
- 2 CTA : "Voir nos réalisations" + "Demander un devis"
- Pas de bouton urgence (`urgency === false`)

### 3. NUANCIER COULEURS (section unique peintre)
- Ligne de 8 cercles de couleur tendance avec nom de teinte
- Titre : "Nos finitions les plus demandées cette saison"
- Sous-titre : "Conseil en colorimétrie inclus dans chaque devis"
- Couleurs fictives mais réalistes (noms type "Blanc Parisien", "Taupe Doux", etc.)

### 4. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG : rouleau, maison façade, spatule décorative, rouleau papier peint, pinceau extérieur, boiserie, sol époxy, appartement
- Effect hover : fond en couleur `colorAccent` translucide
- Badge "Enduit décoratif" sur les services spécialisés

### 5. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : dégradés chaleureux, teintes pastel et contemporaines
- "Avant / Après" : afficher 2 placeholders côte à côte pour 1 réalisation
- Caption : service + ville d'intervention

### 6. À PROPOS
- `ownerName` + "Peintre en Bâtiment Qualifié"
- `description` complète
- Stats + certifications

### 7. ZONE D'INTERVENTION
- Rayon + communes
- Mention : "Devis gratuit — réponse sous 24h sur toute la zone"

### 8. TÉMOIGNAGES
- 3 cards avec fond très légèrement coloré (nuance `colorSecondary`)
- Accord particulier sur les témoignages qui mentionnent les couleurs et finitions

### 9. FAQ PEINTRE (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Proposez-vous un service de conseil en colorimétrie ?"
  2. "Quelles marques de peintures utilisez-vous ?"
  3. "Comment préparez-vous les surfaces avant de peindre ?"
  4. "Intervenez-vous sur des logements occupés ?"
  5. "Faites-vous des enduits décoratifs (béton ciré, stuc, tadelakt) ?"

### 10. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de travaux (select depuis services), Surface approximative (input number + m²), Couleur souhaitée (text optionnel), Message
- Colonne droite : coordonnées + horaires

### 11. FOOTER
- businessName + description + certifications + SIRET + TVA + agencyCredit

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #2D2D2D;
  --color-secondary: #F7F5F2;
  --color-accent:    #E63946;
  --font-display:    'DM Serif Display', Georgia, serif;
  --font-body:       'DM Sans', system-ui, sans-serif;
  --radius-card:     16px;
  --shadow-card:     0 4px 28px rgba(0,0,0,0.07);
  --transition:      0.35s ease;
}
```

- Design éditorial et raffiné : grands espaces blancs, typographie expressive
- DM Serif Display : élégant, créatif — signature d'un artisan du beau
- Touches de rouge `colorAccent` : accents discrets sur les soulignements, séparateurs
- Sections généreusement aérées

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `HomeAndConstructionBusiness`
- Open Graph avec og:image placeholder
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
