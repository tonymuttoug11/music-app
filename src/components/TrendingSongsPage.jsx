import { Link } from 'react-router-dom';

export default function TrendingSongsPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center mb-6">
        <Link to="/" className="text-purple-400 hover:text-purple-300 mr-4">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-purple-400">All Trending Songs</h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700 transition">
            <img 
              src={`https://picsum.photos/200/200?random=${i + 100}`}
              className="w-full rounded mb-2"
              alt={`Song ${i + 1}`}
            />
            <h3 className="font-medium truncate">Song Title {i + 1}</h3>
            <p className="text-sm text-gray-400 truncate">Artist Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}