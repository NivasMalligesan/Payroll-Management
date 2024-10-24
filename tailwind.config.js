/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'], 
      },
        colors:{
          primary : "#ffffff",
          secondary : "#212143",
          primary_text : "030303",
          secondary_text : "#636364",
          dark : "#0A112F",
          grey : "#D9D9D9",
          grey_button : "#464646",
          light : "#F7F7F7",
          blue: "#3981F7"
        },
        container:{
          center : true,
          padding :{
            DEFAULT : "1rem",
            sm:"2rem",
            lg:"4rem",
            xl : "5rem",
            "2xl" : "6rem",
            "3xl" : "8rem"
          }
        },
        animation:{
          "loop-scroll":"loop-scroll 50s linear infinite"
        }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

