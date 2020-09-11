module.exports = {
  title: "oaxis",
  themeConfig: {
    description: "色々学んだものをぶち込んでいきます",
    nav: [
      { text: "About", link: "/about/" },
      { text: 'twitter', link: 'https://twitter.com/osshan9' },
      { text: 'Github', link: 'https://github.com/o-xian999' },
    ],
    sidebar: 'auto'
  },
  //markdown: {
  //  lineNumbers: true
  //},
  plugins: [
    "@vuepress/blog",
    {
      // Unique ID of current classification
      id: 'post',
      // Target directory
      dirname: 'posts',
      // Path of the `entry page` (or `list page`)
      path: '/',
    }
  ]
};
