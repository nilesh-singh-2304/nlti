// pages/index.js
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import CrashCourseSection from "../components/CrashCourseSection";
import VideoGallery from "../components/VideoGallery";
import Testimonials from "../components/Testimonials";
import InquiryForm from "../components/InquiryForm";
import { courses } from "@/data/course";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>CLATNLTI - Crack CLAT with India’s Best Mentors</title>
        <meta name="description" content="Join CLATNLTI's crash course, demo classes, and mentorship program to ace CLAT 2026. Built with love and latest tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Banner */}
      <HeroSection />

      {/* Feature Highlights */}
      <FeatureSection />

      {/* Dynamic Course Cards Section */}
      {/* Courses Section - Matches Theme */}
<section id="courses" className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
  {/* Glowing Background Orbs */}
  <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
  <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400 opacity-20 blur-3xl rounded-full animate-ping" />

  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
    >
      🎓 Explore Our Courses
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <motion.div
          key={course.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{course.shortDesc}</p>
          <div className="text-sm text-gray-300 mb-4">
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Eligibility:</strong> {course.eligibility}</p>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium px-4 py-2 rounded-lg hover:brightness-110 transition"
          >
            View Details
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Crash Course Section */}
      <div id="crash">
        <CrashCourseSection />
      </div>

      {/* Demo Videos Section */}
      <div id="videos">
        <VideoGallery />
      </div>

      {/* Student Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Inquiry Form */}
      <InquiryForm />
    </>
  );
}
