/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    screens:{
      'xs':'400px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },

    extend: {
      colors :{
        'mainWhite' : '#FFFFFF',
        'secondaryBlue':'#C4E7FF',
        'mainBlue':'#31A8F3',
        'mainGreen':'#00E09E',
        'secondaryGreen':'#CAEDE3',
        'mainBlack':'#202124',

      },
      fontFamily:{
        montserrat: ["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}

