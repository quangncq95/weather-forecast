/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-800': '#0F0F0F',
        'black-1e': '#1E1E1E',
        'black-5e': '#5E5E5E',
        'black-36': '#363636',
        'black-b9': '#B9B9B9',
        'black-7e': '#7E7E7E',
        'widget': '#272727',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
