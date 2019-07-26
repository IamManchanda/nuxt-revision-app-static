<template>
  <form class="form-container" @submit.prevent="handleSavePost">
    <b-field label="Author Name">
      <b-input type="text" v-model="edited_post.author" placeholder="Enter Author Name" />
    </b-field>
    <b-field label="Title">
      <b-input type="text" v-model="edited_post.title" placeholder="Enter Title" />
    </b-field>
    <b-field label="Full Content">
      <b-input
        type="textarea"
        maxlength="20000"
        v-model="edited_post.content"
        placeholder="Enter Title"
      />
    </b-field>
    <b-field label="Excerpt Content">
      <b-input
        type="textarea"
        maxlength="2000"
        v-model="edited_post.excerpt"
        placeholder="Enter Title"
      />
    </b-field>
    <b-field label="Preview Content">
      <b-input
        type="textarea"
        maxlength="200"
        v-model="edited_post.preview"
        placeholder="Enter Title"
      />
    </b-field>
    <div class="action-container">
      <button @click="handleCancelPost" class="button is-default">Cancel</button>
      <button type="submit" class="button is-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    edited_post: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSavePost() {
      console.log(this.edited_post);
    },
    handleCancelPost() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.form-container {
  margin-top: 1rem;
}

.action-container {
  display: flex;
  justify-content: flex-end;
}

.action-container .button {
  margin-left: 0.5rem;
}
</style>
