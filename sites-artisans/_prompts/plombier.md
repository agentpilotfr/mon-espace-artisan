# PROMPT CLAUDE CODE — TEMPLATE PLOMBIER

## RÔLE
Tu es un développeur web expert en création de sites vitrine pour artisans. Tu vas générer un site HTML/CSS/JS complet et optimisé pour un plombier à partir du fichier `config.json` fourni dans le dossier courant.

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
- Navigation : Accueil · Services · Urgence · À propos · Contact
- **Bouton urgence rouge clignotant** : "☎ URGENCE 24h/24" (si `urgency === true`)
- Bouton CTA secondaire : "Devis gratuit"
- Sticky : transparent → fond `colorPrimary` au scroll

### 2. BANDEAU URGENCE (si `urgency === true`)
- Barre pleine largeur au-dessus du header, fond rouge vif (`#D32F2F`)
- Texte : "⚡ Plombier disponible 7j/7 — Fuite ? Canalisation bouchée ? Appelez maintenant !"
- Numéro de téléphone en gras, lien `tel:`
- Bouton "Appeler maintenant" en blanc

### 3. HERO
- H1 : `tagline` du config
- Sous-titre : première phrase de `description`
- 2 CTA : "☎ Appel urgence" (rouge, lien tel:) + "Devis en ligne" (fond `colorAccent`)
- Fond : dégradé bleu profond avec motif géométrique (tuyaux en SVG background)
- Badge : "X ans d'expérience" + badge "Disponible 7j/7" si urgency

### 4. SERVICES (8 cards)
- Grid 4×2
- Icônes SVG spécifiques : robinet, tuyau, chauffe-eau, ventouse, douche, loupe-fuite, WC suspendu, ventilateur
- Services `featured: true` mis en avant (bordure `colorAccent`)
- Badge "URGENT" rouge sur le service dépannage urgence

### 5. RÉALISATIONS (galerie)
- Condition : `showGallery === true`
- 6 placeholders avec dégradés bleu/gris évoquant l'eau et le métal
- Labels : Salle de bain rénovée, WC suspendu, Chauffe-eau installé, etc.

### 6. À PROPOS
- Avatar circulaire + `ownerName` + "Plombier Certifié"
- `description` complète
- Stats : interventions, satisfaction, 0% sous-traitance, garantieAns ans
- Certifications avec icônes de médaille

### 7. ZONE D'INTERVENTION
- Rayon en km autour de `city`
- Badges communes
- Mention urgence : "Intervention en moins de [X]h sur `city`" si urgency

### 8. TÉMOIGNAGES
- 3 cards
- Mettre en valeur le témoignage urgence en premier (fond légèrement rouge)

### 9. FAQ PLOMBIER (condition : `showFaq === true`)
- Accordéon CSS pur
- 5 questions spécifiques :
  1. "Intervenez-vous les week-ends et jours fériés ?"
  2. "Prenez-vous en charge les dégâts des eaux pour les assurances ?"
  3. "Quelles marques de chauffe-eau installez-vous ?"
  4. "Comment se déroule une intervention pour détection de fuite ?"
  5. "Proposez-vous un contrat d'entretien annuel ?"

### 10. CONTACT
- Formulaire : Prénom, Nom, Email, Téléphone, Type d'intervention (select), Urgence (checkbox), Description
- Si urgency : formulaire avec fond légèrement rouge pour le champ urgence coché
- Colonne droite : adresse, tel, email, horaires + "Disponible 7j/7 pour les urgences"

### 11. FOOTER
- businessName + description courte + SIRET + TVA + agencyCredit
- Copyright + Mentions légales

## DESIGN SYSTEM

```css
:root {
  --color-primary:   [colorPrimary];    /* #1B3A6B */
  --color-secondary: [colorSecondary];  /* #EEF3FB */
  --color-accent:    [colorAccent];     /* #FF6B35 */
  --color-urgence:   #D32F2F;
  --font-display:    '[fontDisplay]', Impact, sans-serif;
  --font-body:       '[fontBody]', system-ui, sans-serif;
  --radius-card:     8px;
  --shadow-card:     0 4px 24px rgba(0,0,0,0.1);
  --transition:      0.25s ease;
}
```

- Police Oswald : titres puissants, condensée, autorité
- Bouton urgence : `animation: pulse 1.5s infinite` (scale 1 → 1.03 → 1)
- Sections alternées : blanc / `colorSecondary`

## CONTRAINTES SEO
- `<title>`, meta description, keywords depuis le config
- Schema.org `LocalBusiness` + `openingHoursSpecification` complet
- Open Graph complet
- H1 unique (Hero), H2 par section
- Si urgency : ajouter `availableChannel` et `serviceType: "EmergencyService"` dans le JSON-LD

## LIVRABLES
Un seul fichier `index.html` autonome, responsive mobile-first.
Commentaire en tête : `<!-- Généré pour [businessName] — [ownerName] — [date] -->`
