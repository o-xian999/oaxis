<template>
  <div>
    <div v-for="post in posts">
      <time>{{ post.frontmatter.date }}</time>
      <a v-bind:href="post.path">{{ post.title }}</a>
      <button class="btn btn-primary">Click Me</button>
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
