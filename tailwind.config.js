/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'anime-pink': '#ff2d75',
        'anime-blue': '#00f0ff',
        'anime-purple': '#6e00ff',
        'anime-dark': '#0f0a1a',
      },
      fontFamily: {
        'anime': ['"Anime Ace"', 'sans-serif'],
        'sans': ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

