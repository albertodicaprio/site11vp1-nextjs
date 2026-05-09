import { tripDays, tripInfo, getTotalActivities } from '@/data/tripDays';
import classTripBackground from '@/locarno-porto-panoramio.jpg';

export default function ClassTripPage() {
  const totalActivities = getTotalActivities();

  return (
    <div
      className="min-h-screen bg-slate-900 bg-cover bg-center bg-scroll px-4 py-12"
      style={{
        backgroundImage: `url(${classTripBackground.src})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="inline-block bg-white/75 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm mb-12">
          <h1 className="text-4xl font-bold mb-2 text-slate-950">Journal du voyage à Locarno</h1>
          <p className="text-slate-800">Voici ce que l&apos;on a fait pendant le voyage</p>
        </div>

        {/* Trip Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-600/80 text-white p-4 rounded-lg shadow backdrop-blur-sm">
            <p className="text-sm text-blue-100 mb-1">Lieu</p>
            <p className="text-xl font-bold">{tripInfo.destination}</p>
          </div>
          <div className="bg-purple-600/80 text-white p-4 rounded-lg shadow backdrop-blur-sm">
            <p className="text-sm text-purple-100 mb-1">Durée</p>
            <p className="text-xl font-bold">{tripInfo.duration}</p>
          </div>
          <div className="bg-green-600/80 text-white p-4 rounded-lg shadow backdrop-blur-sm">
            <p className="text-sm text-green-100 mb-1">Altitude</p>
            <p className="text-xl font-bold">{tripInfo.elevation}</p>
          </div>
          <div className="bg-orange-600/80 text-white p-4 rounded-lg shadow backdrop-blur-sm">
            <p className="text-sm text-orange-100 mb-1">Activités</p>
            <p className="text-xl font-bold">{totalActivities}+</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h2 className="inline-block text-2xl font-bold mb-4 text-slate-950 bg-white/75 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">Points forts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tripInfo.highlights.map((highlight, idx) => (
              <div key={idx} className="bg-white/75 border border-white/60 px-4 py-3 rounded text-center font-semibold text-blue-900 shadow backdrop-blur-sm">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Day-by-Day Itinerary */}
        <div className="mb-12">
          <h2 className="inline-block text-3xl font-bold mb-8 text-slate-950 bg-white/75 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">Programme jour par jour</h2>
          <div className="space-y-6">
            {tripDays.map((tripDay, idx) => (
              <div key={idx} className="bg-white/80 rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500 backdrop-blur-sm">
                <div className="bg-blue-50/80 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">
                        {tripDay.title}
                      </h3>
                      <p className="text-blue-700 text-sm mt-1">{new Date(tripDay.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="space-y-2">
                    {tripDay.activities.map((activity, actIdx) => (
                      <div key={actIdx} className="flex items-start py-2">
                        {activity.time && <span className="font-semibold text-blue-600 mr-4 min-w-12">{activity.time}</span>}
                        <span className="text-gray-700 mr-2">-</span>
                        <span className="text-gray-700">{activity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
