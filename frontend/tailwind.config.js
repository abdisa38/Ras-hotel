/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F3',
        primary: '#2B2522',
        gold: '#C2A66D',
        gray: '#A3A3A3',
        border: '#ECEAE4',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '30px',
      },
    },
  },
  plugins: [],
}
