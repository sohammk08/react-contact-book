/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jsans': ['Josefin Sans', 'sans-serif'],
        'vround': ['Varela Round', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

