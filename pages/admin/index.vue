<template>
  <div>
    <div class="posts-heading-container">
      <h1 class="is-size-3">Existing Posts</h1>
      <nuxt-link
        type="button"
        class="button is-primary"
        :to="{ name: 'admin-new-post'}"
      >Create Post</nuxt-link>
    </div>
    <section class="columns is-multiline all-posts-container">
      <div class="column is-full" v-for="post_id of 6" :key="post_id">
        <app-post-excerpt :post_id="post_id" title="Reprehenderit, voluptas?" :is_admin="true">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
        </app-post-excerpt>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostExcerpt from "~/components/posts/app-post-excerpt.vue";

export default {
  components: {
    AppPostExcerpt
  }
};
</script>

<style scoped>
.all-posts-container {
  margin-top: 1rem;
}

.posts-heading-container {
  display: flex;
  justify-content: space-between;
}
</style>

