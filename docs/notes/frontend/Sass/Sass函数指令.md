---
title: Sass 函数指令
---
## 什么是 Sass 函数指令
函数指令也叫自定义函数让你可以容易的处理各种逻辑和定义复杂的操作，而且你可以在任何需要的地方复用函数，这使得我们可以抽离出来一些常见的公式或者逻辑
```scss
// 定义函数
@function a() {
  @return "a"
}
// 使用函数
.p{
  font: a();
}
```

## 函数的参数
```scss
// 有默认值的参数
@function a($arg: 1) {
  @return $arg;
}
// 无默认值的参数
@function b($arg) {
  @return $arg;
}
.p{
  font: a();
  font: b(4);
}
```
::: details 点击查看编译
```css
.p{
  font: 1;
  font: 4;
}
```
:::

## @return
在 Sass 中 `@return` 指令只能在 `@function` 中使用，并且每个 `@function` 都必须以 `@return` 结尾！ 在 `@function` 的逻辑代码中，如遇到 `@return` 会立即结束函数并返回其结果
```scss
@function a($str: "a") {
  @if $str == "a"{
    @return 10px;
  } @else if $str == "b"{
    @return 20px;
  } @else if $str == "c"{
    @return 30px;
  } @else {
    @return 40px;
  }
}

p{
  padding: a();
  width: a("f");
  height: a("c");
  margin: a("b");
}
```
::: details 点击查看编译
```css
p{
  padding: 10px;
  width: 40px;
  height: 30px;
  margin: 20px;
}
```
:::