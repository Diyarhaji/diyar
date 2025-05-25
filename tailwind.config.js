/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#021526',
        second: '#21344B',
        third:'#27548A',
        fourth:'#F5EEDC',
        fifth:"#A5D7E8"

        
      }, 
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '49% 58% 53% 45% / 27% 65% 25% 61%',
          },
          '50%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '100%': {
            borderRadius: '49% 58% 53% 45% / 27% 65% 25% 61%',
          },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
      },
       backgroundImage: {
        home: 'linear-gradient(to top, #21344B, #021526)',
      },
    },
  },
  plugins: [],
}