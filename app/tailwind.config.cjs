/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#040c0f",
        secondary: "#00ffff",
        tertiary: "#252728",
        "black-100": "#181a1b",
        "black-200": "#173442",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
