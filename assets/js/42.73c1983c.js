(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{458:function(e,v,o){"use strict";o.r(v);var p=o(25),_=Object(p.a)({},(function(){var e=this,v=e.$createElement,o=e._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"event-loop-和-js-引擎、渲染引擎的关系"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-和-js-引擎、渲染引擎的关系"}},[e._v("#")]),e._v(" Event Loop 和 JS 引擎、渲染引擎的关系")]),e._v(" "),o("p",[e._v("本文会讲 JS 引擎的编译流水线、渲染引擎的渲染流程，然后引入为什么需要 event loop。")]),e._v(" "),o("p",[e._v("希望能解答你以下疑惑：")]),e._v(" "),o("p",[e._v("JS 引擎的编译流水线是什么\n渲染流程都做了什么\n为什么需要 event loop\n不同的 JS 宿主环境有哪些不同\nmicro task 和 check 都解决了什么问题\nrequestAnimationFrame 是宏任务还是微任务\nrequestIdleCallback 是什么时候执行的\nJS 引擎\n组成\njs 引擎包括 parser、解释器、gc 再加一个 JIT 编译器这几部分。")]),e._v(" "),o("p",[e._v("parser： 负责把 javascript 源码转成 AST\ninterperter：解释器， 负责转换 AST 成字节码，并解释执行\nJIT compiler：对执行时的热点函数进行编译，把字节码转成机器码，之后可以直接执行机器码\ngc（garbage collector）：垃圾回收器，清理堆内存中不再使用的对象\n编译流水线\n一般的 JS 引擎的编译流水线是 parse 源码成 AST，之后 AST 转为字节码，解释执行字节码。运行时会收集函数执行的频率，对于到达了一定阈值的热点代码，会把对应的字节码转成机器码（JIT），然后直接执行。这就是 js 代码能够生效的流程。")]),e._v(" "),o("p",[e._v("渲染引擎\n渲染时会把 html、css 分别用 parser 解析成 dom 和 cssom，然后合并到一起，并计算布局样式成绝对的坐标，生成渲染树，之后把渲染树的内容复制到显存就可以由显卡来完成渲染。")]),e._v(" "),o("p",[e._v("每一次渲染流程叫做一帧，浏览器会有一个帧率（比如一秒 60帧）来刷新。")]),e._v(" "),o("p",[e._v("如何结合 JS 引擎和渲染引擎\n不管是 JS 引擎、还是渲染引擎，都比较傻（纯粹），JS 引擎只会不断执行 JS 代码，渲染引擎也是只会布局和渲染。但是要完成一个完整的网页应用，这两者都需要。 怎么综合两者呢？")]),e._v(" "),o("p",[e._v("有两种思路：")]),e._v(" "),o("p",[e._v("多线程\n分为多个线程，主线程用来操作 ui 和渲染，其他线程用来执行一些任务（不能多个线程同时修改 ui，顺序没法控制）。")]),e._v(" "),o("p",[e._v("安卓 ui 架构\n安卓就是这样的架构，在主线程里面完成 ui 的更新，事件的绑定，其他逻辑可以放到别的线程，然后完成以后在消息队列中放一个消息，主线程不断循环的取消息来执行。")]),e._v(" "),o("p",[e._v("electron ui 架构\n开发过 electron 应用的同学会知道，electron 中分为了主进程和渲染进程，window 相关的操作只能在主线程，由渲染进程向主进程发消息。")]),e._v(" "),o("p",[e._v("image.png")]),e._v(" "),o("p",[e._v("从上面两个案例我们可以总结出，所有的 ui 系统的设计，如果使用了多线程（进程）的架构，基本都是 ui 只能在一个线程（进程）中操作，由别的线程（进程）来发消息到这边来更新，如果多个线程，会有一个消息队列和 looper。消息队列的生产者是各个子线程（进程），消费者是主线程（进程）。")]),e._v(" "),o("p",[e._v("而且，不只是 ui 架构是这样，后端也大量运用了消息队列的概念，")]),e._v(" "),o("p",[e._v("后端的消息队列")]),e._v(" "),o("p",[e._v("后端因为不同服务负载能力不一样，所以中间会加一个消息队列来异步处理消息，和前端客户端的 ui 架构不同的是，后端的消息队列中间件会有多个消费者、多个队列，而 ui 系统的消息队列只有一个队列，一个消费者（主线程、主进程）。")]),e._v(" "),o("p",[e._v("在一个线程做 ui 操作，其他线程做逻辑计算的架构很普遍，会需要一个消息队列来做异步消息处理。 网页中后来有了 web worker，也是这种架构的实现，但是最开始并不是这样的。")]),e._v(" "),o("p",[e._v("单线程\n因为 javascript 最开始只是被设计用来做表单处理，那么就不会有特别大的计算量，就没有采用多线程架构，而是在一个线程内进行 dom 操作和逻辑计算，渲染和 JS 执行相互阻塞。（后来加了 web worker，但不是主流）")]),e._v(" "),o("p",[e._v("我们知道，JS 引擎只知道执行 JS，渲染引擎只知道渲染，它们两个并不知道彼此，该怎么配合呢？")]),e._v(" "),o("p",[e._v("答案就是 event loop。")]),e._v(" "),o("p",[e._v("宿主环境\nJS 引擎并不提供 event loop（可能很多同学以为 event loop 是 JS 引擎提供的，其实不是），它是宿主环境为了集合渲染和 JS 执行，也为了处理 JS 执行时的高优先级任务而设计的机制。")]),e._v(" "),o("p",[e._v("宿主环境有浏览器、node、跨端引擎等，不同的宿主环境有一些区别：")]),e._v(" "),o("p",[e._v("注入的全局 api 不同\nnode 会注入一些全局的 require api，同时提供 fs、os 等内置模块\n浏览器会注入 w3c 标准的 api\n跨端引擎会注入设备的 api，同时会注入一套操作 ui 的 api（可能是对标 w3c 的 api 也可能不是）\nevent loop 的实现不同\n上文说过，event loop 是宿主环境提供了，不同的宿主环境有不同的需要调度的任务，所以也会有不同的设计：")]),e._v(" "),o("p",[e._v("浏览器里面主要是调度渲染和 JS 执行，还有 worker\nnode 里面主要是调度各种 io\n跨端引擎也是调度渲染和 JS 执行\n这里我们只关心浏览器里面的 event loop。")]),e._v(" "),o("p",[e._v("浏览器的 event loop\ncheck\n浏览器里面执行一个 JS 任务就是一个 event loop，每个 loop 结束会检查下是否需要渲染，是否需要处理 worker 的消息，通过这种每次 loop 结束都 check 的方式来综合渲染、JS 执行、worker 等，让它们都能在一个线程内得到执行（渲染其实是在别的线程，但是会和 JS 线程相互阻塞）。")]),e._v(" "),o("p",[e._v("这样就解决了渲染、JS 执行、worker 这三者的调度问题。")]),e._v(" "),o("p",[e._v("但是这样有没有问题？")]),e._v(" "),o("p",[e._v("我们会在任务队列中不断的放新的任务，这样如果有更高优的任务是不是要等所有任务都执行完才能被执行。如果是“急事”呢？")]),e._v(" "),o("p",[e._v("所以这样还不行，要给 event loop 加上“急事”处理的快速通道，这就是微任务 micro tasks。")]),e._v(" "),o("p",[e._v("micro tasks")]),e._v(" "),o("p",[e._v("任务还是每次取一个执行，执行完检查下要不要渲染，处理下 worker 消息，但是也给高优先级的“急事”加入了插队机制，会在执行完任务之后，把所有的急事（micro task）全部处理完。")]),e._v(" "),o("p",[e._v("这样，event loop 貌似就挺完美的了，每次都会检查是否要渲染，也能更快的处理 JS 的“急事”。")]),e._v(" "),o("p",[e._v("requestAnimationFrame\nJS 执行完，开始渲染之前会有一个生命周期，就是 requestAnimationFrame，在这里面做一些计算最合适了，能保证一定是在渲染之前做的计算。")]),e._v(" "),o("p",[e._v("image.png")]),e._v(" "),o("p",[e._v("如果有人问 requestAnimationFrame 是宏任务还是微任务，就可以告诉他：requestAnimationFrame 是每次 loop 结束发现需要渲染，在渲染之前执行的一个回调函数，不是宏微任务。")]),e._v(" "),o("p",[e._v("event loop 的问题\n上文聊过，虽然后面加入了 worker，但是主流的方式还是 JS 计算和渲染相互阻塞，这样就导致了一个问题：")]),e._v(" "),o("p",[e._v("每一帧的计算和渲染是有固定频率的，如果 JS 执行时间过长，超过了一帧的刷新时间，那么就会导致渲染延迟，甚至掉帧（因为上一帧的数据还没渲染到界面就被覆盖成新的数据了），给用户的感受就是“界面卡了”。")]),e._v(" "),o("p",[e._v("什么情况会导致帧刷新拖延甚至帧数据被覆盖（丢帧）呢？每个 loop 在 check 渲染之前的每一个阶段都有可能，也就是 task、microtask、requestAnimationFrame、requestIdleCallback 都有可能导致阻塞了 check，这样等到了 check 的时候发现要渲染了，再去渲染的时候就晚了。")]),e._v(" "),o("p",[e._v("所以主线程 JS 代码不要做太多的计算（不像安卓会很自然的起一个线程来做），要做拆分，这也是为啥 ui 框架要做计算的 fiber 化，就是因为处理交互的时候，不能让计算阻塞了渲染，要递归改循环，通过链表来做计算的暂停恢复。")]),e._v(" "),o("p",[e._v("除了 JS 代码本身要注意之外，如果浏览器能够提供 API 就是在每帧间隔来执行，那样岂不是就不会阻塞了，所以后来有了 requestIdeCallback。")]),e._v(" "),o("p",[e._v("requestIdleCallback\nrequestIdleCallback 会在每次 check 结束发现距离下一帧的刷新还有时间，就执行一下这个。如果时间不够，就下一帧再说。")]),e._v(" "),o("p",[e._v("如果每一帧都没时间呢，那也不行，所以提供了 timeout 的参数可以指定最长的等待时间，如果一直没时间执行这个逻辑，那么就算拖延了帧渲染也要执行。")]),e._v(" "),o("p",[e._v("这个 api 对于前端框架来说太需要了，框架就是希望计算不阻塞渲染，也就是在每一帧的间隔时间（idle时间）做计算，但是这个 api 毕竟是最近加的，有兼容问题，所以 react 自己实现了类似 idle callback 的fiber 机制，在执行逻辑之前判断一下离下一帧刷新还有多久，来判断是否执行逻辑。")]),e._v(" "),o("p",[e._v("总结\n总之，浏览器里有 JS 引擎做 JS 代码的执行，利用注入的浏览器 API 完成功能，有渲染引擎做页面渲染，两者都比较纯粹，需要一个调度的方式，就是 event loop。")]),e._v(" "),o("p",[e._v("event loop 实现了 task 和 急事处理机制 microtask，而且每次 loop 结束会 check 是否要渲染，渲染之前会有 requestAnimationFrames 生命周期。")]),e._v(" "),o("p",[e._v("帧刷新不能被拖延否则会卡顿甚至掉帧，所以就需要 JS 代码里面不要做过多计算，于是有了 requestIdleCallback 的 api，希望在每次 check 完发现还有时间就执行，没时间就不执行（这个deadline的时间也作为参数让 js 代码自己判断），为了避免一直没时间，还提供了 timeout 参数强制执行。")]),e._v(" "),o("p",[e._v("防止计算时间过长导致渲染掉帧是 ui 框架一直关注的问题，就是怎么不阻塞渲染，让逻辑能够拆成帧间隔时间内能够执行完的小块。浏览器提供了 idelcallback 的 api，很多 ui 框架也通过递归改循环然后记录状态等方式实现了计算量的拆分，目的只有一个：loop 内的逻辑执行不能阻塞 check，也就是不能阻塞渲染引擎做帧刷新。所以不管是 JS 代码宏微任务、 requestAnimationCallback、requestIdleCallback 都不能计算时间太长。这个问题是前端开发的持续性阵痛。")])])}),[],!1,null,null,null);v.default=_.exports}}]);