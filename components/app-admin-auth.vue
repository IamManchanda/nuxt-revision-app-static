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
        <button @click="handleCancelAuth" class="button is-default">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    user_log_details: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleSaveAuth() {
      const authType =
        this.label === "Sign up"
          ? "signUp"
          : this.label === "Log in"
          ? "signInWithPassword"
          : "";
      if (authType) {
        const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=${process.env.firebaseApiKey}`;
        console.log(authUrl);
        try {
          const data = await this.$axios.$post(authUrl, {
            ...this.user_log_details,
            returnSecureToken: true
          });
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    },
    handleCancelAuth() {
      this.$router.push("/");
    }
  }
};
</script>
