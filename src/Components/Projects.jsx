import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "MERN E-commerce Platform",
      description: "A fully functional e-commerce platform with user authentication, cart, and Stripe payments using MERN stack.",
      tech: "MERN Stack",
      link: "https://github.com/AnupMoyal/ecommerce-products-data",
    },
    {
      title: "Restaurant Recommender System​",
      description: "AI-based restaurant recommender using machine learning and Flask to suggest eateries based on location and cuisine.",
      tech: "Python, Pandas, Machine Learning, Flask",
      link: "https://github.com/TUSHAR-KHARE/Restaurant-recommender-system.git",
    },
    {
      title: "Fitness Tracker App",
      description: "Cross-platform fitness tracking mobile app built using React Native and Firebase.",
      tech: "App Development",
      link: "https://fittrack.example.com",
    },
    {
      title: "Online Learning App",
      description: "E-learning app with video courses, quizzes, and progress tracking developed in Flutter.",
      tech: "App Development",
      link: "https://github.com/ByPaya/BrainAcademy-.git",
    },
    {
      title: "Employee Management System",
      description: "Java Spring Boot web app to manage employees, roles, and attendance with MySQL integration.",
      tech: "Java Spring Boot",
      link: "https://ems.springapp.com",
    },
    {
      title: "Customer Support Portal",
      description: "Ticket-based customer support system built using Spring Boot, Thymeleaf, and PostgreSQL.",
      tech: "Java Spring Boot",
      link: "https://supporthub.springapp.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="py-16 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
            <p className="text-xs text-gray-400 mb-2 italic">{project.tech}</p>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm underline hover:text-cyan-500"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
