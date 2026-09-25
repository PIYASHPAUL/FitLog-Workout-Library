/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        panel: "#151517",
        panel2: "#1c1c1f",
        line: "#2a2a2e",
        accent: "#ccff00",
        muted: "#9a9aa2",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
