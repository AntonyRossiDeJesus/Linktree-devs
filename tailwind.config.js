/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-icon-seta-esquerda": "url('./assets/seta-esquerda.svg')",
        "custom-icon-seta-direita": "url('./assets/seta-direita.svg')",

        "custom-icon-whatssap": "url('./assets/icone-whatszapp-azul.svg')",

        "custom-icon-seta-rodape": "url('./assets/icone-seta-rodape.png')",

        "custom-bg-container-two":
          "linear-gradient(to left, #000 0%, #94711F 50%, #000 100%);",
        "bg-degrade-button-hero": "linear-gradient(to left, #EBCF7F, #C39157)",
        "custom-bg-degrade-sec-eigth-yellow":
          "linear-gradient(to left, #000000, #ECB531)",
        "custom-bg-degrade-sec-eigth-black":
          "linear-gradient(to left, #000000, #2C2626)",
        "custom-icon-button": "url('./assets/icone-whatsapp-branco.svg')",
      },

      colors: {
        "bg-degrade-button-hero": "linear-gradient(to left, #EBCF7F, #C39157)",
        "bg-primary": "#02101F",
      },

      screens: {
        "3xl": "1940px",
      },
    },
  },
  plugins: [],
};
