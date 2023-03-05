import { type DefaultTheme } from 'vitepress'

export function sidebarFrontend(): DefaultTheme.SidebarItem[] {
  return [
    { text: '前端简介', link: '/notes/frontend/README' },
    {
      text: 'Sass',
      collapsed: false,
      items: [
        {
          text: 'Sass 变量',
          link: '/notes/frontend/Sass/Sass变量'
        },
        {
          text: 'Sass 数据类型',
          link: '/notes/frontend/Sass/Sass数据类型'
        },
        {
          text: 'Sass 插值',
          link: '/notes/frontend/Sass/Sass插值'
        },
        {
          text: 'Sass 函数',
          link: '/notes/frontend/Sass/Sass函数'
        },
        {
          text: 'Sass 控制指令',
          link: '/notes/frontend/Sass/Sass控制指令'
        },
        {
          text: 'Sass 混合指令',
          link: '/notes/frontend/Sass/Sass混合指令'
        },
        {
          text: 'Sass 函数指令',
          link: '/notes/frontend/Sass/Sass函数指令'
        },
        {
          text: 'Sass 继承指令',
          link: '/notes/frontend/Sass/Sass继承指令'
        },
        {
          text: 'Sass 导入指令',
          link: '/notes/frontend/Sass/Sass导入指令'
        },
        {
          text: 'Sass 扩展',
          link: '/notes/frontend/Sass/Sass扩展'
        }
      ]
    },
    {
      text: 'Rollup',
      collapsed: false,
      items: [
        {
          text: 'Rollup 简介',
          link: '/notes/frontend/Rollup/Rollup简介'
        }
      ]
    }
  ]
}

export function sidebarBackend(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '后端简介',
      collapsed: false,
      items: [{ text: 'backend', link: '/notes/backend/README' }]
    }
  ]
}
