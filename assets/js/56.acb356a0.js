(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{473:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器缓存机制介绍与缓存策略剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制介绍与缓存策略剖析"}},[e._v("#")]),e._v(" 浏览器缓存机制介绍与缓存策略剖析")]),e._v(" "),t("p",[e._v("缓存可以减少网络 IO 消耗，提高访问速度。浏览器缓存是一种操作简单、效果显著的前端性能优化手段。对于这个操作的必要性，Chrome 官方给出的解释似乎更有说服力一些：")]),e._v(" "),t("blockquote",[t("p",[e._v("通过网络获取内容既速度缓慢又开销巨大。较大的响应需要在客户端与服务器之间进行多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费用。因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。")])]),e._v(" "),t("p",[e._v("很多时候，大家倾向于将浏览器缓存简单地理解为“HTTP 缓存”。但事实上，浏览器缓存机制有四个方面，它们按照获取资源时请求的优先级依次排列如下：")]),e._v(" "),t("ol",[t("li",[e._v("Memory Cache")]),e._v(" "),t("li",[e._v("Service Worker Cache")]),e._v(" "),t("li",[e._v("HTTP Cache")]),e._v(" "),t("li",[e._v("Push Cache")])]),e._v(" "),t("p",[e._v("大家对 HTTP Cache（即 Cache-Control、expires 等字段控制的缓存）应该比较熟悉，如果对其它几种缓存可能还没什么概念，我们可以先来看一张线上网站的 Network 面板截图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f714800e5be49?w=2774&h=676&f=png&s=432948",alt:""}})]),e._v(" "),t("p",[e._v("我们给 size 这一栏一个特写：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f715425bd73b6?w=186&h=440&f=png&s=33574",alt:""}})]),e._v(" "),t("p",[e._v("大家注意一下非数字——即形如“（from xxx）”这样的描述——对应的资源，这些资源就是我们通过缓存获取到的。其中，“from memory cache”对标到 Memory Cache 类型，“from ServiceWorker”对标到 Service Worker Cache 类型。至于 Push Cache，这个比较特殊，是 HTTP2 的新特性。")]),e._v(" "),t("p",[e._v("本节将会针对这四个方面各个击破。考虑到 HTTP 缓存是最主要、最具有代表性的缓存策略，也是每一位前端工程师都应该深刻理解掌握的性能优化知识点，我们下面优先针对 HTTP 缓存机制进行剖析。")]),e._v(" "),t("h2",{attrs:{id:"http-缓存机制探秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存机制探秘"}},[e._v("#")]),e._v(" HTTP 缓存机制探秘")]),e._v(" "),t("p",[e._v("HTTP 缓存是我们日常开发中最为熟悉的一种缓存机制。它又分为"),t("strong",[e._v("强缓存")]),e._v("和"),t("strong",[e._v("协商缓存")]),e._v("。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓存。")]),e._v(" "),t("h3",{attrs:{id:"强缓存的特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的特征"}},[e._v("#")]),e._v(" 强缓存的特征")]),e._v(" "),t("p",[e._v("强缓存是利用 http 头中的 Expires 和 Cache-Control 两个字段来控制的。强缓存中，当请求再次发出时，浏览器会根据其中的 expires 和 cache-control 判断目标资源是否“命中”强缓存，若命中则直接从缓存中获取资源，"),t("strong",[e._v("不会再与服务端发生通信。")])]),e._v(" "),t("p",[e._v("命中强缓存的情况下，返回的 HTTP 状态码为 200 （如下图）。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f6a683fc021e1?w=660&h=100&f=png&s=15006",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"强缓存的实现-从-expires-到-cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的实现-从-expires-到-cache-control"}},[e._v("#")]),e._v(" 强缓存的实现：从 expires 到 cache-control")]),e._v(" "),t("p",[e._v("实现强缓存，过去我们一直用 "),t("code",[e._v("expires")]),e._v("。"),t("br"),e._v("\n当服务器返回响应时，在 Response Headers 中将过期时间写入 expires 字段。像这样：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f52bf6e844b85?w=710&h=388&f=png&s=67960",alt:""}})]),e._v(" "),t("p",[e._v("我们给 expires 一个特写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("expires: Wed, 11 Sep 2019 16:12:18 GMT\n\n")])])]),t("p",[e._v("可以看到，expires 是一个时间戳，接下来如果我们试图再次向服务器请求资源，浏览器就会先对比本地时间和 expires 的时间戳，如果本地时间小于 expires 设定的过期时间，那么就直接去缓存中取这个资源。")]),e._v(" "),t("p",[e._v("从这样的描述中大家也不难猜测，expires 是有问题的，它最大的问题在于对“本地时间”的依赖。如果服务端和客户端的时间设置可能不同，或者我直接手动去把客户端的时间改掉，那么 expires 将无法达到我们的预期。")]),e._v(" "),t("p",[e._v("考虑到 expires 的局限性，HTTP1.1 新增了 "),t("code",[e._v("Cache-Control")]),e._v(" 字段来完成 expires 的任务。"),t("br"),e._v("\nexpires 能做的事情，Cache-Control 都能做；expires 完成不了的事情，Cache-Control 也能做。因此，Cache-Control 可以视作是 expires 的"),t("strong",[e._v("完全替代方案")]),e._v("。在当下的前端实践里，我们继续使用 expires 的唯一目的就是"),t("strong",[e._v("向下兼容")]),e._v("。")]),e._v(" "),t("p",[e._v("现在我们给 Cache-Control 字段一个特写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cache-control: max-age=31536000\n\n")])])]),t("p",[e._v("如大家所见，在 Cache-Control 中，我们通过 "),t("code",[e._v("max-age")]),e._v(" 来控制资源的有效期。max-age 不是一个时间戳，而是一个时间长度。在本例中，max-age 是 31536000 秒，它意味着该资源在 31536000 秒以内都是有效的，完美地规避了时间戳带来的潜在问题。")]),e._v(" "),t("p",[t("strong",[e._v("Cache-Control 相对于 expires 更加准确，它的优先级也更高。当 Cache-Control 与 expires 同时出现时，我们以 Cache-Control 为准。")])]),e._v(" "),t("h3",{attrs:{id:"cache-control-应用分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-应用分析"}},[e._v("#")]),e._v(" Cache-Control 应用分析")]),e._v(" "),t("p",[e._v("Cache-Control 的神通，可不止于这一个小小的 max-age。如下的用法也非常常见：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cache-control: max-age=3600, s-maxage=31536000\n\n")])])]),t("p",[t("strong",[e._v("s-maxage 优先级高于 max-age，两者同时出现时，优先考虑 s-maxage。如果 s-maxage 未过期，则向代理服务器请求其缓存内容。")])]),e._v(" "),t("p",[e._v("这个 s-maxage 不像 max-age 一样为大家所熟知。的确，在项目不是特别大的场景下，max-age 足够用了。但在依赖各种"),t("strong",[e._v("代理")]),e._v("的大型架构中，我们不得不考虑"),t("strong",[e._v("代理服务器")]),e._v("的缓存问题。s-maxage 就是用于表示 cache 服务器上（比如 cache CDN）的缓存的有效时间的，并只对 public 缓存有效。")]),e._v(" "),t("p",[e._v("(10.24晚更新。感谢评论区@敖天羽的补充，此处应注意这样一个细节：s-maxage仅在代理服务器中生效，客户端中我们只考虑max-age。)")]),e._v(" "),t("p",[e._v("那么什么是 public 缓存呢？说到这里，Cache-Control 中有一些适合放在一起理解的知识点，我们集中梳理一下：")]),e._v(" "),t("h4",{attrs:{id:"public-与-private"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-与-private"}},[e._v("#")]),e._v(" public 与 private")]),e._v(" "),t("p",[e._v("public 与 private 是针对资源是否能够被代理服务缓存而存在的一组对立概念。")]),e._v(" "),t("p",[e._v("如果我们为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。private 为"),t("strong",[e._v("默认值")]),e._v("。但多数情况下，public 并不需要我们手动设置，比如有很多线上网站的 cache-control 是这样的：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f6029fc74bbc6?w=756&h=256&f=png&s=40662",alt:""}})]),e._v(" "),t("p",[e._v("设置了 s-maxage，没设置 public，那么 CDN 还可以缓存这个资源吗？答案是肯定的。因为明确的缓存信息（例如“max-age”）已表示响应是可以缓存的。")]),e._v(" "),t("h4",{attrs:{id:"no-store与no-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-store与no-cache"}},[e._v("#")]),e._v(" no-store与no-cache")]),e._v(" "),t("p",[e._v("no-cache 绕开了浏览器：我们为资源设置了 no-cache 后，每一次发起请求都不会再去询问浏览器的缓存情况，而是直接向服务端去确认该资源是否过期（即走我们下文即将讲解的协商缓存的路线）。")]),e._v(" "),t("p",[e._v("no-store 比较绝情，顾名思义就是不使用任何缓存策略。在 no-cache 的基础上，它连服务端的缓存确认也绕开了，只允许你直接向服务端发送请求、并下载完整的响应。")]),e._v(" "),t("h3",{attrs:{id:"协商缓存-浏览器与服务器合作之下的缓存策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存-浏览器与服务器合作之下的缓存策略"}},[e._v("#")]),e._v(" 协商缓存：浏览器与服务器合作之下的缓存策略")]),e._v(" "),t("p",[e._v("协商缓存依赖于服务端与浏览器之间的通信。")]),e._v(" "),t("p",[e._v("协商缓存机制下，浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求、下载完整的响应，还是从本地获取缓存的资源。")]),e._v(" "),t("p",[e._v("如果服务端提示缓存资源未改动（Not Modified），资源会被"),t("strong",[e._v("重定向")]),e._v("到浏览器缓存，"),t("strong",[e._v("这种情况下网络请求对应的状态码是 304")]),e._v("（如下图）。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f6a6d6ffd4cc2?w=710&h=100&f=png&s=15810",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"协商缓存的实现-从-last-modified-到-etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存的实现-从-last-modified-到-etag"}},[e._v("#")]),e._v(" 协商缓存的实现：从 Last-Modified 到 Etag")]),e._v(" "),t("p",[e._v("Last-Modified 是一个时间戳，如果我们启用了协商缓存，它会在首次请求时随着 Response Headers 返回：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Last-Modified: Fri, 27 Oct 2017 06:35:57 GMT\n\n")])])]),t("p",[e._v("随后我们每次请求时，会带上一个叫 If-Modified-Since 的时间戳字段，它的值正是上一次 response 返回给它的 last-modified 值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("If-Modified-Since: Fri, 27 Oct 2017 06:35:57 GMT\n\n")])])]),t("p",[e._v("服务器接收到这个时间戳后，会比对该时间戳和资源在服务器上的最后修改时间是否一致，从而判断资源是否发生了变化。如果发生了变化，就会返回一个完整的响应内容，并在 Response Headers 中添加新的 Last-Modified 值；否则，返回如上图的 304 响应，Response Headers 不会再添加 Last-Modified 字段。")]),e._v(" "),t("p",[e._v("使用 Last-Modified 存在一些弊端，这其中最常见的就是这样两个场景：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("我们编辑了文件，但文件的内容没有改变。服务端并不清楚我们是否真正改变了文件，它仍然通过最后编辑时间进行判断。因此这个资源在再次被请求时，会被当做新资源，进而引发一次完整的响应——不该重新请求的时候，也会重新请求。")])]),e._v(" "),t("li",[t("p",[e._v("当我们修改文件的速度过快时（比如花了 100ms 完成了改动），由于 If-Modified-Since 只能检查到以秒为最小计量单位的时间差，所以它是感知不到这个改动的——该重新请求的时候，反而没有重新请求了。")])])]),e._v(" "),t("p",[e._v("这两个场景其实指向了同一个 bug——服务器并没有正确感知文件的变化。为了解决这样的问题，Etag 作为 Last-Modified 的补充出现了。")]),e._v(" "),t("p",[e._v("Etag 是由服务器为每个资源生成的唯一的"),t("strong",[e._v("标识字符串")]),e._v("，这个标识字符串是基于文件内容编码的，只要文件内容不同，它们对应的 Etag 就是不同的，反之亦然。因此 Etag 能够精准地感知文件的变化。")]),e._v(" "),t("p",[e._v("Etag 和 Last-Modified 类似，当首次请求时，我们会在响应头里获取到一个最初的标识符字符串，举个🌰，它可以是这样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ETag: W/"2a3b-1602480f459"\n\n')])])]),t("p",[e._v("那么下一次请求时，请求头里就会带上一个值相同的、名为 if-None-Match 的字符串供服务端比对了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('If-None-Match: W/"2a3b-1602480f459"\n\n')])])]),t("p",[e._v("Etag 的生成过程需要服务器额外付出开销，会影响服务端的性能，这是它的弊端。因此启用 Etag 需要我们审时度势。正如我们刚刚所提到的——Etag 并不能替代 Last-Modified，它只能作为 Last-Modified 的补充和强化存在。 "),t("strong",[e._v("Etag 在感知文件变化上比 Last-Modified 更加准确，优先级也更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。")])]),e._v(" "),t("h2",{attrs:{id:"http-缓存决策指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存决策指南"}},[e._v("#")]),e._v(" HTTP 缓存决策指南")]),e._v(" "),t("p",[e._v("行文至此，当代 HTTP 缓存技术用到的知识点，我们已经从头到尾挖掘了一遍了。那么在面对一个具体的缓存需求时，我们到底该怎么决策呢？")]),e._v(" "),t("p",[e._v("走到决策建议这一步，我本来想给大家重新画一个流程图。但是画来画去终究不如 Chrome 官方给出的这张清晰、权威：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f701820fafcf8?w=595&h=600&f=png&s=52763",alt:""}})]),e._v(" "),t("p",[e._v("我们现在一起解读一下这张流程图：")]),e._v(" "),t("p",[e._v("当我们的资源内容不可复用时，直接为 Cache-Control 设置 no-store，拒绝一切形式的缓存；否则考虑是否每次都需要向服务器进行缓存有效确认，如果需要，那么设 Cache-Control 的值为 no-cache；否则考虑该资源是否可以被代理服务器缓存，根据其结果决定是设置为 private 还是 public；然后考虑该资源的过期时间，设置对应的 max-age 和 s-maxage 值；最后，配置协商缓存需要用到的 Etag、Last-Modified 等参数。")]),e._v(" "),t("p",[e._v("我个人非常推崇这张流程图给出的决策建议，也强烈推荐大家在理解以上知识点的基础上，将这张图保存下来、在日常开发中用用看，它的可行度非常高。")]),e._v(" "),t("p",[e._v("OK，走到这里，本节最大的一座山已经被大家翻过去了。接下来的内容会相对比较轻松，大家放松心情，我们继续前行！")]),e._v(" "),t("h2",{attrs:{id:"memorycache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memorycache"}},[e._v("#")]),e._v(" MemoryCache")]),e._v(" "),t("p",[e._v("MemoryCache，是指存在内存中的缓存。从优先级上来说，它是浏览器最先尝试去命中的一种缓存。从效率上来说，它是响应速度最快的一种缓存。")]),e._v(" "),t("p",[e._v("内存缓存是快的，也是“短命”的。它和渲染进程“生死相依”，当进程结束后，也就是 tab 关闭以后，内存里的数据也将不复存在。")]),e._v(" "),t("p",[e._v("那么哪些文件会被放入内存呢？")]),e._v(" "),t("p",[e._v("事实上，这个划分规则，一直以来是没有定论的。不过想想也可以理解，内存是有限的，很多时候需要先考虑即时呈现的内存余量，再根据具体的情况决定分配给内存和磁盘的资源量的比重——资源存放的位置具有一定的随机性。")]),e._v(" "),t("p",[e._v("虽然划分规则没有定论，但根据日常开发中观察的结果，包括我们开篇给大家展示的 Network 截图，我们至少可以总结出这样的规律：资源存不存内存，浏览器秉承的是“节约原则”。我们发现，Base64 格式的图片，几乎永远可以被塞进 memory cache，这可以视作浏览器为节省渲染开销的“自保行为”；此外，体积不大的 JS、CSS 文件，也有较大地被写入内存的几率——相比之下，较大的 JS、CSS 文件就没有这个待遇了，内存资源是有限的，它们往往被直接甩进磁盘。")]),e._v(" "),t("h2",{attrs:{id:"service-worker-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-worker-cache"}},[e._v("#")]),e._v(" Service Worker Cache")]),e._v(" "),t("p",[e._v("Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。这样独立的个性使得 Service Worker 的“个人行为”无法干扰页面的性能，这个“幕后工作者”可以帮我们实现离线缓存、消息推送和网络代理等功能。我们借助 Service worker 实现的离线缓存就称为 Service Worker Cache。")]),e._v(" "),t("p",[e._v("Service Worker 的生命周期包括 install、active、working 三个阶段。一旦 Service Worker 被 install，它将始终存在，只会在 active 与 working 之间切换，除非我们主动终止它。这是它可以用来实现离线存储的重要先决条件。")]),e._v(" "),t("p",[e._v("下面我们就通过实战的方式，一起见识一下 Service Worker 如何为我们实现离线缓存（注意看注释）： 我们首先在入口文件中插入这样一段 JS 代码，用以判断和引入 Service Worker：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.navigator.serviceWorker.register('/test.js').then(\n   function () {\n      console.log('注册成功')\n    }).catch(err => {\n      console.error(\"注册失败\")\n    })\n\n")])])]),t("p",[e._v("在 test.js 中，我们进行缓存的处理。假设我们需要缓存的文件分别是 test.html,test.css 和 test.js：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Service Worker会监听 install事件，我们在其对应的回调里可以实现初始化的逻辑  \nself.addEventListener('install', event => {\n  event.waitUntil(\n    // 考虑到缓存也需要更新，open内传入的参数为缓存的版本号\n    caches.open('test-v1').then(cache => {\n      return cache.addAll([\n        // 此处传入指定的需缓存的文件名\n        '/test.html',\n        '/test.css',\n        '/test.js'\n      ])\n    })\n  )\n})\n\n// Service Worker会监听所有的网络请求，网络请求的产生触发的是fetch事件，我们可以在其对应的监听函数中实现对请求的拦截，进而判断是否有对应到该请求的缓存，实现从Service Worker中取到缓存的目的\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    // 尝试匹配该请求对应的缓存值\n    caches.match(event.request).then(res => {\n      // 如果匹配到了，调用Server Worker缓存\n      if (res) {\n        return res;\n      }\n      // 如果没匹配到，向服务端发起这个资源请求\n      return fetch(event.request).then(response => {\n        if (!response || response.status !== 200) {\n          return response;\n        }\n        // 请求成功的话，将请求缓存起来。\n        caches.open('test-v1').then(function(cache) {\n          cache.put(event.request, response);\n        });\n        return response.clone();\n      });\n    })\n  );\n});\n\n")])])]),t("p",[t("strong",[e._v("PS")]),e._v("：大家注意 Server Worker 对协议是有要求的，必须以 https 协议为前提。")]),e._v(" "),t("h2",{attrs:{id:"push-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[e._v("#")]),e._v(" Push Cache")]),e._v(" "),t("blockquote",[t("p",[e._v("预告：本小节定位为基础科普向，对 Push Cache 有深入挖掘兴趣的同学，强烈推荐拓展阅读 Chrome 工程师 Jake Archibald 的这篇 "),t("a",{attrs:{href:"https://jakearchibald.com/2017/h2-push-tougher-than-i-thought/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP/2 push is tougher than I thought"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("p",[e._v("Push Cache 是指 HTTP2 在 server push 阶段存在的缓存。这块的知识比较新，应用也还处于萌芽阶段，我找了好几个网站也没找到一个合适的案例来给大家做具体的介绍。但应用范围有限不代表不重要——HTTP2 是趋势、是未来。在它还未被推而广之的此时此刻，我仍希望大家能对 Push Cache 的关键特性有所了解：")]),e._v(" "),t("ul",[t("li",[e._v("Push Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、HTTP Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。")]),e._v(" "),t("li",[e._v("Push Cache 是一种存在于会话阶段的缓存，当 session 终止时，缓存也随之释放。")]),e._v(" "),t("li",[e._v("不同的页面只要共享了同一个 HTTP2 连接，那么它们就可以共享同一个 Push Cache。")])]),e._v(" "),t("p",[e._v("更多的特性和应用，期待大家可以在日后的开发过程中去挖掘和实践。")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("小建议！很多同学在学习缓存这块知识的时候可能多少会有这样的感觉：对浏览器缓存，只能描述个大致，却说不上深层原理；好不容易记住了每个字段怎么用，过几天又给忘了。这是因为缓存部分的知识，具有“细碎、迭代快”的特点。对于这样的知识，我们应该尝试先划分出层次和重点，归纳出完整的体系，然后针对每个知识点去各个击破。")]),e._v(" "),t("p",[e._v("终于结束了对缓存世界的探索，不知道大家有没有一种意犹未尽的感觉。开篇我们谈过，缓存非常重要，它几乎是我们性能优化的首选方案。")]),e._v(" "),t("p",[e._v("但页面的数据存储方案除了缓存，还有本地存储。在下一节中，我们就将围绕本地存储展开探索。")])])}),[],!1,null,null,null);a.default=s.exports}}]);