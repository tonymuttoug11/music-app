import { FaFire, FaChartLine, FaUserFriends, FaSearch, FaUpload, FaRegUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white p-3 shadow-lg">
      <div className="container mx-auto flex justify-center items-center gap-6">
        {/* Left Navigation */}
        <div className="flex items-center gap-6">
          <NavLink icon={<FaFire />} text="Trending" />
          <NavLink icon={<FaChartLine />} text="Top 100" />
          <NavLink icon={<FaUserFriends />} text="Artists" />
        </div>

        {/* Centered Search */}
        <div className="relative mx-4 w-full max-w-md">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search songs..."
            className="bg-gray-700 rounded-full py-1 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <UploadButton />
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}

// Components
function NavLink({ icon, text }) {
  return (
    <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition whitespace-nowrap">
      {icon}
      <span className="hidden sm:inline">{text}</span>
    </a>
  );
}

function UploadButton() {
  return (
    <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-full flex items-center gap-2 transition">
      <FaUpload />
      <span className="hidden md:inline">Upload</span>
    </button>
  );
}

function UserProfile() {
  return <FaRegUserCircle className="text-xl cursor-pointer hover:text-purple-400" />;
}