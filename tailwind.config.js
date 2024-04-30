/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['lemon', 'sans-serif']
      },
      spacing: {
        '700px': '700px',
        '450px': '450px'
      },
      colors: {
        'grayDark': 'rgb(35,35,35)',
        'grayLight': 'rgb(43,43,43)'
      }
    },
  },
  plugins: [],
}

