/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6f00ff",
        secondary: "#fcf1dc",
        black: {
          DEFAULT: "#000",
          100: "#303030",
          200: "#1a1919",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        dm: ["DM", "sans-serif"],
        dmItalic: ["DM-italice", "sans-serif"],
        pinyon: ["Pinyon", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        playfair: ["Playfair", "sans-serif"],
        playfairItalic: ["Playfair-italic", "sans-serif"],
        SpaceMono:["SpaceMono","sans-sarif"]
      },
    },
  },
  plugins: [],
}

