(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{551:function(t,e,l){"use strict";l.r(e);var a=l(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"选项卡-segment"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡-segment"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 选项卡 Segment")],1),t._v(" "),l("blockquote",[l("p",[t._v("选项卡组件与标签页组件的区别在于，标签页将内容和选项卡封装到一个组件内了，在业务场景是分类或者比较复杂的业务场景时推荐使用选项卡组件。")])]),t._v(" "),l("p",[t._v("选项卡需"),l("code",[t._v("segment")]),t._v("和"),l("code",[t._v("segment-item")]),t._v("两个组件关联使用。")]),t._v(" "),l("p",[l("code",[t._v("segment-item")]),t._v("用于设置每一个选项的名称 ;")]),t._v(" "),l("p",[l("code",[t._v("segment")]),t._v(" 包裹在所有"),l("code",[t._v("segment-item")]),t._v("最外层 ,"),l("code",[t._v("segment")]),t._v(" 下的所有 "),l("code",[t._v("segment-item")]),t._v(" 属于同一个选项卡。")]),t._v(" "),l("h2",{attrs:{id:"等宽选项卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#等宽选项卡"}},[t._v("#")]),t._v(" 等宽选项卡")]),t._v(" "),l("p",[t._v("默认为等宽选项卡，当选项卡数过多时可在"),l("code",[t._v("segment")]),t._v("上设置"),l("code",[t._v("scrollable")]),t._v(" 为 "),l("code",[t._v("true")]),t._v("开启滚动标选项卡。")]),t._v(" "),l("p",[t._v("默认激活的是第一个选项卡，通过在 "),l("code",[t._v("segment")]),t._v(" 组件上设置 "),l("code",[t._v("active-key")]),t._v("的值为任意 "),l("code",[t._v("key")]),t._v("值配置初始状态时激活的选项卡。")]),t._v(" "),l("p",[t._v("须在"),l("code",[t._v("segment-item")]),t._v("组件中传入"),l("code",[t._v("tab")]),t._v("、"),l("code",[t._v("key")]),t._v("属性，其中：")]),t._v(" "),l("ul",[l("li",[l("p",[l("code",[t._v("tab")]),t._v("是选项卡显示的文字；")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("key")]),t._v("为每个选项卡的唯一标识，对应"),l("code",[t._v("segment")]),t._v("中的"),l("code",[t._v("active-key")]),t._v("；")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/segment/1.jpeg",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('   <l-segment bind:linchange="changeTabs">\n        <l-segment-item tab="客厅" key="one" />\n        <l-segment-item tab="卧室" key="two" />\n        <l-segment-item tab="厨房" key="three" />\n    </l-segment>   \n')])])]),l("h2",{attrs:{id:"选项卡位置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡位置"}},[t._v("#")]),t._v(" 选项卡位置")]),t._v(" "),l("p",[t._v("默认选项卡位置在顶部，可通过在"),l("code",[t._v("segment")]),t._v("上设置"),l("code",[t._v("placement")]),t._v("属性切换选项卡位置，可选值有 "),l("code",[t._v("top")]),t._v("/"),l("code",[t._v("left")]),t._v("/"),l("code",[t._v("right")]),t._v("/"),l("code",[t._v("bottom")]),t._v("。")]),t._v(" "),l("p",[l("strong",[t._v("但此处修改的仅是选项卡相对于激活态横线的位置，并非选项卡在页面中的布局。")])]),t._v(" "),l("p",[t._v("如果想要控制选项卡在页面中的布局，请自行在页面 CSS 样式中进行控制。具体效果如下：")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/segment/top.png",alt:"height=50"}}),t._v(" "),l("img",{attrs:{src:"/screenshots/segment/bottom.png",alt:"height=50"}}),t._v(" "),l("img",{attrs:{src:"/screenshots/segment/left.png",alt:"height=50"}}),t._v(" "),l("img",{attrs:{src:"/screenshots/segment/right.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"图标选项卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#图标选项卡"}},[t._v("#")]),t._v(" 图标选项卡")]),t._v(" "),l("p",[t._v("在"),l("code",[t._v("segment-item")]),t._v("上设置"),l("code",[t._v("icon")]),t._v("时，可以在选项卡上添加图标，默认图标大小为"),l("code",[t._v("28rpx")]),t._v(",颜色与字体颜色一致。")]),t._v(" "),l("p",[t._v("通过在"),l("code",[t._v("segment-item")]),t._v("上设置"),l("code",[t._v("icon")]),t._v("属性设置每个选项卡显示图标类型，可配置图标类型同"),l("code",[t._v("Icon")]),t._v("组件一致，")]),t._v(" "),l("h2",{attrs:{id:"图片选项卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#图片选项卡"}},[t._v("#")]),t._v(" 图片选项卡")]),t._v(" "),l("p",[t._v("使用"),l("code",[t._v("image")]),t._v("配置图片资源的样式，可配置项有：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("defaultImage")]),t._v(":未选中时的图片资源,")]),t._v(" "),l("li",[l("code",[t._v("activeImage")]),t._v("：选中时的图片资源")]),t._v(" "),l("li",[l("code",[t._v("picPlacement")]),t._v("可以更改图片、图标的相对于文字的位置，默认为"),l("code",[t._v("top")])])]),t._v(" "),l("h2",{attrs:{id:"徽标选项卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#徽标选项卡"}},[t._v("#")]),t._v(" 徽标选项卡")]),t._v(" "),l("p",[t._v("可在任意 "),l("code",[t._v("segment-item")]),t._v("上通过属性"),l("code",[t._v("badge-count")]),t._v("设置徽标的数值，不设置内容时徽标不显示，或者设置"),l("code",[t._v("dotBadge="+t._s(!0))]),t._v("时显示圆点徽标")]),t._v(" "),l("p",[t._v("徽标相关的属性有，作用分别如下：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("badge-max-count")]),t._v(" 设置徽标数字最大值，超过最大值时显示${max-count}+;")]),t._v(" "),l("li",[l("code",[t._v("badge-count-type")]),t._v("  数字的显示方式, 可选值为"),l("code",[t._v("overflow")]),t._v("、"),l("code",[t._v("limit")]),t._v("、"),l("code",[t._v("custom")]),t._v(",默认值为"),l("code",[t._v("overflow")]),t._v("。")])]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/segment/2.jpeg",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-segment active-key="one" bind:linchange="changeTabs">\n    <l-segment-item tab="客厅" key="one" dot-badge="{{true}}"/>\n    <l-segment-item tab="卧室" key="two" badge-count="97"/>\n    <l-segment-item tab="厨房" key="three" badge-count="900" l-badge-class="badge-view"/>\n    <l-segment-item tab="浴室" key="four" />\n</l-segment>\n\n')])])]),l("h2",{attrs:{id:"自定义选项卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义选项卡"}},[t._v("#")]),t._v(" 自定义选项卡")]),t._v(" "),l("p",[t._v("使用 "),l("code",[t._v("slot")]),t._v("可以自定义选项卡的内容和样式 , 此时不能设置 "),l("code",[t._v("tab")]),t._v(" 属性 , 否则会同时展示两者的内容。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/segment/3.jpeg",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('    <l-segment bind:linchange="changeTabs" l-tab-image-class="tab-image" has-line="{{false}}" l-class="segment-view"   \n               l-active-class="segment-active" activeKey="two">\n        <l-segment-item key="one" slot="one">\n          <view class="tab-item">\n            <view>2月12日 10：00</view>\n            <view>已开抢</view>\n          </view>\n        </l-segment-item>\n        <l-segment-item key="two" slot="two">\n          <view class="tab-item">\n            <view>2月13日 10：00</view>\n            <view>即将开始</view>\n          </view>\n        </l-segment-item>\n\n        <l-segment-item key="three" slot="three">\n          <view class="tab-item">\n            <view>2月14日 10：00</view>\n            <view>即将开始</view>\n          </view>\n        </l-segment-item>\n    </l-segment>  \n')])])]),l("h2",{attrs:{id:"自定义数据"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据"}},[t._v("#")]),t._v(" 自定义数据")]),t._v(" "),l("p",[t._v("如果你想给每个选项卡绑定一个自定义数据，可以通过"),l("code",[t._v("data-cell")]),t._v("实现：")]),t._v(" "),l("div",{staticClass:"language-html extra-class"},[l("pre",{pre:!0,attrs:{class:"language-html"}},[l("code",[l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-segment")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token attr-name"}},[l("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("linchange")]),l("span",{pre:!0,attrs:{class:"token attr-value"}},[l("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("changeTabs"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-segment-item")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-cell")]),l("span",{pre:!0,attrs:{class:"token attr-value"}},[l("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("自定义数据 /"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token tag"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-segment")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),l("p",[t._v("通过"),l("code",[t._v("data-cell")]),t._v("绑定的数据，可以在"),l("code",[t._v("bind:linchange")]),t._v("中获取")]),t._v(" "),l("h2",{attrs:{id:"选项卡初始样式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡初始样式"}},[t._v("#")]),t._v(" 选项卡初始样式")]),t._v(" "),l("ul",[l("li",[t._v("选项卡位置在顶部和底部时的默认高度为"),l("code",[t._v("80rpx")]),t._v("，宽度等分，开启"),l("code",[t._v("scrollable")]),t._v("时，最小宽度为"),l("code",[t._v("160rpx")]),t._v(";")]),t._v(" "),l("li",[t._v("选项卡位置在左边或右边时，默认宽度为"),l("code",[t._v("160rpx")]),t._v(",高度等分,开启"),l("code",[t._v("scrollable")]),t._v("时，最小高度为"),l("code",[t._v("80rpx")]),t._v(";")]),t._v(" "),l("li",[t._v("可通过"),l("code",[t._v("l-class")]),t._v("、"),l("code",[t._v("l-active-class")]),t._v("、"),l("code",[t._v("l-inactive-class")]),t._v("覆盖默认选项卡样式。")])]),t._v(" "),l("h2",{attrs:{id:"选项卡属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡属性"}},[t._v("#")]),t._v(" 选项卡属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("active-key")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("默认激活tabs的key")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("默认为第一个")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("选项卡位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("top")]),t._v("/"),l("code",[t._v("left")]),t._v("/"),l("code",[t._v("right")]),t._v("/"),l("code",[t._v("bottom")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("top")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("scrollable")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否滚动选项卡")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("active-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置激活状态选项卡的文本和图标颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示颜色的是16进制")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("inactive-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置未激活状态选项卡的文本和颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示颜色的是16进制")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("has-line")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否显示选项卡下的装饰线")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("animated-for-line")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用动画切换装饰线")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("even")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否是等宽或等高标签")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡整体的宽度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number ，单位"),l("code",[t._v("rpx")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡整体的高度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number ，单位"),l("code",[t._v("rpx")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("item-width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡子项的宽度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number ，单位"),l("code",[t._v("rpx")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("item-height")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡子项的高度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number ，单位"),l("code",[t._v("rpx")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("h2",{attrs:{id:"选项卡子项属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡子项属性"}},[t._v("#")]),t._v(" 选项卡子项属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对应 "),l("code",[t._v("active-key")]),t._v("，必填")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tab")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("选项卡头显示文字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义选项卡时使用 , 与 "),l("code",[t._v("key")]),t._v("一致 , 此时不能设置 "),l("code",[t._v("segment")]),t._v(" 的属性，否则优先显示 "),l("code",[t._v("segment")]),t._v(" 的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡图标类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡图标的大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("picPlacement")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置图片、图标的相对于文字的位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("top")]),t._v("/"),l("code",[t._v("left")]),t._v("/"),l("code",[t._v("right")]),t._v("/"),l("code",[t._v("bottom")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("top")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选项卡图片资源")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("{activeImage,defaultImage}")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count-type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("数字的显示方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("overflow")]),t._v("/"),l("code",[t._v("limit")]),t._v("/"),l("code",[t._v("custom")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("overflow")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("dot-badge")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示圆点徽标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")]),t._v("/"),l("code",[t._v("true")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标的数值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("badge-max-count")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("徽标数字最大值，超过最大值时显示${max-count}+")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("99")])])])]),t._v(" "),l("h2",{attrs:{id:"选项卡外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡外部样式类"}},[t._v("#")]),t._v(" 选项卡外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡整体样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-header-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡整体样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("与"),l("code",[t._v("l-class")]),t._v("区别，该属性主要设置选项卡的"),l("code",[t._v("height")]),t._v("和"),l("code",[t._v("width")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-active-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡激活状态样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-active")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-inactive-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡默认状态样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-inactive")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-line-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡选中时装饰线的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-line")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-header-line-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡装饰线的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-header-line")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-tab-image-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡图片的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-tabimage")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡图标的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-icon")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-badge-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖徽标的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),l("h2",{attrs:{id:"已经弃用的外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),l("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-active")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡激活状态样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-active-class替代")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-inactive")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡默认状态样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-inactive-class替代")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-line")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡选中时装饰线的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-line-class替代")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-header-line")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡装饰线的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-header-line-class替代")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-tabimage")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡图片的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-tab-image-class替代")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖选项卡图标的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用l-icon-class")])])])]),t._v(" "),l("h2",{attrs:{id:"选项卡事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#选项卡事件"}},[t._v("#")]),t._v(" 选项卡事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("segment")]),t._v("切换的回调事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("activeKey：当前激活选项卡的 key "),l("br"),t._v("currentIndex：当前激活选项卡的索引"),l("br"),t._v("cell：segment-item 绑定的自定义数据")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);