/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "SF Pro Display",
          "SF Pro Icons",
          "Helvetica Neue",
          "Inter",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        sans: ["SF Pro Text", "SF Pro", "San Francisco", "Inter", "sans-serif"],
      },
      letterSpacing: {
        justright: "0.012em",
      },
      fontWeight: {
        medium: 600,
      },
    },
  },
  plugins: [],
};
