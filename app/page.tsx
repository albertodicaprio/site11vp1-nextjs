export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Class 11VP1</h1>
      <p className="text-gray-600 mb-8">Official website for Class 11VP1</p>
      
      {/* Placeholder content for landing page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Exam Countdown</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Holidays</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Class Trip</h2>
          <p className="text-gray-600">Locarno, Switzerland</p>
        </div>
      </div>
    </div>
  );
}
