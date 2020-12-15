<template>
  <div>
    <div v-for="post in posts">
      <div class="m-4">
        <div class="card">
          <div class="p-3 d-flex flex-column">
            <a v-bind:href="post.path">{{ post.title }}</a>
            <time>{{ post.frontmatter.date }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter((page) => page.path.startsWith('/posts/'))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>
