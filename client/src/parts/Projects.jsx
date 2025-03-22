import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Particles from "../components/Particles";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const Projects = () => {
  const navigate = useNavigate();
  const [visibleProjects, setVisibleProjects] = useState(3);

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
  ];

  const handleBack = () => {
    navigate("/");
  };

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-black/60 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
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
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 text-center pb-8">
        <button
          onClick={handleBack}
          className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Projects;