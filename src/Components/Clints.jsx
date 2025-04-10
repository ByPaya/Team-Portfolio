import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <motion.section
      id="clients"
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Clients</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">TechNova Solutions</h3>
          <p className="text-sm mt-2">
            Built their landing page and blog platform using React + Tailwind.
          </p>
        </div>
        <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">GreenPath Digital</h3>
          <p className="text-sm mt-2">
            Designed a modern portfolio for their brand using Framer and custom animations.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;
