// pages/_app.js
import "../styles/globals.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
