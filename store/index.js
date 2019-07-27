export const state = () => ({
  all_posts: []
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
  async addPost({ commit }, added_post) {
    try {
      const data = this.$axios.$post("/posts.json", added_post);
      const post_id = data.name;
      commit("addPost", { post_id, ...added_post });
    } catch (error) {
      console.error(error);
    }
  },
  async editPost({ commit }, edited_post) {
    try {
      await this.$axios.$put(`/posts/${edited_post.post_id}.json`, edited_post);
      commit("editPost", edited_post);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getters = {
  all_posts(currentState) {
    return currentState.all_posts;
  }
};
