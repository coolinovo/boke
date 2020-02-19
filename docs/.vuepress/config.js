module.exports = {
  title: '甜甜圈の霖',
  description: 'Vue,React,Vuepress,Aplayer,Valine,axios,http,博客,blog,个人空间,文章,项目,Github',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    nav: [{
        text: '我',
        link: '/profile/'
      },
      {
        text: '项目',
        items: [
          {text: 'Vue', items: [{text: '电商后台管理',
              link: 'http://101.132.236.21/vue'}]},
          {text: 'React', items: [{text: '文章后台管理',
              link: 'http://101.132.236.21/react'}]}
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/coolinovo'
      },
      {
        text: '手札',
        link: '/lecture/'
      },
      {
        text: '歌单',
        link: '/music/'
      },
      {
        text: '倒数',
        link: '/date/'
      }
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ]
  ]
}