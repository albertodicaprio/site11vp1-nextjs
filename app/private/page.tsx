'use client';

import { useState } from 'react';

export default function PrivatePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activities, setActivities] = useState<Array<{ id: number; title: string; date: string }>>([]);
  const [newActivity, setNewActivity] = useState({ title: '', date: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (placeholder for MVP)
    if (password === 'class11vp1') {
      setIsLoggedIn(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (newActivity.title.trim()) {
      setActivities([
        ...activities,
        {
          id: Date.now(),
          title: newActivity.title,
          date: newActivity.date,
        },
      ]);
      setNewActivity({ title: '', date: '' });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Private Space</h1>
        
        <div className="max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Login Required</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">Hint: Use "class11vp1" for demo</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Activity Proposals</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Activity Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-20">
            <h2 className="text-2xl font-semibold mb-4">Propose Activity</h2>
            <form onSubmit={handleAddActivity} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Activity Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={newActivity.title}
                  onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                  placeholder="e.g., Hiking tour"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Suggested Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={newActivity.date}
                  onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add Activity
              </button>
            </form>
          </div>
        </div>

        {/* Activities List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Proposed Activities</h2>
          {activities.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow text-gray-600">
              <p>No activities proposed yet. Be the first to suggest one!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  {activity.date && (
                    <p className="text-gray-600">
                      <strong>Suggested Date:</strong> {new Date(activity.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
