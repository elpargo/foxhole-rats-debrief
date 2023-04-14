/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rats-ecru": "#D0BE7D",
        "rats-black": "#000009",
        "rats-drab-dark-brown": "#524B23",
        "rats-taupe-gray": "#7F7373",
        "rats-black-olive": "#302B1E"
      },
    },
  },
  plugins: [],
}

// Colors extracted from logo with https://coolors.co/d0be7d-000009-524b23-7f7373-302b1e
