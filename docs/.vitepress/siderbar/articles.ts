import { DefaultTheme } from 'vitepress'

export function sidebarArticle(): DefaultTheme.SidebarItem[] {
  return [
    { text: '文章简介', link: '/articles/README' },
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
