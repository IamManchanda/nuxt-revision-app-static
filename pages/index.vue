<template>
  <div>
    <h1 class="is-size-3">Get the Latest Tech News.</h1>
    <section class="columns is-multiline featured-posts-container">
      <div
        class="column is-full-mobile is-half-tablet is-one-third-desktop"
        v-for="post_id of 6"
        :key="post_id"
      >
        <app-post-preview
          :post_id="post_id"
          :title="single_post_dummy_data.title"
          :author="single_post_dummy_data.author"
          :is_admin="true"
        >
          <div v-html="single_post_dummy_data.preview"></div>
        </app-post-preview>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostPreview from "~/components/posts/app-post-preview.vue";
import { single_post_dummy_data } from "~/fixtures/single_post.js";

export default {
  components: {
    AppPostPreview
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
.featured-posts-container {
  margin-top: 1rem;
}
</style>

