(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{588:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通告栏-noticebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏-noticebar"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 通告栏 NoticeBar")],1),t._v(" "),a("blockquote",[a("p",[t._v("滚动播放的消息提示。")])]),t._v(" "),a("h2",{attrs:{id:"是否显示通告栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否显示通告栏"}},[t._v("#")]),t._v(" 是否显示通告栏")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("show")]),t._v("属性设置是否显示通告栏。默认值为"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/notice-bar/1.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar show="{{true}}">我是通告栏</l-notice-bar>\n')])])]),a("h3",{attrs:{id:"通告栏类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏类型"}},[t._v("#")]),t._v(" 通告栏类型")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("type")]),t._v("属性设置通告栏类型为"),a("code",[t._v("still")]),t._v("（静止），"),a("code",[t._v("roll")]),t._v("（字幕滚动），"),a("code",[t._v("swip")]),t._v("（轮播）。默认值为"),a("code",[t._v("still")]),t._v("。")]),t._v(" "),a("p",[t._v("当通告栏的类型为"),a("code",[t._v("swip")]),t._v("时，轮播的内容需通过"),a("code",[t._v("swip-arr")]),t._v("属性传入。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/notice-bar/2.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar show="{{true}}" \n              type="still">\n              我是通告栏</l-notice-bar>\n<l-notice-bar show="{{true}}" \n              type="roll">\n              我是通告栏我是通告栏我是通告栏我是通告栏\n</l-notice-bar>\n<l-notice-bar show="{{true}}" \n              type="swip" \n              swip-arr="{{arr}}">\n</l-notice-bar>\n')])])]),a("h2",{attrs:{id:"滚动速度系数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动速度系数"}},[t._v("#")]),t._v(" 滚动速度系数")]),t._v(" "),a("p",[t._v("通过设置"),a("code",[t._v("speed")]),t._v("属性可设置字幕滚动速度系数和轮播速度系数。默认值为"),a("code",[t._v("1500")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("滚动速度仅在"),a("code",[t._v("type")]),t._v("设置为"),a("code",[t._v("swip")]),t._v("和"),a("code",[t._v("roll")]),t._v("时生效。"),a("code",[t._v("speed")]),t._v("数值越小速度越快，数值越大速度越慢。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar show="{{true}}" \n              type="roll" \n              speed="2000">\n    我是通告栏我是通告栏我是通告栏我是通告栏\n</l-notice-bar>\n<l-notice-bar \n    show="{{true}}" \n    type="swip" \n    swip-arr="{{arr}}" \n    speed="2000">\n</l-notice-bar>\n')])])]),a("h2",{attrs:{id:"通告栏图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏图标"}},[t._v("#")]),t._v(" 通告栏图标")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("front-icon-name")]),t._v("设置位于通告栏头部的图标名称。"),a("code",[t._v("front-icon-size")]),t._v("和"),a("code",[t._v("front-icon-color")]),t._v("属性设置头部图标的颜色和大小。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("end-icon-name")]),t._v("设置位于通告栏尾部的图标名称。"),a("code",[t._v("end-icon-size")]),t._v("和"),a("code",[t._v("end-icon-color")]),t._v("属性设置尾部图标的颜色和大小。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/notice-bar/3.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar \n    show="{{true}}" \n    type="still" \n    front-icon-name="notification" \n    end-icon-name="close" \n    front-icon-size="20"\n    front-icon-color="#3683D6"> \n  我是通告栏\n</l-notice-bar>\n')])])]),a("h2",{attrs:{id:"可关闭通告栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可关闭通告栏"}},[t._v("#")]),t._v(" 可关闭通告栏")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("close")]),t._v("属性可设置通告栏为可关闭通告栏。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar show="{{true}}" close="{{true}}">我是通告栏</l-notice-bar>\n')])])]),a("h2",{attrs:{id:"动态修改通告栏内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态修改通告栏内容"}},[t._v("#")]),t._v(" 动态修改通告栏内容")]),t._v(" "),a("p",[t._v("如果你的通告栏内容不是写死在 wxml 文件中，而是在运行过程中会"),a("strong",[t._v("动态修改")]),t._v("的（比如通过 API 请求修改通告栏内容），那么你需要在修改通告栏内容之后调用 "),a("code",[t._v("linFlush()")]),t._v(" 开放函数刷新一下，通告栏滚动动画才会正常显示。")]),t._v(" "),a("h5",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-notice-bar id="my-notice-bar">{{content}}<l-notice-bar/>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNoticeBar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟 API 获取内容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" apiContent\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 notice-bar 组件实例")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" noticeBarComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#my-notice-bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刷新组件动画")]),t._v("\n    noticeBarComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linFlush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"通告栏属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏属性"}},[t._v("#")]),t._v(" 通告栏属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示通告栏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("still/swip/roll")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("still")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("speed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("轮播（滚动）速度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("swip-arr")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("轮播内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可关闭通告栏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("front-icon-name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏头部图标名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("front-icon-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏头部图标大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("front-icon-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏头部图标颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end-icon-name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏尾部图标名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end-icon-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏尾部图标大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end-icon-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通告栏尾部图标颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"通告栏外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏外部样式类"}},[t._v("#")]),t._v(" 通告栏外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖通告栏区域的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖通告栏图标的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"通告栏事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通告栏事件"}},[t._v("#")]),t._v(" 通告栏事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击通告栏信息触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("e.detail.index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("swip")]),t._v("时有返回值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linicontap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击通告栏文字后的图标触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"开放函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放函数"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://doc.mini.talelin.com/start/open-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放函数"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("函数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("linFlush")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改通告栏内容之后，需要调用该函数刷新，滚动动画才能正常显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=n.exports}}]);