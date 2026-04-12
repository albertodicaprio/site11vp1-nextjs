export default function WeatherPage() {
  // Mock weather data - will be replaced with real Open-Meteo API in Phase 5
  const currentWeather = {
    temp: 14,
    condition: 'Partly Cloudy',
    humidity: 72,
    windSpeed: 12,
    feelsLike: 12,
    location: 'Nyon, Switzerland',
    icon: '⛅',
  };

  const forecastDay = [
    { time: '09:00', temp: 12, condition: 'Cloudy', icon: '☁️' },
    { time: '12:00', temp: 16, condition: 'Partly Sunny', icon: '⛅' },
    { time: '15:00', temp: 23, condition: 'Sunny', icon: '☀️' },
    { time: '18:00', temp: 14, condition: 'Cloudy', icon: '☁️' },
    { time: '21:00', temp: 11, condition: 'Rainy', icon: '🌧️' },
  ];

  const forecastWeek = [
    { day: 'Monday', high: 18, low: 12, condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Tuesday', high: 16, low: 11, condition: 'Rainy', icon: '🌧️' },
    { day: 'Wednesday', high: 15, low: 10, condition: 'Cloudy', icon: '☁️' },
    { day: 'Thursday', high: 19, low: 13, condition: 'Sunny', icon: '☀️' },
    { day: 'Friday', high: 20, low: 14, condition: 'Sunny', icon: '☀️' },
    { day: 'Saturday', high: 17, low: 12, condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Sunday', high: 16, low: 11, condition: 'Rainy', icon: '🌧️' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Weather in Nyon, Switzerland</h1>
      <p className="text-gray-600 mb-8">Location: 46.38°N, 6.24°E | Real-time data coming in Phase 5</p>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Weather Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Current Weather</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-7xl mb-4">{currentWeather.icon}</div>
              <p className="text-6xl font-bold mb-2">{currentWeather.temp}°C</p>
              <p className="text-xl">{currentWeather.condition}</p>
              <p className="text-blue-100 text-sm mt-2">Feels like {currentWeather.feelsLike}°C</p>
            </div>
            <div className="text-right">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-blue-600 text-sm">Humidity</p>
                <p className="text-3xl font-bold text-blue-600">{currentWeather.humidity}%</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                <p className="text-blue-600 text-sm">Wind Speed</p>
                <p className="text-3xl font-bold text-blue-600">{currentWeather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Alert */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Alert</h3>
          <p className="text-yellow-800 text-sm">Rain expected in the evening. Remember to bring an umbrella for outdoor activities!</p>
        </div>
      </div>

      {/* 24-Hour Forecast */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">24-Hour Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {forecastDay.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow text-center border-t-4 border-blue-500">
              <p className="font-semibold text-gray-700 mb-2">{item.time}</p>
              <p className="text-4xl mb-2">{item.icon}</p>
              <p className="text-2xl font-bold mb-1 text-black">{item.temp}°C</p>
              <p className="text-xs text-gray-600">{item.condition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div>
        <h2 className="text-3xl font-bold mb-6">7-Day Forecast</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Day</th>
                <th className="px-4 py-3 text-center font-semibold">Icon</th>
                <th className="px-4 py-3 text-center font-semibold">High</th>
                <th className="px-4 py-3 text-center font-semibold">Low</th>
                <th className="px-4 py-3 text-left font-semibold">Condition</th>
              </tr>
            </thead>
            <tbody>
              {forecastWeek.map((day, idx) => (
                <tr key={idx} className={`border-t ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-4 py-3 font-medium text-gray-800">{day.day}</td>
                  <td className="px-4 py-3 text-center text-2xl">{day.icon}</td>
                  <td className="px-4 py-3 text-center font-semibold text-blue-600">{day.high}°C</td>
                  <td className="px-4 py-3 text-center text-gray-600">{day.low}°C</td>
                  <td className="px-4 py-3 text-gray-600">{day.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">📝 Note: This is a mockup forecast. Real data will be fetched from Open-Meteo API in Phase 5.</p>
      </div>
    </div>
  );
}
