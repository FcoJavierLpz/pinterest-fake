module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
