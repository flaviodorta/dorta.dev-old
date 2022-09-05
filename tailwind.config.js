/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'layout-1': '#121212',
        'layout-2': '#0f0f0f',
        primary: '#ED0C32',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        wave: 'move 1.5s linear infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(-55px)' },
        },
      },
    },
  },
  plugins: [],
};
