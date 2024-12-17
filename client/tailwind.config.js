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
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flash: "flash 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flash: {
          "0%": { backgroundColor: "#2A2A2A" },
          "50%": { backgroundColor: "#3B3B3B" },
          "100%": { backgroundColor: "#2A2A2A" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        karla: ["Karla"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
