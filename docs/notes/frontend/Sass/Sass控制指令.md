---
title: Sass 控制指令
---
## 什么是 Sass 控制指令
控制指令，故名思义它是通过条件来控制某些逻辑的，提到条件你首先肯定想到了 if ，没错这是 Sass 控制指令的一种，除了这个还有循环，所以 Sass 一共为我们提供了 4 种控制指令，它们分别是：
- @if 指令
- @each 指令
- @for 指令
- @while 指令

## 语法详情
```scss
// 判断class长度范围
@function classLong($class, $max) {
  $leng: str-length($class);
  @if $leng > $max{
    @return true;
  } @else {
    @return false;
  }
}
```

## @if 指令
```scss
@mixin avatar($size, $circle: false) {
    height: $size;
    @if $circle {
        width: $size / 2;
    }
}
.square {
    @include avatar(100px, $circle: true);
}
```
::: details 点击查看编译
```css
.square{
    height: 100px;
    width: 50px;
}
```
:::

## @else 和 @else if 指令
```scss
@mixin avatar($size, $circle: 1) {
    height: $size;

    @if $circle == 1 {
        width: $size / 2;
    } @else if $circle == 2 {
        width: $size / 5;
    } @else {
        width: $size;
    }
}
.a {
    @include avatar(100px);
}
.b {
    @include avatar(100px, $circle: 2);
}
.c {
    @include avatar(100px, $circle: 3);
}
```
::: details 点击查看编译
```css
.a{
    height: 100px;
    width: 50px;
}
.b{
    height: 100px;
    width: 20px;
}
.c{
    height: 100px;
    width: 100px;
}
```
:::

## @each 指令
@each 指令一般用来循环一个列表或 Map ，它的写法是这样的 `@each var in { … }`，这其中 expression 表达式返回一个列表或者直接就是一个列表，var 是列表中的每一项，{} 中是每次循环都会执行的代码
```scss
$borders: 2px, 3px, 5px;

@each $bor in $borders{
  .border-#{$bor}{
    border:$bor solid;
  }
}
```
::: details 点击查看编译
```css
.border-2px{
  border: 2px solid;
}

.border-3px{
  border: 3px solid;
}

.border-5px{
  border: 5px solid;
}
```
:::

## @for 指令
它有两种写法 `@for from to { … }` 或者 `@for from through { … }`，这两种写法中variable 都是每次循环时候的数值，start 都表示开始的边界，end 都表示结束的边界；

这两种写法不同的是 `through` 包含 `start` 与 `end` ，而 `to` 包含 `start` 但不包含 `end`。文字描述难免有些抽象
- `through`的写法
```scss
$base-color: #036;

// 范围是 1 ~ 3
@for $i from 1 through 3{
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```
::: details 点击查看编译
```css
ul:nth-child(3n+1){
  background-color: #004080;
}

ul:nth-child(3n+2){
  background-color: #004d99;
}

ul:nth-child(3n+3){
  background-color: #0059b3;
}
```
:::
- `to`的写法
```scss
$base-color: #036;

@for $i from 1 to 3{
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```
::: details 点击查看编译
```css
ul:nth-child(3n+1){
  background-color: #004080;
}

ul:nth-child(3n+2){
  background-color: #004d99;
}
```
:::

## @while 指令
```scss
$num: 4;
@while $num >= 1{
  .box-#{$num}{
    font-weight: 100 * $num;
  }
  $num: $num - 1;
}
```
::: details 点击查看编译
```css
.box-4{
  font-weight: 400;
}

.box-3{
  font-weight: 300;
}

.box-2{
  font-weight: 200;
}

.box-1{
  font-weight: 100;
}
```
:::

## 实战经验
实战需求是将视口分为 `12` 等份，然后根据不同的 class 类名来为其宽度设置不同的百分比，这很像其他 UI 库中的栅格系统，我们是这样在项目中实现的
```scss
@for $i from 0 through 12{
  .width-#{$i}{
    width: (1 / 12 * $i) * 100%;
  }
}
```
::: details 点击查看编译
```css
.width-0{
  width: 0%;
}

.width-1{
  width: 8.3333333333%;
}

.width-2{
  width: 16.6666666667%;
}

.width-3{
  width: 25%;
}

.width-4{
  width: 33.3333333333%;
}

.width-5{
  width: 41.6666666667%;
}

.width-6{
  width: 50%;
}

.width-7{
  width: 58.3333333333%;
}

.width-8{
  width: 66.6666666667%;
}

.width-9{
  width: 75%;
}

.width-10{
  width: 83.3333333333%;
}

.width-11{
  width: 91.6666666667%;
}

.width-12{
  width: 100%;
}
```
:::
