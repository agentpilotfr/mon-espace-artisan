export interface Template {
  slug: string;
  name: string;
  emoji: string;
  category: string;
  colorPrimary: string;
  colorAccent: string;
  tags: string[];
  urgency: boolean;
  sections: number;
  previewUrl: string;
}

export const templates: Template[] = [
  {
    slug: 'menuisier',
    name: 'Menuisier',
    emoji: '🪚',
    category: 'finition',
    colorPrimary: '#3D2B1F',
    colorAccent: '#C8A96E',
    tags: ['Sur mesure', 'Galerie', 'Devis'],
    urgency: false,
    sections: 9,
    previewUrl: '/templates/preview/menuisier',  // page dédiée
  },
  {
    slug: 'plombier',
    name: 'Plombier',
    emoji: '🔧',
    category: 'sanitaire',
    colorPrimary: '#1B3A6B',
    colorAccent: '#FF6B35',
    tags: ['Urgence 24/7', 'Devis', 'SEO local'],
    urgency: true,
    sections: 9,
    previewUrl: '/templates/preview/plombier',
  },
  {
    slug: 'electricien',
    name: 'Électricien',
    emoji: '⚡',
    category: 'energie',
    colorPrimary: '#1A1A2E',
    colorAccent: '#FFD700',
    tags: ['Urgence 24/7', 'RGE', 'Dépannage'],
    urgency: true,
    sections: 9,
    previewUrl: '/templates/preview/electricien',
  },
  {
    slug: 'peintre',
    name: 'Peintre',
    emoji: '🎨',
    category: 'finition',
    colorPrimary: '#2D2D2D',
    colorAccent: '#E63946',
    tags: ['Portfolio', 'Avant/après', 'Devis'],
    urgency: false,
    sections: 8,
    previewUrl: '/templates/preview/peintre',
  },
  {
    slug: 'macon',
    name: 'Maçon',
    emoji: '🏗️',
    category: 'construction',
    colorPrimary: '#4A4A4A',
    colorAccent: '#E67E22',
    tags: ['Décennale', 'Devis', 'Réalisations'],
    urgency: false,
    sections: 9,
    previewUrl: '/templates/preview/macon',
  },
  {
    slug: 'paysagiste',
    name: 'Paysagiste',
    emoji: '🌿',
    category: 'finition',
    colorPrimary: '#1B4332',
    colorAccent: '#95D5B2',
    tags: ['Entretien', 'Création', 'Abonnement'],
    urgency: false,
    sections: 9,
    previewUrl: '/templates/preview/paysagiste',
  },
  {
    slug: 'couvreur',
    name: 'Couvreur',
    emoji: '🏠',
    category: 'construction',
    colorPrimary: '#2C3E50',
    colorAccent: '#E74C3C',
    tags: ['Urgence fuite', 'Devis', 'Zone 80km'],
    urgency: true,
    sections: 9,
    previewUrl: '/templates/preview/couvreur',
  },
  {
    slug: 'chauffagiste',
    name: 'Chauffagiste',
    emoji: '🔥',
    category: 'energie',
    colorPrimary: '#7B2D00',
    colorAccent: '#FF8C42',
    tags: ["RGE", "MaPrimeRénov'", 'Urgence'],
    urgency: true,
    sections: 9,
    previewUrl: '/templates/preview/chauffagiste',
  },
];

export const categories = [
  { id: 'all',          label: 'Tous les métiers' },
  { id: 'sanitaire',   label: 'Sanitaire' },
  { id: 'construction',label: 'Construction' },
  { id: 'finition',    label: 'Finition' },
  { id: 'energie',     label: 'Énergie' },
];
