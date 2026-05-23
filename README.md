# Mon Espace Artisan — Workspace

Création de sites web clé-en-main pour artisans et professions libérales françaises.

**Doctrine complète** : voir [DOCTRINE.md](DOCTRINE.md)
**Vault Obsidian** : `G:\vault_obsidian\03-business\labels\MEA\`

## Structure

```
_clients/
  artisans/          ← sites HTML vanilla livrés (brisart, demos, menuiseries)
  liberaux/          ← sites Astro (sabrina-duval, cedric-lucas)
sites-artisans/      ← prompts, skills, templates MEA partagés
_archive/            ← projets gelés
.claude/skills/      ← 7 skills UI/UX réutilisables
index.html           ← landing mon-espace-artisan.fr (déployé via wrangler)
```

## Déploiement

- Landing : `wrangler pages deploy . --project-name=mea-main`
- Bris'Art Culinaire : automatique via `.github/workflows/deploy-brisart.yml` (push main)

## Stack

| Contexte | Stack |
|---|---|
| Artisans | Vanilla HTML / CSS / JS |
| Libéraux | Astro |
| Hosting | Cloudflare Pages |
