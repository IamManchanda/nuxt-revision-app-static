<template>
  <article class="message is-primary">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body">
      <figure class="image">
        <img :src="`https://source.unsplash.com/collection/${post_id}/750x250`" alt="Placeholder image" />
      </figure>
      <p><strong>{{ author }}</strong></p>
      <slot />
      <nuxt-link
        type="button"
        class="button is-primary view-post-link"
        :to="{ name: 'posts-post_id', params: { post_id }}"
      >View Post</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post_id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
.message-body .image {
  margin-bottom: 1rem;
}

.message-body .view-post-link {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

