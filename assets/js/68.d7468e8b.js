(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{463:function(t,e,a){"use strict";a.r(e);var l=a(45),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加载中-loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中-loading"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v("  加载中 Loading")],1),t._v(" "),a("blockquote",[a("p",[t._v("当区域正在获取数据时使用，提高用户体验。")])]),t._v(" "),a("p",[t._v("该组件支持"),a("a",{attrs:{href:"/start/wx.html"}},[t._v("wx.lin")]),t._v("用法。")]),t._v(" "),a("h2",{attrs:{id:"加载类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载类型"}},[t._v("#")]),t._v(" 加载类型")]),t._v(" "),a("p",[t._v("可通过加载组件的"),a("code",[t._v("type")]),t._v("属性设置加载动画类型。并通过 设置"),a("code",[t._v("show")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 或者 "),a("code",[t._v("false")]),t._v(" 来控制它的显示与隐藏。")]),t._v(" "),a("p",[a("code",[t._v("type")]),t._v("共有五种状态，可选值为"),a("code",[t._v("flash")]),t._v("、"),a("code",[t._v("flip")]),t._v("、"),a("code",[t._v("change")]),t._v("、"),a("code",[t._v("circle")]),t._v("、"),a("code",[t._v("rotate")]),t._v("，可根据使用场景选择合适的类型，默认为"),a("code",[t._v("rotate")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading show="{{true}}" type="flash"></l-loading>\n<l-loading show="{{true}}" type="flip"></l-loading>\n<l-loading show="{{true}}" type="change"></l-loading>\n<l-loading show="{{true}}" type="circle"></l-loading>\n<l-loading show="{{true}}" type="rotate"></l-loading>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/loading/1.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"加载动画大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载动画大小"}},[t._v("#")]),t._v(" 加载动画大小")]),t._v(" "),a("p",[t._v("设置组件"),a("code",[t._v("size")]),t._v("属性可更改加载动画的大小。")]),t._v(" "),a("p",[a("code",[t._v("size")]),t._v("的可选值为"),a("code",[t._v("mini")]),t._v("、"),a("code",[t._v("medium")]),t._v("、"),a("code",[t._v("large")]),t._v("，默认为"),a("code",[t._v("medium")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading show="{{true}}" size="mini"></l-loading>\n<l-loading show="{{true}}" size="medium"></l-loading>\n<l-loading show="{{true}}" size="large"></l-loading>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/loading/2.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义加载动画颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义加载动画颜色"}},[t._v("#")]),t._v(" 自定义加载动画颜色")]),t._v(" "),a("p",[t._v("设置组件的"),a("code",[t._v("color")]),t._v("属性更改加载动画的颜色。默认颜色与主题色(theme_color)一致。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading show="{{true}}" color="#666"></l-loading>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/loading/3.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义加载动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义加载动画"}},[t._v("#")]),t._v(" 自定义加载动画")]),t._v(" "),a("p",[t._v("为适应不同的场景和需求，组件的内容部分（动画）可以通过自定义的方式来实现。")]),t._v(" "),a("p",[t._v("设置组件的"),a("code",[t._v("custom")]),t._v("属性为 "),a("code",[t._v("true")]),t._v(" ，自定义内容在slot插槽中写入即可。也支持传入一个包含文字+image的子节点。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("loading组件只接收一个slot作为子节点，但你可以在这个子节点内添加更多的标签和内容")])])]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading show="{{true}}" custom="{{true}}">\n  <image src="/image/view/spin.gif"></image>\n</l-loading>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/loading/4.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"全屏状态下的loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全屏状态下的loading"}},[t._v("#")]),t._v(" 全屏状态下的Loading")]),t._v(" "),a("p",[t._v("在开发工作的中，我们会遇到一种常见的场景：当跳转到一个新页面时，开始加载数据，全屏显示loading，当数据加载完成时，隐藏loading。")]),t._v(" "),a("p",[t._v("针对这种场景，我们可以通过设置 "),a("code",[t._v("full-screen")]),t._v(" 属性为 "),a("code",[t._v("true")]),t._v(" ，并配合外部样式类 "),a("code",[t._v("l-container-class")]),t._v(" 来完成,也可以使用"),a("code",[t._v("bg-color")]),t._v("、"),a("code",[t._v("z-index")]),t._v("、"),a("code",[t._v("opacity")]),t._v("属性来设置全屏状态下的背景颜色、层级和背景透明度。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("全屏模式下可以设置 "),a("code",[t._v("type")]),t._v(" 值来指定不同的加载动画，同样也可以使用自定义的 "),a("code",[t._v("slot")]),t._v("，")]),t._v(" "),a("li",[a("code",[t._v("l-container-class")]),t._v(" 无法改变"),a("code",[t._v("loading")]),t._v("背景的 "),a("code",[t._v("position")]),t._v("、"),a("code",[t._v("height")]),t._v("、"),a("code",[t._v("width")]),t._v(" 属性。")])])]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading\n  l-container-class="l-container"\n  bg-color="#f3f3f3"\n  z-index="776"\n  opacity="1"\n  show="{{show}}"\n  full-screen="{{true}}"\n  custom="{{true}}"\n>\n  <image class="loading-img" src="/image/static/loading.gif"></image>\n</l-loading>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/loading/5.jpg",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"固定loading区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定loading区域"}},[t._v("#")]),t._v(" 固定Loading区域")]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loading\n  l-container-class="l-container"\n  bg-color="#f3f3f3"\n  z-index="776"\n  opacity="1"\n  show="{{show}}"\n  full-screen="{{false}}"\n  custom="{{true}}"\n>\n  <image class="loading-img" src="/image/static/loading.gif"></image>\n  <view slot="content" style="height: 600rpx; width:100%"></view>\n</l-loading>\n')])])]),a("h2",{attrs:{id:"加载中属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中属性"}},[t._v("#")]),t._v(" 加载中属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示加载动画")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("flash/flip/change/rotate/circle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mini/medium/large")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("medium")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("z-index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画层级")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("776")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画（内容部分）是否自定义")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("full-screen")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画（内容部分）是否全屏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bg-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画背景颜色（全屏模式）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("opacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载动画背景透明度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])])])]),t._v(" "),a("h2",{attrs:{id:"加载中插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中插槽"}},[t._v("#")]),t._v(" 加载中插槽")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义loading图标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("非全屏模式下主体内容区域")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("loading组件将包裹在content插槽外部")])])])]),t._v(" "),a("h2",{attrs:{id:"加载中外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中外部样式类"}},[t._v("#")]),t._v(" 加载中外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖动画区域（内容部分）自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-container-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景部分的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=i.exports}}]);