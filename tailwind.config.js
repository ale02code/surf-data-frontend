/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#091425',
        'blue-normal': '#1664ab',
        'blue-light': '#a8dae7',
      }
    },
  },
  plugins: [],
}

