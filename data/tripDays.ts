/**
 * Programme du voyage de classe a Locarno
 * May 4-8, 2026
 */

export interface Activity {
  time: string; // HH:MM format
  name: string;
}

export interface TripDay {
  day: number;
  date: string; // ISO format: YYYY-MM-DD
  title: string;
  activities: Activity[];
}

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: '2026-05-04',
    title: 'Lundi',
    activities: [
      { time: '', name: 'Départ de Nyon' },
      { time: '', name: 'Arrivée à Locarno' },
      { time: '', name: 'Parcours découverte à la Piazza Grande en groupe' },
      { time: '', name: 'Restaurant' },
    ],
  },
  {
    day: 2,
    date: '2026-05-05',
    title: 'Mardi',
    activities: [
      { time: '', name: 'Lido' },
      { time: '', name: 'Retour à la Piazza Grande' },
      { time: '', name: 'Pique-nique' },
      { time: '', name: 'Montée à la Madonna del Sasso' },
      { time: '', name: 'Retour à la Piazza Grande en petits groupes' },
      { time: '', name: 'Quartier libre dans le centre-ville' },
      { time: '', name: 'Restaurant' },
    ],
  },
  {
    day: 3,
    date: '2026-05-06',
    title: 'Mercredi',
    activities: [
      { time: '', name: 'Départ pour Lugano' },
      { time: '', name: 'Quartier libre jusqu’à midi' },
      { time: '', name: 'Pique-nique' },
      { time: '', name: 'Musée d’art' },
      { time: '', name: 'Retour à Locarno' },
      { time: '', name: 'Quartier libre dans le centre-ville' },
      { time: '', name: 'Restaurant' },
    ],
  },
  {
    day: 4,
    date: '2026-05-07',
    title: 'Jeudi',
    activities: [
      { time: '', name: 'Départ du port de Locarno' },
      { time: '', name: 'Arrivée sur l’île de Brissago' },
      { time: '', name: 'Jardin botanique' },
      { time: '', name: 'Pique-nique' },
      { time: '', name: 'Ascona' },
      { time: '', name: 'Retour à Locarno à pied' },
      { time: '', name: 'Quartier libre dans le centre-ville' },
      { time: '', name: 'Restaurant' },
    ],
  },
  {
    day: 5,
    date: '2026-05-08',
    title: 'Vendredi',
    activities: [
      { time: '', name: 'Départ de Locarno' },
      { time: '', name: 'Pique-nique dans le train' },
      { time: '', name: 'Arrivée à Nyon' },
    ],
  },
];

/**
 * Trip metadata
 */
export const tripInfo = {
  destination: 'Locarno, Suisse',
  startDate: '2026-05-04',
  endDate: '2026-05-08',
  duration: '5 jours / 4 nuits',
  elevation: '196 m',
  highlights: ['Piazza Grande', 'Madonna del Sasso', 'Lugano', 'Îles de Brissago'],
  whatToBring: [
    'Carte d’identité et documents de voyage',
    'Chaussures confortables',
    'Maillot de bain et crème solaire',
    'Veste légère',
    'Médicaments personnels',
    'Sac à dos pour les activités',
    'Argent de poche',
  ],
};

/**
 * Get total number of activities
 */
export function getTotalActivities(): number {
  return tripDays.reduce((sum, day) => sum + day.activities.length, 0);
}
