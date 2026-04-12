import Link from 'next/link';
import { calculateDaysUntil, exams, getUpcomingHolidays } from '@/data/events';

export default function Home() {
  const nextExam = exams[0];
  const daysUntilExam = calculateDaysUntil(nextExam.date);
  const upcomingHolidays = getUpcomingHolidays(3).filter(h => h.name !== 'Class Trip - Locarno');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to Class 11VP1</h1>
        <p className="text-gray-600 text-lg">Official website for our class at school in Nyon, Switzerland</p>
      </div>
      
      {/* Exam Countdown Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">📚 {nextExam.name}</h2>
          <p className="text-5xl font-bold mb-2">{daysUntilExam}</p>
          <p className="text-red-100 mb-2">days until exam</p>
          <p className="text-sm text-red-100">Exam Date: {new Date(nextExam.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">📅 Holidays</h2>
          <p className="text-sm text-blue-100 mb-2">{upcomingHolidays.length} upcoming breaks</p>
          <p className="text-2xl font-bold mb-2">Next: {upcomingHolidays[0]?.name || 'N/A'}</p>
          <p className="text-xs text-blue-100">{upcomingHolidays[0] ? new Date(upcomingHolidays[0].startDate).toLocaleDateString() : ''}</p>
        </div>

        {/* Class Trip */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">✈️ Class Trip</h2>
          <p className="text-lg font-bold mb-2">Locarno</p>
          <p className="text-sm text-green-100 mb-4">May 4-8, 2026</p>
          <Link href="/class-trip" className="inline-block bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-50 transition-colors">
            Learn More →
          </Link>
        </div>
      </div>

      {/* Holidays Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎉 School Holidays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingHolidays.map((holiday, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2 text-black">{holiday.name}</h3>
              <p className="text-gray-600">
                <strong>From:</strong> {new Date(holiday.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <strong>To:</strong> {new Date(holiday.endDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-black">📍 On This Website</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span><strong>Weather:</strong> Live weather for Nyon</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span><strong>Class Trip:</strong> Full itinerary for Locarno</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span><strong>Private Space:</strong> Propose trip activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span><strong>TeamUp:</strong> Weekly class schedule</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-black">🔗 Quick Links</h3>
          <div className="space-y-2">
            <Link href="/weather" className="block text-blue-600 hover:text-blue-800 hover:underline">
              → Check Weather in Nyon
            </Link>
            <Link href="/class-trip" className="block text-blue-600 hover:text-blue-800 hover:underline">
              → View Trip Details
            </Link>
            <Link href="/private" className="block text-blue-600 hover:text-blue-800 hover:underline">
              → Propose Activities (Login Required)
            </Link>
            <a href="https://teamup.com/ksed29ccbf360b6217" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 hover:underline">
              → Open TeamUp Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
