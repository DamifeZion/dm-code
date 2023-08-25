/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "rgba(0, 0, 0, 0.7) 0px 0px 3px 0px",

        shadow1: "rgba(0, 0, 0, 0.2) 0px 0px 0.5px 2px;",

        copyCode: "rgba(0,0,0, 0.4) 2.5px 2px 0px 2px, rgba(0, 0, 0, 0.45) -0.9px -1px 0px 1px",

        run: "rgba(0, 0, 0, 0.5) 0px 0px 3px 0px"
      },

      fontSize: {
        'xl': "2rem",
        'lg': "1.8rem",
        'md': "1.5rem",
        'sm': "1rem",
        'xs': ".75rem"
      }
    },
  },
  plugins: [],
}