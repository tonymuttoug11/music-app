import { FaHome, FaCompass, FaMusic, FaHistory, FaBookmark, FaAd } from 'react-icons/fa';
import Navbar from './components/Navbar';
import MusicSections from './components/MusicSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Combined Navbar + Left Menu Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-16 bg-gray-800">
        {/* Left Menu Logo */}
        <div className="w-16 md:w-56 border-r border-gray-700 flex-shrink-0 flex items-center px-4">
          <FaMusic className="text-2xl text-purple-500" />
          <span className="hidden md:inline ml-2 text-xl font-bold">MusicApp</span>
        </div>
        
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 pt-16"> {/* pt-16 for fixed header */}
        {/* Left Menu Navigation */}
        <div className="w-16 md:w-56 bg-gray-800 border-r border-gray-700 flex-shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <nav className="space-y-2 px-2 py-4">
            <SidebarLink icon={<FaHome />} text="Home" active />
            <SidebarLink icon={<FaCompass />} text="Discover" />
            <SidebarLink icon={<FaMusic />} text="Library" />
            <SidebarLink icon={<FaHistory />} text="History" />
            <SidebarLink icon={<FaBookmark />} text="Bookmarks" />
          </nav>
        </div>

        {/* Scrollable Music Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 pb-32 min-h-[calc(100vh-8rem)]">
            <MusicSections />
          </div>
          <Footer />
        </div>

        {/* Right Ad Space */}
        <div className="hidden lg:block w-64 bg-gray-800 border-l border-gray-700 flex-shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <div className="p-4 space-y-4">
            <AdSection />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ icon, text, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center p-3 mx-1 rounded-lg transition-colors ${
        active ? 'bg-purple-900/30 text-purple-400' : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="ml-3 hidden md:inline">{text}</span>
    </a>
  );
}

// Ad Section Component
function AdSection() {
  return (
    <>
      <div className="bg-purple-900/30 rounded-lg p-4 text-center">
        <FaAd className="text-4xl text-purple-400 mx-auto mb-2" />
        <p className="text-sm mb-2">Premium Subscription</p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm transition-colors">
          Upgrade Now
        </button>
      </div>
      
      <div className="bg-gray-700 rounded-lg p-4 mt-4">
        <h3 className="font-bold mb-3">New Releases</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center mb-3 last:mb-0">
            <img 
              src={`https://picsum.photos/50/50?random=${i + 100}`}
              className="w-10 h-10 rounded mr-3"
              alt={`Album ${i + 1}`}
            />
            <div>
              <p className="text-sm font-medium">New Album {i + 1}</p>
              <p className="text-xs text-gray-400">Artist {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}