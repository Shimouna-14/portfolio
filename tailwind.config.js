/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#A4BDC1',
        'green': '#CFDACB',
        'silk': '#D6C9C2',
        'cream': '#E2C5B3',
        'light-cream': '#EDDCD1',
        'beige': '#dcc3ac',
        'brown': '#35241A',
        'black': '#272625',
        'white': '#F3F0EC'
      },
      screens: {
        "sm":{"max": "545px"},
        "m":{"min": "546px","max": "1023px"},
        "lg":{"min": "1024px"},
        "x-lg": {"min": "1200px"}
      }
    },
  },
  plugins: [],
})