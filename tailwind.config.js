/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          emerald: '#0b6b3a',
          emeraldLight: '#10b981',
          gold: '#d97706',
          goldLight: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
