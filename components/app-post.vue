<template>
  <div class="box">
    <article class="message is-primary">
      <div class="message-header">
        <p>{{ title }}</p>
      </div>
      <div class="message-body">
        <template v-if="isType('preview')">
          <figure class="image">
            <img
              :src="`https://source.unsplash.com/collection/${post_id}/750x250`"
              alt="Placeholder image"
            />
          </figure>
          <p>
            <strong>{{ author }}</strong>
          </p>
          <slot />
          <nuxt-link
            type="button"
            class="button is-primary view-post-link"
            :to="{ name: 'posts-post_id', params: { post_id }}"
          >View Post</nuxt-link>
        </template>
        <template v-else-if="isType('excerpt')">
          <div class="columns">
            <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <figure class="image">
                <img
                  :src="`https://source.unsplash.com/collection/${post_id}/450x750`"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="column is-full-mobile is-half-tablet is-three-quarters-desktop">
              <p>
                <strong>{{ author }}</strong>
              </p>
              <slot />
              <div class="is-pulled-right">
                <nuxt-link
                  v-if="is_admin"
                  type="button"
                  class="button is-primary view-post-link"
                  :to="{ name: 'admin-post_id', params: { post_id }}"
                >Update Post</nuxt-link>
                <nuxt-link
                  v-else
                  type="button"
                  class="button is-primary view-post-link"
                  :to="{ name: 'posts-post_id', params: { post_id }}"
                >View Post</nuxt-link>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="isType('content')">
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
        </template>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
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
    is_admin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isType(type) {
      return this.type === type;
    },
  },
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
