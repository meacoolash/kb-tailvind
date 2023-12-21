/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['group-hover', 'odd', 'even', 'hover'],
      colors: {
        'primary': 'green',
        'secondary': 'blue',
        'accent': 'orange',
      },
    },
  },
  plugins: [],
}

