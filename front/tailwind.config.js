/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/assets/images/background.png')",
      }
    },
  },
  plugins: [],
}