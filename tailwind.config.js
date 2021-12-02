module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-66%,0,0)" },
        },
      },
      animation: {
        roll: "roll 10s linear infinite",
        rollfast: "roll 6s ease-out forwards",
      },
      colors: {
        green: "#00D100",
        red: "#ab0101",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
