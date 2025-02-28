
import React, { useState } from "react";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md bg-opacity-30 z-50 p-4">
      <div className="container mx-auto flex justify-center gap-8">
        <button
          onClick={() => scrollToSection("home")}
          className={`glassy-button ${
            activeSection === "home" ? "text-silver-300" : "text-white"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`glassy-button ${
            activeSection === "about" ? "text-silver-300" : "text-white"
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`glassy-button ${
            activeSection === "projects" ? "text-silver-300" : "text-white"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("connect")}
          className={`glassy-button ${
            activeSection === "connect" ? "text-silver-300" : "text-white"
          }`}
        >
          Connect
        </button>
      </div>
    </nav>
  );
};
const styles = `
  .glassy-button {
    @apply px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white font-medium transition-all duration-300 ease-in-out hover:bg-silver-100/20 hover:text-silver-300 hover:shadow-lg hover:scale-105;
  }

  /* Ensure Tailwind understands the silver color */
  .text-silver-300 { color: #c0c0c0; }
  .bg-silver-100 { background-color: #f5f5f5; }
`;
export default Navbar;