/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <-- important!
  theme: {
    extend: {
      colors: {
        darkPrimary: "#291c3a",
        darkSecondary: "#331c52",
        darkAccent: "#8121d0",
        lightPrimary: "#dccfed",
        lightSecondary: "#e1ebed",
        lightAccent: "#ffffff",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to right, #8121d0, #291c3a)",
        "gradient-darkTwo": "linear-gradient(to right, #291c3a ,#8121d0)",

        "gradient-secondaryDark": "linear-gradient(to right, #331c52, #291c3a)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
