/**
 * Event dates for Class 11VP1
 * Includes exam dates and school holidays
 */

export interface Holiday {
  name: string;
  startDate: string; // ISO format: YYYY-MM-DD
  endDate: string;
  type: 'break' | 'single-day' | 'vacation';
}

export interface Exam {
  name: string;
  date: string; // ISO format: YYYY-MM-DD
  subject?: string;
}

// Exam dates
export const exams: Exam[] = [
  {
    name: 'Examen Fin d\'année',
    date: '2026-06-01',
    subject: 'All subjects',
  },
];

// School holidays and breaks
export const holidays: Holiday[] = [
  {
    name: 'Vacances de Pâques',
    startDate: '2026-04-03',
    endDate: '2026-04-19',
    type: 'break',
  },
  {
    name: 'Voyage d\'études - Locarno',
    startDate: '2026-05-04',
    endDate: '2026-05-08',
    type: 'break',
  },
  {
    name: 'Ascension',
    startDate: '2026-05-14',
    endDate: '2026-05-17',
    type: 'break',
  },
  {
    name: 'Pentecôte',
    startDate: '2026-05-25',
    endDate: '2026-05-25',
    type: 'single-day',
  },
  {
    name: 'Summer Vacation',
    startDate: '2026-06-27',
    endDate: '2026-08-31',
    type: 'vacation',
  },
];

/**
 * Get next exam from today
 */
export function getNextExam(): Exam | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const futureExams = exams.filter(exam => {
    const examDate = new Date(exam.date);
    return examDate >= today;
  });

  return futureExams.length > 0 ? futureExams[0] : null;
}

/**
 * Calculate days until a specific date
 */
export function calculateDaysUntil(targetDate: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Get upcoming holidays (next 3)
 */
export function getUpcomingHolidays(limit: number = 3): Holiday[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = holidays.filter(holiday => {
    const endDate = new Date(holiday.endDate);
    return endDate >= today;
  });

  return upcoming.slice(0, limit);
}
