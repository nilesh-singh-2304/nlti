// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6 px-6 md:px-16 mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-white text-xl font-bold mb-4">CLATNLTI</h2>
          <p className="text-sm">
            Empowering aspirants to conquer CLAT and other law entrance exams through mentorship, mock strategy, and live sessions.
          </p>
        </div>

        <div>
          <h3 className="text-white text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="#crash" className="hover:text-white transition">Crash Course</Link>
            </li>
            <li>
              <Link href="#videos" className="hover:text-white transition">Demo Videos</Link>
            </li>
            <li>
              <Link href="#inquiry" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-md font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📧 info@clatnlti.com</p>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} CLATNLTI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
