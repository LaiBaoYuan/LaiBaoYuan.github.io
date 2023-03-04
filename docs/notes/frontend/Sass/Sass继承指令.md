---
title: Sass 继承指令
---

## 什么是 Sass 继承
继承，我们也叫做代码重用，在 Sass 中支持对样式进行继承。
```scss
.a{
  width: 10px;
}

.b{
  @extend .a;
  height: 10px;
  color: red;
}
```
::: details 点击查看编译
```css
.a, .b{
  width: 10px;
}

.b{
  height: 10px;
  color: red;
}
```
:::

## 占位符选择器
在 Sass 中有一种特殊的选择器叫占位符选择器，它的写法像我们写的 id 或 class 选择器一样，只不过占位符选择器是以 `%` 开头的。在 Sass 中你**单独使用这种选择器是不会转换为 `CSS` 的**，只能是通过 `@extend` 来使用。
```scss
%placeholder{
  box-sizing: border-box;
  border-top: 1px #666666 solid;
  width: 100%;

  &:hover{ border: 2px #999999 solid; }
  &:active{color: blue;}
}

.buttons{
  @extend %placeholder;
  color: #4285f4;
}
.btn{
  @extend %placeholder;
}
```
::: details 点击查看编译
```css
.btn, .buttons{
  box-sizing: border-box;
  border-top: 1px #666666 solid;
  width: 100%;
}
.btn:hover, .buttons:hover{
  border: 2px solid;
}
.btn:active, .buttons:active{
  color: blue;
}

.buttons{
  color: #4285f4;
}
```
:::

## 在 @media 中使用 @extend
如果你需要在 `@media` 中使用继承，一定要注意使用方式！如果你在外部定义样式，然后在 `@media` 内部继承外部的样式，Sass 是会报错的。我们首先举个**错误的例子**看下
```scss
.error{
  border: 1px red solid;
  background-color: red;
}

@media screen and (max-width: 600px) {
  .btn-error{
    @extend .error; //错误用法 // [!code error]
  }
}
```
正确写法
```scss {2-5,7}
@media screen and (max-width: 600px) {
  .error{
    border: 1px red solid;
    background-color: red;
  }
  .btn-error{
    @extend .error;
  }
}
```
::: details 点击查看编译
```css
@media screen and (max-width: 600px) {
  .error, .btn-error{
    border: 1px red solid;
    background-color: red;
  }
}
```
:::
