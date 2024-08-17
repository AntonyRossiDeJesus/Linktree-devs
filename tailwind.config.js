/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-icon-whatssap": "url('./assets/icone-whatszapp-azul.svg')",
      },
      colors: {
        "bg-primary": "#02101F",
      },

      screens: {},
    },
  },
  plugins: [],
};
