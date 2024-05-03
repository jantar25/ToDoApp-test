/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Abel': 'Abel, sans-serif'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: theme => ({
        'main-color': '#2A3252',
        'main-color-hover': '#3C456B',
        'red-color':'#EF5455',
        'gray-color': '#778899'
      }),
      rotate: {
        '60': '60deg',
        '120': '120deg',
        '180': '180deg',
        '240': '240deg',
        '300': '300deg',
        '360': '360deg',
      }
    },
  },
  plugins: [],
}

