// pages/crash-course.js
import Head from 'next/head';
import InquiryForm from '@/components/InquiryForm';
import { motion } from 'framer-motion';

export default function CrashCourse() {
  return (
    <>
      <Head>
        <title>CLAT Crash Course 2026 | CLATNLTI</title>
        <meta name="description" content="Fast-track your CLAT prep with our 2026 crash course. Limited seats, top mentors, and mocks!" />
      </Head>

      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:px-24 bg-black text-white relative overflow-hidden text-center">
        {/* Glowing Backgrounds */}
        <div className="absolute top-10 left-10 w-52 h-52 bg-purple-600 blur-3xl opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-blue-500 blur-2xl opacity-20 rounded-full animate-ping" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text mb-4"
        >
          CLAT Crash Course 2026 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          2 intensive classes per subject, personalized mentorship, mock tests, and smart revision plans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6"
        >
          <a
            href="#inquiry"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            📞 Get a Call Back
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-12"
          >
            Why Join the Crash Course?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Live classes with expert faculty",
              "2 Classes per Subject",
              "Regular doubt sessions",
              "Full-length mock tests & analytics",
              "Handwritten notes & revision material",
              "One-on-one mentorship support",
              "Starts July 15th, 2025",
              "Fee: ₹4999 (limited time offer)",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <p className="text-white font-medium">✅ {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-24 px-6 md:px-16 bg-black text-white relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text"
          >
            📞 Register Your Interest
          </motion.h2>
          <InquiryForm />
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
