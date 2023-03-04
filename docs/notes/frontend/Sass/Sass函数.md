---
title: Sass 函数
---
::: tip 前言
Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：
- 字符串函数
- 数字函数
- 列表函数
- Introspection函数
- 条件函数
- Map 函数
- 颜色函数
:::

## 语法示例
```scss
$list: [1,2,4,5];
$string: 'string';
$substring: 'str';

.box{
  font-size:length($list); // 列表函数
  font: quote($string); // 字符串函数
  font: str-index($string, $substring); // 字符串函数
  color: adjust-hue(#6b717f, 60deg); // 颜色函数
  border-width: ceil(4.2); // 数字函数
  width: percentage(.7); // 数字函数
  font: type-of(#676767); // Introspection函数
}
```
::: details 点击查看编译
```css
.box{
  font-size: 4;
  font: "string";
  font: 1;
  color: #796b7f;
  border-width: 5;
  width: 70%;
  font: color;
}
```
:::

## 字符串函数
### quote ($ string) 和 unquote($ string)
quote($string) 函数的返回结果是**以带引号的形式返回你传入的字符串**，反之 unquote($string) 函数的返回结果**是以不带引号的形式返回你传入的字符串**
```scss
string.quote(aaa) //=> "aaa"
unquote("bbb")  //=> bbb
```
### str-index($string, $substring)
获取字符串索引
```scss
str-index("abcde", "a") //=> 1
str-index("abcde", "c") //=> 3
```
### str-insert($string, $insert, $index)
```scss
str-insert("abcde", "j", 1)  //=> "jabcde"
str-insert("abcde", "j", 4)  //=> "abcjde"
str-insert("abcde", "j", 100)  //=> "abcdej"
str-insert("abcde", "j", -20)  //=> "jabcde"
```
### str-length($string)
```scss
str-length("abcde")  //=> 5
```

### str-slice($string, $start-at, $end-at)
```scss
str-slice("abcde", 1, 2)  //=> "ab"
str-slice("abcde", 2, 4)  //=> "bcd"
```

### to-upper-case($string) 和 to-lower-case($string)
```scss
to-upper-case("abcde") //=> "ABCDE"  转为大写
to-upper-case("Abc")  //=> "ABC"  转为大写
to-lower-case("ABC")  //=> "abc"  转为小写
to-lower-case("Abc")  //=> "abc"  转为小写
```

### unique-id()
unique-id() 函数会返回一个随机的字符串
```scss
unique-id()  //=> urgdjis
```
