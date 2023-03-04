---
title: Sass 扩展
---

## @forward
`@forward` 的工作原理和 `@use` 基本相同，都是用于加载文件内容的，不过 `@forward` 可以跨多个文件来组成一个 Sass 库，一般在写一个开源的 Sass 样式库的时候你可能会用到它，在项目中是不常用的。
```scss
// src/a.scss
@mixin bor{
	width: 100px;
	height: 100px;
}

// b.scss
@forward 'src/a';

// c.scss
@use "b";
li {
	// 应用 a.scss 文件中的 mixin
	@include b.bor;
}
```

## @error
`@error` 规则在此处是第一次讲解，它是干嘛用的呢？在编写 Sass 函数或者 mixin 的时候，通常需要确保这些能提供正确的类型或者格式，如果没有的时候需要通知用户并停止函数或 mixin 的运行，这时就用到的 `@error `，我的理解是它就像我们写 javascript 时用到的 `throw new Error()`
```scss
@function my($str) {
	@if $str != 'a' || $str != 'b'{
		// 此处会抛出错误信息并停止函数的运行
		@error "This is a error！"
	}
}
```

## @warn
上面我们讲了 `@error` ，`@warn` 和它的使用方式是相同的，不同的是 `@warn` 是打印信息，以及指示当前的函数或 mixin 的调用堆栈追踪，**并不会停止函数或 mixin 的运行**
```scss
@function my($str) {
	@if $str != 'a' || $str != 'b'{
		// 此处不会停止函数的运行
		@warn "This is a message！"
	}
}
```

## @debug
一看这个 debug 我们就知道，它是用来调试的，在 javascript 中也是这样。在 Sass 中我们可以使用 `@debug` 来打印表达式的值以及文件名和行号，这仅是在你开发时期调试用，对实际的样式并没有什么太大的帮助，你只要记住需要调试 Sass 代码就用它，不过一般我们在实际的项目中使用它是很少很少的。

## @at-root
回一下前面的章节中我们讲解的 Sass 嵌套，很常用的功能。在使用嵌套的时候你可以使用 @at-root 取消嵌套规则
```scss
.a{
  width: 300px;
  .b{
    width: 200px;
  }
  .c{
    width: 100px;
    // 取消嵌套规则
    @at-root .f {
      width: 20px;
    }
  }
  // 取消嵌套规则
  @at-root .e {
    width: 50px;
  }
}
```
::: details 点击查看编译
```css {11-16}
.a{
  width: 300px;
}
.a .b{
  width: 200px;
}
.a .c{
  width: 100px;
}

.f{
  width: 20px;
}
.e{
  width: 50px;
}
```
:::