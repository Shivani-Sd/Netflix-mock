/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "768px" },
      md: "768px",
      lg: "1104px",
      xl: "1535px",
      "2xl": "1600px",
    },
    extend: {
      animation: {
        "slide-into-left": "slide-in-left 0.75s ease-in forwards",
        "slide-into-left-max": "slide-in-left-max 0.75s ease-in forwards",
        "slide-onto-left": "slide-out-right 0.75s ease-out backwards",
        "slide-onto-left-max": "slide-out-right-max 0.75s ease-out backwards",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-80%)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(-35%)",
          },
          "100%": {
            transform: "translateX(20%)",
            opacity: "1",
          },
        },
        "slide-in-left-max": {
          "0%": {
            transform: "translateX(-180%)",
            opacity: "0",
            "50%": {
              opacity: "0.5",
              transform: "translateX(100%)",
            },
          },
          "100%": {
            transform: "translateX(180%)",
            opacity: "1",
          },
        },

        "slide-out-right": {
          "0%": {
            transform: "translateX(20%)",
            opacity: "1",
            "50%": {
              opacity: "0.5",
            },
          },

          "100%": {
            transform: "translateX(-80%)",
            opacity: "0",
          },
        },
        "slide-out-right-max": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      fontFamily: {
        netflix: ["Netflix Sans"],
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay"),
],
};
