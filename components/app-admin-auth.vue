<template>
  <div>
    <h1 class="is-size-4">{{ label }} to your Account</h1>
    <form class="form-container" @submit.prevent="handleSaveAuth">
      <b-field label="Email Address">
        <b-input
          type="email"
          v-model="user_log_details.email"
          placeholder="Enter Email Address"
          maxlength="30"
        />
      </b-field>
      <b-field label="Password">
        <b-input
          type="password"
          v-model="user_log_details.password"
          placeholder="Enter Password"
          maxlength="15"
          password-reveal
        />
      </b-field>
      <div class="action-container">
        <button type="submit" class="button is-primary">{{ label }}</button>
        <button type="button"  @click="handleCancelPost" class="button is-default">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    user_log_details: {
      type: Object,
      required: true
    }
  },
  methods: {
    async handleSaveAuth() {
      const { label, user_log_details } = this;
      try {
        await this.$store.dispatch("authenticateUser", {
          label,
          user_log_details
        });
        this.$router.push({ name: "admin" });
      } catch (error) {
        console.error(error);
      }
    },
    handleCancelPost() {
      this.$router.push("/");
    }
  }
};
</script>
