/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#1abc9c',
        secondaryColor:'#2c3e50'
      }
    },
    
  },
  plugins: [],
}