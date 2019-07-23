<template>
  <div>
    <h1 class="is-size-3">Get the Latest Tech News.</h1>
    <section class="columns is-multiline featured-posts-container">
      <div
        class="column is-full-mobile is-half-tablet is-one-third-desktop"
        v-for="post_id of 6"
        :key="post_id"
      >
        <app-post-preview :post_id="post_id" title="Reprehenderit, voluptas?" description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis excepturi odio. Omnis possimus quis tempora rerum enim error totam.</p>
        </app-post-preview>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostPreview from "~/components/posts/app-post-preview.vue";

export default {
  components: {
    AppPostPreview
  }
};
</script>


<style scoped>
.featured-posts-container {
  margin-top: 1rem;
}
</style>

