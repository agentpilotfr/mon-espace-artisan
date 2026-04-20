# PROMPT CLAUDE CODE — TEMPLATE ELECTRICIEN

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un électricien à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : éclair SVG jaune (`colorAccent`) + `businessName` en `fontDisplay`
- Navigation : Accueil · Services · Certifications · À propos · Contact
- **Bandeau urgence** si `urgency === true` : fond `colorPrimary` foncé avec liseré jaune, "⚡ Urgence électrique ? Appelez maintenant !"
- CTA : "Devis gratuit" + "☎ Urgence" si applicable
- Sticky avec transition fond sombre

### 2. BANDEAU SÉCURITÉ (spécifique électricien)
- Encadré : "🔒 Tous nos travaux sont conformes NFC 15-100 et font l'objet d'un rapport CONSUEL"
- Fond `colorPrimary` léger, texte blanc, icône bouclier jaune

### 3. HERO
- H1 : `tagline`
- Fond : nuit électrique — dégradé très sombre (`colorPrimary`) avec effet de circuit imprimé en SVG background
- Badge tournant : "⚡ Certifié Qualifelec" en bas du hero
- 2 CTA : "Nos services" + "☎ Appeler maintenant"

### 4. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG spécifiques : tableau électrique, panneau NFC, maison connectée, ampoule LED, prise murale, bouclier alarme, voiture électrique (borne), hélice VMC
- Effet hover : fond jaune (`colorAccent`) avec icône sombre et texte inversé
- Badge "RGE" sur les services éligibles (domotique, borne recharge, VMC)

### 5. CERTIFICATIONS (section dédiée — spécifique électricien)
- Mise en avant des certifications `certifications[]` avec logos placeholder
- Explication de chaque label : Qualifelec, IRVE, Habilitation BR/BC
- CTA : "Télécharger notre attestation Qualifelec (PDF)"

### 6. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : tableau électrique, installation domotique, borne de recharge, éclairage LED, alarme, VMC
- Palette sombre avec accents jaune électrique

### 7. À PROPOS
- `ownerName` + "Électricien Certifié Qualifelec"
- Stats : interventions, satisfaction, 0% sous-traitance, garantie
- Certifications en badges colorés

### 8. ZONE D'INTERVENTION
- Rayon + communes
- Note : "Intervention en urgence possible dans un délai de 2h sur `city`" si urgency

### 9. TÉMOIGNAGES
- 3 cards fond sombre avec texte clair (inverse du reste)
- Étoiles jaune `colorAccent`

### 10. FAQ ÉLECTRICIEN (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Qu'est-ce que la norme NFC 15-100 et êtes-vous certifié ?"
  2. "Faut-il un rapport CONSUEL après des travaux électriques ?"
  3. "Pouvez-vous installer une borne de recharge pour voiture électrique ?"
  4. "En quoi consiste la mise aux normes d'une installation ancienne ?"
  5. "Intervenez-vous en urgence pour les pannes électriques ?"

### 11. CONTACT
- Formulaire avec select : type de projet électrique
- Checkbox "Urgence — Panne ou risque électrique"
- Colonne droite : coordonnées + horaires + "Disponible 24h/24 pour urgences électriques" si urgency

### 12. FOOTER
- businessName + SIRET + TVA + agencyCredit + certifications en miniature

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #1A1A2E;
  --color-secondary: #F0F0F8;
  --color-accent:    #FFD700;
  --font-display:    'Barlow Condensed', Impact, sans-serif;
  --font-body:       'Inter', system-ui, sans-serif;
  --radius-card:     6px;
  --shadow-card:     0 4px 20px rgba(0,0,0,0.15);
  --transition:      0.2s ease;
}
```

- Design tech/industriel : angles droits, peu de border-radius
- Contraste fort : fond sombre / accent jaune électrique
- Typographie condensée Barlow : impact visuel maximal
- Animations : clignotement subtil sur bouton urgence

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `Electrician` comme `@type`
- Open Graph complet
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
