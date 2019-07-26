<template>
  <div>
    <div class="posts-heading-container">
      <h1 class="is-size-3">Existing Posts</h1>
      <nuxt-link type="button" class="button is-primary" :to="{ name: 'admin-new-post'}">Create Post</nuxt-link>
    </div>
    <section class="columns is-multiline all-posts-container">
      <div class="column is-full" v-for="post_id of 6" :key="post_id">
        <app-post-excerpt
          :post_id="post_id"
          :title="single_post_dummy_data.title"
          :author="single_post_dummy_data.author"
          :is_admin="true"
        >
          <div v-html="single_post_dummy_data.excerpt"></div>
        </app-post-excerpt>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostExcerpt from "~/components/posts/app-post-excerpt.vue";
import { single_post_dummy_data } from "~/fixtures/single_post.js";

export default {
  components: {
    AppPostExcerpt
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ single_post_dummy_data });
      }, 100);
    })
      .then(data => data)
      .catch(error => {
        console.error(error);
        context.error(new Error());
      });
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

