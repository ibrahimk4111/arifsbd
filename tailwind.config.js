/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "theme":"#00cba9",
        "hoveredColor": "#ecfffc",
        "bodyColor": "#f4ffff"
      }
    },
  },
  
  plugins: [],
}

