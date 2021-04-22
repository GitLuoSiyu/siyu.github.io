(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{497:function(t,e,a){"use strict";a.r(e);var l=a(45),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"头像-avatar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像-avatar"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 头像 Avatar")],1),t._v(" "),a("blockquote",[a("p",[t._v("用来展示用户或事物。")])]),t._v(" "),a("h2",{attrs:{id:"头像类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像类型"}},[t._v("#")]),t._v(" 头像类型")]),t._v(" "),a("p",[t._v("组件支持三种类型，Icon、图片以及"),a("code",[t._v("open-data")]),t._v("，三种类型的优先级依次是"),a("code",[t._v("open-data")]),t._v("、Icon和图片。")]),t._v(" "),a("h3",{attrs:{id:"_1-图标头像-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-图标头像-icon"}},[t._v("#")]),t._v(" 1 图标头像（Icon）")]),t._v(" "),a("p",[t._v("用于显示图标，默认为头像大小的50%。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("icon")]),t._v("属性设置显示图标类型，可配置图标类型同"),a("code",[t._v("Icon")]),t._v("组件一致，")]),t._v(" "),a("p",[t._v("可使用"),a("code",[t._v("icon-style")]),t._v("修改icon的颜色和大小；语法同设置行内样式一致，支持属性为："),a("code",[t._v("size")]),t._v("和"),a("code",[t._v("color")]),t._v("。")]),t._v(" "),a("p",[t._v("示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('   <l-avatar size="80" icon="user" />\n   <l-avatar l-class="avatar-bg" icon-style="color:#5bf320;size:50" size="80" icon="user" />\n   <l-avatar l-class="avatar-bg" size="80" icon="user" icon-style="color:#5bf320" />\n')])])]),a("h3",{attrs:{id:"_2-图片头像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-图片头像"}},[t._v("#")]),t._v(" 2 图片头像")]),t._v(" "),a("p",[t._v("用于显示本地图片或者网络图片，通过"),a("code",[t._v("src")]),t._v("属性设置，你还可以通过"),a("code",[t._v("mode")]),t._v("属性来设置图片的裁剪方式。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("mode")]),t._v("属性值可参考"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.wxml",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序image组件"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('   <l-avatar src="/images/view/default-image.jpg" />\n   <l-avatar src="http://img3.a0bi.com/upload/ttq/20161015/1476518118768.png" />\n')])])]),a("h3",{attrs:{id:"_3-open-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-open-data"}},[t._v("#")]),t._v(" 3 open-data")]),t._v(" "),a("p",[t._v("用于展示当前用户的微信头像和昵称")]),t._v(" "),a("p",[a("code",[t._v("open-data")]),t._v("接收数组，通过传入"),a("code",[t._v("userAvatarUrl")]),t._v("、"),a("code",[t._v("userNickName")]),t._v("控制显示用户头像和昵称。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/3.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   <l-avatar open-data=\"{{['userAvatarUrl','userNickName']}}\" />\n")])])]),a("h2",{attrs:{id:"头像形状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像形状"}},[t._v("#")]),t._v(" 头像形状")]),t._v(" "),a("p",[t._v("通过在"),a("code",[t._v("<l-avatar/>")]),t._v("设置"),a("code",[t._v("shape")]),t._v("属性来指定头像形状，有两种形状可选，分别为"),a("code",[t._v("circle")]),t._v("和"),a("code",[t._v("square")]),t._v(", 默认值为"),a("code",[t._v("circle")]),t._v("。\n同时，支持通过外部样式类"),a("code",[t._v("l-class")]),t._v("修改头像的样式。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/4.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-avatar shape="circle" src="/images/view/default-image.jpg" />\n    <l-avatar shape="square" src="/images/view/default-image.jpg" />\n')])])]),a("h2",{attrs:{id:"头像尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像尺寸"}},[t._v("#")]),t._v(" 头像尺寸")]),t._v(" "),a("p",[t._v("通过在"),a("code",[t._v("<l-avatar/>")]),t._v("设置"),a("code",[t._v("size")]),t._v("属性来设置头像的大小，单位为"),a("code",[t._v("rpx")]),t._v(";")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/5.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('   <l-avatar size="80" src="/images/view/default-image.jpg" />\n   <l-avatar size="120" src="/images/view/default-image.jpg" />\n   <l-avatar size="160" src="/images/view/default-image.jpg" />\n')])])]),a("h2",{attrs:{id:"头像和文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像和文本"}},[t._v("#")]),t._v(" 头像和文本")]),t._v(" "),a("p",[t._v("通过设置"),a("code",[t._v("text")]),t._v("属性来显示文本，并且可以通过"),a("code",[t._v("placement")]),t._v("属性控制头像与文本的相对位置，默认为"),a("code",[t._v("right")]),t._v(",可设置"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("、"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("四种位置。")]),t._v(" "),a("p",[t._v("同时，支持通过外部样式类"),a("code",[t._v("l-text-class")]),t._v("修改文本的样式。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/avatar/6.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <l-avatar text="月野君" placement="bottom" src="/images/view/default-image.jpg" />\n  <l-avatar text="月野君" placement="right" src="/images/view/default-image.jpg" />\n  <l-avatar text="月野君" placement="top" src="/images/view/default-image.jpg" />\n  <l-avatar text="月野君" placement="left" src="/images/view/default-image.jpg" />\n')])])]),a("h2",{attrs:{id:"头像属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像属性"}},[t._v("#")]),t._v(" 头像属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置头像大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("120 * 120")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置头像形状")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("square")]),t._v("、 "),a("code",[t._v("circle")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("circle")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("src")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示的头像地址，支持本地或网络图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片缩放裁剪模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("见"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序image组件"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("scaleToFill")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置头像的图标类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标的大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("open-data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示用户和头像，参考"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开放数据"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("['userAvatarUrl','userNickName']")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置显示文本的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本的显示位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("left")]),t._v("/"),a("code",[t._v("right")]),t._v("/"),a("code",[t._v("top")]),t._v("/"),a("code",[t._v("bottom")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("right")])])])])]),t._v(" "),a("h2",{attrs:{id:"头像外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像外部样式类"}},[t._v("#")]),t._v(" 头像外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖头像组件的头像区域样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-text-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖头像组件中文本的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-text")])])])]),t._v(" "),a("h2",{attrs:{id:"已经弃用的外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),a("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖头像组件中文本的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请用l-text-class替代")])])])]),t._v(" "),a("h2",{attrs:{id:"头像事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像事件"}},[t._v("#")]),t._v(" 头像事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击头像组件时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);