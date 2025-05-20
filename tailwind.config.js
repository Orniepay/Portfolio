/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: {
        light: '#81a1c1',
        dark: '#eceff4',
      },
      yellow: '#ffd644',
      teal: '#d9f3f9',
    },
    extend: {
      dropShadow: {
        'neon-white': [
         '0 0 20px #ffffff',
         '0 0 20px #ffffff',
        ],
        'neon-yellow': [
          '0 0 20px #ffd644',
          '0 0 20px #ffd644',
        ],
        'neon-gray': [
          '0 0 4px #81a1c1',
          '0 0 4px #81a1c1',
        ],
        'neon-brown': [
          '0 0 4px #a1866e',
          '0 0 4px #a1866e',
        ],
        'neon-red': [
          '0 0 4px #ffd6d6',
          '0 0 4px #ffd6d6',
        ],
      },
    },
  },
  plugins: [],
}