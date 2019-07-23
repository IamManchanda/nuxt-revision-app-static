<template>
  <div class="box">
    <h1 class="is-size-3">Create New Post</h1>
    <form class="form-container" @submit.prevent="handleSavePost">
      <b-field label="Author Name">
        <b-input type="text" v-model="edited_post.author" placeholder="Enter Author Name" />
      </b-field>
      <b-field label="Title">
        <b-input type="text" v-model="edited_post.title" placeholder="Enter Title" />
      </b-field>
      <b-field label="Thumbnail Link">
        <b-input
          type="url"
          v-model="edited_post.thumbnail_link"
          placeholder="Enter Thumbnail Link"
        />
      </b-field>
      <b-field label="Content">
        <b-input
          type="textarea"
          maxlength="5000"
          v-model="edited_post.content"
          placeholder="Enter Title"
        />
      </b-field>
      <div class="action-container">
        <button @click="handleCancelPost" class="button is-default">Cancel</button>
        <button type="submit" class="button is-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edited_post: {
        author: "",
        title: "",
        thumbnail_link: "",
        content: ""
      }
    };
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

