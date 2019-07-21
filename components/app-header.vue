<template>
  <div class="tabs">
    <ul>
      <nuxt-link to="/" tag="li" exact-active-class="is-active">
        <a>Home</a>
      </nuxt-link>
      <nuxt-link to="/posts" tag="li" active-class="is-active">
        <a>Posts</a>
      </nuxt-link>
      <nuxt-link to="/about" tag="li" active-class="is-active">
        <a>About</a>
      </nuxt-link>
      <nuxt-link to="/admin" tag="li" active-class="is-active">
        <a>Admin</a>
      </nuxt-link>
    </ul>
  </div>
</template>
