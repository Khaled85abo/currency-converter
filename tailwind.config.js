/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header_bg: "#0A146D",
        "theme-text-primary-color": "var(--text-primary-color)",
        "theme-primary-bg": "var(--bg-primary-color)",
      },
    },
  },
  plugins: [],
};
