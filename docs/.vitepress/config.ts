import { defineConfig } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'

export default defineConfig({
  lang: 'en',
  title: '元宝程序员',
  description: 'The codeword youth & Frontend Coder.',

  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),
    logo: '/logo.png',
    sidebar: {
      '/lifes': sidebarLife(),
      '/notes/frontend': sidebarFrontend(),
      '/notes/backend': sidebarBackend(),
      '/articles/': sidebarConfig()
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/LaiBaoYuan' }],

    footer: {
      copyright: 'Copyright © 2023 LaiBaoYuan'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Lifes', link: '/lifes/README', activeMatch: '/lifes/' },
    { text: 'Articles', link: '/articles/README', activeMatch: '/articles/' },
    {
      text: 'Notes',
      items: [
        {
          text: '前端',
          link: '/notes/frontend/README'
        },
        {
          text: '后端',
          link: '/notes/backend/README'
        }
      ],
      activeMatch: '/notes/'
    }
  ]
}

function sidebarFrontend(): DefaultTheme.SidebarItem[] {
  return [{ text: 'Introduction', link: '/notes/frontend/README' }]
}

function sidebarBackend(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [{ text: 'backend', link: '/notes/backend/README' }]
    }
  ]
}

function sidebarConfig(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Introduction', link: '/articles/README' },
    { text: 'mongodb集群搭建', link: '/articles/mongodb集群搭建' },
    {
      text: '别再用垃圾ngrok进行内网穿透了',
      link: '/articles/别再用垃圾ngrok进行内网穿透了'
    },
    {
      text: '小白如何开发一个属于自己的网站',
      link: '/articles/小白如何开发一个属于自己的网站'
    },
    { text: '你对域名知多少?', link: '/articles/你对域名知多少' }
  ]
}

function sidebarLife(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Introduction', link: '/lifes/README' },
    {
      text: '2023',
      collapsed: false,
      items: [
        {
          text: '2023-01-09',
          link: '/lifes/2023-01-09'
        }
      ]
    },
    {
      text: '2022',
      collapsed: false,
      items: [
        {
          text: '2022-12-04',
          link: '/lifes/2022-12-04'
        }
      ]
    }
  ]
}
