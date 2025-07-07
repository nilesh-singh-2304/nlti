// components/FeatureSection.js
import React from "react";
import { motion } from "framer-motion";
import { BookOpenIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";


const features = [
  {
    title: "Expert-Led Sessions",
    description: "Learn from NLU toppers with real-time strategy and mentorship.",
    icon: <BookOpenIcon className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Live Doubt Solving",
    description: "Instant support from mentors and faculty over live sessions.",
    icon: <UsersIcon className="w-8 h-8 text-pink-400" />,
  },
  {
    title: "Mock Tests & Analysis",
    description: "Detailed performance analytics and personalized feedback.",
    icon: <PlayIcon className="w-8 h-8 text-blue-400" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6 md:px-16 text-white relative overflow-hidden">
      {/* Animated blurred background bubbles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-20 blur-2xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 opacity-10 blur-3xl rounded-full z-0 animate-spin-slow" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">
          Why Choose CLATNLTI?
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Designed with precision. Delivered with passion.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
