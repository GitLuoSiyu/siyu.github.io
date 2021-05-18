(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{541:function(t,e,l){"use strict";l.r(e);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"宫格-grid"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格-grid"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 宫格 Grid")],1),t._v(" "),l("blockquote",[l("p",[t._v("基础宫格布局，常见应用场景为微信支付页面。")])]),t._v(" "),l("p",[t._v("宫格共包含 2 个组件： "),l("code",[t._v("grid")]),t._v(" 、 "),l("code",[t._v("grid-item")]),t._v(" ，这两个组件必须配合使用。")]),t._v(" "),l("h2",{attrs:{id:"基本使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),l("p",[l("code",[t._v("grid")]),t._v(" 包裹在所有 "),l("code",[t._v("grid-item")]),t._v(" 最外层， "),l("code",[t._v("grid")]),t._v(" 下的所有 "),l("code",[t._v("grid-item")]),t._v(" 属于同一个 "),l("code",[t._v("grid")]),t._v(";")]),t._v(" "),l("p",[l("code",[t._v("grid-item")]),t._v(" 用于设置每一个宫格元素的内容及事件。")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/grid/image1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-grid>\n    <l-grid-item key="one" slot="one">\n        <view class="num">3</view>\n        <view class="text">助力</view>\n     </l-grid-item>\n    <l-grid-item key="two" slot="two">\n        <view class="num">134</view>\n        <view class="text">点赞</view>\n    </l-grid-item>\n    <l-grid-item key="three" slot="three">\n        <view class="num">1648</view>\n        <view class="text">评论</view>\n    </l-grid-item>\n</l-grid>\n')])])]),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("必须在 "),l("code",[t._v("grid-item")]),t._v(" 上设置 "),l("code",[t._v("slot")]),t._v("和 "),l("code",[t._v("key")]),t._v(",且两者值必须相等。因为在微信小程序中"),l("code",[t._v("slot")]),t._v("属性不能被获取到，所以必须设置一个和"),l("code",[t._v("slot")]),t._v("值一样的 "),l("code",[t._v("key")]),t._v("，以便于将子组件的元素插入到合适的位置。")])])]),t._v(" "),l("h2",{attrs:{id:"设置边框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置边框"}},[t._v("#")]),t._v(" 设置边框")]),t._v(" "),l("p",[t._v("默认边框不显示，"),l("code",[t._v("grid")]),t._v(" 提供了三个属性设置边框显示，这三个属性接收的值是布尔值，分别如下：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v('show-border="'+t._s(!0)+'"')]),t._v(" 显示所有的边框；")]),t._v(" "),l("li",[l("code",[t._v('show-row-border="'+t._s(!0)+'"')]),t._v(" 显示横向边框；")]),t._v(" "),l("li",[l("code",[t._v('show-col-border="'+t._s(!0)+'"')]),t._v(" 显示纵向边框；")])]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/grid/image2.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-grid l-class="grid" show-border="{{true}}">\n    <l-grid-item \n      wx:for="{{grids1}}" wx:key="{{index}}" key="{{index}}" slot="{{index}}">\n        <l-icon name="{{item.image}}" />\n        <view class="text">{{item.text}}</view>\n    </l-grid-item>\n</l-grid>\n')])])]),l("h2",{attrs:{id:"设置每行数目"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置每行数目"}},[t._v("#")]),t._v(" 设置每行数目")]),t._v(" "),l("p",[t._v("默认每行3个宫格，可以使用 "),l("code",[t._v("row-num")]),t._v(" 自定义每行显示的宫格数目。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/grid/image3.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-grid l-class="grid" row-num="4" show-col-border="{{true}}">\n    <l-grid-item \n      wx:for="{{grids2}}" wx:key="{{index}}" key="{{index}}" slot="{{index}}">\n        <l-icon name="{{item.image}}" />\n        <view class="text">{{item.text}}</view>\n    </l-grid-item>\n</l-grid>\n')])])]),l("h2",{attrs:{id:"宫格属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格属性"}},[t._v("#")]),t._v(" 宫格属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("row-num")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("每行显示的宫格数目")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("3")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-border")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制是否显示所有的边框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-row-border")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制是否显示横向边框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-col-border")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制是否显示纵向边框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("is-hover")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示hover效果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),l("h2",{attrs:{id:"宫格外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格外部样式类"}},[t._v("#")]),t._v(" 宫格外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，设置整体宫格样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("h2",{attrs:{id:"宫格事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格事件"}},[t._v("#")]),t._v(" 宫格事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击"),l("code",[t._v("grid")]),t._v("整体时的事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在 "),l("code",[t._v("e.detail")]),t._v(" 中,返回当前点击 "),l("code",[t._v("grid-item")]),t._v(" 的索引、key、cell")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("h2",{attrs:{id:"宫格元素属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格元素属性"}},[t._v("#")]),t._v(" 宫格元素属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("grid-item")]),t._v("显示所需，必填")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("key")]),t._v("一致，必填")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cell")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于存放gridItem数据")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对象")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("{}")])])])]),t._v(" "),l("h2",{attrs:{id:"宫格元素外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格元素外部样式类"}},[t._v("#")]),t._v(" 宫格元素外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-grid-item-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖每个宫格元素的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-grid-item")])])])]),t._v(" "),l("h2",{attrs:{id:"已经弃用的外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),l("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-grid-item")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖每个宫格元素的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-grid-item-class替代")])])])]),t._v(" "),l("h2",{attrs:{id:"宫格元素事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宫格元素事件"}},[t._v("#")]),t._v(" 宫格元素事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linitemtap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("监听点击"),l("code",[t._v("grid-item")]),t._v("的事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在 "),l("code",[t._v("e.detail")]),t._v(" 中,返回当前点击 "),l("code",[t._v("grid-item")]),t._v(" 的索引、key、cell")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=i.exports}}]);