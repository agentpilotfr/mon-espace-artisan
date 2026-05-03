// ─────────────────────────────────────────────────────────────
// Configuration globale — Mon Espace Artisan
// Toutes les données de contact / légales centralisées ici.
// Importer dans les composants via : import { SITE } from '../config';
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name:           'Mon Espace Artisan',
  domain:         'mon-espace-artisan.fr',
  url:            'https://mon-espace-artisan.fr',

  // Téléphone
  phone:          '+33781078963',
  phoneDisplay:   '07 81 07 89 63',

  // Email
  email:          'contact@mon-espace-artisan.fr',

  // Calendly (à remplacer quand prêt)
  calendly:       'COMING_SOON_CALENDLY',

  // Équipe
  ownerName:      'Aurélie Jarnet',
  coFounderName:  'Alexandre Denel',

  // Légal
  siret:          '498 677 624',
  legalForm:      'Micro-entreprise',
  address:        'Saint-Nazaire',
  postalCode:     '44600',
  department:     'Loire-Atlantique',
  country:        'France',

  // Horaires
  hours:          'Lundi – Vendredi · 9h–18h',
} as const;

export type SiteConfig = typeof SITE;
