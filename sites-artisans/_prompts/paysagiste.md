# PROMPT CLAUDE CODE — TEMPLATE PAYSAGISTE

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un paysagiste à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : feuille/plante SVG vert (`colorAccent`) + `businessName` en `fontDisplay` élégant
- Navigation : Accueil · Créations · Entretien · À propos · Contact
- CTA : "Devis jardin gratuit"
- Sticky : fond vert forêt `colorPrimary`, sobre et naturel

### 2. HERO
- H1 : `tagline`
- Fond : dégradé vert forêt profond avec formes organiques SVG (feuilles, tiges)
- Ambiance naturelle et premium
- 2 CTA : "Voir nos jardins" + "Demander un devis"
- Badge : "`yearsExperience` ans de passion pour le végétal"

### 3. SERVICES — 2 COLONNES THÉMATIQUES
- Colonne "Création" : création de jardin, allées & terrasses, gazon, bassin
- Colonne "Entretien" : tonte, taille haies, arrosage, élagage
- Design différencié : Création en fond vert foncé, Entretien en fond vert clair
- Icônes SVG : pelle/binette, pavés, rouleau gazon, vague (bassin), tondeuse, cisailles, goutte d'eau, scie

### 4. PROCESSUS CRÉATION JARDIN (section unique paysagiste)
- 4 étapes illustrées :
  1. Visite & analyse du terrain
  2. Plan d'aménagement paysager
  3. Réalisation & plantation
  4. Suivi & garantie des végétaux
- Design naturel avec séparateurs végétaux SVG

### 5. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : tons verts, terrain, avant/après
- Captions : Jardin contemporain, Haies taillées, Allée en pavés, Bassin, etc.

### 6. À PROPOS
- `ownerName` + "Paysagiste certifié Qualipaysage"
- `description` complète
- Stats + certifications (Certiphyto, Qualipaysage, Éco-jardinier)

### 7. CALENDRIER D'ENTRETIEN (section unique paysagiste)
- Grille 12 mois
- Chaque mois : icône + travaux recommandés (tonte, taille, plantation saisonnière…)
- Fond vert dégradé selon les saisons
- CTA : "Souscrire à un contrat d'entretien annuel"

### 8. ZONE D'INTERVENTION
- Rayon + communes

### 9. TÉMOIGNAGES
- 3 cards avec fond vert très clair `colorSecondary`
- Ambiance jardins de rêve

### 10. FAQ PAYSAGISTE (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Quelle est la meilleure période pour créer un jardin ?"
  2. "Proposez-vous des plans d'aménagement paysager ?"
  3. "Utilisez-vous des produits phytosanitaires ?"
  4. "Pouvez-vous entretenir mon jardin régulièrement ?"
  5. "Garantissez-vous la reprise des végétaux plantés ?"

### 11. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de projet (Création / Entretien / Les deux), Surface jardin (m²), Message
- Colonne droite : coordonnées + horaires + mention "Éco-jardinier certifié"

### 12. FOOTER
- businessName + SIRET + TVA + certifications + agencyCredit

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #1B4332;
  --color-secondary: #EEF8F2;
  --color-accent:    #95D5B2;
  --font-display:    'Cormorant Garamond', Georgia, serif;
  --font-body:       'Lato', system-ui, sans-serif;
  --radius-card:     20px;
  --shadow-card:     0 4px 32px rgba(27,67,50,0.1);
  --transition:      0.4s ease;
}
```

- Design organique et naturel : border-radius généreux, formes douces
- Cormorant Garamond : élégance botanique, caractère premium
- Palette végétale : vert forêt profond + vert menthe `colorAccent`
- Animations lentes et douces (transitions 0.4s)

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `LandscapingService`
- Open Graph complet
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
