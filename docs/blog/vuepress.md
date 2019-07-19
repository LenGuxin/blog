---
title: vuepress静态网站生产和部署
date: '2019/07/19 11:37:40'
type: post
tag: ['vuepress', '博客']
meta:
  -
    name: description
    content: vuepress博客的生产和部署到GitHub pages
  -
    name: keywords
    content: vuepress, GitHub pages
---

<plContent >

:100: vuepress + GitHub pages部署博客
<!-- more -->

:tada: :tada: 这两天倒腾使用vuepress搭建自己的博客，遇到了一些问题，也选择了非官方的主题来使用，然后将其部署到GitHub pages

### 参考[vuepress](https://vuepress.vuejs.org/zh/)官方文档

- 官方文档很简单，轮子造车就行
- 主题选择，可以自定义一套主题和布局
- 项目的目录，根据自己的需求配置
- GitHub pages部署，deploy.sh的配置

### 1 博客的制作

:100: 基本的项目目录结构为：
```
  ├─ docs
  │  ├─ README.md
  │  └─ .vuepress
  │     └─ public
  │     └─  ├─ images
  │     └─  └─ favicon.ico
  │     └─ config.js
  └─ package.json
```

:100: 静态资源配置

  静态文件存放在.vuepress/public，图片在images文件夹

#### 1.1 配置config.js
```js

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
```

### 1.2 选择自己喜欢的主题
这里使用的是[vuepress-theme-yubisak](https://wuwaki.me/yubisaki/usage.html)主题，比较简约，就如您现在看到的我的博客

:tada: :100: :tada:
### 踩坑点

1. 部署时运行npm run deploy在git bash出现`Could not read from remote repository.Please make sure you have the correct access rights and the repository exist`

:tada: 出现这个可能是仓库地址不对，解决如下：
  - 使用一下命令查看下：$ git remote -v
  - 若提交地址不对，使用该命令更改仓库地址： $ git remote set-url origin XXX 
  - 重新push下就行了

:tada: 出现这个可能是你的`deploy.sh`配置问题：
  - 若你是用ssh拉取并push的，`deploy.sh`中设置 
  ```shell
    $ git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
  ```
  - 若使用https拉取并提交的，`deploy.sh`中设置
  ```shell
    $ git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages
  ```


</plContent>

