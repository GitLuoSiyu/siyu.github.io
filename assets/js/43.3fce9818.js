(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{436:function(t,a,v){"use strict";v.r(a);var s=v(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"索引列表-indexlist"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表-indexlist"}},[t._v("#")]),t._v(" "),v("H2Icon"),t._v(" 索引列表 IndexList")],1),t._v(" "),v("blockquote",[v("p",[t._v("使用场景：地区选择、联系人列表")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("使用该组件需开启微信开发者工具"),v("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("增强编译")]),v("OutboundLink")],1),t._v("选项")])]),t._v(" "),v("h2",{attrs:{id:"核心概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),v("p",[t._v("因索引列表元素较多，为了便于你理解文档，我会简单介绍一下索引列表各个部分的名称")]),t._v(" "),v("p",[t._v("首先，我们把索引列表分为 4 个部分："),v("code",[t._v("Anchor")]),t._v("、"),v("code",[t._v("Content")]),t._v("、"),v("code",[t._v("Sidebar")]),t._v("、"),v("code",[t._v("Tip")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Anchor")]),t._v("——锚点，指索引列表中每一小节的标题部分")]),t._v(" "),v("li",[v("code",[t._v("Content")]),t._v("——内容，指索引列表中每一小节的内容部分")]),t._v(" "),v("li",[v("code",[t._v("Sidebar")]),t._v("——侧栏，指位于屏幕右侧用于索引的导航条")]),t._v(" "),v("li",[v("code",[t._v("Tip")]),t._v("——提示，指滑动侧栏时，在屏幕上显示的提示")])]),t._v(" "),v("p",[t._v("以上四个名词分别对应的部分如下图所示：")]),t._v(" "),v("p",[t._v(":::img\n"),v("img",{attrs:{src:"/screenshots/index-list/basic-concept.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),v("h2",{attrs:{id:"基本用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),v("p",[t._v("索引列表由"),v("code",[t._v("index-list")]),t._v("和"),v("code",[t._v("index-anchor")]),t._v("构成，"),v("code",[t._v("index-list")]),t._v("需包裹在"),v("code",[t._v("index-anchor")]),t._v("的外层")]),t._v(" "),v("div",{staticClass:"language-wxml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<l-index-list scroll-top="{{scrollTop}}">\n    <view>\n        <l-index-anchor>A</l-index-anchor>\n        <view>鞍山</view>\n        <view>安庆</view>\n        <view>安阳</view>\n    </view>\n\n    <view>\n        <l-index-anchor>B</l-index-anchor>\n        <view>鞍山</view>\n        <view>安庆</view>\n        <view>安阳</view>\n    </view>\n</l-index-list>\n')])])]),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面js文件")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面垂直滑动的距离")]),t._v("\n    scrollTop"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面监听函数")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPageScroll")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      scrollTop"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[v("strong",[t._v("页面js文件中必须使用 "),v("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("onPageScroll()"),v("OutboundLink")],1),t._v(" 监听页面滚动事件，以便给scrollTop 属性传值。")])])]),t._v(" "),v("h2",{attrs:{id:"高级用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),v("p",[v("code",[t._v("Sidebar")]),t._v("显示的数据可通过属性"),v("code",[t._v("sidebar-data")]),t._v("自定义，否则显示为"),v("code",[t._v("A-Z")]),t._v("26 个大写英文字母。")]),t._v(" "),v("p",[v("code",[t._v("Anchor")]),t._v("显示内容可通过默认插槽自定义，否则显示为对应"),v("code",[t._v("Sidebar")]),t._v("的内容。")]),t._v(" "),v("div",{staticClass:"language-wxml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('\x3c!-- 使用 sidebar-data 自定义索引内容 --\x3e\n<l-index-list sidebar-data="{{sidebarData}}" bind:linselected="onSelected">\n\n    \x3c!-- 使用插槽自定义 Tip --\x3e\n    <view slot="tip">\n      <view>{{indexText}}</view>\n    </view>\n\n    <view>\n        \x3c!-- 使用插槽自定义 Anchor --\x3e\n        <l-index-anchor>\n          <view>热门</view>\n        </l-index-anchor>\n\n        <view>鞍山</view>\n        <view>安庆</view>\n        <view>安阳</view>\n    </view>\n\n    <view>\n        <l-index-anchor>B</l-index-anchor>\n        <view>鞍山</view>\n        <view>安庆</view>\n        <view>安阳</view>\n    </view>\n</l-index-list>\n')])])]),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面js文件")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  data"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示在 Tip 区域的文字")]),t._v("\n    indexText"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面监听函数")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPageScroll")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScrollTop")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引被选中的监听函数")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSelected")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      indexText"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" event"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexText\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("优化")]),t._v(" "),v("p",[v("code",[t._v("scrollTop")]),t._v("的传入方式除了使用"),v("code",[t._v("index-list")]),t._v("组件的属性传入以外，还支持"),v("code",[t._v("wx.lin.setScrollTop(scrollTop)")]),t._v("。")]),t._v(" "),v("p",[t._v("如果对性能有极致要求，建议使用"),v("code",[t._v("wx.lin.setScrollTop(scrollTop)")]),t._v("的方式传入"),v("code",[t._v("scrollTop")]),t._v("属性。")])]),t._v(" "),v("h2",{attrs:{id:"索引列表属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表属性"}},[t._v("#")]),t._v(" 索引列表属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("is-stick")]),t._v(" "),v("td",[v("code",[t._v("Anchor")]),t._v("滚动到顶部时是否吸附")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("scroll-top")]),t._v(" "),v("td",[v("code",[t._v("onScrollTop")]),t._v("监听函数获取到的值（单位"),v("code",[t._v("px")]),t._v("，"),v("strong",[t._v("必填")]),t._v("）")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("sidebar-data")]),t._v(" "),v("td",[v("code",[t._v("Sidebar")]),t._v("显示的索引内容")]),t._v(" "),v("td",[t._v("String[]")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("A-Z")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("show-sidebar")]),t._v(" "),v("td",[t._v("是否显示"),v("code",[t._v("Sidebar")])]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("stick-offset-top")]),t._v(" "),v("td",[v("code",[t._v("Anchor")]),t._v("吸附时距离顶部的距离（单位"),v("code",[t._v("rpx")]),t._v("）")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("h2",{attrs:{id:"索引列表外部样式类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表外部样式类"}},[t._v("#")]),t._v(" 索引列表外部样式类")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("外部样式类名")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("l-anchor-class")]),t._v(" "),v("td",[t._v("覆盖"),v("code",[t._v("Anchor")]),t._v("整体样式")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("l-tip-class")]),t._v(" "),v("td",[t._v("覆盖"),v("code",[t._v("Tip")]),t._v("整体样式")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("l-sidebar-class")]),t._v(" "),v("td",[t._v("覆盖"),v("code",[t._v("Sidebar")]),t._v("整体样式")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("l-selected-class")]),t._v(" "),v("td",[t._v("覆盖"),v("code",[t._v("Sidebar")]),t._v("当前选择的索引项样式")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("l-unselected-class")]),t._v(" "),v("td",[t._v("覆盖"),v("code",[t._v("Sidebar")]),t._v("未选择的索引项样式")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("h2",{attrs:{id:"索引列表事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表事件"}},[t._v("#")]),t._v(" 索引列表事件")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("事件名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("返回值")]),t._v(" "),v("th",[t._v("备注")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("bind:linselected")]),t._v(" "),v("td",[t._v("索引选中回调事件")]),t._v(" "),v("td",[t._v("当前选中索引值")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("h2",{attrs:{id:"索引列表插槽"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表插槽"}},[t._v("#")]),t._v(" 索引列表插槽")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Slot 名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("默认 slot")]),t._v(" "),v("td",[v("code",[t._v("Content")]),t._v("区域")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])]),t._v(" "),v("tr",[v("td",[t._v("tip")]),t._v(" "),v("td",[v("code",[t._v("Tip")]),t._v("区域")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("h2",{attrs:{id:"索引锚点插槽"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引锚点插槽"}},[t._v("#")]),t._v(" 索引锚点插槽")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Slot 名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("默认 slot")]),t._v(" "),v("td",[v("code",[t._v("Anchor")]),t._v("区域")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("h2",{attrs:{id:"索引列表-wx-lin-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列表-wx-lin-方法"}},[t._v("#")]),t._v(" 索引列表 wx.lin 方法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("返回值")]),t._v(" "),v("th",[t._v("备注")]),t._v(" "),v("th",[t._v("版本号")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("wx.lin.setScrollTop")]),t._v(" "),v("td",[t._v("设置"),v("code",[t._v("scrollTop")]),t._v("值")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("---")]),t._v(" "),v("td",[t._v("---")])])])]),t._v(" "),v("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);