/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
              ],
        theme: {
          extend: {
                colors:{
                        'blue': '#31A8F3',
                        'green': '#00E09E',
                        'white': '#FFFFFF',
                        'black': '#202124',
                        'light-green': '#CAEDE3',
                        'light-blue': '#C4E7FF',
                },
                fontFamily:{
                        montserrat: ["Montserrat", 'sans-serif']
                }
          },
        },
        plugins: [],
      }