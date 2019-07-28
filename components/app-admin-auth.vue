<template>
  <div>
    <h1 class="is-size-4">{{ label }} to your Account</h1>
    <form class="form-container" @submit.prevent="handleAuth">
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
    async handleAuth() {
      try {
        const data = await this.$axios.$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseApiKey}`,
          {
            ...this.user_log_details,
            returnSecureToken: true
          }
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
