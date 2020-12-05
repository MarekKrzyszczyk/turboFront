module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      width: ['focus-within'],
      borderStyle: ['focus'],
    },
  },
  plugins: [],
}
