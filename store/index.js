import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      all_posts: []
    },
    mutations: {
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
    },
    actions: {
      nuxtServerInit({ commit }, { app }) {
        return app.$axios
          .$get("/posts.json")
          .then(data => {
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
      },
      addPost({ commit }, added_post) {
        return this.$axios
          .$post("/posts.json", added_post)
          .then(data => {
            const post_id = data.name;
            commit("addPost", { post_id, ...added_post });
          })
          .catch(error => console.error(error));
      },
      editPost({ commit }, edited_post) {
        return this.$axios
          .$put(`/posts/${edited_post.post_id}.json`, edited_post)
          .then(data => {
            commit("editPost", edited_post);
          })
          .catch(error => console.error(error));
      }
    },
    getters: {
      all_posts(currentState) {
        return currentState.all_posts;
      }
    }
  });
};

export default createStore;
