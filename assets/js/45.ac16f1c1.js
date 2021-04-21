(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{440:function(t,e,l){"use strict";l.r(e);var a=l(45),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"列表-list"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表-list"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 列表 List")],1),t._v(" "),l("h2",{attrs:{id:"列表左侧内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表左侧内容"}},[t._v("#")]),t._v(" 列表左侧内容")]),t._v(" "),l("p",[t._v("通过 "),l("code",[t._v("title")]),t._v(" 和 "),l("code",[t._v("desc")]),t._v(" 属性设置列表左侧的内容和描述，内容和描述布局方式是上下左对齐。")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/list/image1.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('    <l-list title="购物车" />\n    <l-list title="购物车" desc="查看我的购物车"/>\n')])])]),l("h2",{attrs:{id:"列表右侧内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表右侧内容"}},[t._v("#")]),t._v(" 列表右侧内容")]),t._v(" "),l("p",[t._v("列表右侧内容可设置的有文本和跳转的图标，分别通过下面的属性设置：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("right-desc")]),t._v(" 设置列表右侧的文本；")]),t._v(" "),l("li",[l("code",[t._v("is-link")]),t._v(" 设置是否显示跳转的图标，默认为"),l("code",[t._v("true")]),t._v(",可选值"),l("code",[t._v("true")]),t._v(" 和 "),l("code",[t._v("false")]),t._v("；")]),t._v(" "),l("li",[l("code",[t._v("link-type")]),t._v(" 设置跳转类型，默认为 "),l("code",[t._v("navigateTo")]),t._v(",可选值为 "),l("code",[t._v("navigateTo")]),t._v("、"),l("code",[t._v("redirectTo")]),t._v("、"),l("code",[t._v("reLaunch")]),t._v("、"),l("code",[t._v("switchTab")]),t._v("；")]),t._v(" "),l("li",[l("code",[t._v("url")]),t._v(" 设置跳转的路径")])]),t._v(" "),l("p",[t._v("除此之外，还可以监听"),l("code",[t._v("lintap")]),t._v("事件，自定义点击后的事件处理逻辑。")]),t._v(" "),l("h2",{attrs:{id:"带图标或图片的列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#带图标或图片的列表"}},[t._v("#")]),t._v(" 带图标或图片的列表")]),t._v(" "),l("p",[t._v("通过 "),l("code",[t._v("icon")]),t._v(" 和 "),l("code",[t._v("image")]),t._v(" 属性设置显示的图标或图片的内容，当同时设置 "),l("code",[t._v("icon")]),t._v(" 和 "),l("code",[t._v("image")]),t._v(" 时，优先展示 "),l("code",[t._v("image")]),t._v("。")]),t._v(" "),l("p",[t._v("通过外部样式类 "),l("code",[t._v("l-class-icon")]),t._v(" 覆盖默认 "),l("code",[t._v("icon")]),t._v(" 的样式，外部样式类 "),l("code",[t._v("l-class-image")]),t._v(" 覆盖默认 "),l("code",[t._v("image")]),t._v(" 的样式。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("使用本地图片时，最好使用绝对路径。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/list/image2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('    <l-list title="购物车" icon="cart" is-link="{{false}}"/>\n    <l-list title="消息" icon="notification" />\n    <l-list title="客厅" image="/pages/layout/images/badroom-active.png" />\n')])])]),l("h2",{attrs:{id:"自定义图标的列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义图标的列表"}},[t._v("#")]),t._v(" 自定义图标的列表")]),t._v(" "),l("p",[t._v("通过 "),l("code",[t._v("icon")]),t._v(" 和 "),l("code",[t._v("image")]),t._v(" 属性设置显示的图标或图片的内容，当同时设置 "),l("code",[t._v("icon")]),t._v(" 和 "),l("code",[t._v("image")]),t._v(" 时，优先展示 "),l("code",[t._v("image")]),t._v("。")]),t._v(" "),l("p",[t._v("通过外部样式类 "),l("code",[t._v("l-class-icon")]),t._v(" 覆盖默认 "),l("code",[t._v("icon")]),t._v(" 的样式，外部样式类 "),l("code",[t._v("l-class-image")]),t._v(" 覆盖默认 "),l("code",[t._v("image")]),t._v(" 的样式。")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-list title="药品" icon="yaopin" l-class-icon="iconfont" />\n  <l-list title="用药" icon="yongyao" l-class-icon="iconfont" />\n  <l-list title="首页" icon="shouye" l-class-icon="iconfont" />\n')])])]),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("需要保证自定义的字体图标的文件存在于项目中；具体操作方式可看"),l("a",{attrs:{href:"http://doc.mini.talelin.com/component/basic/icon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon-自定义图标"),l("OutboundLink")],1)])])]),t._v(" "),l("h2",{attrs:{id:"带标签的列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#带标签的列表"}},[t._v("#")]),t._v(" 带标签的列表")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("tag-content")]),t._v("设置显示的标签的内容，不设置的内容时标签不显示，默认显示位置为列表左边。")]),t._v(" "),l("p",[t._v("标签相关的属性有，作用分别如下：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("tag-content")]),t._v(" 设置显示的标签的内容；")]),t._v(" "),l("li",[l("code",[t._v("tag-position")]),t._v(" 设置标签显示的位置，可选值为 "),l("code",[t._v("right")]),t._v("、"),l("code",[t._v("left")]),t._v(",默认为 "),l("code",[t._v("left")]),t._v("；")]),t._v(" "),l("li",[l("code",[t._v("tag-color")]),t._v(" 设置标签的颜色,接收表示颜色的值；")]),t._v(" "),l("li",[l("code",[t._v("tag-shape")]),t._v(" 设置标签的形状，可选值为 "),l("code",[t._v("circle")]),t._v(" 、 "),l("code",[t._v("square")]),t._v("，默认为 "),l("code",[t._v("square")]),t._v("；")]),t._v(" "),l("li",[l("code",[t._v("tag-plain")]),t._v(" 设置标签是否镂空， 可选值为 "),l("code",[t._v("false")]),t._v(" 、"),l("code",[t._v("true")]),t._v("，默认为 "),l("code",[t._v("false")]),t._v(",当设置为"),l("code",[t._v("true")]),t._v("时，"),l("code",[t._v("tag-color")]),t._v("修改的是字体的颜色。")])]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/list/image3.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-list title="购物车" icon="cart" tag-content="购物车" />\n  <l-list title="购物车" icon="cart" tag-content="购物车" tag-color="#F4516c"/>\n  <l-list title="消息" icon="notification" tag-content="消息" tag-position="right"/>\n  <l-list title="消息" icon="notification" tag-content="消息" tagShape="circle" tag-position="right"/>\n')])])]),l("h2",{attrs:{id:"带徽标的列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#带徽标的列表"}},[t._v("#")]),t._v(" 带徽标的列表")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("badge-count")]),t._v("设置徽标的数值，不设置的内容时徽标不显示，或者设置"),l("code",[t._v("dotBadge="+t._s(!0))]),t._v("时显示圆点徽标，默认显示位置为列表左边。")]),t._v(" "),l("p",[t._v("徽标相关的属性有，作用分别如下：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("badge-position")]),t._v(" 设置徽标显示的位置，可选值为 "),l("code",[t._v("right")]),t._v("、"),l("code",[t._v("left")]),t._v(",默认为 "),l("code",[t._v("left")]),t._v("；")]),t._v(" "),l("li",[l("code",[t._v("badge-max-count")]),t._v(" 设置徽标数字最大值，超过最大值时显示${max-count}+;")]),t._v(" "),l("li",[l("code",[t._v("badge-count-type")]),t._v("  数字的显示方式, 可选值为"),l("code",[t._v("overflow")]),t._v("、"),l("code",[t._v("limit")]),t._v("、"),l("code",[t._v("custom")]),t._v(",默认值为"),l("code",[t._v("overflow")]),t._v("。")])]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/list/image4.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-list title="生成我的海报" dot-badge="{{true}}" />\n  <l-list title="消息" icon="notification"\n    badge-count="999" badge-position="right" />\n    \n')])])]),l("h2",{attrs:{id:"自定义子节点的列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义子节点的列表"}},[t._v("#")]),t._v(" 自定义子节点的列表")]),t._v(" "),l("p",[t._v("可以通过 "),l("code",[t._v("slot")]),t._v("的方式自定义左右两半部分的内容，"),l("code",[t._v('slot="left-section"')]),t._v("时自定义的是左半部分的内容，"),l("code",[t._v('slot="right-section"')]),t._v("时自定义的是右半部分的内容")]),t._v(" "),l("h3",{attrs:{id:"示例代码-5"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/list/image5.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v(' <l-list right-desc="生成我的海报">\n    <view slot="left-section">\n        <l-radio value="看一看" />\n    </view>\n  </l-list>\n  <l-list title="允许陌生人查看十条朋友圈">\n    <view slot="right-section">\n          <switch />\n    </view>\n   </l-list>\n\n')])])]),l("h2",{attrs:{id:"列表属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表属性"}},[t._v("#")]),t._v(" 列表属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中"),l("code",[t._v("icon")]),t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中"),l("code",[t._v("icon")]),t._v("的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中"),l("code",[t._v("icon")]),t._v("的大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中图片资源")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中左侧文本的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("desc")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中左侧描述文本的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("right-desc")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表组件中右侧描述文本的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tag-position")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标签显示的位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("right")]),t._v("/"),l("code",[t._v("left")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("left")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tag-content")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标签的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tag-shape")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标签的形状")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("square")]),t._v("、 "),l("code",[t._v("circle")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("square")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tag-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标签的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tag-plain")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标签是否镂空")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-position")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标显示的位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("left")]),t._v("/"),l("code",[t._v("right")]),t._v("/"),l("code",[t._v("top")]),t._v("/"),l("code",[t._v("bottom")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("right")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count-type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标数字的显示方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("overflow")]),t._v("/"),l("code",[t._v("limit")]),t._v("/"),l("code",[t._v("custom")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("overflow")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("dot-badge")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示圆点徽标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")]),t._v("/"),l("code",[t._v("true")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标的数值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-max-count")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标数字最大值，超过最大值时显示${max-count}+")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("99")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("is-link")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示跳转的图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")]),t._v("/"),l("code",[t._v("true")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("link-type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置跳转类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("navigateTo")]),t._v("/"),l("code",[t._v("redirectTo")]),t._v("/"),l("code",[t._v("reLaunch")]),t._v("/"),l("code",[t._v("switchTab")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("navigateTo")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置跳转的路径")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("gap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置list内左右两侧内容距list两边的间距")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("left-gap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置list内左侧内容距list左边的间距")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("right-gap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置list内右侧内容距list右边的间距")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("is-hover")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示hover效果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),l("h2",{attrs:{id:"列表外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表外部样式类"}},[t._v("#")]),t._v(" 列表外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件的整体样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-right -class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件的右侧内容样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-content-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件左侧文本的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-desc-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件左侧描述文本的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件中"),l("code",[t._v("icon")]),t._v("的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件中图片的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-link-icon-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖列表组件中图片的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("h2",{attrs:{id:"列表事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#列表事件"}},[t._v("#")]),t._v(" 列表事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当点击列表时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);