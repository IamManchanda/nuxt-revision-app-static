<template>
  <div class="container">
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "~/components/app-header"

export default {
  components: {
    AppHeader,
  },
}
</script>
