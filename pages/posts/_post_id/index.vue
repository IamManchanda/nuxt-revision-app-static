<template>
  <div>
    <h1 class="is-size-3">{{ single_post.title }}</h1>
    <section class="columns is-multiline single-post-container">
      <div class="column is-full">
        <app-post-content
          :post_id="single_post.post_id"
          :title="single_post.title"
          :author="single_post.author"
        >
          <div v-html="single_post.content"></div>
        </app-post-content>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AppPostContent from "~/components/posts/app-post-content.vue";

export default {
  components: {
    AppPostContent
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-revision-app.firebaseio.com/posts/${context.params.post_id}.json`
      )
      .then(({ data }) => {
        const single_post = { post_id: context.params.post_id, ...data };
        return { single_post };
      })
      .catch(error => console.error(error));
  },
  validate(route) {
    return /^-.+$/.test(route.params.post_id);
  },
};
</script>

<style scoped>
.single-post-container {
  margin-top: 1rem;
}
</style>
