(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{541:function(t,e,a){"use strict";a.r(e);var s=a(25),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"气泡框-popover-即将上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡框-popover-即将上线"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v("  气泡框 Popover(即将上线)")],1),t._v(" "),a("blockquote",[a("p",[t._v("弹出气泡式提示框。")])]),t._v(" "),a("p",[t._v("气泡是一个在移动app（手机app，webApp，小程序，H5）里常见的组件，它由你自定义的事件去触发，显示在某一个元素的周围，可以是上下左右四个方位。")]),t._v(" "),a("img-wrapper",[a("img",{attrs:{src:"http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdRVlpjY2JUME5DMVZZTXQyeHA0Mm9oVitZczQzQkM3TDB1T3FCM1V1aHNBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0"}})]),t._v(" "),a("h2",{attrs:{id:"基本案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本案例"}},[t._v("#")]),t._v(" 基本案例")]),t._v(" "),a("p",[t._v("气泡框可通过设置"),a("code",[t._v("show")]),t._v("属性为"),a("code",[t._v("true")]),t._v("、"),a("code",[t._v("false")]),t._v("来控制显示和隐藏，不设置则显示状态默认为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popover show="{{show}}">\n  <view bindtap="handleShow">点击提示</view>\n</l-popover>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleShow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置气泡的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置气泡的类型"}},[t._v("#")]),t._v(" 设置气泡的类型")]),t._v(" "),a("p",[t._v("气泡框的类型有两种，"),a("code",[t._v("text")]),t._v("和"),a("code",[t._v("list")]),t._v("，通过"),a("code",[t._v("type")]),t._v("属性来控制。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("当"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("text")]),t._v("时，设置"),a("code",[t._v("text")]),t._v("属性就可以在气泡内显示文本内容。")]),t._v(" "),a("li",[t._v("当"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("list")]),t._v("时，气泡框内显示的是一个列表，你可以传入一个数组去渲染它，当"),a("code",[t._v("list")]),t._v("的内容超过了气泡的默认最大值后，气泡框内会出现一个可以纵向滚动的滚动条，你可以滑动它来查看超出部分的内容。")])])]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popover show="{{true}}" type="text" text="哈哈哈！">\n  <view>点击提示</view>\n</l-popover>\n\n<l-popover show="{{true}}" type="list" list="{{ arr }}">\n  <view>点击提示</view>\n</l-popover>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  arr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"气泡出现的方位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡出现的方位"}},[t._v("#")]),t._v(" 气泡出现的方位")]),t._v(" "),a("p",[t._v("我们可以通过设置 "),a("code",[t._v("placement")]),t._v(" 属性的值来改变气泡出现的方位，可选值为"),a("code",[t._v("top、left、right、bottom、topLeft、topRight、bottomLeft、bottomRight、leftTop、leftBottom、rightTop、rightBottom")]),t._v("，默认"),a("code",[t._v("top")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popover show="{{true}}" placement="left">\n  <view>点击提示</view>\n</l-popover>\n')])])]),a("h2",{attrs:{id:"气泡的背景色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡的背景色"}},[t._v("#")]),t._v(" 气泡的背景色")]),t._v(" "),a("p",[t._v("气泡的背景色可以通过设置"),a("code",[t._v("bgColor")]),t._v("来改变，默认为黑色半透明背景色（rgba(0, 0, 0, 0.5）。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popover show="{{true}}" bgColor="rgba(0, 0, 0, .6)">\n  <view>点击提示</view>\n</l-popover>\n')])])]),a("h2",{attrs:{id:"设置子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置子节点"}},[t._v("#")]),t._v(" 设置子节点")]),t._v(" "),a("p",[t._v("我们在使用的组件的时候，可以根据使用场景,自由的在气泡框组件内插入 "),a("code",[t._v("<image>")]),t._v(" "),a("code",[t._v("<view>")]),t._v(" "),a("code",[t._v("<text>")]),t._v(" 等子节点，当然，你也可以在其中插入 "),a("code",[t._v("自定义组件")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"设置是否点击关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置是否点击关闭"}},[t._v("#")]),t._v(" 设置是否点击关闭")]),t._v(" "),a("p",[t._v("气泡框可以通过设置 "),a("code",[t._v("locked")]),t._v(" 属性的值为"),a("code",[t._v("true")]),t._v(" 或者 "),a("code",[t._v("false")]),t._v(" 来设置他是否可以被点击关闭，默认为 "),a("code",[t._v("true")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("如果设置为 "),a("code",[t._v("true")]),t._v(" ，点击气泡框的时候会将其关闭")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}" locked="{{true}}">\n    <view class="mask-content">\n      <view class="mask-text" >取消子节点的垂直居中</view>\n    </view>\n</l-mask>\n\n')])])]),a("h2",{attrs:{id:"锁定popover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁定popover"}},[t._v("#")]),t._v(" 锁定Popover")]),t._v(" "),a("p",[t._v("设置按钮的 "),a("code",[t._v("locked")]),t._v(" 属性来控制气泡框的锁定态，属性值为 "),a("code",[t._v("true")]),t._v(" 时点击气泡框部分不会关闭，属性值为 "),a("code",[t._v("false")]),t._v(" 时点击气泡框会立即关闭，默认为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popover show="{{true}}" locked="true">\n  <view>点击提示</view>\n</l-popover>\n\n')])])]),a("h2",{attrs:{id:"气泡框属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡框属性"}},[t._v("#")]),t._v(" 气泡框属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制气泡框的显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bgColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制气泡框的背景色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("rgba(0,0,0, .5)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制气泡框的类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text/list")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染气泡框的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("list")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染气泡框的内容(列表)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置气泡框出现的位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("top、left、right、bottom、topLeft、topRight、bottomLeft、bottomRight、leftTop、leftBottom、rightTop、rightBottom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("top")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("气泡框是否设定为锁定态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("Popover组件使用cover-view来绘制，层级最高，可以覆盖微信的一些原生组件。")])]),t._v(" "),a("h2",{attrs:{id:"气泡框外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡框外部样式类"}},[t._v("#")]),t._v(" 气泡框外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置气泡框的根节点样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-item-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置气泡框里的list列表的item样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h2",{attrs:{id:"气泡框事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#气泡框事件"}},[t._v("#")]),t._v(" 气泡框事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击气泡框时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果是list类型，会返回当前的下标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=l.exports}}]);