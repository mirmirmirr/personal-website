/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      tiny: '0.625rem',
      huge: '20vw',
    },
    extend: {
      colors: {
        highlightBlue: '#3395ff',
        lockheedBlue: '#003478',
        jjRed: '#D71600',
        black: "#000000",
        savoryblue: '#6369D1',
        violetblue: '4357ad',
        backgroundLight: '#ffffff',
        foregroundLight: '#222222',
        backgroundDark: '#222222',
        foregroundDark: '#ffffff',
      },
      flex: {
        1: '1',
        4: '4',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};