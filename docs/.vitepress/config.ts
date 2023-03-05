import { defineConfig } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'
import logoBase64 from './logoBase64'
import {
  sidebarArticle,
  sidebarBackend,
  sidebarFrontend,
  sidebarLife
} from './siderbar'

import markdownItRuby from 'markdown-it-ruby'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
import markdownItImsize from 'markdown-it-imsize'

import markdownItImageFlow from './plugins/markdown-it-imageflow'
import markdownItLinkfoot from './plugins/markdown-it-linkfoot'

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
    },
    theme: 'dracula',
    config: (md) => {
      md.use(markdownItLinkfoot)
        .use(markdownItRuby)
        .use(markdownItImageFlow)
        .use(markdownItImplicitFigures, { figcaption: true })
        .use(markdownItImsize)
    }
  },

  themeConfig: {
    nav: nav(),
    logo: logoBase64,
    sidebar: {
      '/lifes': sidebarLife(),
      '/notes/frontend': sidebarFrontend(),
      '/notes/backend': sidebarBackend(),
      '/articles/': sidebarArticle()
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
    {
      text: 'Articles',
      link: '/articles/README',
      activeMatch: '/articles/'
    },
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
