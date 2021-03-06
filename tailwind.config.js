module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-66.5%,0,0)" },
        },
        winner: {
          //winner pop-up animation
          "0%": { width: "3px", height: "60px", opacity: "0", display: "none" },
          "30%": { width: "3px", height: "250px", opacity: "1" },
          "50%": { width: "480px", height: "250px", opacity: "1" },
          "100%": { width: "480px", height: "250px", opacity: "1" },
        },
      },
      animation: {
        roll: "roll 12s linear infinite", //default spinning animation for roulette wheel when not in "rool"
        winner: "winner 3s 2 ease-in-out alternate forwards",
        "bounce-slow": "bounce 1.5s infinite",
      },
      colors: {
        //colors for Tiles
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
