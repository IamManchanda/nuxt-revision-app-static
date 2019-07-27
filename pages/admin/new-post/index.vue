<template>
  <div class="box">
    <h1 class="is-size-3">Create New Post</h1>
    <app-admin-post-form :edited_post="single_post" @submit="handleFormSubmission" />
  </div>
</template>

<script>
import axios from "axios";
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
  },
  methods: {
    handleFormSubmission(added_post) {
      this.$store
        .dispatch("addPost", added_post)
        .then(() => this.$router.push({ name: "admin" }))
        .catch(error => console.error(error));
    }
  }
};
</script>

