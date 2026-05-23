# Scénario Make.com — Bon Cadeau Self-Service

## Webhook URL à créer dans Make.com

Nom du webhook : `Bon Cadeau Form`

Remplacer dans `src/pages/bon-cadeau.astro` :
```
WEBHOOK_BON_CADEAU_PLACEHOLDER
```
→ par l'URL réelle générée dans Make.com.

---

## Modules Make.com à chaîner

### 1. WEBHOOKS — Custom webhook
Réceptionne les données du formulaire.

Payload attendu :
```json
{
  "reference": "BC-2024-001234",
  "nom": "Marie Dupont",
  "email": "marie@exemple.fr",
  "telephone": "06 12 34 56 78",
  "formule": "cours2",
  "date": "2026-05-14",
  "date_alt": "2026-05-21",
  "accompagnant": "non",
  "message": "Allergie aux fruits de mer",
  "source": "bon-cadeau-form",
  "timestamp": "2026-04-29T14:30:00.000Z"
}
```

---

### 2. TOOLS — Set variable
Formate la date en français.

Formule Make :
```
formatDate(1.date; "dddd D MMMM YYYY"; "fr")
```
→ Ex: `mercredi 14 mai 2026`

Mapping formule label :
```
switch(1.formule;
  "cours1"; "Cours n°1 — 2h · 95 €";
  "cours2"; "Cours n°2 — 2h + dégustation · 125 €";
  "cours3"; "Cours n°3 Coup de cœur — Marché + cours + déjeuner · 155 €";
  "journee"; "Journée Chef Immersion · 299 €"
)
```

---

### 3. BREVO — Send email → CLIENT

- **To:** `{{email}}`
- **Subject:** `Votre réservation bon cadeau Bris'Art — {{formule_label}}`
- **Body:** template HTML avec :
  - Prénom {{nom}}, formule {{formule_label}}, date souhaitée {{date_fr}}
  - "Guillaume vous confirme la réservation dans les 24h"
  - Rappel : apporter le bon cadeau le jour J
  - Adresse : 39, Avenue Louis Lajarrige · 44500 La Baule-Escoublac
  - Tel : 02 85 95 94 57

---

### 4. BREVO — Send email → GUILLAUME

- **To:** `contact@brisartculinaire.fr`
- **Subject:** `🎁 Nouvelle demande bon cadeau — {{nom}} · {{date_fr}}`
- **Body:** récap complet :
  ```
  Référence bon : {{reference}}
  Nom : {{nom}}
  Email : {{email}}
  Téléphone : {{telephone}}
  Formule : {{formule_label}}
  Date souhaitée : {{date_fr}}
  Date alternative : {{date_alt_fr}}
  Accompagnant : {{accompagnant}}
  Message : {{message}}
  Reçu le : {{timestamp}}
  ```

---

### 5. GOOGLE CALENDAR — Create event *(optionnel)*

- **Calendar:** Cours de cuisine
- **Title:** `BON CADEAU — {{nom}} · {{formule_label}}`
- **Date:** `{{date}} 09:30`
- **Duration:** selon formule (cours1/2 = 2h, cours3 = 5h, journée = 8h)
- **Description:**
  ```
  Réf : {{reference}}
  Email : {{email}}
  Tél : {{telephone}}
  Accompagnant : {{accompagnant}}
  Notes : {{message}}
  ```
- **Color:** Grape (violet) — distingue des réservations normales

---

## Variables du webhook

| Variable    | Type   | Source        |
|-------------|--------|---------------|
| reference   | string | input text    |
| nom         | string | input text    |
| email       | string | input email   |
| telephone   | string | input tel     |
| formule     | string | select value  |
| date        | string | input date    |
| date_alt    | string | input date    |
| accompagnant | string | select value |
| message     | string | textarea      |
| source      | string | hardcodé      |
| timestamp   | string | ISO 8601      |

---

## Statut

- [ ] Webhook Make.com créé
- [ ] URL remplacée dans bon-cadeau.astro
- [ ] Email client testé (Brevo sandbox)
- [ ] Email Guillaume testé
- [ ] Google Calendar connecté (optionnel)
- [ ] Deploy Cloudflare après remplacement URL
