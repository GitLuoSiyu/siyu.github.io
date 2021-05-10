(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{577:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("RightMenu"),t._v(" "),a("h1",{attrs:{id:"开放函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放函数"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 开放函数")],1),t._v(" "),a("h2",{attrs:{id:"诞生背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诞生背景"}},[t._v("#")]),t._v(" 诞生背景")]),t._v(" "),a("p",[t._v("Loreal UI 是基于微信小程序自定义组件的方式实现的一套组件库，但由于微信官方的限制，"),a("strong",[t._v("微信小程序与自定义组件的常见通信方式是通过 wxml 属性传值进行")]),t._v("，这在某些场景下十分不便（"),a("em",[t._v("例如需要在 JavaScript 代码中动态调起 Toast 组件的显示")]),t._v("），所以 Loreal UI 制定了一套"),a("strong",[t._v("开放函数")]),t._v("规范，以特定方式暴露 Loreal UI 组件的内部方法，方便你在某些场景下更加灵活的对 Loreal UI 组件进行控制。")]),t._v(" "),a("h2",{attrs:{id:"函数规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数规范"}},[t._v("#")]),t._v(" 函数规范")]),t._v(" "),a("h3",{attrs:{id:"命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),a("p",[t._v("Loreal UI 组件内部所有的"),a("strong",[t._v("开放函数")]),t._v("均以 "),a("code",[t._v("linXXX")]),t._v(" 的格式进行命名。以 Toast 组件为例，显示 Toast 的函数命名为 "),a("code",[t._v("linShow")]),t._v("，隐藏 Toast 的函数命名为 "),a("code",[t._v("linHide")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"文档规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档规范"}},[t._v("#")]),t._v(" 文档规范")]),t._v(" "),a("p",[t._v("每个组件可用的开放函数均会在组件文档页面进行详细说明，包括"),a("strong",[t._v("函数列表、函数作用以及调用参数等")]),t._v("，你可以在组件对应文档中进行查阅。")]),t._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("p",[a("strong",[t._v("开放函数")]),t._v("的使用方式非常简单，主要分为"),a("strong",[t._v("获取组件实例")]),t._v("和"),a("strong",[t._v("调用函数")]),t._v("两步。")]),t._v(" "),a("p",[t._v("我们同样以 Toast 组件为例，首先当然还是需要引入 Toast 组件，"),a("strong",[t._v("但在 wxml 中声明 "),a("code",[t._v("l-toast")]),t._v(" 节点时注意要加上一个 id 属性，供后续使用")]),t._v("，页面 json 和 wxml 代码如下所示：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-toast"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/lin-ui/toast/index"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- index.wxml --\x3e\n\n\x3c!-- 注意 id 属性 --\x3e\n<l-toast id="my-toast" />\n')])])]),a("p",[t._v("准备工作完成，我们开始使用开放函数。微信小程序提供了 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html#%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("this.selectComponent")]),a("OutboundLink")],1),t._v(" api 让我们可以获取到组件实例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一步：使用 id 选择器语法获取 toast 实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" toast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#my-toast'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二步：调用开放函数")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示 Toast")]),t._v("\ntoast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linShow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'温馨提示'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐藏 Toast")]),t._v("\ntoast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linHide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样你就可以在代码中非常灵活的控制 Toast 的显示与隐藏了。如果你的页面有多个 Toast，你可以为他们设置不同的 "),a("code",[t._v("id")]),t._v("，然后在代码中分别获取多个实例便可实现对 Toast 的细粒度控制。")]),t._v(" "),a("p",[t._v("这里我们只讨论了调用开放函数的方法，其实当你拿到 Loreal UI 组件实例之后，可以做的事情就很多了，比如调用其他非开放函数（不推荐），调用 "),a("code",[t._v("setData")]),t._v(" 设置组件内部数据等等，但要记住一点，"),a("strong",[t._v("这是一种比较 Hack 的方法，如果使用不当，容易造成组件异常，所以请尽量只使用开放函数，确保你的程序不会出现意料之外的错误。")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);