/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'blue': {
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'yellow': {
          300: '#fde047',
          500: '#eab308',
          600: '#ca8a04',
        }
      }
    },
  },
  plugins: [],
}