import React from "react";
import { Menu, X, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonial =()=>{
    return(
        <section id="testimonials" className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
          Testimonials
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-gray-300">
              "ByPaya is a highly skilled developer who delivered everything on
              time and with great quality!"
            </p>
            <div className="flex items-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-sm text-gray-400">- Alex, CTO at TechNova</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300">
              "Very professional and creative. My brand now looks amazing!"
            </p>
            <div className="flex items-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-sm text-gray-400">- Sarah, Founder at GreenPath</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
};

export default Testimonial;