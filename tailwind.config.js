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
                },
                screens:{
                        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
                        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
                },
                keyframes: {
                'open-menu': {
                        '0%': { transform: 'scaleY(0)' },
                        '80%': { transform: 'scaleY(1.2)' },
                        '100%': { transform: 'scaleY(1)' },
                        },
                },
                animation: {
                        'open-menu': 'open-menu 0.5s ease-in-out forwards',
                },
                boxShadow: {
                        'my': '0px 3px 15px rgba(220,220,220, 1)',
                }
                
        },
        },
        plugins: [],
      }