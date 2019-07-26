import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      all_posts: [],
    },
    mutations: {
      setPosts(currentState, all_posts) {
        currentState.all_posts = all_posts;
      },
    },
    actions: {
      nuxtServerInit({ commit }, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("setPosts", [])
            resolve();
          }, 100);
        });
      },
      setPosts({ commit }, all_posts) {
        commit("setPosts", all_posts);
      },
    },
    getters: {
      all_posts(currentState) {
        return currentState.all_posts;
      },
    },
  });
};

export default createStore;
