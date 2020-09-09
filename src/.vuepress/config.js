module.exports = {
  title: "blog",
  themeConfig: {
    description: "ここにはディスクリプションを入れます。",
    nav: [
      { text: "About", link: "/about/" } // ここはnav barのメニュー表示/aboutページは後ほど
    ]
  },
  plugins: [
    "@vuepress/blog",
    {
      // Unique ID of current classification
        id: 'post',
        // Target directory
        dirname: '_posts',
        // Path of the `entry page` (or `list page`)
        path: '/',
    }
  ]
};
