/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/assets/images/background.png')",
        'book': "url('/assets/images/book.png')",
      }
    },
  },
  plugins: [],
}