export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 border-t border-gray-700 p-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} MusicApp</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-purple-400 transition">Terms</a>
          <a href="#" className="text-sm hover:text-purple-400 transition">Privacy</a>
          <a href="#" className="text-sm hover:text-purple-400 transition">Help</a>
        </div>
      </div>
    </footer>
  );
}