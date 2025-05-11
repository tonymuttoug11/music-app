import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Trending</FooterLink>
              <FooterLink href="#">Genres</FooterLink>
              <FooterLink href="#">New Releases</FooterLink>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Profile</FooterLink>
              <FooterLink href="#">Settings</FooterLink>
              <FooterLink href="#">Upgrade</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#"><FaFacebook /></SocialIcon>
              <SocialIcon href="#"><FaTwitter /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaYoutube /></SocialIcon>
              <SocialIcon href="#"><FaSpotify /></SocialIcon>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MusicApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-purple-400 text-xl transition-colors"
      aria-label="Social media"
    >
      {children}
    </a>
  );
}