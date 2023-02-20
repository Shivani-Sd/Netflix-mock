/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max':'768px'},
      'md': '768px',
      'lg': '1104px',
      'xl': '1535px',
      '2xl': '1600px',
    },
    extend: {
      keyframes: {
        backgroundFade: {
          "99.9%": {
            background: "black",
          },
          " 100%": {
            background: "transparent",
          },
        },
        animation: {
          backgroundFade: "backgroundFade 3s",
        },
        fontFamily: {
          netflix: ['Netflix Sans'],
        }
      },
    },
  },
  plugins: [],
};
