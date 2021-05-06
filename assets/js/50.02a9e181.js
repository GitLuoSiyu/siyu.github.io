(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{463:function(t,e,n){"use strict";n.r(e);var l=n(25),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"事件的节流-throttle-与防抖-debounce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件的节流-throttle-与防抖-debounce"}},[t._v("#")]),t._v(" 事件的节流（throttle）与防抖（debounce）")]),t._v(" "),n("p",[t._v("上一节我们一起通过监听滚动事件，实现了各大网站喜闻乐见的懒加载效果。但我们提到，scroll 事件是一个非常容易被反复触发的事件。其实不止 scroll 事件，resize 事件、鼠标事件（比如 mousemove、mouseover 等）、键盘事件（keyup、keydown 等）都存在被频繁触发的风险。")]),t._v(" "),n("p",[t._v("频繁触发回调导致的大量计算会引发页面的抖动甚至卡顿。为了规避这种情况，我们需要一些手段来控制事件被触发的频率。就是在这样的背景下，throttle（事件节流）和 debounce（事件防抖）出现了。")]),t._v(" "),n("h2",{attrs:{id:"节流-与-防抖-的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流-与-防抖-的本质"}},[t._v("#")]),t._v(" “节流”与“防抖”的本质")]),t._v(" "),n("p",[t._v("这两个东西都以"),n("strong",[t._v("闭包")]),t._v("的形式存在。")]),t._v(" "),n("p",[t._v("它们通过对事件对应的回调函数进行包裹、以自由变量的形式缓存时间信息，最后用 setTimeout 来控制事件的触发频率。")]),t._v(" "),n("h2",{attrs:{id:"throttle-第一个人说了算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#throttle-第一个人说了算"}},[t._v("#")]),t._v(" Throttle： 第一个人说了算")]),t._v(" "),n("p",[t._v("throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。")]),t._v(" "),n("p",[t._v("先给大家讲个小故事：现在有一个旅客刚下了飞机，需要用车，于是打电话叫了该机场唯一的一辆机场大巴来接。司机开到机场，心想来都来了，多接几个人一起走吧，这样这趟才跑得值——我等个十分钟看看。于是司机一边打开了计时器，一边招呼后面的客人陆陆续续上车。在这十分钟内，后面下飞机的乘客都只能乘这一辆大巴，十分钟过去后，不管后面还有多少没挤上车的乘客，这班车都必须发走。")]),t._v(" "),n("p",[t._v("在这个故事里，“司机” 就是我们的节流阀，他控制发车的时机；“乘客”就是因为我们频繁操作事件而不断涌入的回调任务，它需要接受“司机”的安排；而“计时器”，就是我们上文提到的以自由变量形式存在的时间信息，它是“司机”决定发车的依据；最后“发车”这个动作，就对应到回调函数的执行。")]),t._v(" "),n("p",[t._v("总结下来，所谓的“节流”，是通过在一段时间内"),n("strong",[t._v("无视后来产生的回调请求")]),t._v("来实现的。只要一位客人叫了车，司机就会为他开启计时器，一定的时间内，后面需要乘车的客人都得排队上这一辆车，谁也无法叫到更多的车。")]),t._v(" "),n("p",[t._v("对应到实际的交互上是一样一样的：每当用户触发了一次 scroll 事件，我们就为这个触发操作开启计时器。一段时间内，后续所有的 scroll 事件都会被当作“一辆车的乘客”——它们无法触发新的 scroll 回调。直到“一段时间”到了，第一次触发的 scroll 事件对应的回调才会执行，而“一段时间内”触发的后续的 scroll 回调都会被节流阀无视掉。")]),t._v(" "),n("p",[t._v("理解了大致的思路，我们现在一起实现一个 throttle：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// fn是我们需要包装的事件回调, interval是时间间隔的阈值\nfunction throttle(fn, interval) {\n  // last为上一次触发回调的时间\n  let last = 0\n  \n  // 将throttle处理结果当作函数返回\n  return function () {\n      // 保留调用时的this上下文\n      let context = this\n      // 保留调用时传入的参数\n      let args = arguments\n      // 记录本次触发回调的时间\n      let now = +new Date()\n      \n      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值\n      if (now - last >= interval) {\n      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调\n          last = now;\n          fn.apply(context, args);\n      }\n    }\n}\n\n// 用throttle来包装scroll的回调\nconst better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)\n\ndocument.addEventListener('scroll', better_scroll)\n\n")])])]),n("h2",{attrs:{id:"debounce-最后一个人说了算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debounce-最后一个人说了算"}},[t._v("#")]),t._v(" Debounce： 最后一个人说了算")]),t._v(" "),n("p",[t._v("防抖的中心思想在于：我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次。")]),t._v(" "),n("p",[t._v("继续讲司机开车的故事。这次的司机比较有耐心。第一个乘客上车后，司机开始计时（比如说十分钟）。十分钟之内，如果又上来了一个乘客，司机会把计时器清零，重新开始等另一个十分钟（延迟了等待）。直到有这么一位乘客，从他上车开始，后续十分钟都没有新乘客上车，司机会认为确实没有人需要搭这趟车了，才会把车开走。")]),t._v(" "),n("p",[t._v("我们对比 throttle 来理解 debounce：在throttle的逻辑里，“第一个人说了算”，它只为第一个乘客计时，时间到了就执行回调。而 debounce 认为，“最后一个人说了算”，debounce 会为每一个新乘客设定新的定时器。")]),t._v(" "),n("p",[t._v("我们基于上面的理解，一起来写一个 debounce：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间\nfunction debounce(fn, delay) {\n  // 定时器\n  let timer = null\n  \n  // 将debounce处理结果当作函数返回\n  return function () {\n    // 保留调用时的this上下文\n    let context = this\n    // 保留调用时传入的参数\n    let args = arguments\n\n    // 每次事件被触发时，都去清除之前的旧定时器\n    if(timer) {\n        clearTimeout(timer)\n    }\n    // 设立新定时器\n    timer = setTimeout(function () {\n      fn.apply(context, args)\n    }, delay)\n  }\n}\n\n// 用debounce来包装scroll的回调\nconst better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)\n\ndocument.addEventListener('scroll', better_scroll)\n\n")])])]),n("h2",{attrs:{id:"用-throttle-来优化-debounce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用-throttle-来优化-debounce"}},[t._v("#")]),t._v(" 用 Throttle 来优化 Debounce")]),t._v(" "),n("p",[t._v("debounce 的问题在于它“太有耐心了”。试想，如果用户的操作十分频繁——他每次都不等 debounce 设置的 delay 时间结束就进行下一次操作，于是每次 debounce 都为该用户重新生成定时器，回调函数被延迟了不计其数次。频繁的延迟会导致用户迟迟得不到响应，用户同样会产生“这个页面卡死了”的观感。")]),t._v(" "),n("p",[t._v("为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应。这个 throttle 与 debounce “合体”思路，已经被很多成熟的前端库应用到了它们的加强版 throttle 函数的实现中：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// fn是我们需要包装的事件回调, delay是时间间隔的阈值\nfunction throttle(fn, delay) {\n  // last为上一次触发回调的时间, timer是定时器\n  let last = 0, timer = null\n  // 将throttle处理结果当作函数返回\n  \n  return function () { \n    // 保留调用时的this上下文\n    let context = this\n    // 保留调用时传入的参数\n    let args = arguments\n    // 记录本次触发回调的时间\n    let now = +new Date()\n    \n    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值\n    if (now - last < delay) {\n    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器\n       clearTimeout(timer)\n       timer = setTimeout(function () {\n          last = now\n          fn.apply(context, args)\n        }, delay)\n    } else {\n        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应\n        last = now\n        fn.apply(context, args)\n    }\n  }\n}\n\n// 用新的throttle包装scroll的回调\nconst better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)\n\ndocument.addEventListener('scroll', better_scroll)\n\n")])])]),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("throttle 和 debounce 不仅是我们日常开发中的常用优质代码片段，更是前端面试中不可不知的高频考点。“看懂了代码”、“理解了过程”在本节都是不够的，重要的是把它写到自己的项目里去，亲自体验一把节流和防抖带来的性能提升。")])])}),[],!1,null,null,null);e.default=r.exports}}]);