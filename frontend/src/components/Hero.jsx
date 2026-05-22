import React from "react";
import Container from "./Container";

function Hero() {

  const scrollToJoin = () => {
    const section = document.getElementById("join");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-dark text-center py-20"
    >
      <Container>
        <div className="max-w-2xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-300 mb-4">
            We Speak
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Elevate your voice – debate, public speaking, MUNs, and slam poetry.
          </p>

          <button
            onClick={scrollToJoin}
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Join Us
          </button>

        </div>
      </Container>
    </section>
  );
}

export default Hero;