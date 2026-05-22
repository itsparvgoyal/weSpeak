import React from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Events", id: "events" },
  { name: "Gallery", id: "gallery" },
  { name: "Join Us", id: "join" },
  { name: "Contact", id: "contact" },
];

function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="glass  w-full z-10">
      <div className="flex justify-between items-center h-16 px-9 py-2 shadow-lg">

        <div className="flex items-center">
          <span className="text-2xl font-bold text-purple-400">
            We Speak
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;