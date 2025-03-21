import React from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../components/Particles";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Link-Shortener",
      shortDescription: "A real-time URL shortening service with analytics",
      link: "#",
    },
    {
      title: "E-Commerce APIs",
      shortDescription: "RESTful APIs for an e-commerce platform",
      link: "#",
    },
    {
      title: "React Website",
      shortDescription: "Modern portfolio website with animations",
      link: "#",
    },
    {
      title: "Project 4",
      shortDescription: "Another innovative project",
      link: "#",
    },
  ];

  const handleBack = () => {
    navigate("/"); // Redirect back to home
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
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.shortDescription}</p>
              <a href={project.link} className="text-blue-400 hover:text-blue-300 font-medium">
                View Project →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;