export default function ClassTripPage() {
  const tripDays = [
    {
      day: 1,
      date: 'June 15, 2026',
      title: 'Arrival & Piazza Grande',
      icon: '🚂',
      activities: [
        { time: '09:00', name: 'Depart from Nyon' },
        { time: '12:30', name: 'Lunch stop in Bellinzona' },
        { time: '14:00', name: 'Arrive in Locarno' },
        { time: '16:00', name: 'Explore Piazza Grande' },
        { time: '19:00', name: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 2,
      date: 'June 16, 2026',
      title: 'Lake Activities',
      icon: '🏊',
      activities: [
        { time: '08:00', name: 'Breakfast at hotel' },
        { time: '09:30', name: 'Boat tour on Lago Maggiore' },
        { time: '12:00', name: 'Swimming at Lido beach' },
        { time: '14:00', name: 'Lunch' },
        { time: '16:00', name: 'Free time / shopping' },
        { time: '19:30', name: 'Evening stroll along waterfront' },
      ],
    },
    {
      day: 3,
      date: 'June 17, 2026',
      title: 'Mountain & Casino',
      icon: '⛰️',
      activities: [
        { time: '08:00', name: 'Breakfast at hotel' },
        { time: '09:00', name: 'Cable car to Cardada mountain' },
        { time: '11:00', name: 'Hike & panoramic views' },
        { time: '13:00', name: 'Picnic lunch on mountain' },
        { time: '15:00', name: 'Descend & visit Casino di Locarno' },
        { time: '18:00', name: 'Free time in town' },
      ],
    },
    {
      day: 4,
      date: 'June 18, 2026',
      title: 'Cultural Day',
      icon: '🎪',
      activities: [
        { time: '08:00', name: 'Breakfast at hotel' },
        { time: '09:00', name: 'Visit Madonna del Sasso church' },
        { time: '11:00', name: 'Museum tour (local art & history)' },
        { time: '13:00', name: 'Lunch in old town' },
        { time: '15:00', name: 'Workshop on Swiss culture' },
        { time: '19:00', name: 'Special dinner experience' },
      ],
    },
    {
      day: 5,
      date: 'June 19, 2026',
      title: 'Adventure & Adventures',
      icon: '🧗',
      activities: [
        { time: '08:00', name: 'Breakfast at hotel' },
        { time: '09:30', name: 'Rock climbing experience' },
        { time: '12:00', name: 'Lunch break' },
        { time: '13:00', name: 'Mountain biking on trails' },
        { time: '16:00', name: 'Return to hotel' },
        { time: '19:00', name: 'Class dinner & reflection' },
      ],
    },
    {
      day: 6,
      date: 'June 20, 2026',
      title: 'Return & Goodbye',
      icon: '🏠',
      activities: [
        { time: '08:00', name: 'Final breakfast in Locarno' },
        { time: '10:00', name: 'Last shopping & souvenirs' },
        { time: '11:30', name: 'Depart Locarno' },
        { time: '15:00', name: 'Lunch stop' },
        { time: '17:00', name: 'Arrive back in Nyon' },
      ],
    },
  ];

  const tripInfo = {
    location: 'Locarno, Switzerland',
    duration: '6 days / 5 nights',
    elevation: '196m above sea level',
    totalActivities: tripDays.reduce((sum, day) => sum + day.activities.length, 0),
    highlights: ['Lake Maggiore', 'Cardada Mountain', 'Cultural activities', 'Adventure sports'],
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Class Trip: Locarno 2026</h1>
        <p className="text-gray-600 mb-8">June 15-20, 2026 | A 6-day adventure in Switzerland's sunny south</p>
      </div>

      {/* Trip Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow">
          <p className="text-sm text-blue-100 mb-1">Location</p>
          <p className="text-xl font-bold">{tripInfo.location}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg shadow">
          <p className="text-sm text-purple-100 mb-1">Duration</p>
          <p className="text-xl font-bold">{tripInfo.duration}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg shadow">
          <p className="text-sm text-green-100 mb-1">Elevation</p>
          <p className="text-xl font-bold">{tripInfo.elevation}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow">
          <p className="text-sm text-orange-100 mb-1">Activities</p>
          <p className="text-xl font-bold">{tripInfo.totalActivities}+</p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">✨ Trip Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tripInfo.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-blue-50 border border-blue-200 px-4 py-3 rounded text-center font-semibold text-blue-800">
              {highlight}
            </div>
          ))}
        </div>
      </div>

      {/* Day-by-Day Itinerary */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">📅 Day-by-Day Itinerary</h2>
        <div className="space-y-6">
          {tripDays.map((tripDay, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">
                      <span className="inline-block mr-3">{tripDay.icon}</span>
                      Day {tripDay.day}: {tripDay.title}
                    </h3>
                    <p className="text-blue-700 text-sm mt-1">{tripDay.date}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-2">
                  {tripDay.activities.map((activity, actIdx) => (
                    <div key={actIdx} className="flex items-start py-2">
                      <span className="font-semibold text-blue-600 mr-4 min-w-12">{activity.time}</span>
                      <span className="text-gray-700">{activity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What to Bring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">🎒 What to Bring</h2>
          <ul className="space-y-2 bg-white p-6 rounded-lg shadow">
            {tripInfo.whatToBring.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ℹ️ Important Information</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 mb-1">🏥 Travel Insurance</h3>
              <p className="text-sm text-yellow-700">Make sure to have travel insurance that covers accidents and medical emergencies.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h3 className="font-semibold text-blue-800 mb-1">💰 Budget</h3>
              <p className="text-sm text-blue-700">Estimated budget includes transport, accommodation, most meals, and activities. Bring extra for personal items.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <h3 className="font-semibold text-green-800 mb-1">📱 Communication</h3>
              <p className="text-sm text-green-700">Check if your mobile plan includes roaming. Consider getting a local SIM if needed.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h3 className="font-semibold text-purple-800 mb-1">🚌 Transport</h3>
              <p className="text-sm text-purple-700">We'll travel by coach from Nyon. Departure time will be confirmed 1 week before the trip.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
