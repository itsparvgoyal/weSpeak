// src/components/Gallery.jsx
import React from "react";
import galleryData from "../data/gallery";
import Container from "./Container";

function Gallery() {
  return (
    <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">Gallery</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {galleryData.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transform transition"
              />
            ))}
          </div>
        </div>
      </Container>
  );
}

export default Gallery;
