/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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