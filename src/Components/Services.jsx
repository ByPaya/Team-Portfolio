import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Build scalable and performant web applications using MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      title: "Mobile App Development",
      description:
        "Design and develop cross-platform mobile apps with React Native and Flutter for Android & iOS.",
    },
    {
      title: "Java Backend Solutions",
      description:
        "Create robust backend APIs and enterprise-level systems using Java Spring Boot and REST architecture.",
    },
    {
      title: "UI/UX Design",
      description:
        "Craft clean, user-friendly interfaces using modern design tools like Figma and Adobe XD.",
    },
    {
      title: "Landing Page Development",
      description:
        "Create high-converting, responsive landing pages tailored for marketing and product launches.",
    },
    {
      title: "API Integration & DevOps",
      description:
        "Integrate 3rd-party services (Stripe, Firebase, Auth0) and manage deployments with Git, CI/CD.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-16 px-4 bg-[#f3f0e7] dark:bg-[#1e1e1e]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;