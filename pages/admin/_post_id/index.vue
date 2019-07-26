<template>
  <div class="box">
    <h1 class="is-size-3">Update Post</h1>
    <app-post-form :edited_post="single_post_dummy_data" />
  </div>
</template>

<script>
import AppPostForm from "~/components/posts/app-post-form.vue";
import { single_post_dummy_data } from "~/fixtures/single_post.js";

export default {
  data() {
    return {
      single_post_dummy_data,
    };
  },
  components: {
    AppPostForm,
  },
  validate(route) {
    return /^\d+$/.test(route.params.post_id);
  },
}
</script>

