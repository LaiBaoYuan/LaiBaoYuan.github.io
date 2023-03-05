![](https://aliyun.workdomain.cloud/github/image-20230305112955689.png)

## 概述
Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用。与传统的 CommonJS 和 AMD 这一类非标准化的解决方案不同，Rollup 使用的是 ES6 版本 Javascript 中的模块标准。新的 ES 模块可以让你自由、无缝地按需使用你最喜爱的库中那些有用的单个函数。这一特性在未来将随处可用，但 Rollup 让你现在就可以，想用就用。

## 安装
```shell
npm install --global rollup
```

## 快速开始
Rollup 可以通过两种方式使用：使用命令行方式，可以为命令行传入一个可选的配置文件。或者使用 JavaScript API 方式。运行 `rollup --help` 可以查看可用的选项和参数。

以下命令假设你以 `main.js` 文件作为应用的入口点，并将所有的引入编译为单文件 `bundle.js`。

用于浏览器：
```shell
# 编译为一个在 <script> 标签中可用的自运行函数 ('iife')
rollup main.js --file bundle.js --format iife
```
用于 Node.js：
```shell
# 编译为 CommonJS 模块 ('cjs')
rollup main.js --file bundle.js --format cjs
```
同时用于浏览器和 Node.js：
```shell
# 需要为 UMD 格式的包指定一个名称
rollup main.js --file bundle.js --format umd --name "myBundle"
```

## Tree-Shaking
除了能够让你使用标准的 ES 模块，Rollup 还可以对所用的代码进行静态分析，**并将未实际用到的代码剔除**。这一特性将允许你放心的使用已有的工具和模块来创建应用而无需担心存在冗余的依赖和代码。

比如，使用 CommonJS 的时候，工具或库必须被整体导入：
```js
// 在 CommonJS 中，utils 对象将被整体导入
const utils = require( './utils' );
const query = 'Rollup';
// 使用 utils 对象的 ajax 方法
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```
与上述例子中只能导入整个 `utils` 对象不同，ES 模块可以让我们仅导入所需的 `ajax` 函数：
```js
// 通过 ES6 的 import 语句导入 ajax 函数
import { ajax } from './utils';
const query = 'Rollup';
// 调用 ajax 函数
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```
由于只保留最精简的所需代码，通过 Rollup 生成的库和应用就可以更加轻量、快速、清晰。由于 import 和 export 语句的使用都是明确的，就决定了这一方式要比那种简单的通过代码压缩工具查找未使用变量的方案更有效。