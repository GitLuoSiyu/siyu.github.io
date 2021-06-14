(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{342:function(d,e,i){},418:function(d,e,i){"use strict";i(342)},516:function(d,e,i){"use strict";i.r(e);i(418);var n=i(25),t=Object(n.a)({},(function(){var d=this,e=d.$createElement,i=d._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[i("h1",{attrs:{id:"第-1-题-写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第-1-题-写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[d._v("#")]),d._v(" "),i("H2Icon"),d._v("第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？")],1),d._v(" "),i("blockquote",[i("p",[d._v("原题地址："),i("a",{staticClass:"action-button",attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1"}},[d._v("https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1")])])]),d._v(" "),i("p",[d._v("基于没有key的情况diff速度会更快。确实，这种观点并没有错。没有绑定key的情况下，并且在遍历模板简单的情况下，会导致虚拟新旧节点对比更快，节点也会复用。而这种复用是就地复用，一种鸭子辩型的复用。以下为简单的例子:")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v('<div id="app">\n    <div v-for="i in dataList">{{ i }}</div>\n</div>\nvar vm = new Vue({\n  el: \'#app\',\n  data: {\n    dataList: [1, 2, 3, 4, 5]\n  }\n})\n')])])]),i("p",[d._v("以上的例子，v-for的内容会生成以下的dom节点数组，我们给每一个节点标记一个身份id：")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v("  [\n    '<div>1</div>', // id： A\n    '<div>2</div>', // id:  B\n    '<div>3</div>', // id:  C\n    '<div>4</div>', // id:  D\n    '<div>5</div>'  // id:  E\n  ]\n")])])]),i("p",[d._v("改变dataList数据，进行数据位置替换，对比改变后的数据")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v(" vm.dataList = [4, 1, 3, 5, 2] // 数据位置替换\n\n // 没有key的情况， 节点位置不变，但是节点innerText内容更新了\n  [\n    '<div>4</div>', // id： A\n    '<div>1</div>', // id:  B\n    '<div>3</div>', // id:  C\n    '<div>5</div>', // id:  D\n    '<div>2</div>'  // id:  E\n  ]\n\n  // 有key的情况，dom节点位置进行了交换，但是内容没有更新\n  // <div v-for=\"i in dataList\" :key='i'>{{ i }}</div>\n  [\n    '<div>4</div>', // id： D\n    '<div>1</div>', // id:  A\n    '<div>3</div>', // id:  C\n    '<div>5</div>', // id:  E\n    '<div>2</div>'  // id:  B\n  ]\n")])])]),i("p",[d._v("增删dataList列表项")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v("  vm.dataList = [3, 4, 5, 6, 7] // 数据进行增删\n\n  // 1. 没有key的情况， 节点位置不变，内容也更新了\n  [\n    '<div>3</div>', // id： A\n    '<div>4</div>', // id:  B\n    '<div>5</div>', // id:  C\n    '<div>6</div>', // id:  D\n    '<div>7</div>'  // id:  E\n  ]\n\n  // 2. 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点\n  // <div v-for=\"i in dataList\" :key='i'>{{ i }}</div>\n  [\n    '<div>3</div>', // id： C\n    '<div>4</div>', // id:  D\n    '<div>5</div>', // id:  E\n    '<div>6</div>', // id:  F\n    '<div>7</div>'  // id:  G\n  ]\n")])])]),i("p",[d._v("从以上来看，不带有key，并且使用简单的模板，基于这个前提下，可以更有效的复用节点，diff速度来看也是不带key更加快速的，因为带key在增删节点上有耗时。这就是vue文档所说的默认模式。但是这个并不是key作用，而是没有key的情况下可以对节点就地复用，提高性能。")]),d._v(" "),i("p",[d._v("这种模式会带来一些隐藏的副作用，比如可能不会产生过渡效果，或者在某些节点有绑定数据（表单）状态，会出现状态错位。VUE文档也说明了 这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出")]),d._v(" "),i("p",[d._v("楼下 @yeild 也提到，在不带key的情况下，对于简单列表页渲染来说diff节点更快是没有错误的。但是这并不是key的作用呀。")]),d._v(" "),i("p",[d._v("但是key的作用是什么？\n我重新梳理了一下文字，可能这样子会更好理解一些。")]),d._v(" "),i("p",[d._v("key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。")]),d._v(" "),i("h3",{attrs:{id:"_1-更准确"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-更准确"}},[d._v("#")]),d._v(" 1. 更准确")]),d._v(" "),i("p",[d._v("因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。")]),d._v(" "),i("h3",{attrs:{id:"_2-更快"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-更快"}},[d._v("#")]),d._v(" 2. 更快")]),d._v(" "),i("p",[d._v("利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。(这个观点，就是我最初的那个观点。从这个角度看，map会比遍历更快。)")]),d._v(" "),i("p",[d._v("原答案 -----------------------\nvue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。\n在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。\nvue部分源码如下：")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v("// vue项目  src/core/vdom/patch.js  -488行\n// 以下是为了阅读性进行格式化后的代码\n\n// oldCh 是一个旧虚拟节点数组\nif (isUndef(oldKeyToIdx)) {\n  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)\n}\nif(isDef(newStartVnode.key)) {\n  // map 方式获取\n  idxInOld = oldKeyToIdx[newStartVnode.key]\n} else {\n  // 遍历方式获取\n  idxInOld = findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)\n}\n")])])]),i("p",[d._v("创建map函数")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v("function createKeyToOldIdx (children, beginIdx, endIdx) {\n  let i, key\n  const map = {}\n  for (i = beginIdx; i <= endIdx; ++i) {\n    key = children[i].key\n    if (isDef(key)) map[key] = i\n  }\n  return map\n}\n")])])]),i("p",[d._v("遍历寻找")]),d._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[d._v("// sameVnode 是对比新旧节点是否相同的函数\n function findIdxInOld (node, oldCh, start, end) {\n    for (let i = start; i < end; i++) {\n      const c = oldCh[i]\n      \n      if (isDef(c) && sameVnode(node, c)) return i\n    }\n  }\n")])])]),i("RightMenu")],1)}),[],!1,null,null,null);e.default=t.exports}}]);