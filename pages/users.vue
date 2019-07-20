<template>
  <div>
    <h1>This is the Users Page</h1>
    <div class="columns page-content">
      <div class="column is-one-quarter">
        <form @submit.prevent="onLoadUser">
          <b-field label="Enter User Id">
            <b-input type="number" v-model="user_id"></b-input>
          </b-field>
          <input type="submit" label="Submit" class="button is-primary">
        </form>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: 0
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.user_id}`);
    },
  },
};
</script>

<style scoped>
.page-content {
  margin-top: 0.25rem;
}
</style>
