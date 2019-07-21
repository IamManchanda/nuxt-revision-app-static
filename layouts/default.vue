<template>
  <div class="container">
    <header class="app-header">
      <app-header />
    </header>
    <section class="app-content">
      <nuxt />
    </section>
  </div>
</template>

<script>
import AppHeader from "~/components/app-header";

export default {
  components: {
    AppHeader
  }
};
</script>
