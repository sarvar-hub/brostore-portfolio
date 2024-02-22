/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'gradient-blue': '#00d1ff00',
        'end-gradient-blue': '#1350ff00',
        'menu-back': '#f5f5f5',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        "bro-lg": '1240px',
      }
    }
  },
  plugins: [],
}

