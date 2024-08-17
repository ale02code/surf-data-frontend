/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    colors: {
      'blue-dark': '#092538',
      'blue-normal': '#1866aa',
      'blue-light': '#97cbed',
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        // '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
