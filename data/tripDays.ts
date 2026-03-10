/**
 * Class trip itinerary for Locarno
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
  icon: string;
  activities: Activity[];
}

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: '2026-05-04',
    title: 'Arrival & Settling In',
    icon: '🚂',
    activities: [
      { time: '09:00', name: 'Depart from Nyon' },
      { time: '12:00', name: 'Lunch stop' },
      { time: '14:00', name: 'Arrive in Locarno' },
      { time: '15:00', name: 'Check into accommodations' },
      { time: '16:00', name: 'Welcome tour of town' },
      { time: '19:00', name: 'Welcome dinner' },
    ],
  },
  {
    day: 2,
    date: '2026-05-05',
    title: 'Lake Maggiore Activities',
    icon: '🏊',
    activities: [
      { time: '08:00', name: 'Breakfast' },
      { time: '09:30', name: 'Boat tour on Lago Maggiore' },
      { time: '12:00', name: 'Lunch by the lake' },
      { time: '14:00', name: 'Swimming or beach time' },
      { time: '16:00', name: 'Free exploration time' },
      { time: '19:00', name: 'Group dinner' },
    ],
  },
  {
    day: 3,
    date: '2026-05-06',
    title: 'Mountain & Culture',
    icon: '⛰️',
    activities: [
      { time: '08:00', name: 'Breakfast' },
      { time: '09:00', name: 'Cable car to Cardada mountain' },
      { time: '11:00', name: 'Hiking and scenic views' },
      { time: '13:00', name: 'Picnic lunch on mountain' },
      { time: '15:00', name: 'Descend and visit local sites' },
      { time: '19:00', name: 'Evening activity' },
    ],
  },
  {
    day: 4,
    date: '2026-05-07',
    title: 'Free Time & Local Exploration',
    icon: '🗺️',
    activities: [
      { time: '08:00', name: 'Breakfast' },
      { time: '09:00', name: 'Free time - explore Piazza Grande' },
      { time: '12:00', name: 'Lunch (own choice)' },
      { time: '14:00', name: 'Cultural visits or shopping' },
      { time: '16:00', name: 'Relaxation time' },
      { time: '19:30', name: 'Special group dinner' },
    ],
  },
  {
    day: 5,
    date: '2026-05-08',
    title: 'Return to Nyon',
    icon: '🏠',
    activities: [
      { time: '08:00', name: 'Final breakfast in Locarno' },
      { time: '10:00', name: 'Pack and final preparations' },
      { time: '11:00', name: 'Depart Locarno' },
      { time: '13:00', name: 'Lunch stop' },
      { time: '15:00', name: 'Continue journey' },
      { time: '17:00', name: 'Arrive back in Nyon' },
    ],
  },
];

/**
 * Trip metadata
 */
export const tripInfo = {
  destination: 'Locarno, Switzerland',
  startDate: '2026-05-04',
  endDate: '2026-05-08',
  duration: '5 days / 4 nights',
  elevation: '196m above sea level',
  highlights: ['Lake Maggiore', 'Cardada Mountain', 'Piazza Grande', 'Local culture'],
  whatToBring: [
    'Passport and travel documents',
    'Comfortable walking shoes',
    'Swimsuit and sunscreen (SPF 30+)',
    'Light jacket (evenings can be cool)',
    'Personal medications',
    'Backpack for daily activities',
    'Cash and credit card',
  ],
};

/**
 * Get total number of activities
 */
export function getTotalActivities(): number {
  return tripDays.reduce((sum, day) => sum + day.activities.length, 0);
}
