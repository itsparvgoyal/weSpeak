// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import JoinForm from "../components/JoinForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-inter bg-gray-900 text-white">
      <section id="home" className="pt-20">
        <Hero />
      </section>
      <section id="about" className="py-16 px-4 md:px-12">
        <About />
      </section>
      <section id="events" className="py-16 bg-gray-800 px-4 md:px-12">
        <Events />
      </section>
      <section id="gallery" className="py-16 px-4 md:px-12">
        <Gallery />
      </section>
      <section id="join" className="py-16 bg-gray-800 px-4 md:px-12">
        <JoinForm />
      </section>
      <section id="contact" className="py-16 px-4 md:px-12">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
