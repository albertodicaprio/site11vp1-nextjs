'use client';

import { useState } from 'react';

interface ActivityProposal {
  id: string;
  proposedBy: string;
  activity: string;
  date: string;
  timestamp: number;
}

export default function PrivatePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activities, setActivities] = useState<ActivityProposal[]>([
    {
      id: '1',
      proposedBy: 'test',
      activity: 'Volley',
      date: '2026-06-19',
      timestamp: Date.now() - 86400000,
    },
    {
      id: '2',
      proposedBy: 'test2',
      activity: 'Bowling',
      date: '2026-06-16',
      timestamp: Date.now() - 172800000,
    },
  ]);
  const [newProposerName, setNewProposerName] = useState('');
  const [newActivityText, setNewActivityText] = useState('');
  const [newActivityDate, setNewActivityDate] = useState('');
  const today = new Date().toISOString().slice(0, 10);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (password === 'Marens') {
      setIsLoggedIn(true);
      setPassword('');
    } else {
      setPasswordError('Mot de passe incorrect.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    setNewProposerName('');
    setNewActivityText('');
    setNewActivityDate('');
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProposerName.trim() && newActivityText.trim() && newActivityDate) {
      const newActivity: ActivityProposal = {
        id: Date.now().toString(),
        proposedBy: newProposerName,
        activity: newActivityText,
        date: newActivityDate,
        timestamp: Date.now(),
      };
      setActivities([newActivity, ...activities]);
      setNewProposerName('');
      setNewActivityText('');
      setNewActivityDate('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Espace Privé</h1>
          <p className="text-purple-100 mb-8">Classe 11VP1 - Zone Exclusive</p>

          <form onSubmit={handleLogin} className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="password" className="block text-left text-purple-100 text-sm font-semibold mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe "
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {passwordError && (
              <p className="text-red-200 text-sm mb-4 bg-red-900 bg-opacity-30 px-4 py-2 rounded">
                {passwordError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-white text-purple-600 font-bold py-3 rounded hover:bg-purple-50 transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Bienvenu à l'espace privé de la 11VP1</h1>
          <p className="text-gray-600 mt-2">Propose des activités à faire entre amis</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Proposal Form */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg sticky top-4">
            <h2 className="text-2xl font-bold mb-6">Propose une activité</h2>
            <form onSubmit={handleAddActivity} className="space-y-4">
              <div>
                <label className="block text-green-100 text-sm font-semibold mb-2">Ton nom</label>
                <input
                  type="text"
                  value={newProposerName}
                  onChange={(e) => setNewProposerName(e.target.value)}
                  placeholder="ex: Albert C."
                  className="w-full px-3 py-2 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-green-100 text-sm font-semibold mb-2">Activité</label>
                <textarea
                  value={newActivityText}
                  onChange={(e) => setNewActivityText(e.target.value)}
                  placeholder="Décris ton idée d'activité..."
                  className="w-full px-3 py-2 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm resize-none h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-green-100 text-sm font-semibold mb-2">Date proposée</label>
                <input
                  type="date"
                  value={newActivityDate}
                  onChange={(e) => setNewActivityDate(e.target.value)}
                  min={today}
                  max="2026-06-26"
                  className="w-full px-3 py-2 rounded bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-green-600 font-bold py-2 rounded hover:bg-green-50 transition-colors mt-4"
              >
                Ajoute ton idée
              </button>
            </form>
          </div>
        </div>

        {/* Activities List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Activités proposées ({activities.length})</h2>

          {activities.length === 0 ? (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Pas d'activités proposées pour le moment. Sois le premier à suggérer quelque chose!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow border-l-4 border-green-500 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-lg text-gray-800">{activity.activity}</p>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {activity.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Proposé par: <strong>{activity.proposedBy}</strong></p>
                  <p className="text-xs text-gray-400">
                    Ajouté il y a {Math.floor((Date.now() - activity.timestamp) / 86400000)} jours
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
