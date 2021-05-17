(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{542:function(t,s,a){"use strict";a.r(s);var v=a(25),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"吸顶容器-sticky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器-sticky"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 吸顶容器 Sticky")],1),t._v(" "),a("blockquote",[a("p",[t._v("吸顶容器，常见应用场景为吸顶菜单、索引选择器")])]),t._v(" "),a("p",[t._v("吸顶容器需要"),a("code",[t._v("sticky")]),t._v("和"),a("code",[t._v("sticky-item")]),t._v("组件关联使用")]),t._v(" "),a("p",[a("code",[t._v("sticky-item")]),t._v("包括头部"),a("code",[t._v("header")]),t._v("和"),a("code",[t._v("body")]),t._v("两个部分，通过slot注入")]),t._v(" "),a("h2",{attrs:{id:"页面垂直滑动距离-必填"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面垂直滑动距离-必填"}},[t._v("#")]),t._v(" 页面垂直滑动距离（必填）")]),t._v(" "),a("p",[t._v("因为组件内部无法获取页面垂直滑动距离，所以需要在"),a("code",[t._v("sticky")]),t._v("组件上通过属性"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("scroll-top")]),a("OutboundLink")],1),t._v("传入")]),t._v(" "),a("h3",{attrs:{id:"属性传值示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性传值示例代码"}},[t._v("#")]),t._v(" 属性传值示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- 页面wxml文件 --\x3e\n\n<l-sticky scrollTop="{{scrollTop}}">\n  <l-sticky-item>\n    <view slot="header">吸顶菜单</view>\n    <view slot="body">内容部分</view>\n  </l-sticky-item>\n</l-sticky>\n\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面js文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面垂直滑动的距离")]),t._v("\n    scrollTop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPageScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      scrollTop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"wx-lin传值示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-lin传值示例代码"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.lin")]),t._v("传值示例代码")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("若一个页面中仅使用了一个sticky组件，可采用"),a("a",{attrs:{href:"#%E5%90%B8%E9%A1%B6%E5%AE%B9%E5%99%A8%E4%BA%8B%E4%BB%B6%EF%BC%88sticky-events%EF%BC%89"}},[a("code",[t._v("wx.lin.setScrollTop(scrollTop)")])]),t._v("方式传入scrollTop值。该方式在一定程度上可以优化性能。")])])]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- 页面wxml文件 --\x3e\n\n<l-sticky>\n  <l-sticky-item>\n    <view slot="header">吸顶菜单</view>\n    <view slot="body">内容部分</view>\n  </l-sticky-item>\n</l-sticky>\n\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面js文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPageScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScrollTop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"渲染模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染模式"}},[t._v("#")]),t._v(" 渲染模式")]),t._v(" "),a("p",[a("code",[t._v("sticky")]),t._v("组件拥有"),a("code",[t._v("js")]),t._v("和"),a("code",[t._v("css")]),t._v("两种渲染模式，通过"),a("code",[t._v("mode")]),t._v("属性指定，默认值为"),a("code",[t._v("css")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("两者区别")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("css")]),t._v("模式UI流畅度优于"),a("code",[t._v("js")]),t._v("模式，适合对交互体验要求较高的场景，但不支持事件监听，并且部分机型不支持（此时会回滚js模式）")]),t._v(" "),a("li",[a("code",[t._v("js")]),t._v("模式在滑动过快的情况下，吸顶容器会闪烁，但支持"),a("code",[t._v("linsticky")]),t._v("和"),a("code",[t._v("linunsticky")]),t._v("事件监听，适合复杂业务场景")])])]),t._v(" "),a("h2",{attrs:{id:"吸顶位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶位置"}},[t._v("#")]),t._v(" 吸顶位置")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("sticky-item")]),t._v("组件上设置"),a("code",[t._v("top")]),t._v("属性（单位rpx），指定吸顶容器吸附点距离视窗顶部的距离，默认为"),a("code",[t._v("0")]),t._v("，即吸附到视窗顶部")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-sticky scrollTop="{{scrollTop}}">\n  <l-sticky-item top="10">\n    <view slot="header">吸顶菜单</view>\n    <view slot="body">内容部分</view>\n  </l-sticky-item>\n    <l-sticky-item top="20">\n    <view slot="header">吸顶菜单</view>\n    <view slot="body">内容部分</view>\n  </l-sticky-item>\n</l-sticky>\n')])])]),a("h2",{attrs:{id:"动态修改内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态修改内容"}},[t._v("#")]),t._v(" 动态修改内容")]),t._v(" "),a("p",[t._v("在某些场景下"),a("code",[t._v("sticky-item")]),t._v("的内容会增加/减少，如：上拉加载更多，此时需要主动调用"),a("code",[t._v("wx.lin.flushSticky()")]),t._v("方法刷新吸顶容器的宽高数据，否则会造成吸顶位置错乱。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从服务端获取数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刷新sticky容器")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushSticky")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"吸顶容器属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器属性"}},[t._v("#")]),t._v(" 吸顶容器属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("吸顶容器实现方式")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("css")]),t._v("/"),a("code",[t._v("js")])]),t._v(" "),a("td",[a("code",[t._v("css")])]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("scroll-top")]),t._v(" "),a("td",[t._v("页面垂直滑动距离，必填")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器子项属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器子项属性"}},[t._v("#")]),t._v(" 吸顶容器子项属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("吸顶容器吸附的位置（单位rpx）")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器外部样式类"}},[t._v("#")]),t._v(" 吸顶容器外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("外部样式类名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("备注")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("l-class")]),t._v(" "),a("td",[t._v("覆盖吸顶容器整体样式")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器子项外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器子项外部样式类"}},[t._v("#")]),t._v(" 吸顶容器子项外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("外部样式类名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("备注")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("l-class")]),t._v(" "),a("td",[t._v("覆盖吸顶容器子项整体样式")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("l-header-class")]),t._v(" "),a("td",[t._v("覆盖吸顶容器子项头部样式")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("l-header-sticky-class")]),t._v(" "),a("td",[t._v("覆盖吸顶容器子项头部吸顶后的样式")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器事件"}},[t._v("#")]),t._v(" 吸顶容器事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")]),t._v(" "),a("th",[t._v("备注")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bind:linsticky")]),t._v(" "),a("td",[t._v("吸顶容器吸顶回调事件")]),t._v(" "),a("td",[t._v("当前"),a("code",[t._v("sticky-item")]),t._v("在"),a("code",[t._v("sticky")]),t._v("中的索引值"),a("code",[t._v("index")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("bind:linunsticky")]),t._v(" "),a("td",[t._v("吸顶容器脱落回调事件")]),t._v(" "),a("td",[t._v("当前"),a("code",[t._v("sticky-item")]),t._v("在"),a("code",[t._v("sticky")]),t._v("中的索引值"),a("code",[t._v("index")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器wx-lin方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器wx-lin方法"}},[t._v("#")]),t._v(" 吸顶容器wx.lin方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")]),t._v(" "),a("th",[t._v("备注")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("wx.lin.flushSticky()")]),t._v(" "),a("td",[t._v("刷新吸顶容器宽高数据，在改变sticky-item中的内容后调用")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("wx.lin.setScrollTop(scrollTop)")]),t._v(" "),a("td",[t._v("设置页面滑动距离，仅可在页面使用一个sticky组件时使用该方式传值，若一个页面使用了两个及以上的sticky组件时，不可使用该方式传值")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("h2",{attrs:{id:"吸顶容器子项插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吸顶容器子项插槽"}},[t._v("#")]),t._v(" 吸顶容器子项插槽")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Slot名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("备注")]),t._v(" "),a("th",[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("header")]),t._v(" "),a("td",[t._v("吸顶容器吸附部分")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("0.7.4")])]),t._v(" "),a("tr",[a("td",[t._v("body")]),t._v(" "),a("td",[t._v("吸顶容器的内容区域")]),t._v(" "),a("td",[t._v("该部分用于计算吸顶容器脱落的时机")]),t._v(" "),a("td",[t._v("0.7.4")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=_.exports}}]);