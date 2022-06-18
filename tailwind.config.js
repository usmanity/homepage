function multiply(multiplier, multiplicand) {
  return multiplier * multiplicand;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: ["Noto Emoji", "sans-serif"],
      },
      keyframes: {
        wave: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          // "50%": { transform: "rotate(3deg)" },
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
