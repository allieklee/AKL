module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'floral-pattern': "[url('/public/floral.png')]",
      },
      colors: {
        'egg': '#FFF5ED',
        'offwhite': '#fffff0',
        'dustypink': '#c28285',
      }
    },
  },
  plugins: [],
}
