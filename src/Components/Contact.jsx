import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="py-16 px-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Work With Me</h2>
            <p className="mb-6 text-gray-300">
                Ready to bring your idea to life? Let's connect.
            </p>

            <a
                href="mailto:payalkewat917@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-500 px-6 py-2 rounded-md text-gray-100 hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
                Send Email
            </a>

            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>© 2025 ByPaya. All rights reserved.</p>
                <div className="mt-5 text-2xl flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/payal-kewat-b6594220a/"
                        className="hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/AnupMoyal"
                        className="hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        href="mailto:payalkewat917@gmail.com"
                        className="hover:text-white"
                    >
                        <IoMdMail />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;