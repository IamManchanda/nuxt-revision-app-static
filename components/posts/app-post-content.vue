<template>
  <div class="box">
    <article class="message is-primary">
      <div class="message-header">
        <p>{{ title }}</p>
      </div>
      <div class="message-body">
        <figure class="image">
          <img
            :src="`https://source.unsplash.com/collection/${post_id}/1500x300`"
            alt="Placeholder image"
          />
        </figure>
        <p>
          <strong>{{ author }}</strong>
        </p>
        <slot />
      </div>
    </article>
  </div>
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
    }
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

