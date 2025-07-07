import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ClockIcon, CheckCircleIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const features = [
  "2 Live Classes Per Subject",
  "Top Mentor Sessions",
  "Full-Length Mocks + Analysis",
  "Recordings + PDFs",
  "Doubt Solving & Strategy",
];

const CrashCourseSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-purple-600 blur-3xl opacity-20 rounded-full z-0 animate-ping" />
      <div className="absolute bottom-10 right-10 w-[180px] h-[180px] bg-blue-500 blur-2xl opacity-20 rounded-full z-0 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ⚡ CLAT Crash Course 2026
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A fast-track prep program to maximize your CLAT score in the final stretch.
          </p>

          <div className="inline-block mt-6 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold animate-pulse">
            🔥 Limited Time Offer – Starts July 15!
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-purple-400 flex items-center gap-2">
              <AcademicCapIcon className="w-6 h-6" />
              What You’ll Get
            </h3>

            <ul className="space-y-4 text-gray-300">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              ⏱ Duration: <strong className="text-white">60 Days</strong> <br />
              🎓 Eligibility: <strong className="text-white">CLAT 2026 Aspirants</strong>
            </p>
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-gradient-to-tr from-purple-800 to-purple-600 p-8 rounded-2xl shadow-xl text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Special Offer Price
              </h3>
              <p className="text-4xl font-extrabold text-green-400">
                ₹4,999
              </p>
              <p className="line-through text-sm text-gray-300 mt-1">
                ₹8,999
              </p>
            </div>

            <a
              href="#inquiry"
              className="mt-8 inline-block bg-black text-white py-3 px-8 rounded-xl border border-white/20 hover:bg-white hover:text-black transition font-semibold"
            >
              🚀 Enroll Now / Book Free Call
            </a>

            <Link
              href="/crash-course"
              className="mt-4 inline-block text-sm underline text-blue-200 hover:text-white transition"
            >
              📘 Learn More About Crash Course
            </Link>

            <p className="text-xs text-gray-200 mt-4">
              Limited seats. Offer expires in 48 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrashCourseSection;
