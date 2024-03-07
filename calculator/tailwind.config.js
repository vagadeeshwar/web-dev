const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        lightgrey: "#d8d9db",
        "buttons-on-hover": "#ebebeb",
        "button-active-state": "#bbbcbe",
        "function-buttons": "#df974c",
        "function-buttons-on-hover": "#dfb07e",
        "function-button-active-state": "#dd8d37",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("scroll-thumb", "&::-webkit-scrollbar-thumb");
      addVariant("scroll-track", "&::-webkit-scrollbar-track");
    }),
  ],
};
