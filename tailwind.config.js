const colors = require("tailwindcss/colors");
module.exports = {
  prefix: "",
  mode: "jit",
  important: true,
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dana: ["dana", "tahoma"],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.orange,
        gray: colors.trueGray,
        teal: colors.teal,
        orange: colors.orange,
        red: colors.red,
        "black-rgba": "rgba(0, 0, 0, 0.2)",
        "white-rgba": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
