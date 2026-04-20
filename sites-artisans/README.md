# Système de génération de sites artisans

Génère des sites vitrine HTML autonomes pour artisans en moins de 10 minutes,
à partir d'un simple `config.json` et d'un prompt Claude Code.

---

## Structure

```
sites-artisans/
├── _templates/          → Configs JSON de départ par métier (8 métiers)
│   ├── menuisier/config.json
│   ├── plombier/config.json
│   ├── electricien/config.json
│   ├── peintre/config.json
│   ├── macon/config.json
│   ├── paysagiste/config.json
│   ├── couvreur/config.json
│   └── chauffagiste/config.json
├── _prompts/            → Prompts Claude Code par métier (8 fichiers .md)
│   ├── menuisier.md
│   ├── plombier.md
│   ├── electricien.md
│   ├── peintre.md
│   ├── macon.md
│   ├── paysagiste.md
│   ├── couvreur.md
│   └── chauffagiste.md
├── _clients/            → Dossiers clients (un sous-dossier par client)
└── README.md            → Ce fichier
```

---

## Workflow pour générer un site client

### Étape 1 — Préparer le config client

1. Copie le dossier template du métier dans `_clients/` :
   ```bash
   cp -r _templates/menuisier _clients/menuiserie-martin
   ```
2. Ouvre `_clients/menuiserie-martin/config.json`
3. Remplace **toutes** les valeurs fictives par les infos réelles du client :
   - Nom de l'entreprise, du gérant
   - SIRET, TVA
   - Téléphone, email, site web
   - Adresse et zone d'intervention
   - Services adaptés (labels, descriptions)
   - Témoignages réels si disponibles
   - Couleurs si le client a une charte graphique

### Étape 2 — Lancer la génération avec Claude Code

1. Ouvre Claude Code dans le dossier `_clients/menuiserie-martin/`
2. Ouvre le fichier `_prompts/menuisier.md` (dans un éditeur)
3. Copie tout le contenu du prompt
4. Colle-le dans Claude Code et ajoute en fin de message :
   ```
   Lis le fichier config.json dans le dossier courant et génère le site.
   ```
5. Lance la génération et attends la fin

Claude Code va lire le config.json et générer un fichier `index.html` complet
dans `_clients/menuiserie-martin/`.

### Étape 3 — Livraison

1. Ouvre `_clients/menuiserie-martin/index.html` dans un navigateur pour prévisualiser
2. Vérifie :
   - Toutes les infos client sont correctes
   - Le téléphone et l'email sont cliquables
   - Le site est responsive (redimensionne la fenêtre)
   - Les horaires, certifications et services sont affichés
3. Déploie sur l'hébergement client :
   - **Vercel** : `vercel deploy` ou glisser-déposer sur vercel.com
   - **Netlify** : glisser-déposer le dossier sur app.netlify.com
   - **OVH/Ionos** : FTP du fichier index.html à la racine

---

## Métiers disponibles

| Métier       | Couleur primaire | Accent    | Police           | Urgence |
|--------------|-----------------|-----------|------------------|---------|
| Menuisier    | `#3D2B1F` Brun  | `#C8A96E` | Playfair Display | Non     |
| Plombier     | `#1B3A6B` Bleu  | `#FF6B35` | Oswald           | **Oui** |
| Électricien  | `#1A1A2E` Nuit  | `#FFD700` | Barlow Condensed | **Oui** |
| Peintre      | `#2D2D2D` Noir  | `#E63946` | DM Serif Display | Non     |
| Maçon        | `#4A4A4A` Gris  | `#E67E22` | Bebas Neue       | Non     |
| Paysagiste   | `#1B4332` Forêt | `#95D5B2` | Cormorant Garamond | Non   |
| Couvreur     | `#2C3E50` Ardoise | `#E74C3C` | Oswald          | **Oui** |
| Chauffagiste | `#7B2D00` Brique | `#FF8C42` | Barlow Condensed | **Oui** |

---

## Ce que génère Claude Code

Pour chaque client, un seul fichier `index.html` autonome contenant :

- **Design sur mesure** : couleurs, polices et style adaptés au métier
- **Sections complètes** : Hero, Services, Galerie, À propos, Zone d'intervention, Témoignages, FAQ, Contact, Footer
- **Sections spécifiques** par métier : nuancier (peintre), processus (maçon), calendrier entretien (paysagiste), aides financières (chauffagiste), certifications (électricien), expertise matériaux (couvreur)
- **Bandeau urgence** pour les métiers urgentistes (plombier, électricien, couvreur, chauffagiste)
- **SEO optimisé** : balises meta, Schema.org LocalBusiness, Open Graph, ancres internes
- **100% autonome** : pas de CDN, pas de framework, tout inline
- **Responsive mobile-first** : breakpoints 768px et 1200px

---

## Ajouter un nouveau métier

1. Crée `_templates/[nouveau-metier]/config.json` en copiant un existant
2. Adapte les services, couleurs, certifications
3. Crée `_prompts/[nouveau-metier].md` en t'inspirant du prompt menuisier
4. Ajoute le métier dans ce README

---

## Prêt à tester

Lance la session test avec :

```bash
cp -r _templates/menuisier _clients/menuiserie-martin
# Édite _clients/menuiserie-martin/config.json avec les vraies infos
# Puis ouvre Claude Code dans _clients/menuiserie-martin/ et lance le prompt
```
