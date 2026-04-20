# PROMPT CLAUDE CODE — TEMPLATE MACON

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un maçon à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : truelle SVG orange (`colorAccent`) + `businessName` en `fontDisplay` bold condensé
- Navigation : Accueil · Services · Réalisations · À propos · Contact
- CTA : "Demander un devis"
- Sticky : fond gris anthracite `colorPrimary` dès le départ (pas transparent)

### 2. HERO
- H1 : `tagline` en Bebas Neue, majuscules, impact maximal
- Fond : texture béton CSS (dégradé gris avec grain)
- Ligne de chiffres-clés intégrée au hero : `interventions` chantiers / `yearsExperience` ans / `employees` compagnons
- 2 CTA : "Voir nos chantiers" + "Demander un devis gratuit"

### 3. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG robustes : mur de briques, maison avec flèche (extension), grue/étai (gros œuvre), dalle béton, façade enduite, pelle (fondations), cheminée, pavés/allée
- Style cards : anguleux, peu de border-radius (4px max), typographie bold
- Badge "Garantie Décennale" sur les services gros œuvre et extension

### 4. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : textures béton, pierre, brique — tons gris et terra cotta
- Captions : Extension 40m², Façade ravalement, Dalle garage, etc.

### 5. PROCESSUS (section unique maçon)
- Timeline horizontale : 4 étapes
  1. Visite et devis gratuit
  2. Préparation et approvisionnement
  3. Réalisation du chantier
  4. Réception des travaux
- Icônes SVG pour chaque étape
- Fond `colorSecondary`

### 6. À PROPOS
- `ownerName` + "Maçon — Artisan Qualibat"
- `description` complète
- Stats + certifications (Qualibat, Garantie Décennale)

### 7. ZONE D'INTERVENTION
- Rayon + communes en badges

### 8. TÉMOIGNAGES
- 3 cards avec fond pierre/béton (texture CSS)
- Mettre en avant les chantiers importants (extension, rénovation)

### 9. FAQ MAÇON (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Réalisez-vous des extensions de maison de A à Z ?"
  2. "Quelle est la garantie décennale et comment s'applique-t-elle ?"
  3. "Combien de temps dure la construction d'une extension de 30m² ?"
  4. "Prenez-vous en charge le permis de construire ?"
  5. "Intervenez-vous sur des maisons anciennes en pierre ?"

### 10. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de projet (select), Surface estimée (m²), Délai souhaité (select), Message
- Colonne droite : coordonnées + horaires + carte de visite de `ownerName`

### 11. FOOTER
- businessName + SIRET + TVA + certifications + agencyCredit

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #4A4A4A;
  --color-secondary: #F4F2F0;
  --color-accent:    #E67E22;
  --font-display:    'Bebas Neue', Impact, sans-serif;
  --font-body:       'Roboto', system-ui, sans-serif;
  --radius-card:     4px;
  --shadow-card:     0 2px 16px rgba(0,0,0,0.12);
  --transition:      0.2s ease;
}
```

- Design robuste et masculin : angles droits, peu de rondeurs
- Bebas Neue : force, solidité, autorité — parfait pour le gros œuvre
- Tons pierre et terre cuite : gris anthracite + orange `colorAccent`
- Sections aux bords francs, pas d'effets fantaisistes

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `HomeAndConstructionBusiness`
- Open Graph complet
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
