// src/components/About.jsx
import React from "react";
import Container from "./Container";

function About() {
  return (
    <Container>
      <section id="about" className="py-20 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-300 mb-6">About We Speak</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            We Speak is a vibrant club at IIT Bombay dedicated to nurturing public speaking, debate, Model United Nations (MUN), and slam poetry talents. Our members engage in workshops, competitions, and collaborative events that sharpen oratory skills, critical thinking, and creative expression.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default About;
