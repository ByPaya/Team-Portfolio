import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">About Me</h2>
      <motion.div
        className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <p className="mb-4">
          Hey! I’m a results-driven full-stack developer with a passion for building modern, scalable, and high-performance digital solutions.
          From dynamic websites to powerful mobile apps and enterprise backend systems — I love transforming ideas into real-world products.
        </p>
        <p className="mb-4">
          I specialize in the <strong className="text-white">MERN stack</strong> for full-stack web development, build cross-platform mobile apps using <strong className="text-white">React Native</strong> and <strong className="text-white">Flutter</strong>, and develop robust backend APIs with <strong className="text-white">Java Spring Boot</strong>.
        </p>
        <p>
          Whether you're a startup looking to launch fast or a business in need of a digital revamp, I bring both creativity and technical expertise to the table. Let’s build something amazing together!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
