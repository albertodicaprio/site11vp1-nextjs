export default function WeatherPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Weather in Nyon, Switzerland</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Weather Placeholder */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Current Conditions</h2>
          <div className="text-center">
            <div className="text-6xl mb-4">☀️</div>
            <p className="text-gray-600 text-lg mb-2">Temperature: Coming soon...</p>
            <p className="text-gray-600 text-lg">Conditions: Coming soon...</p>
          </div>
        </div>
        
        {/* Forecast Placeholder */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">24-Hour Forecast</h2>
          <p className="text-gray-600">Forecast data will be displayed here once API is integrated.</p>
        </div>
      </div>
    </div>
  );
}
