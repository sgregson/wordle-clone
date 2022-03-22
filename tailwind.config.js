const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // user variable font if supported by browser
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        serif: ['"Inter var"', ...defaultTheme.fontFamily.serif],
        mono: ['"Inter var"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("parent", ".parent");
      addVariant("parent-open", ".parent[open] > &");
    }),
  ],
};
