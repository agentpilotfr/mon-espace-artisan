# DOCTRINE — Mon Espace Artisan (MEA)

Source de vérité vault : `G:\vault_obsidian\03-business\labels\MEA\label-doctrine.md`

## Stack

| Contexte | Stack |
|---|---|
| Artisans (HTML simple) | Vanilla HTML + CSS + JS |
| Professions libérales (visuels riches) | Astro |
| Deploy | Cloudflare Pages via wrangler |
| CI | GitHub Actions → push main déclenche deploy |

## Règles de build — NE JAMAIS VIOLER

- **JAMAIS** `IntersectionObserver` ni `opacity: 0` initial — Safari iOS les ignore
- **TOUJOURS** `var` et `for` loop — pas `const`/`let`/`forEach` pour Safari iOS
- **Images < 300KB** sans exception

## Structure workspace

```
mon-espace-artisan/
  _clients/
    artisans/       ← sites HTML vanilla (brisart, demo-*, menuiserie-*)
    liberaux/       ← sites Astro (sabrina-duval, cedric-lucas)
  sites-artisans/   ← prompts, skills, templates MEA partagés
  _archive/         ← projets gelés (astro-site, marketplaces)
  .github/
    workflows/      ← deploy-brisart.yml (CF Pages CI)
  .claude/
    skills/         ← 7 skills UI/UX (banner-design, brand, design, …)
  index.html        ← landing page mon-espace-artisan.fr
  wrangler.toml     ← CF Pages config (mea-main)
```

## Clients actifs

| Client | Dossier | URL | Stack |
|---|---|---|---|
| Bris'Art Culinaire | `_clients/artisans/brisart-culinaire` | mea-brisartculinaire.pages.dev | Astro |
| Sabrina Duval | `_clients/liberaux/sabrina-duval` | master.mea-sabrina-duval.pages.dev | HTML |
| Cédric Lucas | `_clients/liberaux/cedric-lucas` | 1fba7484.mea-cedric-lucas.pages.dev | Astro |

## Tarifs

- Essentiel : 290€ HT + 19€/mois
- Pro ⭐ : 490€ HT + 29€/mois (produit phare)
- Premium : 790€ HT + 49€/mois

## Co-fondateurs

- Aurélie Jarnet — commerce + brief client + rédaction + livraison
- Alexandre Denel — build + code + SEO + déploiement
