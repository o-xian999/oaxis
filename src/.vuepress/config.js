module.exports = {
  title: "oaxis",
  themeConfig: {
    description: "色々学んだものをぶち込んでいきます",
    nav: [
      { text: "About", link: "/about/" },
      { text: 'twitter', link: 'https://twitter.com/oshanQQ' },
      { text: 'Github', link: 'https://github.com/oshanQQ' },
    ],
    sidebar: 'auto'
  },
  //markdown: {
  //  lineNumbers: true
  //},
  plugins: [
    [
      "@vuepress/blog",
      {
        // Unique ID of current classification
        id: 'post',
        // Target directory
        dirname: 'posts',
        // Path of the `entry page` (or `list page`)
        path: '/',
      }
    ],
    [
      "seo",
      {
        image: ($page) => 'https://placehold.jp/740x457.png?css=%7B%22background-color%22%3A%22%20white%22%2C%22color%22%3A%22%20%23555555%22%2C%22font-size%22%3A%22%2035px%22%2C%22word-break%22%3A%22%20break-all%22%2C%22padding%22%3A%22%2025px%22%7D&text='+encodeURIComponent($page.title)
      }
    ]
  ]
};
