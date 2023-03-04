---
title: Sass 导入指令
---
::: tip 前言
在 CSS 中我们可以通过 @import 来导入一个样式文件，Sass 扩展了 CSS 的 @import 规则，使得可以导入 CSS 后缀的样式文件和 Scss 后缀的样式文件，并且提供了对 mixin 、函数和变量的访问。
:::
::: warning 提醒
与 CSS 的 @import 不同的是， CSS 使用 @import 导入文件是在页面渲染的时候发起多个 http 请求来获取文件内容，而 Sass 的导入 @import 是在编译时获取文件内容导入的。
:::

## @import
Sass 的导入和 CSS 中的导入语法类似，只不过在 Sass 中**可以导入用逗号分隔的多个文件**
```scss
@import 'a.scss', 'b.scss';
```
上面的代码意思是导入 a.scss 和 b.scss 文件，那么导入后 a 和 b 中的任何mixin 、函数和变量都是可以使用的。
我们知道在 CSS 中也有 @import 语句，在以下几种情况 Sass 会认为 @import 是 CSS 语句：
- 使用 url()
- 文件的扩展名是 .css
- @import 包含 media queries
- 文件名以 http:// 开头

## 使用 @use 替代 @import
Sass 官方团队不鼓励使用 `@import` 导入，并且在未来几年将逐步淘汰它，并最终将 `@import` 从 Sass 中完全删除。所以使用 `@use` 是官方团队更推荐的方式，下面我们开始讲解使用 `@use` 导入。
```scss
@use 'my/a.scss';
@use 'my/b';
```
从上面的代码中可以看到其使用方式与 `@import` 是相同的，那么为什么还要替换掉 `@import` 呢？ 主要是以下几个原因你需要了解下：
- `@import` 会使得所有变量、mixin 和函数都可以全局访问，这使开发者很难去维护这些定义的东西。
- 因为所有的都是全局的，那么 Sass 必须为所有的成员添加前缀，以避免命名冲突。
- `@extend` 也是全局的，这样将很难预测哪些样式将被扩展。
- 每次使用 `@import` 时，每个样式表都会被执行，这会增加编译时间
- 无法定义下游样式表无法访问的私有成员。