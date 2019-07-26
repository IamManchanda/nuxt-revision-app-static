<template>
  <div class="box">
    <h1 class="is-size-3">Update Post</h1>
    <app-post-form :edited_post="edited_post" />
  </div>
</template>

<script>
import AppPostForm from "~/components/posts/app-post-form.vue";

export default {
  data() {
    return {
      edited_post: {
        author: "",
        title: "",
        content: "",
        excerpt: "",
        preview: "",
      }
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

