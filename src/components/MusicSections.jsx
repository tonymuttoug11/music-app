export default function MusicSections() {
  return (
    <div className="space-y-8">
      {/* Trending Songs */}
      <section className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Trending Songs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700 transition">
              <img 
                src={`https://picsum.photos/200/200?random=${i}`}
                className="w-full rounded mb-2"
                alt={`Song ${i + 1}`}
              />
              <h3 className="font-medium truncate">Song Title {i + 1}</h3>
              <p className="text-sm text-gray-400 truncate">Artist Name</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top 100 */}
      <section className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Top 100</h2>
        <div className="space-y-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center bg-gray-700/30 hover:bg-gray-700 rounded-lg p-3 transition">
              <span className="text-gray-400 w-8 text-center">{i + 1}</span>
              <img 
                src={`https://picsum.photos/50/50?random=${i + 20}`}
                className="w-10 h-10 rounded mr-3"
                alt={`Top Song ${i + 1}`}
              />
              <div className="flex-1">
                <h3 className="font-medium">Hit Song {i + 1}</h3>
                <p className="text-sm text-gray-400">Popular Artist</p>
              </div>
              <span className="text-gray-400 text-sm">3:45</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Artists */}
      <section className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Trending Artists</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-center">
              <img 
                src={`https://picsum.photos/150/150?random=${i + 30}`}
                className="w-full rounded-full mb-2"
                alt={`Artist ${i + 1}`}
              />
              <h3 className="font-medium truncate">Artist {i + 1}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}