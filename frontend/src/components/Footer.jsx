// src/components/Footer.jsx
import Container from "./Container";

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} We Speak – IIT Bombay. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {/* Placeholder social icons – replace with actual links/icons if desired */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
