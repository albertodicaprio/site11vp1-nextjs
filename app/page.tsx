import Link from 'next/link';
import { calculateDaysUntil, exams, getUpcomingHolidays } from '@/data/events';

const homePageBackground = 'https://www.nyon.ch/media/image/0/large_3_2/nouveau-batiment-scolaire-nyon-marens-nyon-210317.jpg';

export default function Home() {
  const nextExam = exams[0];
  const daysUntilExam = calculateDaysUntil(nextExam.date);
  const upcomingHolidays = getUpcomingHolidays(3).filter(h => h.name !== 'Class Trip - Locarno');

  const formatDateForDisplay = (dateString: string) => {
    const date = new Date(dateString);
    return Number.isNaN(date.getTime()) ? dateString : date.toLocaleDateString('fr-FR');
  };

  return (
    <div
      className="min-h-screen bg-slate-900 bg-cover bg-center bg-scroll px-4 py-12"
      style={{
        backgroundImage: `url(${homePageBackground})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="inline-block bg-white/75 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm mb-12">
          <h1 className="text-4xl font-bold mb-2 text-slate-950">Bienvenue à la classe 11VP1</h1>
          <p className="text-slate-800 text-lg">Site officiel pour notre classe à l&apos;école au Marens, Suisse</p>
        </div>

        {/* Exam Countdown Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-600/80 text-white p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4"> {nextExam.name}</h2>
            <p className="text-5xl font-bold mb-2">{daysUntilExam}</p>
            <p className="text-red-100 mb-2">Jours avant l&apos;examen</p>
            <p className="text-sm text-red-100">Journée examen: {formatDateForDisplay(nextExam.date)}</p>
          </div>

          {/* Quick Stats */}
          <div className="bg-blue-600/80 text-white p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4"> Vacances</h2>
            <p className="text-sm text-blue-100 mb-2">{upcomingHolidays.length} Vacances prochaines</p>
            <p className="text-2xl font-bold mb-2">Prochaines: {upcomingHolidays[0]?.name || 'N/A'}</p>
            <p className="text-xs text-blue-100">{upcomingHolidays[0] ? formatDateForDisplay(upcomingHolidays[0].startDate) : ''}</p>
          </div>

          {/* Class Trip */}
          <div className="bg-green-600/80 text-white p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4"> Voyage d&apos;études</h2>
            <p className="text-lg font-bold mb-2">Locarno</p>
            <p className="text-sm text-green-100 mb-4">mai 4-8, 2026</p>
            <Link href="/class-trip" className="inline-block bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-50 transition-colors">
              en savoir plus →
            </Link>
          </div>
        </div>

        {/* Holidays Section */}
        <div className="mb-12">
          <h2 className="inline-block text-3xl font-bold mb-6 text-slate-950 bg-white/75 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">Vacances scolaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingHolidays.map((holiday, idx) => (
              <div key={idx} className="bg-white/80 p-6 rounded-lg shadow border-l-4 border-blue-500 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-slate-950">{holiday.name}</h3>
                <p className="text-slate-700">
                  <strong>depuis le:</strong> {formatDateForDisplay(holiday.startDate)}
                </p>
                <p className="text-slate-700">
                  <strong>jusqu&apos;au:</strong> {formatDateForDisplay(holiday.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-6 rounded-lg shadow backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-slate-950">sur ce site</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>Meteo:</strong> Meteo de Nyon en direct</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>Voyage d&apos;études:</strong> programme du voyage à Locarno</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>espace privé:</strong> propose des activités entre amis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>TeamUp:</strong> Notre Horaire</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 p-6 rounded-lg shadow backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-slate-950">Links rapides</h3>
            <div className="space-y-2">
              <Link href="/weather" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Voir la météo à Nyon
              </Link>
              <Link href="/class-trip" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → voir le programme du voyage à Locarno
              </Link>
              <Link href="/private" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Propose des Activitiés (identification requise)
              </Link>
              <a href="https://teamup.com/ksed29ccbf360b6217" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Voir notre horaire sur TeamUp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
