import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Particles from "../components/Particles";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const projects = [
    {
      title: "FarmDirect",
      shortDescription:
        "FarmDirect is an online platform connecting farmers directly with consumers for fresh, farm-to-table produce.",
      image: project1Img,
      liveDemo: "https://farmdirect-beta.vercel.app/login",
      github: "https://github.com/Satyatej10/Farmdirect",
    },
    {
      title: "Restaurant Finder",
      shortDescription:
        "Restaurant Finder is an app that helps users discover nearby restaurants based on name, cuisine, and location.",
      image: project2Img,
      liveDemo: "https://restaurent-satyatej10-main.vercel.app/",
      github: "https://github.com/Satyatej10/RestaurantFinder",
    },
    {
      title: "Copy Catcher",
      shortDescription:
        "A plagiarism checker that detects copied content by comparing text against a vast database of sources.",
      image: project3Img,
      liveDemo: "https://plagiarism-mbhvwr79qwsumc6lwzealx.streamlit.app/",
      github: "https://github.com/Satyatej10/plagiarism",
    },
    {
      title: "Url Shortener",
      shortDescription:
        "A URL shortener is a web service that converts long URLs into shorter, more manageable links for easy sharing and tracking.",
      image: project3Img,
      liveDemo: "https://linkly-rosy.vercel.app/",
      github: "https://github.com/Satyatej10/url_shortner",
    },
  ];

  const navItems = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Technical Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Achievements", path: "/#achievements" },
    { name: "Connect", path: "/#connect" },
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleScroll = (e, path) => {
    e.preventDefault();
    if (path.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const sectionId = path.split("#")[1];
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const handleBack = () => {
    navigate("/#projects");
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-gray-300 overflow-hidden scroll-smooth">
      <style>
        {`
          @keyframes scaleIn {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          .animated-underline {
            transform-origin: left;
            animation: scaleIn 0.5s ease-in-out forwards;
          }
        `}
      </style>
      <div className="absolute inset-0 w-full h-full bg-black z-[0]">
        <Particles
          particleColors={["#14b8a6", "#ffffff"]}
          particleCount={2000}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full opacity-80 sm:opacity-90"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-lg sm:text-xl text-teal-400 tracking-wide">SATYATEJ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-teal-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-gray-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Projects Section */}
      <section className="min-h-screen p-4 sm:p-5 flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center tracking-tight">
            <span className="text-white">All</span> <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-24 sm:w-32 mx-auto mb-8 sm:mb-10 border-b-2 border-teal-400 animated-underline"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800/60"
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-32 sm:h-40 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{project.shortDescription}</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center text-sm sm:text-base"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={handleBack}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;