<template>
  <div class="box">
    <article class="message is-primary">
      <div class="message-header">
        <p>{{ title }}</p>
      </div>
      <div class="message-body">
        <div class="columns">
          <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop">
            <figure class="image">
              <img
                :src="`https://source.unsplash.com/collection/${post_id}/450x650`"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="column is-full-mobile is-half-tablet is-three-quarters-desktop">
            <slot />
            <div class="is-pulled-right">
              <nuxt-link
                type="button"
                class="button is-primary view-post-link"
                :to="`/posts/${post_id}`"
              >View Post</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post_id: {
      type: Number,
      required: true
    },
    title: {
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

