<template>
  <div>
    <h1 class="is-size-3">Post #{{ $route.params.post_id }}</h1>
    <section class="columns is-multiline single-post-container">
      <div class="column is-full">
        <app-post-content
          :post_id="$route.params.post_id"
          :title="single_post_dummy_data.title"
          :author="single_post_dummy_data.author"
        >
          <div v-html="single_post_dummy_data.content"></div>
        </app-post-content>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostContent from "~/components/posts/app-post-content.vue";
import { single_post_dummy_data } from "~/fixtures/single_post.js";

export default {
  components: {
    AppPostContent
  },
  asyncData(context, done) {
    setTimeout(() => {
      done(null, {
        single_post_dummy_data,
      });
    }, 150);
  },
  validate(route) {
    return /^\d+$/.test(route.params.post_id);
  }
};
</script>

<style scoped>
.single-post-container {
  margin-top: 1rem;
}
</style>
