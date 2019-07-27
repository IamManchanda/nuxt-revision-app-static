<template>
  <div>
    <h1 class="is-size-3">Get the Latest Tech News.</h1>
    <section class="columns is-multiline featured-posts-container">
      <div
        class="column is-full-mobile is-half-tablet is-one-third-desktop"
        v-for="single_post of all_posts"
        :key="single_post.post_id"
      >
        <app-post
          type="preview"
          :post_id="single_post.post_id"
          :title="single_post.title"
          :author="single_post.author"
          :is_admin="true"
        >
          <div v-html="single_post.preview"></div>
        </app-post>
      </div>
    </section>
  </div>
</template>

<script>
import AppPost from "~/components/posts/app-post.vue";

export default {
  components: {
    AppPost
  },
  computed: {
    all_posts() {
      return this.$store.getters.all_posts;
    },
  },
  head() {
    return {
      title: "Get the Latest Tech News"
    };
  },
};
</script>


<style scoped>
.featured-posts-container {
  margin-top: 1rem;
}
</style>

