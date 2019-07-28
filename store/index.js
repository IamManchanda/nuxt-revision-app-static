export const state = () => ({
  all_posts: [],
  token: null
});

export const mutations = {
  setPosts(currentState, all_posts) {
    currentState.all_posts = all_posts;
  },
  addPost(currentState, added_post) {
    currentState.all_posts.push(added_post);
  },
  editPost(currentState, edited_post) {
    const postIndex = currentState.all_posts.findIndex(
      single_post => (single_post.post_id = edited_post.post_id)
    );
    currentState.all_posts[postIndex] = edited_post;
  },
  setToken(currentState, token) {
    currentState.token = token;
  },
  clearToken(currentState) {
    currentState.token = null;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    try {
      const data = await app.$axios.$get("/posts.json");
      const postsArray = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const [post_id, item] = [key, data[key]];
          postsArray.push({ post_id, ...item });
        }
      }
      commit("setPosts", postsArray);
    } catch (error) {
      console.error(error);
    }
  },
  setPosts({ commit }, all_posts) {
    commit("setPosts", all_posts);
  },
  async addPost({ commit, state: currentState }, added_post) {
    try {
      const data = this.$axios.$post(
        `/posts.json?auth=${currentState.token}`,
        added_post
      );
      const post_id = data.name;
      commit("addPost", { post_id, ...added_post });
    } catch (error) {
      console.error(error);
    }
  },
  async editPost({ commit, state: currentState }, edited_post) {
    try {
      await this.$axios.$put(
        `/posts/${edited_post.post_id}.json?auth=${currentState.token}`,
        edited_post
      );
      commit("editPost", edited_post);
    } catch (error) {
      console.error(error);
    }
  },
  async authenticateUser({ commit, dispatch }, authData) {
    const authType =
      authData.label === "Sign up"
        ? "signUp"
        : authData.label === "Log in"
        ? "signInWithPassword"
        : "";
    if (authType) {
      const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=${
        process.env.firebaseApiKey
      }`;
      try {
        const data = await this.$axios.$post(authUrl, {
          ...authData.user_log_details,
          returnSecureToken: true
        });
        commit("setToken", data.idToken);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + data.expiresIn * 1000
        );
        dispatch("setLogoutTimer", data.expiresIn * 1000);
      } catch (error) {
        console.error(error);
      }
    }
  },
  setLogoutTimer({ commit }, duration) {
    setTimeout(() => {
      commit("clearToken");
    }, duration);
  },
  initAuth({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("tokenExpiration");
    if (new Date().getTime() > Number(expirationDate) || !token) return undefined;
    dispatch("setLogoutTimer", Number(expirationDate) - new Date().getTime());
    commit("setToken", token)
  }
};

export const getters = {
  all_posts(currentState) {
    return currentState.all_posts;
  },
  isAuthenticated(currentState) {
    return currentState.token != null;
  }
};
