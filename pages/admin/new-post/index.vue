<template>
  <div class="box">
    <h1 class="is-size-3">Create New Post</h1>
    <app-post-form :edited_post="single_post" />
  </div>
</template>

<script>
import AppPostForm from "~/components/posts/app-post-form.vue";
import single_post from "~/fixtures/single_post.js";

export default {
  data() {
    return {
      single_post,
    };
  },
  components: {
    AppPostForm,
  },
};
</script>

