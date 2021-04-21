(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{451:function(t,e,l){"use strict";l.r(e);var v=l(45),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"滑动菜单-slideview"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#滑动菜单-slideview"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 滑动菜单 SlideView")],1),t._v(" "),l("blockquote",[l("p",[t._v("可通过滑动显示操作菜单。")])]),t._v(" "),l("h2",{attrs:{id:"基础案例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础案例"}},[t._v("#")]),t._v(" 基础案例")]),t._v(" "),l("p",[t._v("滑动菜单分为两个部分组成，一是在未滑动时看到的部分（如下图）")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/slide-view/1.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("二是在滑动时可见的部分（如下图的操作菜单部分）。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/slide-view/2.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("p",[t._v("两者都是通过添加 "),l("code",[t._v("slot")]),t._v(" 子节点来完成的。")]),t._v(" "),l("p",[t._v("因为 "),l("code",[t._v("SlideView")]),t._v(" 组件较之前的组件较为特殊，这里会做一个说明，以供参考。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ol",[l("li",[t._v("为保证 "),l("code",[t._v("SlideView")]),t._v(" 正常显示，我们需要设置 "),l("code",[t._v("SlideView")]),t._v("的 "),l("code",[t._v("height")]),t._v(" 和 "),l("code",[t._v("width")]),t._v(" 属性。")]),t._v(" "),l("li",[t._v("同时，我们需要传入两个"),l("code",[t._v("slot")]),t._v(" 子节点，并且用 "),l("code",[t._v('slot="right"')]),t._v(" 和 "),l("code",[t._v('slot="left"')]),t._v(" 给子节点命名。（"),l("code",[t._v("left")]),t._v(" 代表的是可见部分，"),l("code",[t._v("right")]),t._v("代表的是需要滑动时才可见的操作菜单部分）")]),t._v(" "),l("li",[t._v("标有 "),l("code",[t._v('slot="right"')]),t._v("的子节点的宽度要与组件的 "),l("code",[t._v("slide-width")]),t._v(" 属性值相等。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-slide-view height="140" width="750" slide-width="340"  >\n  <view slot="left" class="left">\n    <view class=\'left-con\'>\n      <text class=\'left-title\'>购买运动器材</text>\n      <text class=\'left-time\'>10-26 18:50</text>\n    </view> \n    <view class=\'left-price\'><text style="color:rgba(244,81,108,1);">-</text> $2499</view>\n  </view>\n  <view slot="right" class="right">\n    <text>喜欢</text>\n    <text>分享</text>\n    <text>删除</text>\n  </view>\n</l-slide-view>\n\n')])])]),l("p",[t._v("如下图：\n:::img\n"),l("img",{attrs:{src:"/screenshots/slide-view/3.jpg",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"自定义阈值"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义阈值"}},[t._v("#")]),t._v(" 自定义阈值")]),t._v(" "),l("p",[t._v("阈值是指当我们左滑或则右滑多少rpx时会触发 "),l("code",[t._v("SlideView")]),t._v(" 开关的值。")]),t._v(" "),l("p",[l("code",[t._v("SlideView")]),t._v(" 默认的阈值是 "),l("code",[t._v("1/2")]),t._v(" 的操作菜单宽度，当然，为了不同宽度操作菜单能有更丝滑的体验，我们也提供自定义阈值，可以通过 "),l("code",[t._v("threshold")]),t._v(" 属性来设置，单位是rpx。")]),t._v(" "),l("h2",{attrs:{id:"自动关闭与主动关闭"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自动关闭与主动关闭"}},[t._v("#")]),t._v(" 自动关闭与主动关闭")]),t._v(" "),l("p",[t._v("我们除了滑动触发 "),l("code",[t._v("SlideView")]),t._v(" 的关闭外，还可以通过另外两种方式来关闭它。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ol",[l("li",[t._v("设置 "),l("code",[t._v("auto-close")]),t._v("为 "),l("code",[t._v("true")]),t._v(" 时， 我们点击了菜单栏部分，组件会自动关闭；")]),t._v(" "),l("li",[t._v("设置 "),l("code",[t._v("close")]),t._v(" 为 "),l("code",[t._v("true")]),t._v(" 时，组件会主动关闭。")])])]),t._v(" "),l("h2",{attrs:{id:"滑动菜单属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#滑动菜单属性"}},[t._v("#")]),t._v(" 滑动菜单属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件显示区域的宽度,不包含菜单栏部分,单位rpx")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("750")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件显示区域的宽度,不包含菜单栏部分,单位rpx")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("100")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("slide-width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件滑动显示区域(菜单栏)的宽度，单位rpx")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("threshold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("触发组件菜单栏打开和关闭的阈值，单位rpx")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("菜单栏宽度/2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("auto-close")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置点击菜单栏后是否自动关闭")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否主动关闭菜单栏")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),l("h2",{attrs:{id:"滑动菜单事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#滑动菜单事件"}},[t._v("#")]),t._v(" 滑动菜单事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击菜单栏时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("click right")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:slideopen")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("菜单栏打开时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:slideclose")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("菜单栏关闭时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=i.exports}}]);