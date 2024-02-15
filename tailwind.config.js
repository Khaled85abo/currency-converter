/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        converter: "rgba(35, 55, 80, 0.3) 0px 6px 12px",
      },
      colors: {
        header_bg: "#0A146D",
        "theme-primary-text-color": "var(--text-primary-color)",
        "theme-primary-bg": "var(--bg-primary-color)",
        "theme-btn-primary-bg-color": "var(--btn-primary-bg-color)",
      },
    },
  },
  plugins: [],
};
