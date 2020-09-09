module.exports = {
  title: "blog",
  themeConfig: {
    description: "ここにはディスクリプションを入れます。",
    nav: [
      { text: "About", link: "/about/" },
      {
        text: 'Link',
        items: [
          { text: 'twitter', link: 'https://twitter.com/osshan9' },
          { text: 'Github', link: 'https://github.com/o-xian999' },
        ],
      },
    ],
    sidebar: 'auto'
  },
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
