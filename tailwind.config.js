/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        linter: ["Linter", "sans-serif"],
      },

      colors: {
        'carbon-blue': '#212529',
      },

      width: {
        '90': '90%',
      },

      maxHeight: {
        '500': '500',
      },
    },
  },
  plugins: [],
}

