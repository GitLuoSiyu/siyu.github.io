(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{547:function(t,v,_){"use strict";_.r(v);var a=_(25),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"胶囊栏-capsulebar"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏-capsulebar"}},[t._v("#")]),t._v(" "),_("H2Icon"),t._v(" 胶囊栏 CapsuleBar")],1),t._v(" "),_("blockquote",[_("p",[t._v("使用场景：需要胶囊按钮返回首页、导航栏自定义背景图片等场景")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("使用该组件必须在页面 json 文件中设置"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("navigationStyle")]),_("OutboundLink")],1),t._v("为"),_("strong",[t._v("custom")])])]),t._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[_("code",[t._v("CapsuleBar")]),t._v("称为胶囊栏，其本质是由一个自定义导航栏和胶囊构成。CapsuleBar 的胶囊样式和微信原生样式高度一致并且位置对称，默认提供返回上一页和返回首页的功能。")]),t._v(" "),_("h2",{attrs:{id:"核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),_("p",[t._v("因 "),_("strong",[t._v("CapsuleBar")]),t._v(" 元素较多，为了便于你理解文档，我会简单介绍一下胶囊栏各个部分的名称")]),t._v(" "),_("p",[t._v("首先，我们把胶囊栏分为 3 个部分："),_("code",[t._v("StatusBar")]),t._v("、"),_("code",[t._v("TitleBar")]),t._v("、"),_("code",[t._v("CapsuleButton")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("StatusBar")]),t._v("—— 状态栏，手机顶部显示信号、电量等信息的区域")]),t._v(" "),_("li",[_("code",[t._v("TitleBar")]),t._v("—— 标题栏，显示标题文字、胶囊按钮的区域")]),t._v(" "),_("li",[_("code",[t._v("Capsule")]),t._v("—— 胶囊，标题栏左侧胶囊")])]),t._v(" "),_("p",[t._v("以上三个名词分别对应的部分如下图所示：")]),t._v(" "),_("p",[t._v(":::img\n"),_("img",{attrs:{src:"/screenshots/navigation-bar/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),_("h2",{attrs:{id:"基本用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),_("p",[t._v("使用 "),_("strong",[t._v("CapsuleBar")]),t._v(" 仅需传入"),_("code",[t._v("home-page（主页路径）")]),t._v("和"),_("code",[t._v("title（页面标题）")]),t._v("两个属性，并将页面其他标签放置于"),_("code",[t._v("l-capsule-bar")]),t._v("标签内部即可。")]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('\x3c!-- CapsuleBar 基础用法 --\x3e\n<l-capsule-bar home-page="/pages/navigator/index/index" title="程序员思语">\n\t<view>页面内容</view>\n</l-capsule-bar>\n')])])]),_("h2",{attrs:{id:"胶囊栏高度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏高度"}},[t._v("#")]),t._v(" 胶囊栏高度")]),t._v(" "),_("p",[t._v("实现自定义导航栏的一大难点在于微信小程序的导航栏高度是随机型不同而动态变化的，但却没有 api 可以获取导航栏的高度，所以 Loreal UI 提供了一个工具类，用于获取导航栏的高度。你可以使用该工具类去获取导航栏的高度，以实现更多不同种类的玩法。")]),t._v(" "),_("p",[_("code",[t._v("CapsuleBar")]),t._v(" 的高度便是通过该工具类获取到的。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deviceUtil "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/lin-ui/utils/device-util"')]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 获取 CapsuleBar 高度\n   */")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" capsuleBarHeight "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceUtil"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token template-string"}},[_("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("CapsuleBar 的高度为")]),_("span",{pre:!0,attrs:{class:"token interpolation"}},[_("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("capsuleBarHeight"),_("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("rpx")]),_("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("h2",{attrs:{id:"高级用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),_("p",[t._v("CapsuleBar 的亮点除了构造了一个胶囊外，更加强大的是"),_("strong",[t._v("支持图片背景")]),t._v("，这是微信小程序原生导航栏所无法实现的。")]),t._v(" "),_("p",[t._v("要支持图片背景，只需将"),_("code",[t._v("bg-color")]),t._v("设置为"),_("code",[t._v("transparent")]),t._v("，然后将 "),_("code",[t._v("image")]),t._v(" 标签修饰为 "),_("code",[t._v("fixed")]),t._v(" 布局即可，详细代码请参考以下代码片段。")]),t._v(" "),_("p",[_("strong",[t._v("背景图片示例代码片段："),_("a",{attrs:{href:"https://developers.weixin.qq.com/s/yX1BqHmY7vn8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/s/yX1BqHmY7vn8"),_("OutboundLink")],1)])]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('\x3c!-- CapsuleBar 图片背景 --\x3e\n<l-capsule-bar capsule-color="white" bg-color="transparent">\n  <image class="capsule-bar-bg" style="height:{{capsuleBarHeight}}rpx;" src="https://cdn.talelin.com/20210128161254.png" />\n  <view class="intro">欢迎使用代码片段，可在控制台查看代码片段的说明和文档</view>\n</l-capsule-bar>\n')])])]),_("div",{staticClass:"language-wxss extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(".capsule-bar-bg {\n  width:100%;\n  position:fixed;\n  top:0;\n  left:0;\n}\n")])])]),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意此处相对路径要修改为正确的路径")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deviceUtil "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../miniprogram_npm/lin-ui/utils/device-util"')]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    capsuleBarHeight"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" deviceUtil"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("h2",{attrs:{id:"胶囊颜色"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊颜色"}},[t._v("#")]),t._v(" 胶囊颜色")]),t._v(" "),_("p",[_("strong",[t._v("CapsuleBar")]),t._v(" 提供的胶囊与原生胶囊样式相似度达到 99%，可通过"),_("code",[t._v("capsule-color")]),t._v("属性控制胶囊颜色。")]),t._v(" "),_("p",[_("strong",[t._v("胶囊栏右侧的原生胶囊颜色和"),_("code",[t._v("StatusBar")]),t._v("文字颜色需在页面 json 文件中通过设置"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"}},[_("code",[t._v("navigationBarTextStyle")]),_("OutboundLink")],1),t._v("来修改。")])]),t._v(" "),_("h2",{attrs:{id:"自定义胶囊按钮图标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义胶囊按钮图标"}},[t._v("#")]),t._v(" 自定义胶囊按钮图标")]),t._v(" "),_("p",[_("code",[t._v("CapsuleBar")]),t._v(" 提供了两个属性用于修改左侧胶囊按钮的图标："),_("code",[t._v("capsule-left-icon-path")]),t._v(" 和 "),_("code",[t._v("capsule-right-icon-path")])]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<l-capsule-bar  capsule-left-icon-width="38"\n                capsule-left-icon-height="38"\n                capsule-right-icon-width="38"\n                capsule-right-icon-height="38"\n                capsule-left-icon-path="https://cdn.talelin.com/20201226182234.png"\n                capsule-right-icon-path="https://cdn.talelin.com/20201226182244.png">\n</l-capsule-bar>\n')])])]),_("p",[t._v(":::img\n"),_("img",{attrs:{src:"https://cdn.talelin.com/20201226191258.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),_("h2",{attrs:{id:"胶囊栏属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏属性"}},[t._v("#")]),t._v(" 胶囊栏属性")]),t._v(" "),_("blockquote",[_("p",[t._v("下列属性以"),_("code",[t._v("color")]),t._v("结尾的，除可选值有特殊标注外，均可使用 "),_("strong",[t._v("HEX/RGBA/CSS 颜色名")]),t._v(" 作为值传入，表中不再单独说明。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("bg-color")]),t._v(" "),_("td",[_("code",[t._v("CapsuleBar")]),t._v("背景色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("white")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("status-bar-color")]),t._v(" "),_("td",[_("code",[t._v("StatusBar")]),t._v("背景色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("white")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("title-bar-color")]),t._v(" "),_("td",[_("code",[t._v("TitleBar")]),t._v("背景色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("white")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("title-color")]),t._v(" "),_("td",[t._v("标题颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("black")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-color")]),t._v(" "),_("td",[t._v("左侧胶囊按钮颜色（使用自定义图标时无效）")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("white/black")]),t._v(" "),_("td",[t._v("white")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("disable-back")]),t._v(" "),_("td",[t._v("禁用左侧按钮返回上一级页面")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("disable-home")]),t._v(" "),_("td",[t._v("禁用右侧按钮返回主页")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("hidden-capsule")]),t._v(" "),_("td",[t._v("隐藏左侧胶囊按钮，右侧胶囊按钮为原生组件，无法隐藏")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("home-page")]),t._v(" "),_("td",[t._v("主页面 url，点击右侧按钮时跳转")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("胶囊栏标题")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("has-padding")]),t._v(" "),_("td",[t._v("是否设置页面顶部内边距为 CapsuleBar 的高度")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("hidden-title")]),t._v(" "),_("td",[t._v("隐藏标题")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.8.12")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-left-icon-path")]),t._v(" "),_("td",[t._v("左侧胶囊按钮左侧图标路径")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("网络路径/本地路径")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.9.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-left-icon-width")]),t._v(" "),_("td",[t._v("左侧胶囊按钮左侧图标宽度，单位 "),_("code",[t._v("rpx")])]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("20")]),t._v(" "),_("td",[t._v("0.9.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-left-icon-height")]),t._v(" "),_("td",[t._v("左侧胶囊按钮左侧图标高度，单位 "),_("code",[t._v("rpx")])]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("34")]),t._v(" "),_("td",[t._v("0.9.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-right-icon-path")]),t._v(" "),_("td",[t._v("左侧胶囊按钮右侧图标路径")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("网络路径/本地路径")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("0.9.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-right-icon-width")]),t._v(" "),_("td",[t._v("左侧胶囊按钮右侧图标宽度，单位 "),_("code",[t._v("rpx")])]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("38")]),t._v(" "),_("td",[t._v("0.9.3")])]),t._v(" "),_("tr",[_("td",[t._v("capsule-right-icon-height")]),t._v(" "),_("td",[t._v("左侧胶囊按钮右侧图标高度，单位 "),_("code",[t._v("rpx")])]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("34")]),t._v(" "),_("td",[t._v("0.9.3")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("关于 has-padding 属性的说明：")])]),t._v(" "),_("ul",[_("li",[t._v("为 true 时：页面内容布局从胶囊栏下边缘开始，适用于胶囊栏有背景色时使用")]),t._v(" "),_("li",[t._v("为 false 时，页面内容布局从屏幕顶部下边缘开始，适用于胶囊栏背景透明时使用")])]),t._v(" "),_("h2",{attrs:{id:"胶囊栏外部样式类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏外部样式类"}},[t._v("#")]),t._v(" 胶囊栏外部样式类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("外部样式类名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("l-title-class")]),t._v(" "),_("td",[t._v("覆盖标题文字样式")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])])])]),t._v(" "),_("h2",{attrs:{id:"胶囊栏事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏事件"}},[t._v("#")]),t._v(" 胶囊栏事件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("返回值")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("bind:linlefttap")]),t._v(" "),_("td",[t._v("点击胶囊左侧按钮回调事件（在返回上一页之前触发）")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("bind:linleftlongpress")]),t._v(" "),_("td",[t._v("长按胶囊左侧按钮回调事件")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("bind:linrighttap")]),t._v(" "),_("td",[t._v("点击胶囊右侧按钮回调事件（在返回主页之前触发）")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("bind:linrightlongpress")]),t._v(" "),_("td",[t._v("长按胶囊右侧按钮回调事件")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])])])]),t._v(" "),_("h2",{attrs:{id:"胶囊栏插槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏插槽"}},[t._v("#")]),t._v(" 胶囊栏插槽")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Slot 名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("默认 slot")]),t._v(" "),_("td",[t._v("页面内容区域")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.3")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("标题栏区域，建议搭配 hidden-capsule 和 hidden-title 属性使用")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("0.8.12")])])])]),t._v(" "),_("RightMenu")],1)}),[],!1,null,null,null);v.default=e.exports}}]);