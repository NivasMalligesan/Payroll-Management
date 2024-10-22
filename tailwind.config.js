/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ["Poppins","sans-serif"],
      },
        colors:{
          primary : "#ffffff",
          secondary : "#212143",
          dark : "#000000",
          grey : "#D9D9D9"
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
        }
    },
  },
  plugins: [],
}

