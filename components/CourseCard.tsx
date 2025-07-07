// components/CourseCard.js
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CourseCard({ title, description, features, slug }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-md p-6 space-y-4 transition"
    >
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="text-sm text-gray-700 list-disc list-inside">
        {features.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <Link
        href={`/courses/${slug}`}
        className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Course →
      </Link>
    </motion.div>
  );
}
