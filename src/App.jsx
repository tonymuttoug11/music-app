import { FaHome, FaCompass, FaMusic, FaHistory, FaBookmark, FaAd } from 'react-icons/fa';
import Navbar from './components/Navbar';
import MusicSections from './components/MusicSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 pt-16"> {/* pt-16 to account for navbar height */}
        {/* Fixed Left Menu */}
        <div className="w-16 md:w-56 bg-gray-800 border-r border-gray-700 fixed left-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-4 flex justify-center md:justify-start items-center h-16 border-b border-gray-700">
            <FaMusic className="text-2xl text-purple-500" />
            <span className="hidden md:inline ml-2 text-xl font-bold">MusicApp</span>
          </div>
          
          <nav className="space-y-2 px-2 py-4">
            <SidebarLink icon={<FaHome />} text="Home" active />
            <SidebarLink icon={<FaCompass />} text="Discover" />
            <SidebarLink icon={<FaMusic />} text="Library" />
            <SidebarLink icon={<FaHistory />} text="History" />
            <SidebarLink icon={<FaBookmark />} text="Bookmarks" />
          </nav>
        </div>

        {/* Scrollable Middle Content */}
        <div className="flex-1 ml-16 md:ml-56 mr-0 lg:mr-64 overflow-y-auto" style={{
          height: 'calc(100vh - 4rem)',
          paddingBottom: '4rem' /* space for footer */
        }}>
          <div className="p-4 md:p-6">
            <MusicSections />
          </div>
        </div>

        {/* Fixed Right Ad Space */}
        <div className="hidden lg:block w-64 bg-gray-800 border-l border-gray-700 fixed right-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-4 space-y-4">
            <AdSection />
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
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