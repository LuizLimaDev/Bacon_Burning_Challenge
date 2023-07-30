/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#FFECA3",
          200: "#F5D147"
        },
        orange: {
          100: "#FFA35C",
          200: "#F96E04",
        },
        red: {
          100: "#F5A49B",
          200: "#B12622",
        },
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      width: {
        logoHero: "558px",
        heroTextDiv: "655px",
        caseImg: "563px",
        textNewslatter: "556px",
      },
      height: {
        showcase: "776px",
        cardPlan: "606px",
      },
      backgroundImage: {
        showcase: "url('assets/background01.png')",
        theProgram: "url('assets/background02.png')",
        cardPlan: "url('assets/cardPlan-background.png')",
      },
      screens: {
        desktop: "1440px"
      }
    },
    plugins: [],
  }
};
