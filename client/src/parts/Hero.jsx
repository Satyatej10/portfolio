import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../components/Particles";
import RotatingText from "../components/RotatingText";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import img from "../assets/globe.png"; // Your intro photo
import aboutImg from "../assets/black.png"; // Your about section photo
// Project images
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/black.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Connect", path: "#connect" },
  ];

  const projects = [
    {
      title: "FarmDirect",
      shortDescription: "",
      image: project1Img,
      liveDemo: "https://farmdirect-beta.vercel.app/login",
      github: "https://github.com/Satyatej10/Farmdirect",
    },
    {
      title: "E-Commerce APIs",
      shortDescription: "RESTful APIs for an e-commerce platform",
      image: project2Img,
      liveDemo: "https://restaurent-satyatej10-main.vercel.app/",
      github: "https://github.com/Satyatej10/RestaurantFinder",
    },
    {
      title: "React Website",
      shortDescription: "Modern portfolio website with animations",
      image: project3Img,
      liveDemo: "https://plagiarism-mbhvwr79qwsumc6lwzealx.streamlit.app/",
      github: "https://github.com/Satyatej10/plagiarism",
    },
    {
      title: "Project 4",
      shortDescription: "Another innovative project",
      image: project4Img,
      liveDemo: "https://project4-demo.com",
      github: "https://github.com/Satyatej10/project4",
    },
  ];

  const handleScroll = (e, path) => {
    e.preventDefault();
    const sectionId = path.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleShowMore = () => {
    navigate("/projects");
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl text-white">SATYATEJ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center p-5 min-h-screen relative"
      >
        <div className="absolute inset-0 w-full h-full bg-black">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>
        <div
          className={`relative flex ${
            isSmallScreen ? "flex-col items-center" : "flex-row items-center justify-between"
          } w-full max-w-7xl px-5`}
        >
          <div className="w-full max-w-lg text-left">
            <h1 className="text-3xl font-bold mb-4 mt-5 animate-fadeInScale">
              I AM SATYATEJ
            </h1>
            <p className="text-gray-400 text-2xl font-bold flex">
              <p className="mt-1.5 mr-2">I'M A{" "}</p>
              <RotatingText
                texts={[ "MERN Developer", "Competitive Programmer" , "ML Enthusiast" ]} 
                mainClassName="inline-block px-0 sm:px-2 md:px-3 bg-black-300 text-white overflow-hidden py-0 sm:py-1 md:py-2 justify-start rounded-lg font-semibold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </p>
            <p className="text-gray-400 mt-3">
              Welcome to my portfolio! I specialize in Back-End development with Node.js and
              Front-End development with React.js. I have worked on various projects including a
              Real Link-Shortener, E-Commerce APIs, and React-based Website Design.
            </p>
            <p className="text-gray-400 mt-3">
              I am passionate about learning new technologies and building solutions that make a
              difference. Thank you for visiting my portfolio! Happy coding!
            </p>
          </div>
          {!isSmallScreen && (
            <div className="w-full max-w-md flex items-center justify-end">
              <img
                src={img}
                alt="Satyatej"
                loading="lazy"
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
        <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a1a] to-[#1a1a3d] rounded-t-full z-[-1]" />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-5 relative flex items-center">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/2">
              <div className="bg-black/70 backdrop-blur-md rounded-xl p-8 shadow-xl border border-gray-800">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  I'm Satyatej, a versatile developer with a strong foundation in{" "}
                  <span className="text-blue-400 font-semibold">React.js</span>, where I craft
                  dynamic and responsive web applications. My expertise extends to{" "}
                  <span className="text-blue-400 font-semibold">Machine Learning</span>, where I
                  leverage data-driven insights to build intelligent systems, and{" "}
                  <span className="text-blue-400 font-semibold">Data Structures</span>, which I
                  use to optimize solutions for efficiency and scalability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                    <p className="text-gray-300">B.Sc. in Computer Science</p>
                    <p className="text-gray-400 text-sm">[Your University] - [Year]</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                    <p className="text-gray-300">Full Stack Developer</p>
                    <p className="text-gray-400 text-sm">[Company] - [Duration]</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Satyatej - About"
                  loading="lazy"
                  className="w-full max-w-md h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Projects Section */}
      <section id="projects" className="min-h-screen p-5 relative">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Show More
            </button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen p-5 relative">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-md p-6">
            <p className="text-gray-300 mb-4 text-center">
              Feel free to reach out to me through any of these platforms:
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a href="mailto:satyatejinturi@email.com" className="text-blue-400 hover:text-blue-300">
                Email: satyatejinturi@email.com
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:text-blue-300">
                LinkedIn: /in/yourprofile
              </a>
              <a href="https://github.com/Satyatej10" className="text-blue-400 hover:text-blue-300">
                GitHub: /Satyatej10
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;