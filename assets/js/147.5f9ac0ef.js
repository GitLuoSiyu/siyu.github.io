(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{575:function(t,e,l){"use strict";l.r(e);var s=l(25),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"步骤条-steps"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条-steps"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 步骤条 Steps")],1),t._v(" "),l("blockquote",[l("p",[t._v("拆分某项流程的步骤，引导用户按流程完成任务。")])]),t._v(" "),l("p",[t._v("步骤条包含 2 个组件： "),l("code",[t._v("steps")]),t._v(" 、 "),l("code",[t._v("step")]),t._v(" ，这两个组件必须同时在使用页面引入。")]),t._v(" "),l("h2",{attrs:{id:"基础用法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),l("p",[l("code",[t._v("step")]),t._v("组件用于设置每一个步骤条元素的内容。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("title")]),t._v("和"),l("code",[t._v("describe")]),t._v("属性分别设置步骤条元素的标题和描述内容。")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps>\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"设置步骤条进度"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置步骤条进度"}},[t._v("#")]),t._v(" 设置步骤条进度")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("active-index")]),t._v("设置初始步骤条进度。默认值为"),l("code",[t._v("0")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps active-index="1">\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"设置步骤条方向及步骤条元素的最小高度"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置步骤条方向及步骤条元素的最小高度"}},[t._v("#")]),t._v(" 设置步骤条方向及步骤条元素的最小高度")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("direction")]),t._v("属性设置步骤条方向。可选值为"),l("code",[t._v("row")]),t._v("、"),l("code",[t._v("column")]),t._v("，默认为"),l("code",[t._v("row")]),t._v("。")]),t._v(" "),l("p",[t._v("在"),l("code",[t._v("direction")]),t._v("属性为"),l("code",[t._v("column")]),t._v("是可通过设置"),l("code",[t._v("step-min-height")]),t._v("属性更改步骤条元素的最小高度，该高度包括右侧内容高度，同时可撑高线的高度。默认为"),l("code",[t._v("120")]),t._v("，单位为"),l("code",[t._v("rpx")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/2.png",alt:"height=250"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps direction="column" step-min-height="160">\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"设置步骤条排序"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置步骤条排序"}},[t._v("#")]),t._v(" 设置步骤条排序")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("reverse")]),t._v("属性为"),l("code",[t._v("true")]),t._v("可设置步骤条为倒序排列。默认为正序排列。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/3.png",alt:"height=250"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps reverse="{{true}}" direction="column" step-min-height="160">\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"设置步骤条状态"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置步骤条状态"}},[t._v("#")]),t._v(" 设置步骤条状态")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("status")]),t._v("属性设置步骤条当前选中元素的状态。可选值为"),l("code",[t._v("process")]),t._v("、"),l("code",[t._v("error")]),t._v("，默认为"),l("code",[t._v("process")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-5"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/4.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps active-index="1" status="error">\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"点状步骤条"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#点状步骤条"}},[t._v("#")]),t._v(" 点状步骤条")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("dot")]),t._v("属性设置步骤条为点状步骤条。默认值为"),l("code",[t._v("fasle")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-6"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/5.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps dot="{{true}}">\n  <l-step title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"步骤条图标"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条图标"}},[t._v("#")]),t._v(" 步骤条图标")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("icon")]),t._v("属性设置步骤条元素的图标，仅在"),l("code",[t._v("dot")]),t._v("为"),l("code",[t._v("true")]),t._v("的条件下生效。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("icon-size")]),t._v("和"),l("code",[t._v("icon-color")]),t._v("属性设置步骤条元素的图标的大小和颜色。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-7"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-7"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/6.png",alt:"height=250"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps dot="{{true}}">\n  <l-step icon="cart" title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"步骤条激活态颜色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条激活态颜色"}},[t._v("#")]),t._v(" 步骤条激活态颜色")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("color")]),t._v("属性设置步骤条激活状态的颜色。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-8"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-8"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/7.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-steps color="#48a7e3">\n  <l-step icon="cart" title="已支付" describe="11:30"></l-step>\n  <l-step title="备餐中" describe="11:30"></l-step>\n  <l-step title="已出餐" describe="11:30"></l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"自定义-步骤条节点-描述内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义-步骤条节点-描述内容"}},[t._v("#")]),t._v(" 自定义（步骤条节点 || 描述内容）")]),t._v(" "),l("p",[t._v("通过设置插槽的"),l("code",[t._v("slot")]),t._v("为"),l("code",[t._v("dot")]),t._v("和"),l("code",[t._v("describe")]),t._v("分别自定义步骤条节点和描述内容，自定义步骤条节店内容需同时设置"),l("code",[t._v("custom")]),t._v("属性为"),l("code",[t._v("true")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-9"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-9"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/steps/8.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('\x3c!-- 自定义步骤条节点 --\x3e\n<l-steps>\n  <l-step title="已支付" describe="11:30" />\n  <l-step title="备餐中" describe="12:30" />\n  <l-step custom="{{true}}" title="已收货" describe="11:30">\n    <view class="shou" slot="dot">收</view>\n  </l-step>\n</l-steps>\n\n\x3c!-- 自定义描述内容 --\x3e\n<l-steps direction="column" active-index="1">\n  <l-step title="2019-9-25 11:30">\n    <view class="describe-container" slot="describe">\n      广大群众反映步骤条问题\n    </view>\n  </l-step>\n  <l-step title="2019-10-05 12:30">\n    <view class="describe-container" slot="describe">\n      拾玖重构步骤条\n    </view>\n  </l-step>\n  <l-step title="2019-10-25 13:30">\n    <view class="describe-container" slot="describe">\n      步骤条更新完成😄\n    </view>\n  </l-step>\n</l-steps>\n')])])]),l("h2",{attrs:{id:"步骤条属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条属性"}},[t._v("#")]),t._v(" 步骤条属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条方向")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("column/row")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("row")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("active-index")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("初始步骤条进度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("dot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点状步骤条")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当前激活步骤条元素状态")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("process/error")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("process")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条激活状态颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("reverse")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条倒序排列")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("step-mini-height")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条元素高度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("120")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])])])]),t._v(" "),l("h2",{attrs:{id:"步骤条元素属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条元素属性"}},[t._v("#")]),t._v(" 步骤条元素属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("describe")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条图标颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条图标大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否自定义步骤条元素")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])])])]),t._v(" "),l("h2",{attrs:{id:"步骤条元素外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条元素外部样式类"}},[t._v("#")]),t._v(" 步骤条元素外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])])])]),t._v(" "),l("h2",{attrs:{id:"步骤条元素外部样式类-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条元素外部样式类-2"}},[t._v("#")]),t._v(" 步骤条元素外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条元素的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-step-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条元素数字部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-describe-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条元素描述内容的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条元素标题的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-line-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖步骤条元素线的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])])])]),t._v(" "),l("h2",{attrs:{id:"步骤条元素插槽"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#步骤条元素插槽"}},[t._v("#")]),t._v(" 步骤条元素插槽")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("dot")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义步骤条元素内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("需同时设置"),l("code",[t._v("custom")]),t._v("属性")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("describe")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义描述内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.6.8")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=a.exports}}]);