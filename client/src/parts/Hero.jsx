import React, { useState, useEffect } from "react";
import Particles from "../components/Particles";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Set initial value and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-5 overflow-hidden">
      {/* Particle background layer */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Main content */}
      <div
        className={`relative flex ${
          isSmallScreen ? "flex-col items-center" : "flex-row justify-center"
        } w-full max-w-5xl gap-8`}
      >
        <div className="w-full max-w-lg text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-5 animate-fadeInScale">
            I AM SATYA TEJ
          </h1>
          <p className="text-gray-400 text-lg">
            I am a Web App Developer in Node.js
          </p>
          <p className="text-gray-400 mt-3">
            Welcome to my portfolio! I hope you enjoy your visit. I specialize in
            Back-End development with Node.js and Front-End development with
            React.js. I have worked on various projects, including a Real
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
    </div>
  );
};

export default Hero;