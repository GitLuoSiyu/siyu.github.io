(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{556:function(t,e,l){"use strict";l.r(e);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("RightMenu"),t._v(" "),l("h1",{attrs:{id:"轻提示-toast"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#轻提示-toast"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 轻提示 Toast")],1),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("组件特性")]),t._v(" "),l("ul",[l("li",[t._v("支持"),l("a",{attrs:{href:"#%E5%BC%80%E6%94%BE%E5%87%BD%E6%95%B0"}},[t._v("开放函数")])])])]),t._v(" "),l("p",[t._v("Toast 组件常用于在页面中展示重要的提示信息。")]),t._v(" "),l("h2",{attrs:{id:"无文字基本类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#无文字基本类型"}},[t._v("#")]),t._v(" 无文字基本类型")]),t._v(" "),l("p",[t._v("提示框可通过设置"),l("code",[t._v("show")]),t._v("属性为"),l("code",[t._v("true")]),t._v("、"),l("code",[t._v("false")]),t._v(" 来控制显示和隐藏，并且在不设置"),l("code",[t._v("image")]),t._v(" 和 "),l("code",[t._v("icon")]),t._v(" 的情况下，只会显示文本内容。")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('\x3c!-- 单行文本 --\x3e\n<l-toast\n  show="{{true}}"\n  title="这是一条基础提示框"\n/>\n\n\x3c!-- 多行文本 --\x3e\n<l-toast\n  show="{{true}}"\n  title="这是一条基础提示框，这是一条基础提示框"\n/>\n\n')])])]),l("p",[t._v("如下图：")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/toast/2.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"icon-文本内容的提示框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#icon-文本内容的提示框"}},[t._v("#")]),t._v(" icon + 文本内容的提示框")]),t._v(" "),l("p",[t._v("当我们遇到有一些场景需要icon+文字的提示框时，可以通过设置"),l("code",[t._v("icon")]),t._v(" 来实现，同时，还可以设置 "),l("code",[t._v("size")]),t._v("和"),l("code",[t._v("color")]),t._v(" 来控制icon图标的大小和颜色。\n"),l("br")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("设置"),l("code",[t._v("icon")]),t._v(" 为 "),l("code",[t._v("success")]),t._v("、"),l("code",[t._v("loading")]),t._v("、"),l("code",[t._v("error")]),t._v(" 时，显示效果如下图所示。")]),t._v(" "),l("li",[t._v("当设置 "),l("code",[t._v("icon")]),t._v(" 为其他值时，默认显示白色，")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('\x3c!-- 显示 success 的提示框 --\x3e\n<l-toast\n  show="{{true}}"\n  icon="success"\n  title="成功提示框"\n/>\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/toast/3.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"自定义图片的提示框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片的提示框"}},[t._v("#")]),t._v(" 自定义图片的提示框")]),t._v(" "),l("p",[t._v("当"),l("code",[t._v("icon")]),t._v(" 属性不能满足我们的需求时，我们还可以通过设置"),l("code",[t._v("image")]),t._v(" 来自由的定义显示的图片内容，只需要在"),l("code",[t._v("image")]),t._v("属性里传入有效的图片路径即可。\n"),l("br")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("image")]),t._v(" 的权重高于 "),l("code",[t._v("icon")]),t._v("，所以当设置了 "),l("code",[t._v("image")]),t._v(" 时，"),l("code",[t._v("icon")]),t._v(" 不显示。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-toast\n  show="{{true}}"\n  image="path/to/img.png"\n  title="图片提示框"\n/>\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/toast/4.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"更改文字的位置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#更改文字的位置"}},[t._v("#")]),t._v(" 更改文字的位置")]),t._v(" "),l("p",[l("code",[t._v("toast")]),t._v(" 默认是列式布局（图标在上，文字在下），但是有时候会需要提示的图标居左，文字居右；或者文字居左，图标居右显示。\n"),l("br"),t._v("\n这时，我们可以通过设置 "),l("code",[t._v("placement")]),t._v(" 属性来完成，"),l("code",[t._v("placement")]),t._v("可选值为"),l("code",[t._v("top / left / right / bottom")]),t._v(" ，默认值是 "),l("code",[t._v("bottom")]),t._v("。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("当 "),l("code",[t._v("icon")]),t._v(" 或者 "),l("code",[t._v("image")]),t._v(" 为空时，设置 "),l("code",[t._v("placement")]),t._v(" 不生效。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-toast\n  show="{{true}}"\n  icon="time"\n  title="自定义提示框"\n  placement="right"\n/>\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/toast/5.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"提示框属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#提示框属性"}},[t._v("#")]),t._v(" 提示框属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制提示框的显示")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提示框的文本内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的名字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("参见 "),l("a",{attrs:{href:"http://doc.mini.talelin.com/component/basic/icon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icon"),l("OutboundLink")],1),t._v(" 可选值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("60")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#fff")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("图片的有效路径，支持本地路径和网络路径")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文字的显示方位")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("top/left/right/bottom")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("bottom")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提示框显示的时长")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("zIndex")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制提示框的z-index层级")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("999")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示透明蒙层，防止触摸穿透")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("offsetX")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置提示框向右的偏移量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("offsetY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置提示框向下的偏移量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("image")]),t._v(" 的权重大于 "),l("code",[t._v("icon")]),t._v(" ，当设置"),l("code",[t._v("image")]),t._v("时， "),l("code",[t._v("icon")]),t._v("不生效")]),t._v(" "),l("li",[l("code",[t._v("center")]),t._v(" 设置为"),l("code",[t._v("false")]),t._v("的时候，提示框偏底部显示，默认居中显示。")])])]),t._v(" "),l("h2",{attrs:{id:"提示框外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#提示框外部样式类"}},[t._v("#")]),t._v(" 提示框外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast整体的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast图片部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast图标部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),l("h2",{attrs:{id:"icon-参数说明"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#icon-参数说明"}},[t._v("#")]),t._v(" icon 参数说明")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示绿色的"),l("code",[t._v("success")]),t._v(" 图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示红色的 "),l("code",[t._v("error")]),t._v(" 图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示白色的的 "),l("code",[t._v("loading")]),t._v(" 图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("其他值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("参见 "),l("a",{attrs:{href:"http://doc.mini.talelin.com/component/basic/icon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icon"),l("OutboundLink")],1),t._v(" 可选值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),l("h2",{attrs:{id:"开放函数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#开放函数"}},[t._v("#")]),t._v(" "),l("a",{attrs:{href:"https://doc.mini.talelin.com/start/open-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放函数"),l("OutboundLink")],1)]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("函数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("linShow(optinos)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示 Toast")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("optinos 为 Object 类型，属性为 Toast 支持的所有属性")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("linHide")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("隐藏 Toast")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);