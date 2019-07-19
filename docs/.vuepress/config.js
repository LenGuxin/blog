module.exports = {
  theme: 'yubisaki',
  title: 'Home',
  description: `我的博客`,
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  base: '/blog/',
  port: 5021,
  repo: 'https://github.com/LenGuxin/blog',
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: {
      includeLevel: [1, 2]
    }
  },
  themeConfig: {
    background: `#1890ff`,
    github: 'LenGuxin',
    logo: '/images/logo.jpg',
    accentColor: '#1890ff',
    // 开启标签功能
    tags: true,
    // 每页显示的文章数量
    per_page: 10,
    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd HH:mm:ss',
    footer: 'death is our final destination. enjoy the journey',
    nav: [
      { text: 'Blog', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Tags', link: '/tag/'},
      { text: 'JueJin', link: 'https://juejin.im/user/59032235b123db3ee46e9004/posts' },
      { text: 'Github', link: 'https://github.com/LenGuxin' }
    ]
  }
}