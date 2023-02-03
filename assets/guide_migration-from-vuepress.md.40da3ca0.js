import{_ as e,o as a,c as s,a as t}from"./app.4bdf97d5.js";const f=JSON.parse('{"title":"Migration from VuePress","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-vuepress.md","lastUpdated":1675440642000}'),o={name:"guide/migration-from-vuepress.md"},r=t(`<h1 id="migration-from-vuepress" tabindex="-1">Migration from VuePress <a class="header-anchor" href="#migration-from-vuepress" aria-hidden="true">#</a></h1><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><h3 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-hidden="true">#</a></h3><p>The sidebar is no longer automatically populated from frontmatter. You can <a href="https://github.com/vuejs/vitepress/issues/572#issuecomment-1170116225" target="_blank" rel="noreferrer">read the frontmatter yourself</a> to dynamically populate the sidebar. <a href="https://github.com/vuejs/vitepress/issues/96" target="_blank" rel="noreferrer">Additional utilities for this</a> may be provided in the future.</p><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-hidden="true">#</a></h2><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-hidden="true">#</a></h3><p>Unlike VuePress, VitePress handles <a href="./asset-handling#base-url"><code>base</code></a> of your config automatically when you use static image.</p><p>Hence, now you can render images without <code>img</code> tag.</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &lt;img :src=&quot;$withBase(&#39;/foo.png&#39;)&quot; alt=&quot;foo&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> ![foo](/foo.png)</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For dynamic images you still need <code>withBase</code> as shown in <a href="./asset-handling#base-url">Base URL guide</a>.</p></div><p>Use <code>&lt;img.*withBase\\(&#39;(.*)&#39;\\).*alt=&quot;([^&quot;]*)&quot;.*&gt;</code> regex to find and replace it with <code>![$2]($1)</code> to replace all the images with <code>![](...)</code> syntax.</p><hr><p>more to follow...</p>`,13),i=[r];function n(d,c,l,p,h,u){return a(),s("div",null,i)}const g=e(o,[["render",n]]);export{f as __pageData,g as default};
