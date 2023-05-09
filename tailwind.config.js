/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./victory.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        
        someBrown : 'rgba(56, 56, 51, 1)',
        someYellow : 'rgba(241, 154, 51, 1)',
        fafafa : "#FAFAFA",
        color_f19a33 : "#F19A33",
        color_b2c9a3 :"#B2C9A3",
        color_387546 : "#387546",
        color_ffffff :"#FFFFFF",
        color_383833 : "#383833",
        color_598463 : "#598463"
        
     

      },
    },
  },
  plugins: [],
}

