/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontSize: {
        '10': '10px',   // Custom font size
        '14': '14px',   // Custom font size
        '20': '20px',   // Custom font size
      },
    },
  },
  plugins: [],
}
