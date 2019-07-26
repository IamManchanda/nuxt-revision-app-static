<template>
  <div class="box">
    <h1 class="is-size-3">Create New Post</h1>
    <app-admin-post-form :edited_post="single_post" />
  </div>
</template>

<script>
import AppAdminPostForm from "~/components/admin/app-admin-post-form.vue";
import single_post from "~/fixtures/single_post.js";

export default {
  data() {
    return {
      single_post
    };
  },
  components: {
    AppAdminPostForm
  }
};
</script>

