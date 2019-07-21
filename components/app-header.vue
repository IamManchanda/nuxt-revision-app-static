<template>
  <header class="tabs app-header">
    <ul>
      <nuxt-link to="/" tag="li" exact-active-class="is-active">
        <a>Home</a>
      </nuxt-link>
      <nuxt-link to="/users" tag="li" active-class="is-active">
        <a>Users</a>
      </nuxt-link>
    </ul>
  </header>
</template>
