(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{545:function(t,e,l){"use strict";l.r(e);var a=l(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"搜索栏-searchbar"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#搜索栏-searchbar"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 搜索栏 SearchBar")],1),t._v(" "),l("blockquote",[l("p",[t._v("搜索组件的搜索栏。")])]),t._v(" "),l("h2",{attrs:{id:"基础用法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("placeholder")]),t._v("属性设置搜索框占位符。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("cancel-text")]),t._v("属性更改输入框后面的文字内容，默认值为"),l("code",[t._v("取消")]),t._v("。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/search-bar/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-search-bar placeholder="搜索"/>\n')])])]),l("h2",{attrs:{id:"更改搜索框形状及背景颜色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#更改搜索框形状及背景颜色"}},[t._v("#")]),t._v(" 更改搜索框形状及背景颜色")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("shape")]),t._v("属性设置搜索框形状。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("bg-color")]),t._v("属性设置搜索框背景颜色。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/search-bar/2.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-search-bar placeholder="搜索"\n                bg-color="#f6f6f6"\n                shape="circle"/>\n')])])]),l("h2",{attrs:{id:"设置地址"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置地址"}},[t._v("#")]),t._v(" 设置地址")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("front-text")]),t._v("属性设置搜索框前的地址。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/search-bar/3.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-search-bar placeholder="搜索"\n                bg-color="#f6f6f6"\n                shape="circle"\n                front-text="北京"/>\n')])])]),l("h3",{attrs:{id:"是否显示取消文字"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#是否显示取消文字"}},[t._v("#")]),t._v(" 是否显示取消文字")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("show-cancel")]),t._v("属性设置是否显示取消文字。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/search-bar/4.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-search-bar placeholder="搜索"\n                show-cancel="{{false}}"/>\n')])])]),l("h3",{attrs:{id:"设置插槽内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置插槽内容"}},[t._v("#")]),t._v(" 设置插槽内容")]),t._v(" "),l("p",[t._v("设置"),l("code",[t._v("slot='before'")]),t._v("可自定义搜索框前部的内容。")]),t._v(" "),l("p",[t._v("设置"),l("code",[t._v("slot='after'")]),t._v("可自定义搜索框后面的内容。")]),t._v(" "),l("p",[t._v("设置"),l("code",[t._v("slot='icon'")]),t._v("可自定义搜索框图标部分的内容。需同时设置"),l("code",[t._v("custom")]),t._v("属性为"),l("code",[t._v("true")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-search-bar placeholder="搜索">\n    \x3c!-- 此处是插槽内容 --\x3e\n    <view name="before"/>\n  </l-search-bar>\n  <l-search-bar placeholder="搜索">\n    \x3c!-- 此处是插槽内容 --\x3e\n    <view name="after"/>\n  </l-search-bar>\n  <l-search-bar placeholder="搜索" custom>\n    \x3c!-- 此处是插槽内容 --\x3e\n    <view name="icon"/>\n  </l-search-bar>\n')])])]),l("h2",{attrs:{id:"搜索栏属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#搜索栏属性"}},[t._v("#")]),t._v(" 搜索栏属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置搜索输入框占位符内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置搜索输入框后面的文字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取消")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-cancel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否显示取消文字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置搜索框形状")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("circle/primary")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("circle")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("research")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#bdbdbd")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否自定义图标部分内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bg-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置搜索框背景颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#f3f3f3")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("front-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置搜索框前的文字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("获取焦点")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("input 的类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框的初始内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清除按钮")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("maxlength")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("最大输入长度，设置为 -1 的时候不限制最大长度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("140")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder-style")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框占位文本的内联样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),l("h2",{attrs:{id:"搜索栏事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#搜索栏事件"}},[t._v("#")]),t._v(" 搜索栏事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lincancel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消文字触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("键盘输入时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linfocus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框聚焦时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linblur")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框失去焦点时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linconfirm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击完成按钮时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclear")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击清除按钮时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linfronttap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击"),l("code",[t._v("front-text")]),t._v("文字时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("h2",{attrs:{id:"搜索栏插槽"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#搜索栏插槽"}},[t._v("#")]),t._v(" 搜索栏插槽")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("before")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义输入框左边的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("after")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义输入框右边的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图标的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("需设置 custom 为"),l("code",[t._v("true")]),t._v("生效")])])])]),t._v(" "),l("h2",{attrs:{id:"搜索栏外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#搜索栏外部样式类"}},[t._v("#")]),t._v(" 搜索栏外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框容器的样式类（灰色区域）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-container-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框整体的样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标的样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-input-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框的样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-cancel-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置取消文字的样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-placeholder-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框占位符的样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);