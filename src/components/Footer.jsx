import { FaInstagram, FaSpotify, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Explore Links */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Genres</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Artists</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Playlists</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition">Cookies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Newsletter</h3>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm w-full transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition text-xl"><FaSpotify /></a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition text-xl"><FaYoutube /></a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition text-xl"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MusicApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}