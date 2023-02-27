/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        50: '#f6f7f7',
        100: '#e1e6e6',
        200: '#c2cccd',
        300: '#9caaac',
        400: '#77878a',
        500: '#5d6c6f',
        600: '#495558',
        700: '#3d4548',
        800: '#333b3c',
        900: '#212526',
      },
      'black': {
        '50': '#f7f7f7',
        '100': '#e3e3e3',
        '200': '#c8c8c8',
        '300': '#a4a4a4',
        '400': '#818181',
        '500': '#666666',
        '600': '#515151',
        '700': '#434343',
        '800': '#383838',
        '900': '#000000',
      },
      'golden': {
        '50': '#fdfde9',
        '100': '#fdfbc4',
        '200': '#fbf38d',
        '300': '#f9e54b',
        '400': '#f5d31a',
        '500': '#f1c40f',
        '600': '#c59009',
        '700': '#9d670b',
        '800': '#825211',
        '900': '#6f4314',
      },
      'green': {
        '50': '#f1fcf5',
        '100': '#defaea',
        '200': '#bef4d4',
        '300': '#8beab2',
        '400': '#52d689',
        '500': '#27ae60',
        '600': '#1d9c53',
        '700': '#1a7b43',
        '800': '#1a6139',
        '900': '#175031',
      },




      extend: {},
    },
  },
  plugins: [],
}