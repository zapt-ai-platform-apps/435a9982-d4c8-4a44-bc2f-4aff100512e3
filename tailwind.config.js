export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#121212",
        accent: "#ff4500",
        light: "#f0f0f0"
      },
      fontFamily: {
        tactical: ['"Roboto Mono"', "monospace"]
      }
    },
  },
  plugins: [],
};