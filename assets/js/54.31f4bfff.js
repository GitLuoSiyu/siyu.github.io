(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{475:function(e,a,n){"use strict";n.r(a);var t=n(25),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webpack-性能调优与-gzip-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-性能调优与-gzip-原理"}},[e._v("#")]),e._v(" webpack 性能调优与 Gzip 原理")]),e._v(" "),n("p",[e._v("从本节开始，我们进入网络层面的性能优化世界。")]),e._v(" "),n("p",[e._v("大家可以从第一节的示意图中看出，我们从输入 URL 到显示页面这个过程中，涉及到网络层面的，有三个主要过程：")]),e._v(" "),n("ul",[n("li",[e._v("DNS 解析")]),e._v(" "),n("li",[e._v("TCP 连接")]),e._v(" "),n("li",[e._v("HTTP 请求/响应")])]),e._v(" "),n("p",[e._v("对于 DNS 解析和 TCP 连接两个步骤，我们前端可以做的努力非常有限。相比之下，HTTP 连接这一层面的优化才是我们网络优化的核心。因此我们开门见山，抓主要矛盾，直接从 HTTP 开始讲起。")]),e._v(" "),n("p",[e._v("HTTP 优化有两个大的方向：")]),e._v(" "),n("ul",[n("li",[e._v("减少请求次数")]),e._v(" "),n("li",[e._v("减少单次请求所花费的时间")])]),e._v(" "),n("p",[e._v("这两个优化点直直地指向了我们日常开发中非常常见的操作——资源的压缩与合并。没错，这就是我们每天用构建工具在做的事情。而时下最主流的构建工具无疑是 webpack，所以我们这节的主要任务就是围绕业界霸主 webpack 来做文章。")]),e._v(" "),n("h2",{attrs:{id:"webpack-的性能瓶颈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的性能瓶颈"}},[e._v("#")]),e._v(" webpack 的性能瓶颈")]),e._v(" "),n("p",[e._v("相信每个用过 webpack 的同学都对“打包”和“压缩”这样的事情烂熟于心。这些老生常谈的特性，我更推荐大家去阅读文档。而关于 webpack 的详细操作，则推荐大家读读这本 "),n("a",{attrs:{href:"https://juejin.im/book/5a6abad5518825733c144469/section/5a6abad5518825732e2f8546#heading-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于 webpack 的掘金小册"),n("OutboundLink")],1),e._v("，这里我们把注意力放在 webpack 的性能优化上。")]),e._v(" "),n("p",[e._v("webpack 的优化瓶颈，主要是两个方面：")]),e._v(" "),n("ul",[n("li",[e._v("webpack 的构建过程太花时间")]),e._v(" "),n("li",[e._v("webpack 打包的结果体积太大")])]),e._v(" "),n("h2",{attrs:{id:"webpack-优化方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-优化方案"}},[e._v("#")]),e._v(" webpack 优化方案")]),e._v(" "),n("h3",{attrs:{id:"构建过程提速策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建过程提速策略"}},[e._v("#")]),e._v(" 构建过程提速策略")]),e._v(" "),n("h4",{attrs:{id:"不要让-loader-做太多事情-以-babel-loader-为例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不要让-loader-做太多事情-以-babel-loader-为例"}},[e._v("#")]),e._v(" 不要让 loader 做太多事情——以 babel-loader 为例")]),e._v(" "),n("p",[e._v("babel-loader 无疑是强大的，但它也是慢的。")]),e._v(" "),n("p",[e._v("最常见的优化方式是，用 include 或 exclude 来帮我们避免不必要的转译，比如 webpack 官方在介绍 babel-loader 时给出的示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module: {\n  rules: [\n    {\n      test: /\\.js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env']\n        }\n      }\n    }\n  ]\n}\n\n")])])]),n("p",[e._v("这段代码帮我们规避了对庞大的 node_modules 文件夹或者 bower_components 文件夹的处理。但通过限定文件范围带来的性能提升是有限的。除此之外，如果我们选择开启缓存将转译结果缓存至文件系统，则至少可以将 babel-loader 的工作效率提升两倍。要做到这点，我们只需要为 loader 增加相应的参数设定：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("loader: 'babel-loader?cacheDirectory=true'\n\n")])])]),n("p",[e._v("以上都是在讨论针对 loader 的配置，但我们的优化范围不止是 loader 们。")]),e._v(" "),n("p",[e._v("举个🌰，尽管我们可以在 loader 配置时通过写入 exclude 去避免 babel-loader 对不必要的文件的处理，但是考虑到这个规则仅作用于这个 loader，像一些类似 UglifyJsPlugin 的 webpack 插件在工作时依然会被这些庞大的第三方库拖累，webpack 构建速度依然会因此大打折扣。所以针对这些庞大的第三方库，我们还需要做一些额外的努力。")]),e._v(" "),n("h4",{attrs:{id:"不要放过第三方库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不要放过第三方库"}},[e._v("#")]),e._v(" 不要放过第三方库")]),e._v(" "),n("p",[e._v("第三方库以 node_modules 为代表，它们庞大得可怕，却又不可或缺。")]),e._v(" "),n("p",[e._v("处理第三方库的姿势有很多，其中，Externals 不够聪明，一些情况下会引发重复打包的问题；而 CommonsChunkPlugin 每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们这里为大家推荐 DllPlugin。")]),e._v(" "),n("p",[e._v("DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。"),n("strong",[e._v("这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包")]),e._v("。")]),e._v(" "),n("p",[e._v("用 DllPlugin 处理文件，要分两步走：")]),e._v(" "),n("ul",[n("li",[e._v("基于 dll 专属的配置文件，打包 dll 库")]),e._v(" "),n("li",[e._v("基于 webpack.config.js 文件，打包业务代码")])]),e._v(" "),n("p",[e._v("以一个基于 React 的简单项目为例，我们的 dll 的配置文件可以编写如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const path = require('path')\nconst webpack = require('webpack')\n\nmodule.exports = {\n    entry: {\n      // 依赖的库数组\n      vendor: [\n        'prop-types',\n        'babel-polyfill',\n        'react',\n        'react-dom',\n        'react-router-dom',\n      ]\n    },\n    output: {\n      path: path.join(__dirname, 'dist'),\n      filename: '[name].js',\n      library: '[name]_[hash]',\n    },\n    plugins: [\n      new webpack.DllPlugin({\n        // DllPlugin的name属性需要和libary保持一致\n        name: '[name]_[hash]',\n        path: path.join(__dirname, 'dist', '[name]-manifest.json'),\n        // context需要和webpack.config.js保持一致\n        context: __dirname,\n      }),\n    ],\n}\n\n")])])]),n("p",[e._v("编写完成之后，运行这个配置文件，我们的 dist 文件夹里会出现这样两个文件：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vendor-manifest.json\nvendor.js\n\n")])])]),n("p",[e._v("vendor.js 不必解释，是我们第三方库打包的结果。这个多出来的 vendor-manifest.json，则用于描述每个第三方库对应的具体路径，我这里截取一部分给大家看下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "vendor_397f9e25e49947b8675d",\n  "content": {\n    "./node_modules/core-js/modules/_export.js": {\n      "id": 0,\n        "buildMeta": {\n        "providedExports": true\n      }\n    },\n    "./node_modules/prop-types/index.js": {\n      "id": 1,\n        "buildMeta": {\n        "providedExports": true\n      }\n    },\n    ...\n  }\n}  \n\n')])])]),n("p",[e._v("随后，我们只需在 webpack.config.js 里针对 dll 稍作配置：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const path = require('path');\nconst webpack = require('webpack')\nmodule.exports = {\n  mode: 'production',\n  // 编译入口\n  entry: {\n    main: './src/index.js'\n  },\n  // 目标文件\n  output: {\n    path: path.join(__dirname, 'dist/'),\n    filename: '[name].js'\n  },\n  // dll相关配置\n  plugins: [\n    new webpack.DllReferencePlugin({\n      context: __dirname,\n      // manifest就是我们第一步中打包出来的json文件\n      manifest: require('./dist/vendor-manifest.json'),\n    })\n  ]\n}\n\n")])])]),n("p",[e._v("一次基于 dll 的 webpack 构建过程优化，便大功告成了！")]),e._v(" "),n("h4",{attrs:{id:"happypack-将-loader-由单进程转为多进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#happypack-将-loader-由单进程转为多进程"}},[e._v("#")]),e._v(" Happypack——将 loader 由单进程转为多进程")]),e._v(" "),n("p",[e._v("大家知道，webpack 是单线程的，就算此刻存在多个任务，你也只能排队一个接一个地等待处理。这是 webpack 的缺点，好在我们的 CPU 是多核的，Happypack 会充分释放 CPU 在多核并发方面的优势，帮我们把任务分解给多个子进程去并发执行，大大提升打包效率。")]),e._v(" "),n("p",[e._v("HappyPack 的使用方法也非常简单，只需要我们把对 loader 的配置转移到 HappyPack 中去就好，我们可以手动告诉 HappyPack 我们需要多少个并发的进程：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const HappyPack = require('happypack')\n// 手动创建进程池\nconst happyThreadPool =  HappyPack.ThreadPool({ size: os.cpus().length })\n\nmodule.exports = {\n  module: {\n    rules: [\n      ...\n      {\n        test: /\\.js$/,\n        // 问号后面的查询参数指定了处理这类文件的HappyPack实例的名字\n        loader: 'happypack/loader?id=happyBabel',\n        ...\n      },\n    ],\n  },\n  plugins: [\n    ...\n    new HappyPack({\n      // 这个HappyPack的“名字”就叫做happyBabel，和楼上的查询参数遥相呼应\n      id: 'happyBabel',\n      // 指定进程池\n      threadPool: happyThreadPool,\n      loaders: ['babel-loader?cacheDirectory']\n    })\n  ],\n}\n\n")])])]),n("h3",{attrs:{id:"构建结果体积压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建结果体积压缩"}},[e._v("#")]),e._v(" 构建结果体积压缩")]),e._v(" "),n("h4",{attrs:{id:"文件结构可视化-找出导致体积过大的原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件结构可视化-找出导致体积过大的原因"}},[e._v("#")]),e._v(" 文件结构可视化，找出导致体积过大的原因")]),e._v(" "),n("p",[e._v("这里为大家介绍一个非常好用的包组成可视化工具——"),n("a",{attrs:{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-bundle-analyzer"),n("OutboundLink")],1),e._v("，配置方法和普通的 plugin 无异，它会以矩形树图的形式将包内各个模块的大小和依赖关系呈现出来，格局如官方所提供这张图所示：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/14/165d838010b20a4c?w=908&h=547&f=gif&s=3663774",alt:""}})]),e._v(" "),n("p",[e._v("在使用时，我们只需要将其以插件的形式引入：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\n \nmodule.exports = {\n  plugins: [\n    new BundleAnalyzerPlugin()\n  ]\n}\n\n")])])]),n("h4",{attrs:{id:"拆分资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拆分资源"}},[e._v("#")]),e._v(" 拆分资源")]),e._v(" "),n("p",[e._v("这点仍然围绕 DllPlugin 展开，可参考上文。")]),e._v(" "),n("h4",{attrs:{id:"删除冗余代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除冗余代码"}},[e._v("#")]),e._v(" 删除冗余代码")]),e._v(" "),n("p",[e._v("一个比较典型的应用，就是 "),n("code",[e._v("Tree-Shaking")]),e._v("。")]),e._v(" "),n("p",[e._v("从 webpack2 开始，webpack 原生支持了 ES6 的模块系统，并基于此推出了 Tree-Shaking。webpack 官方是这样介绍它的：")]),e._v(" "),n("blockquote",[n("p",[e._v("Tree shaking is a term commonly used in the JavaScript context for dead-code elimination, or more precisely, live-code import. It relies on ES2015 module import/export for the static structure of its module system.")])]),e._v(" "),n("p",[e._v("意思是基于 import/export 语法，Tree-Shaking 可以在编译的过程中获悉哪些模块并没有真正被使用，这些没用的代码，在最后打包的时候会被去除。")]),e._v(" "),n("p",[e._v("举个🌰，假设我的主干文件（入口文件）是这么写的：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { page1, page2 } from './pages'\n    \n// show是事先定义好的函数，大家理解它的功能是展示页面即可\nshow(page1)\n\n")])])]),n("p",[e._v("pages 文件里，我虽然导出了两个页面：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export const page1 = xxx\n\nexport const page2 = xxx\n\n")])])]),n("p",[e._v("但因为 page2 事实上并没有被用到（这个没有被用到的情况在静态分析的过程中是可以被感知出来的），所以打包的结果里会把这部分：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export const page2 = xxx;\n\n")])])]),n("p",[e._v("直接删掉，这就是 Tree-Shaking 帮我们做的事情。")]),e._v(" "),n("p",[e._v("相信大家不难看出，Tree-Shaking 的针对性很强，它更适合用来处理模块级别的冗余代码。至于"),n("strong",[e._v("粒度更细")]),e._v("的冗余代码的去除，往往会被整合进 JS 或 CSS 的压缩或分离过程中。")]),e._v(" "),n("p",[e._v("这里我们以当下接受度较高的 UglifyJsPlugin 为例，看一下如何在压缩过程中对碎片化的冗余代码（如 console 语句、注释等）进行自动化删除：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const UglifyJsPlugin = require('uglifyjs-webpack-plugin');\nmodule.exports = {\n plugins: [\n   new UglifyJsPlugin({\n     // 允许并发\n     parallel: true,\n     // 开启缓存\n     cache: true,\n     compress: {\n       // 删除所有的console语句    \n       drop_console: true,\n       // 把使用多次的静态值自动定义为变量\n       reduce_vars: true,\n     },\n     output: {\n       // 不保留注释\n       comment: false,\n       // 使输出的代码尽可能紧凑\n       beautify: false\n     }\n   })\n ]\n}\n\n")])])]),n("p",[e._v("有心的同学会注意到，这段手动引入 UglifyJsPlugin 的代码其实是 webpack3 的用法，webpack4 现在已经默认使用 uglifyjs-webpack-plugin 对代码做压缩了——在 webpack4 中，我们是通过配置 optimization.minimize 与 optimization.minimizer 来自定义压缩相关的操作的。")]),e._v(" "),n("p",[e._v("这里也引出了我们学习性能优化的一个核心的理念——用什么工具，怎么用，并不是我们这本小册的重点，因为所有的工具都存在用法迭代的问题。但现在大家知道了在打包的过程中做一些如上文所述的“手脚”可以实现打包结果的最优化，那下次大家再去执行打包操作，会不会对这个操作更加留心，从而自己去寻找彼时操作的具体实现方案呢？我最希望大家掌握的技能就是，先在脑海中留下“这个xx操作是对的，是有用的”，在日后的实践中，可以基于这个认知去寻找把正确的操作落地的具体方案。")]),e._v(" "),n("h4",{attrs:{id:"按需加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[e._v("#")]),e._v(" 按需加载")]),e._v(" "),n("p",[e._v("大家想象这样一个场景。我现在用 React 构建一个单页应用，用 React-Router 来控制路由，十个路由对应了十个页面，这十个页面都不简单。如果我把这整个项目打一个包，用户打开我的网站时，会发生什么？有很大机率会卡死，对不对？更好的做法肯定是先给用户展示主页，其它页面等请求到了再加载。当然这个情况也比较极端，但却能很好地引出按需加载的思想：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("一次不加载完所有的文件内容，只加载此刻需要用到的那部分（会提前做拆分）")])]),e._v(" "),n("li",[n("p",[e._v("当需要更多内容时，再对用到的内容进行即时加载")])])]),e._v(" "),n("p",[e._v("好，既然说到这十个 Router 了，我们就拿其中一个开刀，假设我这个 Router 对应的组件叫做 BugComponent，来看看我们如何利用 webpack 做到该组件的按需加载。")]),e._v(" "),n("p",[e._v("当我们不需要按需加载的时候，我们的代码是这样的：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import BugComponent from '../pages/BugComponent'\n...\n<Route path=\"/bug\" component={BugComponent}>\n\n")])])]),n("p",[e._v("为了开启按需加载，我们要稍作改动。")]),e._v(" "),n("p",[e._v("首先 webpack 的配置文件要走起来：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("output: {\n    path: path.join(__dirname, '/../dist'),\n    filename: 'app.js',\n    publicPath: defaultSettings.publicPath,\n    // 指定 chunkFilename\n    chunkFilename: '[name].[chunkhash:5].chunk.js',\n},\n\n")])])]),n("p",[e._v("路由处的代码也要做一下配合：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const getComponent => (location, cb) {\n  require.ensure([], (require) => {\n    cb(null, require('../pages/BugComponent').default)\n  }, 'bug')\n},\n...\n<Route path=\"/bug\" getComponent={getComponent}>\n\n")])])]),n("p",[e._v("对，核心就是这个方法：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require.ensure(dependencies, callback, chunkName)\n\n")])])]),n("p",[e._v("这是一个异步的方法，webpack 在打包时，BugComponent 会被单独打成一个文件，只有在我们跳转 bug 这个路由的时候，这个异步方法的回调才会生效，才会真正地去获取 BugComponent 的内容。这就是按需加载。")]),e._v(" "),n("p",[e._v("按需加载的粒度，还可以继续细化，细化到更小的组件、细化到某个功能点，都是 ok 的。")]),e._v(" "),n("p",[e._v("等等，这和说好的不一样啊？不是说 Code-Splitting 才是 React-Router 的按需加载实践吗？")]),e._v(" "),n("p",[e._v("没错，在 React-Router4 中，我们确实是用 Code-Splitting 替换掉了楼上这个操作。而且如果有使用过 React-Router4 实现过路由级别的按需加载的同学，可能会对 React-Router4 里用到的一个叫“Bundle-Loader”的东西印象深刻。我想很多同学读到按需加载这里，心里的预期或许都是时下大热的 Code-Splitting，而非我呈现出来的这段看似“陈旧”的代码。")]),e._v(" "),n("p",[e._v("但是，如果大家稍微留个心眼，去看一下 Bundle Loader 并不长的源代码的话，你会发现它竟然还是使用 require.ensure 来实现的——这也是我要把 require.ensure 单独拎出来的重要原因。所谓按需加载，根本上就是在正确的时机去触发相应的回调。理解了这个 require.ensure 的玩法，大家甚至可以结合业务自己去修改一个按需加载模块来用。")]),e._v(" "),n("p",[e._v("这也应了我之前跟大家强调那段话，工具永远在迭代，唯有掌握核心思想，才可以真正做到举一反三——唯“心”不破！")]),e._v(" "),n("h2",{attrs:{id:"彩蛋-gzip-压缩原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#彩蛋-gzip-压缩原理"}},[e._v("#")]),e._v(" 彩蛋：Gzip 压缩原理")]),e._v(" "),n("p",[e._v("恭喜大家迎来了本小册的第一个彩蛋。彩蛋为选学内容，以原理性知识为主。意在拓宽大家的技术视野，加深大家对优化相关知识的理解。")]),e._v(" "),n("p",[e._v("前面说了不少 webpack 的故事，目的还是帮大家更好地实现压缩和合并。说到压缩，可不只是构建工具的专利。我们日常开发中，其实还有一个便宜又好用的压缩操作：开启 Gzip。")]),e._v(" "),n("p",[e._v("具体的做法非常简单，只需要你在你的 request headers 中加上这么一句：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("accept-encoding:gzip\n\n")])])]),n("p",[e._v("相信很多同学对 Gzip 也是了解到这里。之所以为大家开这个彩蛋性的小节，绝不是出于炫技要来给大家展示一下 Gzip 的压缩算法，而是想和大家聊一个和我们前端关系更密切的话题：HTTP 压缩。")]),e._v(" "),n("blockquote",[n("p",[e._v("HTTP 压缩是一种内置到网页服务器和网页客户端中以改进传输速度和带宽利用率的方式。在使用 HTTP 压缩的情况下，HTTP 数据在从服务器发送前就已压缩：兼容的浏览器将在下载所需的格式前宣告支持何种方法给服务器；不支持压缩方法的浏览器将下载未经压缩的数据。最常见的压缩方案包括 Gzip 和 Deflate。")])]),e._v(" "),n("p",[e._v("以上是摘自百科的解释，事实上，大家可以这么理解：")]),e._v(" "),n("p",[n("strong",[e._v("HTTP 压缩就是以缩小体积为目的，对 HTTP 内容进行重新编码的过程")])]),e._v(" "),n("p",[e._v("Gzip 的内核就是 Deflate，目前我们压缩文件用得最多的就是 Gzip。可以说，Gzip 就是 HTTP 压缩的经典例题。")]),e._v(" "),n("h3",{attrs:{id:"该不该用-gzip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#该不该用-gzip"}},[e._v("#")]),e._v(" 该不该用 Gzip")]),e._v(" "),n("p",[e._v("如果你的项目不是极端迷你的超小型文件，我都建议你试试 Gzip。")]),e._v(" "),n("p",[e._v("有的同学或许存在这样的疑问：压缩 Gzip，服务端要花时间；解压 Gzip，浏览器要花时间。中间节省出来的传输时间，真的那么可观吗？")]),e._v(" "),n("p",[e._v("答案是肯定的。如果你手上的项目是 1k、2k 的小文件，那确实有点高射炮打蚊子的意思，不值当。但更多的时候，我们处理的都是具备一定规模的项目文件。实践证明，这种情况下压缩和解压带来的时间开销相对于传输过程中节省下的时间开销来说，可以说是微不足道的。")]),e._v(" "),n("h3",{attrs:{id:"gzip-是万能的吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gzip-是万能的吗"}},[e._v("#")]),e._v(" Gzip 是万能的吗")]),e._v(" "),n("p",[e._v("首先要承认 Gzip 是高效的，压缩后"),n("strong",[e._v("通常")]),e._v("能帮我们减少响应 70% 左右的大小。")]),e._v(" "),n("p",[e._v("但它并非万能。Gzip 并不保证针对每一个文件的压缩都会使其变小。")]),e._v(" "),n("p",[e._v("Gzip 压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大。反之亦然。")]),e._v(" "),n("h3",{attrs:{id:"webpack-的-gzip-和服务端的-gzip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的-gzip-和服务端的-gzip"}},[e._v("#")]),e._v(" webpack 的 Gzip 和服务端的 Gzip")]),e._v(" "),n("p",[e._v("一般来说，Gzip 压缩是服务器的活儿：服务器了解到我们这边有一个 Gzip 压缩的需求，它会启动自己的 CPU 去为我们完成这个任务。而压缩文件这个过程本身是需要耗费时间的，大家可以理解为我们以服务器压缩的时间开销和 CPU 开销（以及浏览器解析压缩文件的开销）为代价，省下了一些传输过程中的时间开销。")]),e._v(" "),n("p",[e._v("既然存在着这样的交换，那么就要求我们学会权衡。服务器的 CPU 性能不是无限的，如果存在大量的压缩需求，服务器也扛不住的。服务器一旦因此慢下来了，用户还是要等。Webpack 中 Gzip 压缩操作的存在，事实上就是为了在构建过程中去做一部分服务器的工作，为服务器分压。")]),e._v(" "),n("p",[e._v("因此，这两个地方的 Gzip 压缩，谁也不能替代谁。它们必须和平共处，好好合作。作为开发者，我们也应该结合业务压力的实际强度情况，去做好这其中的权衡。")]),e._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),n("p",[e._v("说了这么多，我们都在讨论文件——准确地说，是文本文件及其构建过程的优化。")]),e._v(" "),n("p",[e._v("但一个完整的现代前端应用，除了要包含 HTML、CSS 和 JS，往往还需要借助图片来提高用户的视觉体验。而图片优化的思路、场景与措施，又是另外一个说来话长的故事了。下面，我们就一起进入图片的小天地，一窥究竟。")])])}),[],!1,null,null,null);a.default=s.exports}}]);