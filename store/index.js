import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      all_posts: []
    },
    mutations: {
      setPosts(currentState, all_posts) {
        currentState.all_posts = all_posts;
      }
    },
    actions: {
      nuxtServerInit({ commit }) {
        return axios
          .get("https://nuxt-revision-app.firebaseio.com/posts.json")
          .then(({ data }) => {
            const postsArray = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                const [post_id, item] = [key, data[key]];
                postsArray.push({ post_id, ...item });
              }
            }
            commit("setPosts", postsArray);
          })
          .catch(error => console.error(error));
      },
      setPosts({ commit }, all_posts) {
        commit("setPosts", all_posts);
      }
    },
    getters: {
      all_posts(currentState) {
        return currentState.all_posts;
      },
    }
  });
};

export default createStore;
