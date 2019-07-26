<template>
  <div>
    <h1 class="is-size-3">List of all Posts.</h1>
    <section class="columns is-multiline all-posts-container">
      <div class="column is-full" v-for="post_id of 6" :key="post_id">
        <app-post-excerpt
          :post_id="post_id"
          :title="single_post_dummy_data.title"
          :author="single_post_dummy_data.author"
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
  asyncData(context, done) {
    setTimeout(() => {
      done(null, {
        single_post_dummy_data,
      });
    }, 150);
  },
};
</script>


<style scoped>
.all-posts-container {
  margin-top: 1rem;
}
</style>
