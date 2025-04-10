import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <motion.section
      id="clients"
      className="py-16 px-4 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400 tracking-wide">
        Clients
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-lg transition-all"
        >
          <h3 className="font-semibold text-xl text-white mb-2">
            TechNova Solutions
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Built their landing page and blog platform using React + Tailwind.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-lg transition-all"
        >
          <h3 className="font-semibold text-xl text-white mb-2">
            GreenPath Digital
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Designed a modern portfolio for their brand using Framer and custom
            animations.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Clients;
