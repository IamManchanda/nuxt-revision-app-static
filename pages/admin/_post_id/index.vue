<template>
  <div class="box">
    <h1 class="is-size-3">Update Post</h1>
    <app-admin-post-form :edited_post="single_post" />
  </div>
</template>

<script>
import axios from "axios";
import AppAdminPostForm from "~/components/admin/app-admin-post-form.vue";

export default {
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-revision-app.firebaseio.com/posts/${context.params.post_id}.json`
      )
      .then(({ data }) => {
        const single_post = { post_id: context.params.post_id, ...data };
        return { single_post };
      })
      .catch(error => console.error(error));
  },
  components: {
    AppAdminPostForm
  },
  validate(route) {
    return /^-.+$/.test(route.params.post_id);
  },
};
</script>

