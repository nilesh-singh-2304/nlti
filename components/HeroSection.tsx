// components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Glowing background blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500 opacity-20 blur-2xl rounded-full animate-ping z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Crack CLAT 2026 <br /> With India’s Top Mentors
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
          Join our specially curated crash courses, live mock strategies, and 1-on-1 mentoring programs.
        </p>
        <a
          href="#inquiry"
          className="mt-8 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🚀 Get a Free Counseling Call
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
