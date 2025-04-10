import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";

import Clients from "./Clints"; // Fixed typo
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className="min-h-screen bg-black text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Hero Section */}
      <section
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          Hi, I’m ByPaya
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-300">
          A full-stack developer crafting modern web apps, mobile solutions, and
          scalable backend systems for innovative businesses.
        </p>
      </section>

      {/* Reusable Sections */}
      <Projects />
      <Services />
      <About />
      <Clients />
      <Skills />
      <Testimonial/>
      <Contact/>
    </div>
  );
}
