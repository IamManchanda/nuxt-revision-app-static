<template>
  <div>
    Auth WIP
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_logged_in: true,
    };
  },
  methods: {
    handleLoggedInState() {
      this.is_logged_in = !this.is_logged_in;
    },
  },
}
</script>

