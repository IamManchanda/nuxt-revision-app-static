import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

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
  plugins: ["~/plugins/core-components.js"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv"
  ],
  axios: {
    baseURL: process.env.FIREBASE_API_URL,
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  pageTransition: {
    name: "fade",
    mode: "out-in"
  },
  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY
  },
  generate: {
    async routes() {
      const response = await axios.get(`${process.env.FIREBASE_API_URL}/posts.json`)
      const routes = [];
      for (const key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          const postData = response.data[key];
          routes.push({
            route: `/posts/${key}`,
            payload: { postData },
          });
          routes.push({
            route: `/admin/${key}`,
            payload: { postData },
          });
        }
      }
      return routes;
    },
  }
};
