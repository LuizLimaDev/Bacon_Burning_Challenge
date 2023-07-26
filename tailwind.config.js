/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#f4d147",
        orange: "#f96e04",
        red: {
          100: "#e8867b33",
          200: "#ec524c",
          300: "#b12622",
        },
        white: "#ffffff",
        black: "#000000",
        gray: "#667085",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      height: {
        caseImg: '400px'
      },
      screens: {
        desktop: '1440px'
      }
    },
    plugins: [],
  }
}
