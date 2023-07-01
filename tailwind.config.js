/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#eef9f5",
        "green": "#226981"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

