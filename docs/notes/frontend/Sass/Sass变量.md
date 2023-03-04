---
title: Sass 变量
---
## 声明和引用变量
```scss{1-2}
// 定义变量
$variable: red;

// 使用变量
.title{
  color: $variable;
}
h1{
  color: $variable;
}
```

::: details 点击查看编译
```css
.title{
  color: red;
}
h1{
  color: red;
}
```
:::

## 变量的作用域
```scss
$main-color: red; // 全局变量
h1{
  $main-color: green; // 局部变量
  color:$main-color;
}
h2{
  color:$main-color;
}
```

::: details 点击查看编译
```css
h1{
  color: green;
}

h2{
  color: red;
}
```
:::

## !global 标识符
```scss {3}
$main-color: red;
h1{
  $main-color: green !global; // 局部变量转全局变量
  color:$main-color;
}
h2{
  color:$main-color;
}
```

::: details 点击查看编译
```css
h1{
  color: green;
}

h2{
  color: green;
}
```
:::

## !default 标识符
```scss {2}
$main-color: red; // 假如这个是其他开发者自己声明的
$main-color: green !default; // 假如这个是你的代码片段声明的
h1{
  color:$main-color;
}
```

::: details 点击查看编译
```css
h1{
  color: red;
}
```
:::

