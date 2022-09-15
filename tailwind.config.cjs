/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily : {
        h1:   ["IBM Plex Sans Condensed", "Helvetica", "Arial"],
        h2:   ["IBM Plex Sans Condensed", "Helvetica", "Arial"],
        h3:   ["IBM Plex Sans", "Helvetica", "Arial"],
        h4:   ["IBM Plex Sans Condensed", "Helvetica", "Arial"],
        p:    ["Roboto", "Helvetica", "Arial"],
      },
      colors: {
        beige:    "#d0d1d6",
        aqua:     "#8da3c4",
        cerulean: "#1e5d99",
        brown:    "#707070",
        dark:     "#1F1F1F",
        bodyText: "#212020",
        colH2:    "#2B2B3C",
      },

      backgroundImage: {
        mainBG: "url('/img/theganglogoless_sm.png')",
      },
    }
  },
  plugins: []
};