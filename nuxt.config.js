export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | Nuxt Revision App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Full-stack Nuxt.js project backed by Firebase Backend."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#7957d5" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
};
