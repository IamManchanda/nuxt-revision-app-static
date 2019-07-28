<template>
  <div class="tabs">
    <ul>
      <nuxt-link :to="{ name: 'index' }" tag="li" exact-active-class="is-active">
        <a>Home</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'posts' }" tag="li" active-class="is-active">
        <a>All Posts</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'admin' }" tag="li" active-class="is-active">
        <a v-if="isAuthenticated">Your Account</a>
        <a v-else>Sign up / Log in</a>
      </nuxt-link>
      <!-- <nuxt-link :to="{ name: 'about' }" tag="li" active-class="is-active">
        <a>About</a>
      </nuxt-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
}
</script>

