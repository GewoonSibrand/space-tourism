module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark-blue': '#0B0d17',
        'space-light-blue': '#D0D6F9',
      },
      fontFamily: {
        sans: ['Bellefair', 'sans-serif'],
        sub: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif']
      },
      backgroundImage: {
        'home-bg-desktop': "url(/assets/img/background-home-desktop.jpg)",
        'destination-bg-desktop': "url(/assets/img/background-destination-desktop.jpg)"
      }
    },
  },
  plugins: [],
}