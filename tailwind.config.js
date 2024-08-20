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
        'black-back': '#000000b2',
        'white-back': '#ffffffb2'
      },

      width: {
        '90': '90%',
      },

      maxHeight: {
        '500': '500',
      }
    },
  },
  plugins: [],
}

