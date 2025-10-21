
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        calmteal: '#62B6B7',
        warmneutral: '#F7F4EE',
        deeptext: '#1F2D2E'
      },
      fontFamily: { heading: ['Inter','ui-sans-serif','system-ui'], body: ['Lora','Georgia','serif'] }
    }
  },
  plugins: [],
}
