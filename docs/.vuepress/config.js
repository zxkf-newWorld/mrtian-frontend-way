
// 导航
const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '练习',
    items: [
      {
        text: '练习1',
        items: [
          {
            text: 'day01',
            link: '/day01'
          }
        ]
      },
      {
        text: '练习2',
        items: [
          {
            text: 'day02',
            link: '/day02'
          }
        ]
      },
      {
        text: '练习3',
        items: [
          {
            text: 'day03',
            link: '/day03'
          }
        ]
      },
    ]
  },
  {
    text: '笔记',
    link: '/note'
  },
  {
    text: '关于',
    link: '/about'
  },
]



module.exports = {
  base: '/mrtian-frontend-way/', // 配置路径
  title: '天净若风--前端之路',
  description: '天净若风的前端之路',

  themeConfig: {
    nav: nav,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: '/zxkf-newWorld/mrtian-frontend-way/tree/master/docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 默认是 false, 设置为 true 来启用
    editLinks: false,
  }
}