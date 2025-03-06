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
        backgroundLight: '#FCFCFC',
        foregroundLight: '#111113',
        backgroundDark: '#111113',
        foregroundDark: '#FCFCFC',
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