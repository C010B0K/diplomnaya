/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      html: [
        "Montserrat, sans-serif",
      ]
    },
    screens: {

      'header': { min: '768px' },

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '800px' },
      // => @media (max-width: 800px) { ... }

      sm: { max: '600px' },
      // => @media (max-width: 639px) { ... }
      lp: { max: '385px' },
    },
    extend: {
      backgroundImage: {
        background: "url('/src/img/bgmain.png')",
      }
    },
    
  },
  plugins: [],
}
