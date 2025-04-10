import React from "react";
import { Menu, X, Star } from "lucide-react";
import { useState } from "react";
 const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <nav className="shadow-md fixed top-0 left-0 w-full bg-gray-900 text-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="https://media.gettyimages.com/id/1448344791/vector/sound-recording-copyright-icon-on-red-background-with-shadow.jpg?s=612x612&w=gi&k=20&c=X6vtygOPCAxS7LZhktg41RwPc7uOg2xnGZX3cH1GFa8=" alt="logo" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-lg ">
              <a href="/Home.jsx">ByPaya</a></span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#projects" className="text-sm font-medium hover:text-cyan-400">Projects</a>
            <a href="#services" className="text-sm font-medium hover:text-cyan-400">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-cyan-400">About</a>
            <a href="#clients" className="text-sm font-medium hover:text-cyan-400">Clients</a>
            <a href="#skills" className="text-sm font-medium hover:text-cyan-400">Skills</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-cyan-400">Testimonials</a>
            <a href="#contact" className="border px-4 py-1 rounded-md text-sm text-black bg-cyan-500 hover:bg-cyan-700 transition">Work With Me</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col items-center space-y-4">
            <a href="#projects" className="text-sm font-medium">Projects</a>
            <a href="#services" className="text-sm font-medium">Services</a>
            <a href="#about" className="text-sm font-medium">About</a>
            <a href="#clients" className="text-sm font-medium">Clients</a>
            <a href="#skills" className="text-sm font-medium">Skills</a>
            <a href="#testimonials" className="text-sm font-medium">Testimonials</a>
            <a href="#contact" className="border border-gray-300 px-4 py-1 rounded-md text-sm hover:bg-gray-100 transition">Work With Me</a>
          </div>
        )}
      </nav>
        </>
    )
 }
 export default Navbar;