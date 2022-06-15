/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        epilogue: 'Epilogue, sans-serif',
      },
    },
  },
  plugins: [],
};
