/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    theme: {},
    extend: {
      colors: {
        day: {
          bg: '#fff',
          text: '#000',
          accent: '#3e54fa'
        },
        night: {
          bg: '#060606',
          text: '#eee',
          accent: '#fbebad'
        }
      },
      fontFamily: {
        pt: ['futura-pt, sans-serif']
      },
      spacing: {
        28: '7rem'
      },
      lineHeight: {
        tight: 1.2
      }
    }
  },
  plugins: []
}
