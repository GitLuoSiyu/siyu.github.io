(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{474:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"千方百计-event-loop-与异步更新策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#千方百计-event-loop-与异步更新策略"}},[e._v("#")]),e._v(" 千方百计——Event Loop 与异步更新策略")]),e._v(" "),a("p",[e._v("Vue 和 React 都实现了异步更新策略。虽然实现的方式不尽相同，但都达到了减少 DOM 操作、避免过度渲染的目的。通过研究框架的运行机制，其设计思路将深化我们对 DOM 优化的理解，其实现手法将拓宽我们对 DOM 实践的认知。")]),e._v(" "),a("p",[e._v("本节我们将基于 Event Loop 机制，对 Vue 的异步更新策略作探讨。")]),e._v(" "),a("h2",{attrs:{id:"前置知识-event-loop-中的-渲染时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-event-loop-中的-渲染时机"}},[e._v("#")]),e._v(" 前置知识：Event Loop 中的“渲染时机”")]),e._v(" "),a("p",[e._v("搞懂 Event Loop，是理解 Vue 对 DOM 操作优化的第一步。")]),e._v(" "),a("h3",{attrs:{id:"micro-task-与-macro-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micro-task-与-macro-task"}},[e._v("#")]),e._v(" Micro-Task 与 Macro-Task")]),e._v(" "),a("p",[e._v("事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。")]),e._v(" "),a("p",[e._v("常见的 macro-task 比如： setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。"),a("br"),e._v("\n常见的 micro-task 比如: process.nextTick、Promise、MutationObserver 等。")]),e._v(" "),a("h3",{attrs:{id:"event-loop-过程解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-过程解析"}},[e._v("#")]),e._v(" Event Loop 过程解析")]),e._v(" "),a("p",[e._v("基于对 micro 和 macro 的认知，我们来走一遍完整的事件循环过程。")]),e._v(" "),a("p",[e._v("一个完整的 Event Loop 过程，可以概括为以下阶段：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("初始状态：调用栈空。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。")])]),e._v(" "),a("li",[a("p",[e._v("全局上下文（script 标签）被推入调用栈，同步代码执行。在执行的过程中，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里。同步代码执行完了，script 脚本会被移出 macro 队列，"),a("strong",[e._v("这个过程本质上是队列的 macro-task 的执行和出队的过程")]),e._v("。")])]),e._v(" "),a("li",[a("p",[e._v("上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是"),a("strong",[e._v("一个一个")]),e._v("执行的；而 micro-task 出队时，任务是"),a("strong",[e._v("一队一队")]),e._v("执行的（如下图所示）。因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/1/1662fc9d8bf609a6?w=480&h=410&f=png&s=8715",alt:""}})]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("执行渲染操作，更新界面")]),e._v("（敲黑板划重点）。")])]),e._v(" "),a("li",[a("p",[e._v("检查是否存在 Web worker 任务，如果有，则对其进行处理 。")])])]),e._v(" "),a("p",[e._v("（上述过程循环往复，直到两个队列都清空）")]),e._v(" "),a("p",[e._v("我们总结一下，每一次循环都是一个这样的过程：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/1/1662ff57ebe7a73f?w=857&h=243&f=png&s=28272",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"渲染的时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染的时机"}},[e._v("#")]),e._v(" 渲染的时机")]),e._v(" "),a("p",[e._v("大家现在思考一个这样的问题：假如我想要在异步任务里进行DOM更新，我该把它包装成 micro 还是 macro 呢？")]),e._v(" "),a("p",[e._v("我们先假设它是一个 macro 任务，比如我在 script 脚本中用 setTimeout 来处理它：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// task是一个用于修改DOM的回调\nsetTimeout(task, 0)\n\n")])])]),a("p",[e._v("现在 task 被推入的 macro 队列。但因为 script 脚本本身是一个 macro 任务，所以本次执行完 script 脚本之后，下一个步骤就要去处理 micro 队列了，再往下就去执行了一次 render，对不对？")]),e._v(" "),a("p",[e._v("但本次render我的目标task其实并没有执行，想要修改的DOM也没有修改，因此这一次的render其实是一次无效的render。")]),e._v(" "),a("p",[e._v("macro 不 ok，我们转向 micro 试试看。我用 Promise 来把 task 包装成是一个 micro 任务：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Promise.resolve().then(task)\n\n")])])]),a("p",[e._v("那么我们结束了对 script 脚本的执行，是不是紧接着就去处理 micro-task 队列了？micro-task 处理完，DOM 修改好了，紧接着就可以走 render 流程了——不需要再消耗多余的一次渲染，不需要再等待一轮事件循环，直接为用户呈现最即时的更新结果。")]),e._v(" "),a("p",[e._v("因此，我们更新 DOM 的时间点，应该尽可能靠近渲染的时机。"),a("strong",[e._v("当我们需要在异步任务中实现 DOM 修改时，把它包装成 micro 任务是相对明智的选择")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"生产实践-异步更新策略-以-vue-为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产实践-异步更新策略-以-vue-为例"}},[e._v("#")]),e._v(" 生产实践：异步更新策略——以 Vue 为例")]),e._v(" "),a("p",[e._v("什么是异步更新？")]),e._v(" "),a("p",[e._v("当我们使用 Vue 或 React 提供的接口去更新数据时，这个更新并不会立即生效，而是会被推入到一个队列里。待到适当的时机，队列中的更新任务会被"),a("strong",[e._v("批量触发")]),e._v("。这就是异步更新。")]),e._v(" "),a("p",[e._v("异步更新可以帮助我们避免过度渲染，是我们上节提到的“让 JS 为 DOM 分压”的典范之一。")]),e._v(" "),a("h3",{attrs:{id:"异步更新的优越性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步更新的优越性"}},[e._v("#")]),e._v(" 异步更新的优越性")]),e._v(" "),a("p",[e._v("异步更新的特性在于它"),a("strong",[e._v("只看结果")]),e._v("，因此渲染引擎"),a("strong",[e._v("不需要为过程买单")]),e._v("。")]),e._v(" "),a("p",[e._v("最典型的例子，比如有时我们会遇到这样的情况：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 任务一\nthis.content = '第一次测试'\n// 任务二\nthis.content = '第二次测试'\n// 任务三\nthis.content = '第三次测试'\n\n")])])]),a("p",[e._v("我们在三个更新任务中对同一个状态修改了三次，如果我们采取传统的同步更新策略，那么就要操作三次 DOM。但本质上需要呈现给用户的目标内容其实只是第三次的结果，也就是说只有第三次的操作是有意义的——我们白白浪费了两次计算。")]),e._v(" "),a("p",[e._v("但如果我们把这三个任务塞进异步更新队列里，它们会先在 JS 的层面上被"),a("strong",[e._v("批量执行完毕")]),e._v("。当流程走到渲染这一步时，它仅仅需要针对有意义的计算结果操作一次 DOM——这就是异步更新的妙处。")]),e._v(" "),a("h3",{attrs:{id:"vue状态更新手法-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue状态更新手法-nexttick"}},[e._v("#")]),e._v(" Vue状态更新手法：nextTick")]),e._v(" "),a("p",[e._v("Vue 每次想要更新一个状态的时候，会先把它这个更新操作给包装成一个异步操作派发出去。这件事情，在源码中是由一个叫做 nextTick 的函数来完成的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export function nextTick (cb?: Function, ctx?: Object) {\n  let _resolve\n  callbacks.push(() => {\n    if (cb) {\n      try {\n        cb.call(ctx)\n      } catch (e) {\n        handleError(e, ctx, 'nextTick')\n      }\n    } else if (_resolve) {\n      _resolve(ctx)\n    }\n  })\n  // 检查上一个异步任务队列（即名为callbacks的任务数组）是否派发和执行完毕了。pending此处相当于一个锁\n  if (!pending) {\n    // 若上一个异步任务队列已经执行完毕，则将pending设定为true（把锁锁上）\n    pending = true\n    // 是否要求一定要派发为macro任务\n    if (useMacroTask) {\n      macroTimerFunc()\n    } else {\n      // 如果不说明一定要macro 你们就全都是micro\n      microTimerFunc()\n    }\n  }\n  // $flow-disable-line\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise(resolve => {\n      _resolve = resolve\n    })\n  }\n}\n\n")])])]),a("p",[e._v("我们看到，Vue 的异步任务默认情况下都是用 Promise 来包装的，也就是是说它们都是 micro-task。这一点和我们“前置知识”中的渲染时机的分析不谋而合。")]),e._v(" "),a("p",[e._v("为了带大家熟悉一下常见的 macro 和 micro 派发方式、加深对 Event Loop 的理解，我们继续细化解析一下 macroTimeFunc() 和 microTimeFunc() 两个方法。")]),e._v(" "),a("p",[e._v("macroTimeFunc() 是这么实现的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// macro首选setImmediate 这个兼容性最差\nif (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  macroTimerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else if (typeof MessageChannel !== 'undefined' && (\n    isNative(MessageChannel) ||\n    // PhantomJS\n    MessageChannel.toString() === '[object MessageChannelConstructor]'\n  )) {\n  const channel = new MessageChannel()\n  const port = channel.port2\n  channel.port1.onmessage = flushCallbacks\n  macroTimerFunc = () => {\n    port.postMessage(1)\n  }\n} else {\n  // 兼容性最好的派发方式是setTimeout\n  macroTimerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n\n")])])]),a("p",[e._v("microTimeFunc() 是这么实现的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 简单粗暴 不是ios全都给我去Promise 如果不兼容promise 那么你只能将就一下变成macro了\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  const p = Promise.resolve()\n  microTimerFunc = () => {\n    p.then(flushCallbacks)\n    // in problematic UIWebViews, Promise.then doesn't completely break, but\n    // it can get stuck in a weird state where callbacks are pushed into the\n    // microtask queue but the queue isn't being flushed, until the browser\n    // needs to do some other work, e.g. handle a timer. Therefore we can\n    // \"force\" the microtask queue to be flushed by adding an empty timer.\n    if (isIOS) setTimeout(noop)\n  }\n} else {\n  // 如果无法派发micro，就退而求其次派发为macro\n  microTimerFunc = macroTimerFunc\n}\n\n")])])]),a("p",[e._v("我们注意到，无论是派发 macro 任务还是派发 micro 任务，派发的任务对象都是一个叫做 flushCallbacks 的东西，这个东西做了什么呢？")]),e._v(" "),a("p",[e._v("flushCallbacks 源码如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function flushCallbacks () {\n  pending = false\n  // callbacks在nextick中出现过 它是任务数组（队列）\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  // 将callbacks中的任务逐个取出执行\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}\n\n")])])]),a("p",[e._v("现在我们理清楚了：Vue 中每产生一个状态更新任务，它就会被塞进一个叫 callbacks 的数组（此处是任务队列的实现形式）中。这个任务队列在被丢进 micro 或 macro 队列之前，会先去检查当前是否有异步更新任务正在执行（即检查 pending 锁）。如果确认 pending 锁是开着的（false），就把它设置为锁上（true），然后对当前 callbacks 数组的任务进行派发（丢进 micro 或 macro 队列）和执行。设置 pending 锁的意义在于保证状态更新任务的有序进行，避免发生混乱。")]),e._v(" "),a("p",[e._v("本小节我们从性能优化的角度出发，通过解析Vue源码，对异步更新这一高效的 DOM 优化手段有了感性的认知。同时帮助大家进一步熟悉了 micro 与 macro 在生产中的应用，加深了对 Event Loop 的理解。事实上，Vue 源码中还有许多值得称道的生产实践，其设计模式与编码细节都值得我们去细细品味，后面将针对设计模式和六大设计原则进一步学习和深析，并用新框架Toa进一步加深理解。")]),e._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("至此，我们的 DOM 优化之路才走完了一半。")]),e._v(" "),a("p",[e._v("以上我们都在讨论“如何减少 DOM 操作”的话题。这个话题比较宏观——DOM 操作也分很多种，它们带来的变化各不相同。有的操作只触发重绘，这时我们的性能损耗就小一些；有的操作会触发回流，这时我们更“肉疼”一些。那么如何理解回流与重绘，如何借助这些理解去提升页面渲染效率呢？")]),e._v(" "),a("p",[e._v("结束了 JS 的征程，我们下面就走进 CSS 的世界一窥究竟。")])])}),[],!1,null,null,null);t.default=n.exports}}]);