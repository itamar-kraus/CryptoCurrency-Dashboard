/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundColor1: "#05111b",
        backgroundColor2: "#0c2e4b",
        backgroundColor3: "ff2600",
      }
    },
  },
  plugins: [],
};