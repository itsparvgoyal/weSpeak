// src/components/Contact.jsx
import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">Contact</h2>
        <p className="text-gray-200 mb-2">
          Secretary: <span className="font-medium text-white">Avani Kaushik</span>
        </p>
        <p className="text-gray-200 mb-2">
          Email: <a href="mailto:arspeak@iitb.ac.in" className="text-purple-200 hover:underline">wespeak@iitb.ac.in</a>
        </p>
        <p className="text-gray-200">
          Location: IIT Bombay, Mumbai, Maharashtra, India
        </p>
      </div>
    </Container>
  );
};

export default Contact;
