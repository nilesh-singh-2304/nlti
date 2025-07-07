// components/Testimonials.js
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aditi Sharma",
    course: "CLAT Crash Course 2025",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "CLATNLTI changed the game for me. I scored 96 percentile after joining the crash course.",
  },
  {
    name: "Rohan Mehta",
    course: "CLAT Foundation 2026",
     image: "https://i.pravatar.cc/150?img=5",
    quote:
      "The mentorship, mocks and clarity of the faculty was just phenomenal. Highly recommended!",
  },
  {
    name: "Simran Kaur",
    course: "AILET Booster 2025",
     image: "https://i.pravatar.cc/150?img=5",
    quote:
      "Before NLTI, I had no idea how to prepare. Now I’ve cracked AILET with confidence.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-pink-600 blur-3xl opacity-20 rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-[200px] h-[200px] bg-blue-500 blur-2xl opacity-10 rounded-full z-0 animate-ping" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-12 relative z-10"
      >
        💬 What Our Students Say
      </motion.h2>

      <div className="relative z-10 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 snap-x snap-mandatory px-2 md:px-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="snap-start bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-80 min-w-[280px] shadow-lg flex-shrink-0 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.course}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
