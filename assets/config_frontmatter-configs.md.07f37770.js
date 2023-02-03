import{_ as s,o as a,c as n,a as l}from"./app.4bdf97d5.js";const F=JSON.parse('{"title":"Frontmatter Configs","description":"","frontmatter":{},"headers":[],"relativePath":"config/frontmatter-configs.md","lastUpdated":1675441324000}'),e={name:"config/frontmatter-configs.md"},o=l(`<h1 id="frontmatter-configs" tabindex="-1">Frontmatter Configs <a class="header-anchor" href="#frontmatter-configs" aria-hidden="true">#</a></h1><p>Frontmatter enables page based configuration. On every markdown, you&#39;re free to add Any settings to override any global app or theme configs. Also, there are configs which you can only define in Frontmatter.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><p>You may access frontmatter by <code>$frontmatter</code> helper inside any markdown file.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{ $frontmatter.title }}</span></span>
<span class="line"></span></code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li></ul><p>Title for the page. It&#39;s same as <a href="./../config/app-configs#title">config.title</a>, and it overrides the app config.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="titletemplate" tabindex="-1">titleTemplate <a class="header-anchor" href="#titletemplate" aria-hidden="true">#</a></h2><ul><li>Type: <code>string | boolean</code></li></ul><p>The suffix for the title. It&#39;s same as <a href="./../config/app-configs#titletemplate">config.titleTemplate</a>, and it overrides the app config.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#F07178;">titleTemplate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite &amp; Vue powered static site generator</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li></ul><p>Description for the page. It&#39;s same as <a href="./../config/app-configs#description">config.description</a>, and it overrides the app config.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-hidden="true">#</a></h2><ul><li>Type: <code>HeadConfig[]</code></li></ul><p>Specify extra head tags to be injected:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">meta</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">description</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">meta</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keywords</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">super duper SEO</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeadConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to display <a href="./../guide/theme-last-updated">Last Updated</a> text in the current page.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">lastUpdated</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h2><ul><li>Type: <code>doc | home | page</code></li><li>Default: <code>doc</code></li></ul><p>Determines the layout of the page.</p><ul><li><code>doc</code> - It applies default documentation styles to the markdown content.</li><li><code>home</code> - Special layout for &quot;Home Page&quot;. You may add extra options such as <code>hero</code> and <code>features</code> to rapidly create beautiful landing page.</li><li><code>page</code> - Behave similar to <code>doc</code> but it applies no styles to the content. Useful when you want to create a fully custom page.</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doc</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="hero" tabindex="-1">hero <a class="header-anchor" href="#hero" aria-hidden="true">#</a></h2><ul><li>Type: <code>Hero</code></li></ul><p>This option only takes effect when <code>layout</code> is set to <code>home</code>.</p><p>It defines contents of home hero section.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">hero</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Get Started</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alt</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">View on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hero</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// The string shown top of \`text\`. Comes with brand color</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and expected to be short, such as product name.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// The main text for the hero section. This will be defined</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// as \`h1\` tag.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Tagline displayed below \`text\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Action buttons to display in home hero section.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeroAction</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeroAction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Color theme of the button. Defaults to \`brand\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">brand</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Label of the button.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Destination link of the button.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="features" tabindex="-1">features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Type: <code>Feature[]</code></li></ul><p>This option only takes effect when <code>layout</code> is set to <code>home</code>.</p><p>It defines items to display in features section.</p><p>You may learn more about it in <a href="./../guide/theme-home-page">Theme: Home Page</a>.</p><h2 id="aside" tabindex="-1">aside <a class="header-anchor" href="#aside" aria-hidden="true">#</a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If you want the right aside component in <code>doc</code> layout not to be shown, set this option to <code>false</code>.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="outline" tabindex="-1">outline <a class="header-anchor" href="#outline" aria-hidden="true">#</a></h2><ul><li>Type: <code>number | [number, number] | &#39;deep&#39; | false</code></li><li>Default: <code>2</code></li></ul><p>The levels of header in the outline to display for the page. It&#39;s same as <a href="./../config/theme-configs#outline">config.themeConfig.outline</a>, and it overrides the theme config.</p>`,49),p=[o];function t(c,r,i,y,d,C){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{F as __pageData,h as default};
