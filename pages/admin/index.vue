<template>
  <div>
    <div class="posts-heading-container">
      <h1 class="is-size-3">Existing Posts</h1>
      <nuxt-link type="button" class="button is-primary" :to="{ name: 'admin-new-post'}">Create Post</nuxt-link>
    </div>
    <p>Fetched {{ all_posts.length }} results</p>
    <section class="columns is-multiline all-posts-container">
      <div class="column is-full" v-for="single_post of all_posts" :key="single_post.post_id">
        <app-post
          type="excerpt"
          :post_id="single_post.post_id"
          :title="single_post.title"
          :author="single_post.author"
          :is_admin="true"
        >
          <div v-html="single_post.excerpt"></div>
        </app-post>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    all_posts() {
      return this.$store.getters.all_posts;
    },
  },
  head() {
    return {
      title: "Existing Posts",
    };
  },
};
</script>

<style scoped>
.all-posts-container {
  margin-top: 1rem;
}

.posts-heading-container {
  display: flex;
  justify-content: space-between;
}
</style>

