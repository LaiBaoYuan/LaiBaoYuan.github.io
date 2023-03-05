import { type DefaultTheme } from 'vitepress'

export function sidebarLife(): DefaultTheme.SidebarItem[] {
  return [
    { text: '生活简介', link: '/lifes/README' },
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
