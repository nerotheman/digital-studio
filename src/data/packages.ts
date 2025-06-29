import { CheckCircle2 } from 'lucide-react';

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  priceNote?: string;
  delivery: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  popular?: boolean;
  badgeText?: string;
}

export interface PackagesConfig {
  introDescription?: string;
}

export const packagesConfig: PackagesConfig = {
  introDescription:
    'Vi bygger smart så att era löpande kostnader startar lågt. Först betalar ni bara för domän (~150kr/år). När trafiken ökar och ni vill ha full CMS-kontroll uppgraderar vi - då har ni redan sett ROI från hemsidan.',
};

export const packages: Package[] = [
  {
    id: 'startklar',
    name: 'Grundpaket "Startklar"',
    tagline:
      'För dig som vill komma online snabbt och synas när kunder söker lokalt.',
    description:
      'Perfekt för små företag som behöver en professionell digital närvaro utan krångel.',
    features: [
      'Upp till 5 sidor + kontaktformulär',
      'Redigera själv: öppettider, priser & kontaktinfo',
      'Professionell design som bygger förtroende',
      'Google-optimering för "din bransch + Uppsala"',
      'Laddar blixtsnabbt på alla enheter',
      '30 dagars support efter lansering',
    ],
    price: 'Från 15 000 kr',
    priceNote: 'Grundpris',
    delivery: 'Leverans inom 2 veckor',
    gradientFrom: 'from-blue-500',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-500',
  },
  {
    id: 'tillvaxtturbo',
    name: 'Premiumpaket "Tillväxtturbo"',
    tagline:
      'För dig som vill växa trafiken och få fler bokningar eller försäljning.',
    description:
      'Komplett lösning för företag som vill ta nästa steg och växa online.',
    features: [
      'Allt i Startklar-paketet',
      'Redigera allt innehåll själv, när du vill',
      'Modern design anpassad för er bransch',
      'Avancerad SEO + konkurrentanalys',
      'Grundläggande månadsstatistik',
      'Blogg för att bygga långsiktig trafik',
    ],
    price: 'Från 35 000 kr',
    priceNote: 'Premiumpris',
    delivery: 'Leverans 4–6 veckor',
    gradientFrom: 'from-purple-500',
    gradientVia: 'via-purple-500',
    gradientTo: 'to-purple-500',
    popular: true,
  },
  {
    id: 'skraddarsytt',
    name: 'Skräddarsytt paket',
    tagline:
      'För dig som har större behov och vill ha något helt unikt för din verksamhet.',
    description:
      'Helt anpassad lösning för e-handel, speciallösningar eller digitalt varumärke i toppklass.',
    features: [
      'Allt i tidigare paket',
      'Avancerade funktioner efter dina behov',
      'Helt unik design som speglar ert varumärke',
      'Koppling till era system (bokföring, kalender, etc)',
      'Prioriterad support med garanterad svarstid',
      'Skalbar lösning som växer med er verksamhet',
    ],
    price: 'Kontakta oss',
    priceNote: 'för offert',
    delivery: 'Leverans enligt överenskommelse',
    gradientFrom: 'from-pink-500',
    gradientVia: 'via-pink-500',
    gradientTo: 'to-pink-500',
  },
];
