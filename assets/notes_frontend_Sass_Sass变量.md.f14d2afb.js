import{_ as s,c as a,o as n,d as l}from"./app.a67d7360.js";const u=JSON.parse('{"title":"Sass 变量","description":"","frontmatter":{"title":"Sass 变量"},"headers":[],"relativePath":"notes/frontend/Sass/Sass变量.md","lastUpdated":1678115149000}'),p={name:"notes/frontend/Sass/Sass变量.md"},o=l(`<h2 id="声明和引用变量" tabindex="-1">声明和引用变量 <a class="header-anchor" href="#声明和引用变量" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula has-highlighted-lines"><code><span class="line highlighted"><span style="color:#6272A4;">// 定义变量</span></span>
<span class="line highlighted"><span style="color:#F8F8F2;">$variable</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4;">// 使用变量</span></span>
<span class="line"><span style="color:#50FA7B;font-style:italic;">.title</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> $variable;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> $variable;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>点击查看编译</summary><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dracula"><code><span class="line"><span style="color:#50FA7B;font-style:italic;">.title</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="变量的作用域" tabindex="-1">变量的作用域 <a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">$main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">// 全局变量</span></span>
<span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  $main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">// 局部变量</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;">$main-color;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#FF79C6;">h2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;">$main-color;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>点击查看编译</summary><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6;">h2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="global-标识符" tabindex="-1">!global 标识符 <a class="header-anchor" href="#global-标识符" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula has-highlighted-lines"><code><span class="line"><span style="color:#F8F8F2;">$main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line highlighted"><span style="color:#F8F8F2;">  $main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;"> !global; </span><span style="color:#6272A4;">// 局部变量转全局变量</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;">$main-color;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#FF79C6;">h2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;">$main-color;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>点击查看编译</summary><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6;">h2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="default-标识符" tabindex="-1">!default 标识符 <a class="header-anchor" href="#default-标识符" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula has-highlighted-lines"><code><span class="line"><span style="color:#F8F8F2;">$main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">// 假如这个是其他开发者自己声明的</span></span>
<span class="line highlighted"><span style="color:#F8F8F2;">$main-color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">green</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">!default</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">// 假如这个是你的代码片段声明的</span></span>
<span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;">$main-color;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>点击查看编译</summary><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">h1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">color</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div></details>`,12),e=[o];function c(F,t,r,y,i,d){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
