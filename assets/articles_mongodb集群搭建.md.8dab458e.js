import{_ as s,c as n,o as a,a as l}from"./app.fb84bbb4.js";const m=JSON.parse('{"title":"Mongodb 集群搭建","description":"","frontmatter":{"title":"Mongodb 集群搭建"},"headers":[],"relativePath":"articles/mongodb集群搭建.md","lastUpdated":1677921063000}'),o={name:"articles/mongodb集群搭建.md"},p=l(`<div class="tip custom-block"><p class="custom-block-title">前言</p><p>hello大家好!，我是<code>元宝</code>，最近开发遇到一个问题，也就是工作中后端会常常遇到的一个问题，如何保证事务的<strong>原子性</strong>。由于涉及到许多操作，例如用docker搭建mongo集群、mongo配置，特此记录一下🥹</p></div><h2 id="atomicity-原子性" tabindex="-1">Atomicity 原子性 <a class="header-anchor" href="#atomicity-原子性" aria-hidden="true">#</a></h2><p>保证事务中所有要执行的操作<strong>要么同时成功</strong>，<strong>要么同时失败</strong>，即使其中一个操作出现问题，其他的上下操作都不会执行成功。</p><p>例如，订单提交的时候，如果消费者使用了优惠券，我们会开启一个事物来执行两部操作：</p><ul><li>优惠券数量减1</li><li>提交订单</li></ul><p><strong>如果优惠券减1操作失败了会直接抛出错误，而不会提交订单</strong>。以下是一个简单事例</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">router.</span><span style="color:#50FA7B;">get</span><span style="color:#F8F8F2;">(</span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">/test</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#FF79C6;">async</span><span style="color:#F8F8F2;"> (</span><span style="color:#FFB86C;font-style:italic;">req</span><span style="color:#F8F8F2;">, </span><span style="color:#FFB86C;font-style:italic;">res</span><span style="color:#F8F8F2;">) </span><span style="color:#FF79C6;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> session </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">await</span><span style="color:#F8F8F2;"> mongoose.</span><span style="color:#50FA7B;">startSession</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  session.</span><span style="color:#50FA7B;">startTransaction</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#FF79C6;">try</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FF79C6;">await</span><span style="color:#F8F8F2;"> user.</span><span style="color:#50FA7B;">findByIdAndUpdate</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#F8F8F2;">      req.userId,</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        coupon</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">          num</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">            $inc</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">-</span><span style="color:#BD93F9;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          },</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        session,</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    )</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FF79C6;">await</span><span style="color:#F8F8F2;"> order.</span><span style="color:#50FA7B;">findByIdAndUpdate</span><span style="color:#F8F8F2;">(req.body._id, { status</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">SUCCESS</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;"> }, { session })</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FF79C6;">await</span><span style="color:#F8F8F2;"> session.</span><span style="color:#50FA7B;">commitTransaction</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    res.</span><span style="color:#50FA7B;">sendStatus</span><span style="color:#F8F8F2;">(</span><span style="color:#BD93F9;">200</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  } </span><span style="color:#FF79C6;">catch</span><span style="color:#F8F8F2;"> (error) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    res.</span><span style="color:#50FA7B;">status</span><span style="color:#F8F8F2;">(</span><span style="color:#BD93F9;">500</span><span style="color:#F8F8F2;">).</span><span style="color:#50FA7B;">send</span><span style="color:#F8F8F2;">(error)</span></span>
<span class="line"><span style="color:#F8F8F2;">  } </span><span style="color:#FF79C6;">finally</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    session.</span><span style="color:#50FA7B;">endSession</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="question" tabindex="-1">Question <a class="header-anchor" href="#question" aria-hidden="true">#</a></h2><p>如果上面的代码开启事务就会报下面这个<strong>bug</strong></p><blockquote><p>Transaction numbers are only allowed on a replica set member or mongos</p></blockquote><p>这个问题是说mongo的事务只允许在<strong>集群</strong>上开启 有两种解决方案：</p><ul><li>全局安装npm模块<code>run-rs</code>，这个模块会帮你搭建一个mongo集群，<strong>只能用于测试</strong></li><li>在你所在的环境中搭建<strong>mongo集群</strong></li></ul><p>由于我要用于生产，我肯定不能选用第一种，但是元宝我又是穷鬼，怎么可能买这么多服务器来搭建集群，虚拟机的话mac m1不兼容，于是用了docker来搭建</p><h2 id="replica-set" tabindex="-1">Replica Set <a class="header-anchor" href="#replica-set" aria-hidden="true">#</a></h2><p>中文翻译叫做<strong>副本集</strong>，mongo中的集群也叫副本集，其实简单来说就是集群当中包含了多份数据，保证主节点挂掉了，备节点能继续提供数据服务，提供的前提就是数据需要和主节点一致。</p><p><img src="https://aliyun.workdomain.cloud/github/image-20230304155613879.png" alt=""> Mongodb(M)表示主节点，Mongodb(S)表示备节点，Mongodb(A)表示仲裁节点。主备节点存储数据，仲裁节点不存储数据。客户端同时连接主节点与备节点，不连接仲裁节点。</p><h2 id="搭建集群" tabindex="-1">搭建集群 <a class="header-anchor" href="#搭建集群" aria-hidden="true">#</a></h2><ol><li>创建一个三个节点，对应三个文件夹</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula"><code><span class="line"><span style="color:#6272A4;">#三个目录分别对应主，备，仲裁节点</span></span>
<span class="line"><span style="color:#F8F8F2;">mkdir </span><span style="color:#BD93F9;">-p</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">/mongodb/master/db</span></span>
<span class="line"><span style="color:#F8F8F2;">mkdir </span><span style="color:#BD93F9;">-p</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">/mongodb/slaver/db</span></span>
<span class="line"><span style="color:#F8F8F2;">mkdir </span><span style="color:#BD93F9;">-p</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">/mongodb/arbiter/db</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>创建日志文件</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/master/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/slaver/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/arbiter/mongo.log</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>创建配置文件</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/master/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/slaver/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">touch </span><span style="color:#F1FA8C;">/mongodb/arbiter/mongo.conf</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>编辑配置文件</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">systemLog:</span></span>
<span class="line"><span style="color:#6272A4;"># 日志存放</span></span>
<span class="line"><span style="color:#F8F8F2;">  destination: </span><span style="color:#F1FA8C;">file</span></span>
<span class="line"><span style="color:#F8F8F2;">  path: </span><span style="color:#F1FA8C;">/data/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">  logAppend: </span><span style="color:#BD93F9;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">storage:</span></span>
<span class="line"><span style="color:#6272A4;"># 数据存放地址</span></span>
<span class="line"><span style="color:#F8F8F2;">  dbPath: </span><span style="color:#F1FA8C;">/data/db</span></span>
<span class="line"><span style="color:#F8F8F2;">  directoryPerDB: </span><span style="color:#BD93F9;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">net:</span></span>
<span class="line"><span style="color:#6272A4;"># 主27017 从27018 仲27019，三个配置文件修改成对应的端口号</span></span>
<span class="line"><span style="color:#F8F8F2;">  port: </span><span style="color:#BD93F9;">27017</span></span>
<span class="line"><span style="color:#F8F8F2;">  bindIp: </span><span style="color:#F1FA8C;">0.0.0.0</span></span>
<span class="line"><span style="color:#F8F8F2;">replication:</span></span>
<span class="line"><span style="color:#6272A4;"># 副本集的名字，三个节点必须保持一致</span></span>
<span class="line"><span style="color:#F8F8F2;">  replSetName: </span><span style="color:#F1FA8C;">rs0</span></span>
<span class="line"><span style="color:#F8F8F2;">  enableMajorityReadConcern: </span><span style="color:#BD93F9;">true</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>编写docker-compose.yaml文件</li></ol><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki dracula"><code><span class="line"><span style="color:#8BE9FD;">version</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">3</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8BE9FD;">services</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">master</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">container_name</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">master</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">image</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongo</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">command</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongod -f /etc/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">ports</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">27017:27017</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">volumes</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./master/db:/data/db</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./master/mongo.log:/data/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./master/mongo.conf:/etc/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">slaver</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">container_name</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">slaver</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">image</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongo</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">command</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongod -f /etc/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">ports</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">27018:27018</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">volumes</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./slaver/db:/data/db</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./slaver/mongo.log:/data/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./slaver/mongo.conf:/etc/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#8BE9FD;">arbiter</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">container_name</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">arbiter</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">image</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongo</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">command</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">mongod -f /etc/mongo.conf</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">ports</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">27019:27019</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#8BE9FD;">volumes</span><span style="color:#FF79C6;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./arbiter/db:/data/db</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./arbiter/mongo.log:/data/mongo.log</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FF79C6;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">./arbiter/mongo.conf:/etc/mongo.conf</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>一键启动集群<code>docker-compose up -d</code></li><li>进入主节点容器<code>docker exec -it 主节点容器ID /bin/bash</code></li><li>在主节点的mongosh中进行集群的初始化</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">rs.initiate({</span></span>
<span class="line"><span style="color:#F8F8F2;">  _id:&#39;rs0&#39;,</span></span>
<span class="line"><span style="color:#F8F8F2;">  members:[</span></span>
<span class="line"><span style="color:#F8F8F2;">    {</span></span>
<span class="line"><span style="color:#F8F8F2;">      _id:0,</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#6272A4;">## 容器内访问其他容器必须使用容器名称</span></span>
<span class="line"><span style="color:#F8F8F2;">      host:&#39;master:27017&#39;,</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#6272A4;">## 优先级</span></span>
<span class="line"><span style="color:#F8F8F2;">      priority:2</span></span>
<span class="line"><span style="color:#F8F8F2;">    },{</span></span>
<span class="line"><span style="color:#F8F8F2;">      _id:1,</span></span>
<span class="line"><span style="color:#F8F8F2;">      host:&#39;slaver:27018&#39;,</span></span>
<span class="line"><span style="color:#F8F8F2;">      priority:1</span></span>
<span class="line"><span style="color:#F8F8F2;">    },{</span></span>
<span class="line"><span style="color:#F8F8F2;">      _id:2,</span></span>
<span class="line"><span style="color:#F8F8F2;">      host:&#39;arbiter:27019&#39;,</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#6272A4;">## 仲裁节点必须设置为true</span></span>
<span class="line"><span style="color:#F8F8F2;">      arbiterOnly:</span><span style="color:#8BE9FD;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre></div><p>显示这样就说明成功了 <img src="https://aliyun.workdomain.cloud/github/image-20230304155702105.png" alt=""> 9. 查看集群状态<code>rs.status()</code></p><p><img src="https://aliyun.workdomain.cloud/github/image-20230304155740611.png" alt=""> 10. 测试副本集数据是否会同步</p><ul><li>随便插入一条数据<code>db.test.insert({name:&#39;lby&#39;})</code></li><li>查询<code>db.test.find()</code></li></ul><p><img src="https://aliyun.workdomain.cloud/github/image-20230304155815008.png" alt=""> 切换从节点的容器查看，不过要先执行<code>rs.secondaryOk()</code>,因为从节点默认是<strong>不提供查询服务的</strong>，只提供数据的备份以及主节点挂掉之后从节点能晋升为主节点。</p><p><img src="https://aliyun.workdomain.cloud/github/image-20230304155835135.png" alt=""> 数据一致！！！完结散花🌹</p>`,34),F=[p];function e(c,t,r,y,i,d){return a(),n("div",null,F)}const C=s(o,[["render",e]]);export{m as __pageData,C as default};
