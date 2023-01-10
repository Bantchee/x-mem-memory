/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wolverine': "url(../public/img/wolverine.jpeg)",
      }
    },
  },
  plugins: [],
}
