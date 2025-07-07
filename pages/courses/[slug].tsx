// pages/courses/[slug].js
import { courses } from "@/data/course";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticPaths() {
  const paths = courses.map((course) => ({
    params: { slug: course.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  return { props: { course } };
}

const CoursePage = ({ course }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.shortDesc,
    "provider": {
      "@type": "Organization",
      "name": "CLATNLTI",
      "url": "https://www.clatnlti.com"
    }
  };

  return (
    <>
      <Head>
        <title>{course.title} | CLATNLTI</title>
        <meta name="description" content={course.shortDesc} />
        <meta property="og:title" content={`${course.title} | CLATNLTI`} />
        <meta property="og:description" content={course.shortDesc} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <section className="bg-black text-white py-20 px-6 md:px-24 relative overflow-hidden">
        {/* Glow Elements */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-pink-500 blur-3xl opacity-20 rounded-full z-0 animate-ping" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600 blur-2xl opacity-10 rounded-full z-0 animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text"
          >
            {course.title}
          </motion.h1>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 text-lg mb-10"
          >
            {course.shortDesc}
          </motion.p>

          {/* Main Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl"
          >
            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-pink-400 mb-4">
                📘 What’s Included:
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {course.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-400">
                🕒 <strong>Duration:</strong> {course.duration} <br />
                🎓 <strong>Eligibility:</strong> {course.eligibility}
              </p>
            </div>

            {/* Pricing + CTA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between text-center backdrop-blur">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-1">💸 Special Price</h3>
                <p className="text-4xl font-bold text-green-400 mb-2">{course.price}</p>
                <p className="text-sm text-gray-500 line-through">{course.originalPrice}</p>
              </div>

              <a
                href="/#inquiry"
                className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                🚀 Enroll Now / Get a Call Back
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
