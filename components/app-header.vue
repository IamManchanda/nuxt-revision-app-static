<template>
  <div class="columns is-gapless">
    <div
      class="column"
      :class="isAuthenticated
        ? 'is-full-mobile is-two-thirds-tablet is-four-fifths-desktop'
        : 'is-full'"
    >
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
          <li class="is-hidden-tablet" v-if="isAuthenticated" @click="handleLogout">
            <a>Log out</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="column is-hidden-mobile is-one-third-tablet is-one-fifth-desktop"
      v-if="isAuthenticated"
    >
      <div class="tabs is-right">
        <ul>
          <li @click="handleLogout">
            <a>Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

