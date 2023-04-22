/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FF6969"
      },
      fontSize:{
        mamoth:"2rem"
      }
    },
  },
  plugins: [],
}