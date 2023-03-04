---
title: Sass 数据类型
---
::: tip 前言
`Sass`共有 7 种数据类型，分别是 `Number` 类型、`Boolean` 类型、`String` 类型、`Colors` 类型、`Lists` 类型、 `Maps` 类型和 `Null` 类型
:::

## Number 类型（数字类型）
```scss
$main-height: 80px; // 带有单位的 Number 类型
$main-flex-grow: 1; // 不带单位的 Number 类型
$main-num: 5e3; // 使用科学计数法的数字
$main-max-height: 2 * 80px; // 运算
.box{
  height: $main-height;
  flex-grow: $main-flex-grow;
  width: $main-num;
  max-height: $main-max-height;
}
```
::: details 点击查看编译
```css
.box{
  height: 80px;
  flex-grow: 1;
  width: 5000;
  max-height: 160px;
}
```
:::


## Boolean 类型（布尔类型）
```scss
@use "sass:math";

@debug 1px == 2px; // false
@debug 1px == 1px; // true
@debug 10px < 3px; // false
@debug math.comparable(100px, 3in); // true
```

## String 类型（字符串类型）
```scss
$string-one: 'LBY'; // 带引号的字符串
$string-two: LBY; // 不带引号的字符串
$string-three: '\"LBY'; // 使用转义符的字符串
.box{
 font:$string-one; 
 font-family: $string-two;
 font: $string-three;
}
```
::: details 点击查看编译
```css
.box{
  font: "Yahei";
  font-family: Yahei;
  font: '"yahei';
}
```
:::


## Colors类型（颜色类型）
```scss
$color-one: #ffffff;
$color-two: red;
$color-three: rgb(204, 102, 153);
$color-four: rgba(107, 113, 127, 0.8);
.box{
  color: $color-one;
  background-color: $color-two;
  border-color: $color-three;
  color: $color-four;
}
```
::: details 点击查看编译
```css
.box{
  color: #ffffff;
  background-color: red;
  border-color: #cc6699;
  color: rgba(107, 113, 127, 0.8);
}
```
:::


## Lists 类型（列表类型）
```scss
$font-list: 'Georgia','Serif'; // 通过逗号分隔元素
$border-list: 1px 2px 3px 4px; // 通过空格分隔元素
$padding-list: 3px,3px 4px 4px; // 混用(不建议)
```

## Maps 类型
```scss
$textStyleMap: (
  'font-family': 'Georgia',
  'font-weight': 600,
  'font-size': 18px,
  'text-align': center
);
p{
  font-family: map-get($textStyleMap, 'font-family');
  font-weight: map-get($textStyleMap, 'font-weight');
  font-size: map-get($textStyleMap, 'font-size');
  text-align: map-get($textStyleMap, 'text-align');
}
```
::: details 点击查看编译
```css
p{
  font-family: "Georgia";
  font-weight: 600;
  font-size: 18px;
  text-align: center;
}
```
:::


## Null 类型
在 Sass 中 Null 类型只有一个值 null ，这也和 javascript 中的 null 类似，在 Sass 中它表示缺少值，通常由函数返回。如果说在列表中有 null ，那么在生成 CSS 的时候会忽略该空值，你需要知道在 Sass 的数据类型中有这个。