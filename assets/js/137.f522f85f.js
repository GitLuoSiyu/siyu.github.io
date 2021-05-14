(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{560:function(t,e,a){"use strict";a.r(e);var l=a(25),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"弹出层-popup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出层-popup"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 弹出层 Popup")],1),t._v(" "),a("blockquote",[a("p",[t._v("显示背景为黑色半透明，且有内容区域展示的弹出层。")])]),t._v(" "),a("p",[t._v("该组件支持"),a("a",{attrs:{href:"/start/wx.html"}},[t._v("wx.lin")]),t._v("用法。")]),t._v(" "),a("h2",{attrs:{id:"基本案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本案例"}},[t._v("#")]),t._v(" 基本案例")]),t._v(" "),a("p",[t._v("弹出层可通过设置"),a("code",[t._v("show")]),t._v("属性为"),a("code",[t._v("true")]),t._v("或者"),a("code",[t._v("false")]),t._v("来控制显示和隐藏，不设置则显示状态默认为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popup show="{{true}}"> </l-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/popup/1.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"动画设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画设置"}},[t._v("#")]),t._v(" 动画设置")]),t._v(" "),a("p",[t._v("弹出层可以通过设置 "),a("code",[t._v("animation")]),t._v(" 属性为"),a("code",[t._v("show")]),t._v("、"),a("code",[t._v("hide")]),t._v("来控制动画效果的显示和隐藏，不设置则显示状态默认为"),a("code",[t._v("show")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"代码演示-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-2"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popup show="{{true}}" animation="hide" > </l-popup>\n\n')])])]),a("p",[t._v("Tips：静态图片展示效果相同，不做重复展示。")]),t._v(" "),a("h2",{attrs:{id:"从不同方向弹出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从不同方向弹出"}},[t._v("#")]),t._v(" 从不同方向弹出")]),t._v(" "),a("p",[t._v("根据不同的业务场景需求，可以在弹出层中插入 "),a("code",[t._v("slot")]),t._v(" ，并通过设置 "),a("code",[t._v("content-align")]),t._v(" 属性的值来控制 "),a("code",[t._v("slot")]),t._v(" 从不同的方向进入屏幕，可选值为 "),a("code",[t._v("top")]),t._v(" 、"),a("code",[t._v("left")]),t._v(" 、"),a("code",[t._v("right")]),t._v(" 、"),a("code",[t._v("bottom")]),t._v(" 、"),a("code",[t._v("center")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("设置为"),a("code",[t._v("center")]),t._v("时， 内容区域( "),a("code",[t._v("slot")]),t._v(" )从中间弹出。")]),t._v(" "),a("li",[t._v("不建议在组件中传入多个子节点。")])])]),t._v(" "),a("h3",{attrs:{id:"代码演示-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-3"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-popup show="{{true}}" content-align="bottom" > \n  <view class="botton"> 从下方弹出</view>\n</l-popup>\n\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/popup/2.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"锁定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁定"}},[t._v("#")]),t._v(" 锁定")]),t._v(" "),a("p",[t._v("设置按钮的 "),a("code",[t._v("locked")]),t._v(" 属性来控制弹出层的锁定态，属性值为 "),a("code",[t._v("true")]),t._v(" 时，点击弹出层背景部分不会关闭，属性值为 "),a("code",[t._v("false")]),t._v(" 时点击背景会立即关闭。默认为 "),a("code",[t._v("false")])]),t._v(" "),a("h3",{attrs:{id:"代码演示-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-4"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<l-popup show=\"{{true}}\" content-align=\"bottom\"  locked=\"{{true}}\">\n    <view class='pupop-content'>\n      <view class='pupop-close' bindtap='onHidePupopTap'>关闭弹出层</view>\n    </view>\n</l-popup>\n\n")])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/popup/3.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"弹出层属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出层属性"}},[t._v("#")]),t._v(" 弹出层属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制弹出层的显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hide")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("animation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制弹出层有无动画")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content-align")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制弹出层内容区域的位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("top/right/left/bottom/center")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("center")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("z-index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件的页面层级")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("777")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹出层是否设定为锁定态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("z-index默认为777，如果当前引入弹出层组件的页面中有z-index值大于777的节点，那么为了避免错误的显示效果，可以将pupop组件的z-index属性的值重新设置。")])]),t._v(" "),a("h2",{attrs:{id:"弹出层外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出层外部样式类"}},[t._v("#")]),t._v(" 弹出层外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖弹出层整体的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景区域（内容部分除外）的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-panel-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖内容部分的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"弹出层事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出层事件"}},[t._v("#")]),t._v(" 弹出层事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击背景时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);