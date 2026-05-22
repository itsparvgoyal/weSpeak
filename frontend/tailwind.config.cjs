// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(260, 80%, 55%)",
        secondary: "hsl(200, 70%, 60%)",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom right, #1e1b4b, #2c3e50)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
