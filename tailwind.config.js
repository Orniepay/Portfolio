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
  },
  plugins: [],
}
