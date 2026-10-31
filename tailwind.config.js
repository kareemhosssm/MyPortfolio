/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#080B10",
          surface: "#10151E",
          card: "#121923",
          orange: "#FF812B",
          text: "#E8F0FA",
          muted: "#98A4B5",
        },
      },
    },
  },
  plugins: [],
};