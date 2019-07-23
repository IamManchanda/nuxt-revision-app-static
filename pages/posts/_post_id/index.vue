<template>
  <div>
    <h1 class="is-size-3">Post #{{ $route.params.post_id }}</h1>
    <section class="columns is-multiline single-post-container">
      <div class="column is-full">
        <app-post-full :post_id="$route.params.post_id" title="Reprehenderit, voluptas?">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur rerum asperiores laboriosam dolores, placeat possimus ipsa, quia quasi magni inventore omnis minima nulla deserunt impedit distinctio non pariatur dignissimos a, facere delectus quaerat suscipit reprehenderit reiciendis. Quis nemo voluptate omnis nam illum adipisci ratione, non, vero soluta aliquam perspiciatis recusandae obcaecati? Repellendus id ipsa, eius tenetur dolore officia, ad, ipsum aut quidem rem ex quia sapiente a eligendi beatae accusantium aperiam odio dolorum natus! Veniam consequatur doloribus totam incidunt repellendus recusandae laudantium nemo similique dolor, ea natus nam dolore voluptatum veritatis quos quod excepturi placeat molestiae consequuntur sunt minima?</p>
        </app-post-full>
      </div>
    </section>
  </div>
</template>

<script>
import AppPostFull from "~/components/posts/app-post-full.vue";

export default {
  components: {
    AppPostFull
  },
  validate(route) {
    return /^\d+$/.test(route.params.post_id);
  }
};
</script>

<style scoped>
.single-post-container {
  margin-top: 1rem;
}
</style>
