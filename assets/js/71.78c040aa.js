(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{464:function(t,e,l){"use strict";l.r(e);var a=l(45),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"进度条-progress"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进度条-progress"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 进度条 Progress")],1),t._v(" "),l("blockquote",[l("p",[t._v("用来展示当前事件进度。")])]),t._v(" "),l("h2",{attrs:{id:"百分比"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#百分比"}},[t._v("#")]),t._v(" 百分比")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("percent")]),t._v("属性设置进度条当前进度，取值0~100，默认为0.")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/1.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="20"></l-progress>\n<l-progress percent="50"></l-progress>\n')])])]),l("h2",{attrs:{id:"宽度"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#宽度"}},[t._v("#")]),t._v(" 宽度")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("stroke-width")]),t._v("属性设置进度条的宽度。默认12，单位"),l("code",[t._v("rpx")]),t._v(".")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/2.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="20"></l-progress>\n<l-progress percent="50" stroke-width=\'20\'></l-progress>\n')])])]),l("h2",{attrs:{id:"圆角"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#圆角"}},[t._v("#")]),t._v(" 圆角")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("border-radius")]),t._v("属性设置进度条的圆角数值，默认为6，单位"),l("code",[t._v("rpx")]),t._v(".")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/3.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("<l-progress percent=\"20\" stroke-width='20' border-radius='8'></l-progress>\n<l-progress percent=\"50\" stroke-width='20' border-radius='15'></l-progress>\n")])])]),l("h2",{attrs:{id:"已选择的进度条颜色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#已选择的进度条颜色"}},[t._v("#")]),t._v(" 已选择的进度条颜色")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("active-color")]),t._v("属性可以设置已选择的进度条颜色，默认为主题色。（关于主题色设置请阅读"),l("a",{attrs:{href:"http://doc.mini.talelin.com/start/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("入门介绍-主题色更改"),l("OutboundLink")],1),t._v("）")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/4.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="20"></l-progress>\n<l-progress percent="50" active-color="red"></l-progress>\n')])])]),l("h2",{attrs:{id:"背景色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#背景色"}},[t._v("#")]),t._v(" 背景色")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("background-color")]),t._v("属性可以设置未选择的进度条颜色，默认颜色"),l("code",[t._v("#EBEBEB")]),t._v("。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/5.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="20"></l-progress>\n<l-progress percent="50" background-color=\'#FF00FF\'></l-progress>\n')])])]),l("h2",{attrs:{id:"显示数值"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#显示数值"}},[t._v("#")]),t._v(" 显示数值")]),t._v(" "),l("p",[t._v("通过设置"),l("code",[t._v("show-info")]),t._v("属性为"+t._s(!0)+"，可以显示当前百分比数值，默认为"),l("code",[t._v("false")]),t._v(".")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("<l-progress percent='20' show-info=\"{{true}}\">\n")])])]),l("h2",{attrs:{id:"文字显示位置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文字显示位置"}},[t._v("#")]),t._v(" 文字显示位置")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("text-position")]),t._v('属性可以设置百分比数值的显示位置，可选值有"left","right"。默认为"right"。')]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/6.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="20" show-info="{{true}}"></l-progress>\n<l-progress percent="50" show-info="{{true}}" text-position="left"></l-progress>\n')])])]),l("h2",{attrs:{id:"文字颜色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文字颜色"}},[t._v("#")]),t._v(" 文字颜色")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("text-color")]),t._v("属性，可以设置文字颜色，默认为主题色。（关于主题色设置请阅读"),l("a",{attrs:{href:"http://doc.mini.talelin.com/start/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("入门介绍-主题色更改"),l("OutboundLink")],1),t._v("）")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/7.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress percent="50" show-info="{{true}}" text-color=\'red\'></l-progress>\n')])])]),l("h2",{attrs:{id:"文字和进度条间隔"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文字和进度条间隔"}},[t._v("#")]),t._v(" 文字和进度条间隔")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("interval")]),t._v("属性，可以设置文字和进度条之间的间隔距离。默认值20，单位"),l("code",[t._v("rpx")]),t._v("。")]),t._v(" "),l("h2",{attrs:{id:"自定义子节点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义子节点"}},[t._v("#")]),t._v(" 自定义子节点")]),t._v(" "),l("p",[t._v('进度条头部的样式可通过slot自定义传入，通过传入slot="header"自定义进度条头部样式。')]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/progress/8.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-progress>\n    <view slot=\'header\' style="width:50rpx;height:50rpx;border-radius:50%;background-color:red;display:block;"></view>\n</l-progress>\n<l-progress percent="50" l-slot-class=\'slot-class\'>\n    <image src="imoji.jpg" slot=\'header\' style="width:50rpx;height:50rpx;border-radius:50%;display:block;" />\n</l-progress>\n')])])]),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),l("p",[t._v("slot传递的组件，需要标注display:block;属性")])]),t._v(" "),l("h2",{attrs:{id:"进度条属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进度条属性"}},[t._v("#")]),t._v(" 进度条属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("percent")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("百分比")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0~100")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("stroke-width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("进度条线的宽度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number/string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("border-radius")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆角大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number/string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("active-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已选择的进度条的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("主题色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("background-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未选择的进度条的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#EBEBEB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-info")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前百分比数值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("text-position")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文字显示位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("'left','right'")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("'right'")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("text-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文字颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("interval")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文字和进度条间隔距离")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("20，单位"),l("code",[t._v("rpx")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("active")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("进度条从左往右的动画")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("进度增加1%所需毫秒数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("30，单位毫秒")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.0")])])])]),t._v(" "),l("h2",{attrs:{id:"外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#外部样式类"}},[t._v("#")]),t._v(" 外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("进度条整体的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-text-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文本的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-active-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖已选择进度的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-background-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景进度条的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),l("h2",{attrs:{id:"插槽"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("header")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义header")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=s.exports}}]);