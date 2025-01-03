/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider-bg.jpeg")',
      },
    },
  },
  plugins: [],
};
