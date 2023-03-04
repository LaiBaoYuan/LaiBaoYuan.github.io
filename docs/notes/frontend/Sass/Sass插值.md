---
title: Sass 插值
---
::: tip 前言
在很多编程器语言中都有插值这个概念，在 Sass 样式表的任何地方几乎都可以使用插值，你可以将这些包裹在 #{} 中来使用，所以记住在 Sass 中使用插值的方式是 #{} ，本节我们一起来看一下插值在 Sass 中的使用场景以及它的语法～
:::

## 语法示例
```scss
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name}{ // 使用了插值
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0; // 使用了插值
    #{$left-or-right}: 0; // 使用了插值
  }
}

@include corner-icon("mail", top, left);
```
::: details 点击查看编译
```css
.icon-mail{
  background-image: url("/icons/mail.svg");
  position: absolute;
  top: 0;
  left: 0;
}
```
:::

## 在选择器中使用
```scss
$name: item;
.ul-#{$name}{ // 使用插值
  width: 200px;
  .li-#{$name}{ // 使用插值
    width: 100%;
  }
}
.box-#{$name}{ // 使用插值
  height:100px;
  .#{$name}{ // 使用插值
    height:100%;
  }
}
```
::: details 点击查看编译
```css
.ul-item{
  width: 200px;
}
.ul-item .li-item{
  width: 100%;
}

.box-item{
  height: 100px;
}
.box-item .item{
  height: 100%;
}
```
:::

## 在属性名中使用
```scss
$name: color;
$position: top;
body{
  background-#{$name}: red;
  border-#{$name}: blue;
  padding-#{$position}: 5px;
  margin-#{$position}: 10px;
  #{$position}: 20px;
}
```
::: details 点击查看编译
```css
body{
  background-color: red;
  border-color: blue;
  padding-top: 5px;
  margin-top: 10px;
  top: 20px;
}
```
:::

## 在属性值中使用
```scss
$one: 20px;
$two: 2;
$family: "UaTy";
div{
  margin: $one / $two; // 除法运算
  margin: #{$one} / #{$two}; // 分隔
  font-family: "MyFo #{$family}"; // 带引号的字符串会转换为不带引号
  width: calc(100% - $one * 2 *$two); // calc函数中内容会被当作字符串处理
  width: calc(100% - #{$one * 2 *$two}); // calc函数中插值的内容会进行运算
}
```
::: details 点击查看编译
```css
div{
  margin: 10px;
  margin: 20px/2;
  font-family: "MyFo UaTy";
  background-image: url(http://xxx.xxx.xxx/a.jpg);
  width: calc(100% - $one * 2 *$two);
  width: calc(100% - 80px);
}
```
:::


## 在注释中使用
```scss
/* 在注释中使用插值:
 * 2 + 2 = #{2 + 2} */
/* #{9 + 8 * 2} */
```
::: details 点击查看编译
```css
/* 在注释中使用插值:
 * 2 + 2 = 4 */
/* 25 */
```
:::

