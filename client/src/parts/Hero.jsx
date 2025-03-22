import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../components/Particles";
import RotatingText from "../components/RotatingText";
import ShinyText from "../components/ShinyText";
import SpotlightCard from "../components/SpotlightCard";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import img from "../assets/globe.png";
import aboutImg from "../assets/black.png";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/black.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCuttlefish,
  FaPython,
  FaBrain,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the "#"
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Technical Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Achievements", path: "#achievements" },
    { name: "Connect", path: "#connect" },
  ];

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "Advanced",
      description: "Proficient in writing semantic, accessible, and SEO-friendly HTML for modern web development.",
    },
    {
      name: "CSS & Tailwind",
      icon: <SiTailwindcss />,
      level: "Advanced",
      description: "Skilled in building visually appealing and responsive UI using Tailwind CSS, Flexbox, Grid, and modern CSS techniques.",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      level: "Advanced",
      description: "Strong understanding of ES6+ concepts, asynchronous programming, event-driven architecture, and modern JS frameworks.",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: "Advanced",
      description: "Proficient in building dynamic and responsive front-end applications using React.js, hooks, context API, and state management libraries like Redux.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Advanced",
      description: "Experienced in developing scalable backend applications with Express.js, handling REST APIs, authentication, and middleware.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "Intermediate",
      description: "Experienced in designing NoSQL databases, writing efficient queries, indexing, and working with Mongoose in Node.js applications.",
    },
    {
      name: "DBMS",
      icon: <FaDatabase />,
      level: "Beginner-Intermediate",
      description: "Basic knowledge of relational databases, SQL queries, normalization, indexing, transactions, and working with MySQL/PostgreSQL.",
    },
    {
      name: "C++",
      icon: <FaCuttlefish />,
      level: "Intermediate",
      description: "Experience with object-oriented programming, competitive programming, STL, and algorithmic problem-solving using C++.",
    },
    {
      name: "Python",
      icon: <FaPython />,
      level: "Intermediate",
      description: "Knowledgeable in Python for scripting, backend development (Flask, FastAPI), and working with libraries like NumPy and Pandas.",
    },
    {
      name: "Data Structures & Algorithms",
      icon: <FaBrain />,
      level: "Intermediate-Advanced",
      description: "Proficient in solving problems using arrays, linked lists, trees, graphs, dynamic programming, and hashing techniques.",
    },
  ];

  const projects = [
    {
      title: "FarmDirect",
      shortDescription: "FarmDirect is an online platform connecting farmers directly with consumers for fresh, farm-to-table produce.",
      image: project1Img,
      liveDemo: "https://farmdirect-beta.vercel.app/login",
      github: "https://github.com/Satyatej10/Farmdirect",
    },
    {
      title: "Restaurant Finder",
      shortDescription: "Restaurant Finder is an app that helps users discover nearby restaurants based on name, cuisine and location",
      image: project2Img,
      liveDemo: "https://restaurent-satyatej10-main.vercel.app/",
      github: "https://github.com/Satyatej10/RestaurantFinder",
    },
    {
      title: "Copy Catcher",
      shortDescription: "A plagiarism checker is a tool that detects copied content by comparing text against a vast database of sources",
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

  const achievements = [
    {
      title: "AptCode Champion",
      description: "Secured 1st place in AptCode, an aptitude and coding competition, showcasing problem-solving excellence.",
      date: "January 2025",
    },
    {
      title: "AlgoChase Runner-Up",
      description: "Achieved 2nd place in AlgoChase, a competitive coding event organized by the GDSC club.",
      date: "February 2025",
    },
    {
      title: "LeetCode Top 10%",
      description: "Ranked in the top 10% of LeetCode users with a maximum rating of 1712, demonstrating strong problem-solving skills.",
      date: "March 2025",
    },
    {
      title: "CodeChef Performence",
      description: "Reached a maximum rating of 1630 on CodeChef through consistent participation in coding contests.",
      date: "February 2025",
    },
    {
      title: "Codeforces Performence",
      description: "Achieved a Codeforces rating of 1000+, improving algorithmic thinking through global coding challenges.",
      date: "February 2025",
    },
    {
      title: "SIH Internal Hackathon Qualifier",
      description: "Successfully cleared the internal hackathon round of Smart India Hackathon (SIH) with an innovative team project.",
      date: "December 2024",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:satyatejinturi@email.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* Single Background with Particles */}
      <div className="absolute inset-0 w-full h-full bg-black z-[0]">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1500} // Reduced for mobile performance
          particleSpread={12}
          speed={0.06} // Slightly slower for mobile
          particleBaseSize={60} // Smaller particles on mobile
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
              <span className="font-bold text-lg sm:text-xl text-white tracking-wide">SATYATEJ</span>
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
      <section id="home" className="flex flex-col items-center justify-center p-4 sm:p-5 min-h-screen">
        <div
          className={`relative flex ${
            isSmallScreen ? "flex-col items-center" : "flex-row items-center justify-between"
          } w-full max-w-7xl px-4 sm:px-5`}
        >
          <div className="w-full max-w-lg text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-5 animate-fadeInScale tracking-tight">I AM SATYATEJ</h1>
            <p className="text-gray-300 text-xl sm:text-2xl font-bold flex flex-col sm:flex-row">
              <p className="mt-1 mr-0 sm:mr-2">I'M A</p>
              <RotatingText
                texts={["MERN Developer", "Competitive Programmer", "ML Enthusiast"]}
                mainClassName="inline-block px-0 sm:px-2 bg-black-300 text-white overflow-hidden py-0 sm:py-1 justify-start rounded-lg font-semibold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </p>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
              Welcome to my portfolio! I specialize in Back-End development with Node.js and Front-End development with React.js, delivering projects like Link-Shorteners and E-Commerce APIs.
            </p>
            <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Passionate about coding and innovation, I’m always excited to explore new technologies and create impactful solutions.
            </p>
          </div>
          {!isSmallScreen && (
            <div className="w-full max-w-md flex items-center justify-end">
              <img
                src={img}
                alt="Satyatej"
                loading="lazy"
                className="w-full max-w-lg h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-4 sm:p-5 flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="w-full lg:w-1/2">
              <div className="bg-black/70 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl border border-gray-800">
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  I'm Satyatej, a versatile developer skilled in{" "}
                  <span className="text-blue-400 font-semibold">React.js</span> for dynamic UIs,{" "}
                  <span className="text-blue-400 font-semibold">Machine Learning</span> for intelligent systems, and{" "}
                  <span className="text-blue-400 font-semibold">Data Structures</span> for optimized solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Education</h3>
                    <p className="text-gray-300 text-sm sm:text-base">B.Sc. in Computer Science</p>
                    <p className="text-gray-400 text-xs sm:text-sm">[Your University] - [Year]</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Experience</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Full Stack Developer</p>
                    <p className="text-gray-400 text-xs sm:text-sm">[Company] - [Duration]</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Satyatej - About"
                  loading="lazy"
                  className="w-full max-w-xs sm:max-w-md h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="min-h-screen p-4 sm:p-5 flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-48 h-64 sm:h-56 rounded-lg shadow-md border border-gray-800"
                style={{ perspective: "1000px" }}
              >
                <SpotlightCard
                  className="custom-spotlight-card h-full bg-black/70 backdrop-blur-md rounded-lg p-3 sm:p-4 flex flex-col justify-between items-center"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="text-3xl sm:text-4xl text-white mb-2">{skill.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">{skill.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base text-center">{skill.level}</p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-4 sm:p-5">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-black/60"
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
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center text-sm sm:text-base"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
            >
              Show More
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen p-4 sm:p-5 flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
            My Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-gray-800 hover:shadow-xl hover:bg-black/70 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[250px]"
              >
                <ShinyText
                  text={achievement.title}
                  disabled={false}
                  speed={5}
                  className="text-lg sm:text-xl font-semibold text-white mb-4 text-center tracking-wide"
                />
                <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed flex-grow">
                  {achievement.description}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-4 font-medium">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Form */}
      <footer id="connect" className="relative bg-black text-white py-8 sm:py-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
            Connect With Me
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base text-center">Want to collaborate? Drop me a message!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Social Links */}
            <div className="flex flex-col items-center">
              <p className="text-gray-400 mb-4 text-sm sm:text-base text-center">Reach out directly:</p>
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <a
                  href="mailto:satyatejinturi@email.com"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                  <span className="text-sm sm:text-base">Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Satyatej10"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                  <span className="text-sm sm:text-base">GitHub</span>
                </a>
              </div>
            </div>
            {/* Form */}
            <div className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-3 sm:px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 sm:px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center border-t border-gray-800 pt-4">
            <p className="text-gray-500 text-xs sm:text-sm">© {new Date().getFullYear()} Satyatej. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;