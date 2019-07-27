<template>
  <div>
    <h1 class="is-size-3">{{ single_post.title }}</h1>
    <section class="columns is-multiline single-post-container">
      <div class="column is-full">
        <app-post
          type="content"
          :post_id="single_post.post_id"
          :title="single_post.title"
          :author="single_post.author"
        >
          <div v-html="single_post.content"></div>
        </app-post>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get(`/posts/${context.params.post_id}.json`)
      .then(data => {
        const single_post = { post_id: context.params.post_id, ...data };
        return { single_post };
      })
      .catch(error => console.error(error));
  },
  head() {
    return {
      title: this.single_post.title
    };
  },
  validate(route) {
    return /^-.+$/.test(route.params.post_id);
  }
};
</script>

<style scoped>
.single-post-container {
  margin-top: 1rem;
}
</style>
