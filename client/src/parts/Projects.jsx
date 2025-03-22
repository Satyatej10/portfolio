import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Particles from "../components/Particles";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const Projects = () => {
  const navigate = useNavigate();

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
    navigate("/#projects"); // Redirect to home page and scroll to #projects section
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
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
        <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
            onClick={handleBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;