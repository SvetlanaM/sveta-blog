/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      helveticaNeue: ["Helvetica Neue", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#212529",
        },
        gray: {
          DEFAULT: "#6c757d",
          100: "#f8f9fA",
          200: "#dfdfdf",
        },
        blue: {
          DEFAULT: "#007bff",
          100: "#2b7efb",
        },
      },
      borderColor: (theme) => ({
        gray: theme("colors.gray"),
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
  corePlugins: {
    outline: false,
  },
};
