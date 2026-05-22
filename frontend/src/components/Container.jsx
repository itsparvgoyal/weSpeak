// src/components/Container.jsx
import React from "react";

export default function Container({ children }) {
  return (
    <div className="glass p-6 md:p-8 max-w-7xl mx-auto transition-all hover:glow">
      {children}
    </div>
  );
}
