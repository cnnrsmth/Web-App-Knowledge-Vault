/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgrey: "#2b2d42",
        lightgrey: "#adb5bd",
        offwhite: "#e5e5e5",
        primaryblue: "#1976D2",
        secondaryblue: "#42A5F5",
      },
      fontFamily: {
        karla: ["Karla"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
