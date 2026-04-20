# PROMPT CLAUDE CODE — TEMPLATE COUVREUR

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un couvreur à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : maison avec toit SVG rouge (`colorAccent`) + `businessName` en `fontDisplay`
- Navigation : Accueil · Services · Urgence Toiture · À propos · Contact
- **Bandeau urgence rouge** si `urgency === true` : "🏠 Tempête ? Fuite en toiture ? Intervention d'urgence 7j/7"
- CTA double : "☎ Urgence toiture" (rouge) + "Devis gratuit"

### 2. BANDEAU URGENCE (si `urgency === true`)
- Barre pleine largeur, fond rouge `colorAccent`
- Icône météo/vent + texte urgence + numéro cliquable
- Animation légère (fond qui pulse doucement)

### 3. HERO
- H1 : `tagline`
- Fond : ciel dramatique — dégradé gris-bleu `colorPrimary` avec silhouette de toit en SVG
- 2 CTA : "☎ Intervention rapide" + "Devis couverture"
- Badge : "`yearsExperience` ans d'expérience" + "Couverture Garantie 10 ans"

### 4. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG spécifiques : maison avec tuiles, tuile seule, couche isolante, gouttière, charpente, bouclier (urgence), brosse/nettoyage, fenêtre de toit Velux
- Badge rouge "URGENT — 7j/7" sur le service réparation urgence
- Badge "RGE" sur isolation thermique

### 5. EXPERTISE MATÉRIAUX (section unique couvreur)
- 3 types de couvertures présentés : Tuiles terre cuite · Ardoises naturelles · Bac acier/Zinc
- Pour chaque matériau : durée de vie, avantages, esthétique
- Fond alterné sombre/clair

### 6. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : tons ardoise, tuile rouge, zinc gris
- Captions : Réfection ardoises, Pose tuiles neuves, Isolation sarking, etc.
- Format portrait (toitures en hauteur)

### 7. À PROPOS
- `ownerName` + "Couvreur-Charpentier Qualibat"
- `description` complète
- Stats + certifications (Qualibat Couverture, RGE Isolation, Décennale)

### 8. ZONE D'INTERVENTION
- Rayon + communes
- "Intervention d'urgence en moins de 2h sur `city` et environs" si urgency

### 9. TÉMOIGNAGES
- 3 cards fond ardoise (gris-bleu foncé)
- Mettre en avant les urgences tempête en premier

### 10. FAQ COUVREUR (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Pouvez-vous intervenir en urgence après une tempête ?"
  2. "Quelle est la durée de vie d'une toiture en tuiles ?"
  3. "Qu'est-ce que l'isolation par l'extérieur (sarking) ?"
  4. "Pouvez-vous poser des fenêtres de toit Velux ?"
  5. "Proposez-vous un nettoyage et traitement anti-mousse ?"

### 11. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de toiture (tuiles / ardoises / zinc / autre), Nature des travaux (select), Urgence (checkbox), Message
- Si urgence cochée : fond rouge léger apparaît sur le formulaire (JS)
- Colonne droite : coordonnées + horaires + "Urgences 7j/7"

### 12. FOOTER
- businessName + SIRET + TVA + certifications + agencyCredit

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #2C3E50;
  --color-secondary: #EEF2F5;
  --color-accent:    #E74C3C;
  --font-display:    'Oswald', Impact, sans-serif;
  --font-body:       'Open Sans', system-ui, sans-serif;
  --radius-card:     8px;
  --shadow-card:     0 4px 20px rgba(44,62,80,0.12);
  --transition:      0.25s ease;
}
```

- Design sérieux et rassurant : autorité, solidité, fiabilité
- Oswald : force tranquille du professionnel du bâtiment
- Palette ardoise : bleu-gris profond + rouge alerte pour urgences
- Bouton urgence : animation pulse permanente si urgency === true

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `RoofingContractor`
- Si urgency : ajouter `availableAtOrFrom` et mention service d'urgence
- Open Graph complet
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
