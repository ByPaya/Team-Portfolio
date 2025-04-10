import React, { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";
import Navbar from "./Navbar";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import { motion } from "framer-motion";
import Clints from "./Clints"; // Fixed typo from Clints
import Skills from "./Skills";
import Clients from "./Clints";

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
    <motion.div
      className="min-h-screen bg-[#f3f0e7] dark:bg-[#111] text-gray-800 dark:text-white font-sans transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m ByPaya</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          A full-stack developer crafting modern web apps, mobile solutions, and
          scalable backend systems for innovative businesses.
        </p>
      </motion.section>

      {/* Reusable Components */}
      <Projects />
      <Services />
      <About />
      <Clients />
      <Skills />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p>
              "Jenny is a highly skilled developer who delivered everything on
              time and with great quality!"
            </p>
            <div className="flex items-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-sm">- Alex, CTO at TechNova</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>"Very professional and creative. My brand now looks amazing!"</p>
            <div className="flex items-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-sm">- Sarah, Founder at GreenPath</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Work With Me</h2>
        <p className="mb-6">Ready to bring your idea to life? Let's connect.</p>

        <a
          href="mailto:payalkewat917@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gray-400 dark:border-gray-500 px-6 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform transform hover:scale-105"
        >
          Send Email
        </a>

        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 ByPaya. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/payal-kewat-b6594220a/"
              className="hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AnupMoyal"
              className="hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="mailto:payalkewat917@gmail.com"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
