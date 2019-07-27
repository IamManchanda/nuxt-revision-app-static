<template>
  <div class="box">
    <h1 class="is-size-3">Update Post: {{ single_post.title }}</h1>
    <app-admin-post-form :edited_post="single_post" @submit="handleFormSubmission" />
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
  methods: {
    handleFormSubmission(edited_post) {
      this.$store
        .dispatch("editPost", edited_post)
        .then(() => this.$router.push({ name: "admin" }))
        .catch(error => console.error(error));
    }
  },
  head() {
    return {
      title: `Update Post: ${this.single_post.title}`,
    };
  },
  validate(route) {
    return /^-.+$/.test(route.params.post_id);
  }
};
</script>

