import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: "K0UO3V8ZHOg",
    title: "Legal Reasoning Demo",
    thumbnail: "https://img.youtube.com/vi/K0UO3V8ZHOg/hqdefault.jpg",
  },
  {
    id: "xgkL2Q8FeXM",
    title: "Logical Aptitude Basics",
    thumbnail: "https://img.youtube.com/vi/xgkL2Q8FeXM/hqdefault.jpg",
  },
  {
    id: "xgA6rwh-YJ8",
    title: "Strategy for CLAT 2026",
    thumbnail: "https://img.youtube.com/vi/xgA6rwh-YJ8/hqdefault.jpg",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500 blur-3xl opacity-20 rounded-full animate-ping z-0" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-indigo-500 blur-2xl opacity-20 rounded-full animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text mb-12"
        >
          🎓 Watch Our Demo Classes
        </motion.h2>

        {/* Video Thumbnails */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelectedVideo(video.id)}
              className="relative cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:scale-[1.03] transition-transform duration-300 group"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-52 object-cover group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">
                  ▶ {video.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl p-4 bg-white/10 border border-white/10 shadow-2xl backdrop-blur-lg rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full text-xl flex items-center justify-center shadow-lg hover:bg-red-600 transition"
                aria-label="Close Modal"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
