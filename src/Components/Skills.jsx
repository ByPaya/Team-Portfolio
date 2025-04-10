import React from 'react';
import { motion } from "framer-motion";
const Skills =()=>{
    return(
        <>
        <motion.section id="skills" className="py-16 px-4 bg-black"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {["React", "Tailwind CSS", "JavaScript", "Next.js","Java","SpringBoot","React Native", "Git", "Figma"].map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="bg-gray-800 px-4 py-2 rounded-full shadow text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.section></>
    )
}
export default Skills;
