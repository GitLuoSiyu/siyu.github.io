(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{550:function(t,e,a){"use strict";a.r(e);var l=a(25),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"arcpopup-弧形滚动弹出层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arcpopup-弧形滚动弹出层"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" ArcPopup 弧形滚动弹出层")],1),t._v(" "),a("blockquote",[a("p",[t._v("Popup弧形滚动弹出层组件。")])]),t._v(" "),a("p",[t._v("该组件支持"),a("a",{attrs:{href:"/start/wx.html"}},[t._v("wx.lin")]),t._v("用法。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("为保证文档低阅读难度，详细代码请去"),a("a",{attrs:{href:"https://github.com/TaleLin/lin-ui/tree/develop/examples/pages/components/view/pages/arc-popup",title:"github",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1),t._v("查看。")])]),t._v(" "),a("h2",{attrs:{id:"基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),a("p",[t._v("本组件可设置 "),a("code",[t._v("show")]),t._v(" 属性展示或隐藏组件。")]),t._v(" "),a("h3",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}">基础案例</l-arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/1.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"最大-小高度设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大-小高度设置"}},[t._v("#")]),t._v(" 最大/小高度设置")]),t._v(" "),a("p",[t._v("本组件默认最大高度 "),a("code",[t._v("600")]),t._v(" ，单位为 "),a("code",[t._v("rpx")]),t._v(" ，可自行更改 "),a("code",[t._v("max-height")]),t._v(" 属性重置最大高度。"),a("br"),t._v("\n本组件默认最小高度 "),a("code",[t._v("200")]),t._v(" ，单位为 "),a("code",[t._v("rpx")]),t._v(" ，可自行更改 "),a("code",[t._v("min-height")]),t._v(" 属性重置最小高度。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("如插槽内容高度超过设置的最大高度，则插槽内容可滚动。")])]),t._v(" "),a("h3",{attrs:{id:"代码演示-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-2"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}" max-height="600" min-height="200">\n  <view style="height: 800rpx;">\n      超出高度可滚动\n  </view>\n</l-arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/2.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"组件顶部弧度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件顶部弧度"}},[t._v("#")]),t._v(" 组件顶部弧度")]),t._v(" "),a("p",[t._v("本组件顶部默认弧度为 "),a("code",[t._v("18")]),t._v(" ，单位为 "),a("code",[t._v("rpx")]),t._v(" ，可自行设置 "),a("code",[t._v("arc-radius")]),t._v(" 属性进行更改。"),a("br"),t._v("\n本组件当 "),a("code",[t._v("direction")]),t._v(" 为 "),a("code",[t._v("top")]),t._v(" 时，属性值为 "),a("code",[t._v("12")]),t._v(" ，为 "),a("code",[t._v("bottom")]),t._v(" 时，属性值为 "),a("code",[t._v("18")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"代码演示-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-3"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}" arc-radius="50">\n  设置组件弧度\n</l--arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/3.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"遮罩层区域透明度设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遮罩层区域透明度设置"}},[t._v("#")]),t._v(" 遮罩层区域透明度设置")]),t._v(" "),a("p",[t._v("本组件默认透明度为 "),a("code",[t._v("0.4")]),t._v(" ，最大值为 "),a("code",[t._v("1")]),t._v(" ，可自行设置 "),a("code",[t._v("opacity")]),t._v(" 属性进行更改。")]),t._v(" "),a("h3",{attrs:{id:"代码演示-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-4"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}" opacity="0.8">\n  设置遮罩区域透明度\n</l--arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/4.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"从上-下弹出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从上-下弹出"}},[t._v("#")]),t._v(" 从上/下弹出")]),t._v(" "),a("p",[t._v("本组件默认从下至上弹出，通过设置 "),a("code",[t._v("direction")]),t._v(" 属性的值来控制从不同的方向进入屏幕，可选值为 "),a("code",[t._v("top")]),t._v(" 、"),a("code",[t._v("bottom")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"代码演示-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-5"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}" direction="top">\n  从上方弹出\n</l--arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/5.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"显示顶部内容-高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示顶部内容-高级用法"}},[t._v("#")]),t._v(" 显示顶部内容（高级用法）")]),t._v(" "),a("p",[t._v("通过插槽 "),a("code",[t._v("header")]),t._v(" 可以像顶部区域插入内容，设置 "),a("code",[t._v("header-fixed")]),t._v(" 属性可设置此部分内容是否有吸顶功能。")]),t._v(" "),a("h3",{attrs:{id:"代码演示-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-6"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-arc-popup show="{{true}}" header-fixed="{{true}}" l-header-class="l-header-class" arc-radius="0">\n  <view slot="header" class="header-content">\n    <text>一出好戏 (2018)</text>\n    <l-icon name="down" size="30" color="#ccc" bindtap="onHidePopupTap"></l-icon>\n  </view>\n  <view class="popup-header-demo">\n    <l-rate score="3.6" disabled />\n    <text class="popup-header-desc">类型: 剧情 / 喜剧</text>\n    <text class="popup-header-desc">上映日期: 2018-08-10(中国大陆)</text>\n    <text class="popup-header-desc">片长: 134分钟</text>\n    <text class="popup-header-desc">语言: 汉语普通话</text>\n    <scroll-view class="popup-scroll-view" scroll-x>\n      <view class="popup-scroll-list">\n        <view class="popup-avatar-item" wx:for="{{avartarList}}" wx:for-item="item" wx:key="index">\n          <image src="{{item.imageUrl}}" class="popup-avatar-image" mode="aspectFill"></image>\n          <text class="popup-avatar-name">{{item.name}}</text>\n        </view>\n      </view>\n    </scroll-view>\n    <view class="popup-header-line"></view>\n    <view class="popup-header-title">简介</view>\n    <view class="popup-header-contet-desc">马进欠下债务，与远房表弟小兴在底层社会摸爬滚打，习惯性的买彩票，企图一夜暴富，并迎娶自己的同事姗姗。一日，公司全体员工出海团建，途中，马进收到了彩票中头奖的信息，六千万！就在马进狂喜自己翻身的日子终于到来之际，一场突如其来的滔天巨浪打破了一切。苏醒过来的众人发现身处荒岛 ，丧失了一切与外界的联系……</view>\n  </view>\n</l--arc-popup>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/6.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"案例演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例演示"}},[t._v("#")]),t._v(" 案例演示")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/TaleLin/lin-ui/tree/develop/examples/pages/components/view/pages/arc-popup",title:"详细源码",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细源码"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/arc-popup/7.png",alt:"height=300"}}),t._v(" "),a("img",{attrs:{src:"/screenshots/arc-popup/8.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件属性"}},[t._v("#")]),t._v(" 组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件展示隐藏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件最大高度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件最小高度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("arc-radius")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件弧度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("z-index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件的页面层级")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("777")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹出层是否设定为锁定态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("transition")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制弹出层有无动画")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("opacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件遮罩层区域透明度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制弹出层内容区域的位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("top/bottom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bottom")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("header-fixed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制 "),a("code",[t._v("header")]),t._v(" 内容区域是否吸顶")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[a("code",[t._v("arc-radius")]),t._v(" 当 "),a("code",[t._v("direction")]),t._v(" 为 "),a("code",[t._v("top")]),t._v(" 时，属性值为 "),a("code",[t._v("12")]),t._v(" ，为 "),a("code",[t._v("bottom")]),t._v(" 时，属性值为 "),a("code",[t._v("18")]),t._v("。"),a("br"),t._v(" "),a("code",[t._v("z-index")]),t._v(" "),a("code",[t._v("locked")]),t._v(" "),a("code",[t._v("transition")]),t._v(" 属性继承与 "),a("code",[t._v("Popup")]),t._v(" 组件内属性，与 "),a("code",[t._v("Popup")]),t._v(" 属性功能相同。")])]),t._v(" "),a("h2",{attrs:{id:"组件外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件外部样式类"}},[t._v("#")]),t._v(" 组件外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-panel-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖内容面板区域的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景区域的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-header-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖 "),a("code",[t._v("header")]),t._v(" 插槽区域的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[a("code",[t._v("l-class")]),t._v(" 与 "),a("code",[t._v("l-bg-class")]),t._v(" 样式类继承于 "),a("code",[t._v("Popup")]),t._v(" ，与 "),a("code",[t._v("Popup")]),t._v(" 样式类功能相同。")])]),t._v(" "),a("h2",{attrs:{id:"组件事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件事件"}},[t._v("#")]),t._v(" 组件事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linshow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件展示后触发（ "),a("code",[t._v("show")]),t._v(" 属性为 "),a("code",[t._v("true")]),t._v(" 时）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件关闭后触发（ "),a("code",[t._v("show")]),t._v(" 属性为 "),a("code",[t._v("false")]),t._v(" 时）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("header")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义header")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);