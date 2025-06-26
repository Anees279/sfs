/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aven', 'sans-serif'], // This overrides Tailwind's default font
      },
    },
  },
  plugins: [],
}
