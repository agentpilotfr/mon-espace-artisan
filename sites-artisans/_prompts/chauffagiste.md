# PROMPT CLAUDE CODE — TEMPLATE CHAUFFAGISTE

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un chauffagiste à partir du fichier `config.json` fourni dans le dossier courant.

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
- Logo : flamme SVG orange (`colorAccent`) + `businessName` en `fontDisplay`
- Navigation : Accueil · Services · Économies d'énergie · À propos · Contact
- **Bandeau urgence** si `urgency === true` : "🔥 Panne de chauffage ? Intervention d'urgence 7j/7 — Appel gratuit"
- CTA : "☎ Urgence chauffage" (rouge) + "Devis pompe à chaleur"

### 2. BANDEAU URGENCE (si `urgency === true`)
- Barre pleine largeur, fond `colorPrimary` foncé avec liseré `colorAccent`
- Icône radiateur + "Panne de chauffage ? On arrive !" + numéro tel cliquable

### 3. HERO
- H1 : `tagline`
- Fond : dégradé chaud brun-rouge `colorPrimary` avec effet chaleur (halos lumineux CSS)
- Icônes flottantes : flamme, thermomètre, feuille RGE
- 2 CTA : "Devis pompe à chaleur" + "☎ Urgence 7j/7"
- Badge RGE : "Certifié RGE QualiPAC"

### 4. ÉCONOMIES D'ÉNERGIE (section unique chauffagiste)
- 3 colonnes comparatives :
  - Chaudière gaz condensation : économie vs ancienne chaudière
  - Pompe à chaleur air/eau : COP et économies annuelles
  - Plancher chauffant : confort + économies
- Icônes de pourcentage + euros économisés
- CTA : "Simuler mes économies — Devis gratuit"
- Fond `colorSecondary` chaud

### 5. AIDES FINANCIÈRES (section unique chauffagiste)
- Encadré informatif :
  - MaPrimeRénov' : jusqu'à X€ pour une PAC
  - TVA réduite à 5,5% sur certains travaux
  - CEE (Certificats d'Économie d'Énergie)
- "Notre équipe vous accompagne dans vos démarches de subventions"
- Fond `colorPrimary` avec texte blanc/orange

### 6. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG : chaudière, clé à molette (entretien), PAC (unité extérieure), serpentin sol (plancher), radiateur, éclair urgence, ventilateur double flux, flocon+soleil (clim réversible)
- Badge "RGE" sur PAC, plancher chauffant, VMC double flux
- Badge "URGENT" rouge sur dépannage

### 7. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders : tons chauds orange/rouge et gris technique
- Captions : PAC installée, Chaudière remplacée, Plancher chauffant, etc.

### 8. À PROPOS
- `ownerName` + "Chauffagiste Certifié RGE"
- `description` complète
- Stats + certifications (RGE QualiPAC, Fluides Frigorigènes, Décennale)

### 9. ZONE D'INTERVENTION
- Rayon + communes
- "Urgences chauffage en moins de 2h sur `city`" si urgency

### 10. TÉMOIGNAGES
- 3 cards fond brun-rouge très clair
- Mettre en avant les économies d'énergie réalisées et les urgences résolues

### 11. FAQ CHAUFFAGISTE (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions :
  1. "Quelle aide financière pour l'installation d'une pompe à chaleur ?"
  2. "À quelle fréquence faut-il entretenir sa chaudière ?"
  3. "Quelle est la différence entre une PAC air/air et air/eau ?"
  4. "Le plancher chauffant est-il compatible avec ma rénovation ?"
  5. "Intervenez-vous en urgence si ma chaudière tombe en panne ?"

### 12. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type de logement (maison/appartement), Système actuel (select), Projet (select depuis services), Urgence (checkbox), Message
- Colonne droite : coordonnées + horaires + "Urgences 7j/7" si urgency + badge RGE

### 13. FOOTER
- businessName + SIRET + TVA + certifications RGE + agencyCredit

## DESIGN SYSTEM

```css
:root {
  --color-primary:   #7B2D00;
  --color-secondary: #FDF3EE;
  --color-accent:    #FF8C42;
  --font-display:    'Barlow Condensed', Impact, sans-serif;
  --font-body:       'Inter', system-ui, sans-serif;
  --radius-card:     10px;
  --shadow-card:     0 4px 24px rgba(123,45,0,0.1);
  --transition:      0.25s ease;
}
```

- Design chaleureux et technique à la fois : tons feu et briques
- Barlow Condensed : caractère technique et moderne
- Palette feu : brun-rouge profond + orange vif pour les CTAs urgence
- Animations : flamme SVG animée dans le hero (CSS keyframes)

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- JSON-LD `LocalBusiness` + `HVACBusiness`
- Si urgency : mention service d'urgence dans JSON-LD
- Open Graph complet
- H1 unique, H2 par section

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
