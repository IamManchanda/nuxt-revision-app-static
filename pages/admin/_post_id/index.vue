<template>
  <div class="box">
    <h1 class="is-size-3">Update Post</h1>
    <app-admin-post-form :edited_post="single_post_dummy_data" />
  </div>
</template>

<script>
import AppAdminPostForm from "~/components/admin/app-admin-post-form.vue";
import { single_post_dummy_data } from "~/fixtures/single_post.js";

export default {
  asyncData(context, done) {
    setTimeout(() => {
      done(null, {
        single_post_dummy_data,
      });
    }, 150);
  },
  components: {
    AppAdminPostForm
  },
  validate(route) {
    return /^\d+$/.test(route.params.post_id);
  }
};
</script>

