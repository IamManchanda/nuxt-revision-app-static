<template>
  <div>
    <h1 class="is-size-3">List of all Posts.</h1>
    <p>Fetched {{ all_posts.length }} results</p>
    <section class="columns is-multiline all-posts-container">
      <div class="column is-full" v-for="single_post of all_posts" :key="single_post.post_id">
        <app-post-excerpt
          :post_id="single_post.post_id"
          :title="single_post.title"
          :author="single_post.author"
        >
          <div v-html="single_post.excerpt"></div>
        </app-post-excerpt>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostExcerpt from "~/components/posts/app-post-excerpt.vue";

export default {
  components: {
    AppPostExcerpt
  },
  computed: {
    all_posts() {
      return this.$store.getters.all_posts;
    }
  },
  head() {
    return {
      title: "List of all Posts"
    };
  },
};
</script>


<style scoped>
.all-posts-container {
  margin-top: 1rem;
}
</style>
