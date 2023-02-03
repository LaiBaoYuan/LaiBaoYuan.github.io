import{_ as s,o as a,c as n,a as e}from"./app.4bdf97d5.js";const C=JSON.parse('{"title":"Carbon Ads","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-carbon-ads.md","lastUpdated":1675440642000}'),o={name:"guide/theme-carbon-ads.md"},l=e(`<h1 id="carbon-ads" tabindex="-1">Carbon Ads <a class="header-anchor" href="#carbon-ads" aria-hidden="true">#</a></h1><p>VitePress has built in native support for <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon Ads</a>. By defining the Carbon Ads credentials in config, VitePress will display ads on the page.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">carbonAds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your-carbon-code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">placement</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your-carbon-placement</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>These values are used to call carbon CDN script as shown below.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">//cdn.carbonads.com/carbon.js?serve=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&amp;placement=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">placement</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"></span></code></pre></div><p>To learn more about Carbon Ads configuration, please visit <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon Ads website</a>.</p>`,6),p=[l];function t(r,c,i,D,d,y){return a(),n("div",null,p)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
