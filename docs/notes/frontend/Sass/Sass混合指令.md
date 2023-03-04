---
title: Sass 混合指令
---
## 什么是 Sass 混合指令
混合指令的出现使你可以定义在样式表中重复使用的样式，这可以使你免去编写过多重复的样式，而且在混合指令 @mixin 中你也可以做一些逻辑处理。混合指令是一个很好用的指令，它将帮你更合理的维护样式代码，学会这种方式写起样式来也很便利，下面我们开始详细的讲解它。

## 定义和引用混合指令
```scss
// 不接收参数的混合指令
@mixin border{
  border:{
    width: 1px;
    color: #cccccc;
    style: solid;
  }
}
// 接收参数的混合指令
@mixin font($size: 12px, $weight: 100) {
  font:{
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
.box{
  // 引用混合指令
  @include border;
}
.item{
  // 引用混合指令并传参
  @include font(20px, 500);
}
```
::: details 点击查看编译
```css
.box{
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
}

.item{
  font-family: "Myfont";
  font-weight: 500;
  font-size: 20px;
}
```
:::

## 混合指令的参数
```scss
// 没有赋默认值的参数
@mixin font-one($size, $weight) {
  font:{
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
// 赋默认值的参数
@mixin font($size: 12px, $weight: 100) {
  font:{
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
.item{
  // 按名称传入参数
  @include font-one(20px, $weight: 800);
}
```
::: details 点击查看编译
```css
.item{
  font-family: "Myfont";
  font-weight: 800;
  font-size: 20px;
}
```
:::
有时候 @mixin 接收的参数个数你可能不不清楚有多少个，那么你可以**将最后一个参数以 `…` 结尾**，那么所有额外的参数都将传给该参数，然后在 @mixin 里来获取所有参数
```scss
@mixin fonts($s, $familys...) {
  font:{
    size: $s;
    family: $familys;
  }
}
.p{
  @include fonts(12px, "one", "two", "three")
}
```
::: details 点击查看编译
```css
.p{
  font-size: 12px;
  font-family: "one", "two", "three";
}
```
:::

## 导入内容到混合指令
@mixin 指令除了可以接收参数外，还可以接收样式块，我们也称之为内容块。在 `@mixin` 中可以使用 `@content` 来声明接收的内容块，内容块是通过 `{}` 的方式传入的，然后会注入到 `@content` 所在的位置。
```scss {3,9-11}
@mixin hover{
  &:hover{
    @content;
  }
}

.button{
  border: 1px solid black;
  @include hover{
    border-width: 2px;
  }
}
```
::: details 点击查看编译
```css
.button{
  border: 1px solid black;
}
.button:hover{
  border-width: 2px;
}
```
:::

## 实战经验
实际项目中有专门的 mixin.scss 文件来管理全局的 @mixin 指令
```scss
@mixin border ($width: 1px, $color: #cccccc, $style: solid) {
  border:{
    width: $width;
    color: $color;
    style: $style;
  }
}
@mixin font($size: 12px, $weight: 100, $familys...) {
  $family: "Times";
  @if length($familys) > 0{
    $family: $familys;
  }
  font:{
    size:$size;
    weight: $weight;
    family: $family;
  }
}

@mixin btn($type: "main") {
  border-radius: 4px;
  @if $type == "small"{
    width: 60px;
    height: 20px;
    background-color: #e5e5e5;
    color: #ffffff;
    &:hover{
      background-color: #4AA1FF;
    }
  } @else if $type == "disable"{
    width: 80px;
    height: 30px;
    background-color: #CCCCCC;
    color: #ffffff;
  } @else {
    width: 80px;
    height: 30px;
    background-color: #e5e5e5;
    color: #ffffff;
    &:hover{
      background-color: #4AA1FF;
    }
  }
}
```
具体用法
```scss
// 使用 border 混合指令
.normal-border{
  @include border;
}
.error-border{
  @include border(2px, red, solid);
}
// 使用 font 混合指令
.main{
  @include font(24px);
  .item{
    @include font(16px, 600, "serif", "Roman", "Times");
  }
}
//  使用 button 混合指令
.btn{
  &-main{
    @include btn(); 
  }
  &-disable{
    @include btn("disable");
  }
  &-small{
    @include btn("small");
  }
}
```

