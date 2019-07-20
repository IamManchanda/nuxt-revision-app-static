<template>
  <div>
    <p>User #{{ $route.params.user_id }}</p>
  </div>
</template>

<script>
export default {
  validate(route) {
    return /^\d+$/.test(route.params.user_id);
  },
}
</script>


