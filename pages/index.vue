<template>
  <div>
    <h1>This is the Home Page</h1>
    <div class="columns page-content">
      <div class="column is-one-quarter">
        <ul class="list">
          <li class="list-item">
            <nuxt-link to="/users">All Users</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  margin-top: 0.25rem;
}
</style>

