import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';

export default function MusicSections() {
  // Sample data
  const trendingSongs = Array(20).fill().map((_, i) => ({
    id: i + 1,
    title: `Song ${i + 1}`.slice(0, 12),
    artist: `Artist ${i + 1}`.slice(0, 12),
    duration: '2:45',
    cover: `https://picsum.photos/200/200?random=${i}`
  }));

  const trendingArtists = Array(12).fill().map((_, i) => ({
    id: i + 1,
    name: `Artist ${i + 1}`.slice(0, 12),
    avatar: `https://picsum.photos/200/200?random=${i + 50}`
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Trending Songs (5x4 Grid) */}
      <Section title="Trending Now">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingSongs.slice(0, 20).map(song => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </Section>

      {/* Top 100 Songs (List) */}
      <Section title="Top 100" className="mt-10">
        <div className="space-y-3">
          {trendingSongs.slice(0, 20).map((song, index) => (
            <SongRow key={song.id} song={song} index={index} />
          ))}
        </div>
      </Section>

      {/* Trending Artists (6x2 Grid) */}
      <Section title="Trending Artists" className="mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {trendingArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </Section>
    </div>
  );
}

// Song Card Component
function SongCard({ song }) {
  return (
    <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition cursor-pointer group">
      <div className="relative">
        <img 
          src={song.cover}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-lg mb-3"
        />
        <button className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
          <FaPlay className="text-lg text-white" />
        </button>
      </div>
      <h3 className="font-semibold text-lg text-white truncate">{song.title}</h3>
      <p className="text-gray-400 text-base truncate">{song.artist}</p>
      <div className="flex justify-between mt-3">
        <button className="text-gray-400 hover:text-white text-lg">
          <FaHeart />
        </button>
        <button className="text-gray-400 hover:text-white text-lg">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
}

// Song Row Component
function SongRow({ song, index }) {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg transition">
      <span className="text-gray-400 text-xl w-8 text-right">{index + 1}</span>
      <img 
        src={song.cover}
        alt={song.title}
        className="w-14 h-14 rounded-md object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-xl text-white truncate">{song.title}</h3>
        <p className="text-gray-400 text-lg truncate">{song.artist}</p>
      </div>
      <span className="text-gray-400 text-lg">3:45</span>
      <div className="flex gap-4">
        <button className="text-gray-400 hover:text-white text-lg">
          <FaHeart />
        </button>
        <button className="text-gray-400 hover:text-white text-lg">
          <FaPlay />
        </button>
      </div>
    </div>
  );
}

// Artist Card Component
function ArtistCard({ artist }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-purple-500 p-1">
        <img 
          src={artist.avatar}
          alt={artist.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="font-medium text-lg text-white truncate px-2">{artist.name}</h3>
      <p className="text-gray-400 text-base">Artist</p>
    </div>
  );
}

// Section Component
function Section({ title, children, className = '' }) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </section>
  );
}