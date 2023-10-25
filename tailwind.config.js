/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["SF Pro Display", "Inter", "sans-serif"],
        sans: ["SF Pro Text", "Inter", "sans-serif"],
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
