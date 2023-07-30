const tailwindcss = require("tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "6xl": "4rem",
        "10xl": "8rem",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
