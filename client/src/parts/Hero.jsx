// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import Particles from "../components/Particles";
import Navbar from "./Navbar"; // Import the Navbar component
import RotatingText from "../components/RotatingText";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-transparent text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-start justify-center p-5 min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-black">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={2000}
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
            isSmallScreen ? "flex-col items-start" : "flex-row items-start"
          } w-full max-w-5xl pl-5`}
        >
          <div className="w-full max-w-lg text-left">
            <h1 className="text-3xl font-bold mb-5 animate-fadeInScale">
              I AM SATYA TEJ
            </h1>
            <p className="text-gray-400 text-2xl font-bold flex">
              <p className="mt-1.5 mr-2">I'M A{" "}</p>
              <RotatingText
                texts={[
                  "Software Developer",
                  "Web Developer",
                  "Competitive Programmer",
                ]}
                mainClassName="inline-block px-0 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0 sm:py-1 md:py-2 justify-start rounded-lg font-semibold"
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
              Welcome to my portfolio! I hope you enjoy your visit. I specialize
              in Back-End development with Node.js and Front-End development
              with React.js. I have worked on various projects, including a Real
              Link-Shortener, E-Commerce APIs, React-based Website Design and
              Development, and more.
            </p>
            <p className="text-gray-400 mt-3">
              I am passionate about learning new technologies and building
              solutions that make a difference. Thank you for visiting my
              portfolio! I hope you like my work. Happy coding!
            </p>
          </div>
        </div>

        {/* Curved background at the bottom */}
        <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a1a] to-[#1a1a3d] rounded-t-full z-[-1]" />
      </section>

      {/* About Section (Black background, no particles) */}
      <section id="about" className="min-h-screen p-5 bg-black">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-gray-300">
          More details about Satya Tej, his experience, and skills...
        </p>
      </section>

      {/* Projects Section (Black background, no particles) */}
      <section id="projects" className="min-h-screen p-5 bg-black">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <p className="mt-4 text-gray-300">
          Showcase of projects like Link-Shortener, E-Commerce APIs, etc...
        </p>
      </section>

      {/* Connect Section (Black background, no particles) */}
      <section id="connect" className="min-h-screen p-5 bg-black">
        <h2 className="text-3xl font-bold text-center">Connect With Me</h2>
        <p className="mt-4 text-gray-300">
          Contact information, social links, or a form to connect...
        </p>
      </section>
    </div>
  );
};
export default Hero;