<template>
  <div class="box">
    <h1 class="is-size-3">Update Post: {{ single_post.title }}</h1>
    <app-admin-post-form :edited_post="single_post" @submit="handleFormSubmission" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData(context) {
    if (context.payload) {
      return {
        single_post: context.payload.postData,
      };
    }
    try {
      const data = await context.app.$axios.$get(
        `/posts/${context.params.post_id}.json`
      );
      const single_post = { post_id: context.params.post_id, ...data };
      return { single_post };
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async handleFormSubmission(edited_post) {
      try {
        await this.$store.dispatch("editPost", edited_post);
        this.$router.push({ name: "admin" });
      } catch (error) {
        console.error(error);
      }
    }
  },
  head() {
    return {
      title: `Update Post: ${this.single_post.title}`
    };
  },
  validate(route) {
    return /^-.+$/.test(route.params.post_id);
  }
};
</script>

