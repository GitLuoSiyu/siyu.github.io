(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{500:function(t,e,a){"use strict";a.r(e);var l=a(45),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"倒计时-countdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒计时-countdown"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 倒计时 Countdown")],1),t._v(" "),a("blockquote",[a("p",[t._v("计时组件，可用于验证码、音频播放计时等场景")])]),t._v(" "),a("h2",{attrs:{id:"目标时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标时间"}},[t._v("#")]),t._v(" 目标时间")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("time")]),t._v("设置目标时间，默认值为当前日期的后一天，"),a("code",[t._v("time")]),t._v("值格式默认为日期,通过"),a("code",[t._v("time-type")]),t._v("属性修改"),a("code",[t._v("time")]),t._v("属性值的格式，可选值为"),a("code",[t._v("datetime")]),t._v("、"),a("code",[t._v("second")]),t._v("，默认为"),a("code",[t._v("datetime")]),t._v("；")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v("1 基本用法")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("time-type='datetime'")]),t._v("时，"),a("code",[t._v("time")]),t._v("值格式为日期,且需要大于当前日期，如果小于当前日期，组件不会开始工作；")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/countdown/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-countdown />\n    <l-countdown time="2018-11-09 00:00"/>\n')])])]),a("p",[t._v("2 修改"),a("code",[t._v("time-type")]),t._v("为"),a("code",[t._v("second")])]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("time-type='second'")]),t._v("时，"),a("code",[t._v("time")]),t._v("属性接收一个整数，单位为秒，若传入的值小于 0 时，则会从 0 开始，目标时间为"),a("code",[t._v("time")]),t._v("的绝对值；若传入的值大于 0，则会从"),a("code",[t._v("time")]),t._v("值开始，到 0 结束。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/countdown/2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-countdown time-type="second" time="1500"  />\n    <l-countdown time-type="second" time="-1500" />\n')])])]),a("h2",{attrs:{id:"自定义显示日期模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义显示日期模板"}},[t._v("#")]),t._v(" 自定义显示日期模板")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("format")]),t._v("定义时间显示的格式,默认为"),a("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")]),t._v("；")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/countdown/3.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-countdown time-type="second" time="60"  format="{%s}秒"/>\n    <l-countdown time-type="second" time="1500" format="{%m}:{%s}"/>\n    <l-countdown time-type="second" time="3690" format="{%h}:{%m}:{%s}"/>\n    <l-countdown time-type="second" time="-1500" />\n\n')])])]),a("h2",{attrs:{id:"自定义样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义样式"}},[t._v("#")]),t._v(" 自定义样式")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("l-class")]),t._v("修改倒计时组件整体样式，通过"),a("code",[t._v("l-class-time")]),t._v("修改倒计时组件中数字区域的样式")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/countdown/4.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' <l-countdown l-class-time="countdown-blue" time="1500" time-type="second" l-class="countdown-text"/>\n')])])]),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n.content .countdown-blue {\n  width: 52rpx ;\n  height: 52rpx;\n  border: 2rpx solid #3683D6;\n  border-radius: 50%;\n  background:transparent;\n  color: #3683D6;\n}\n\n.content .countdown-text {\n  color: #3683D6;\n}\n\n")])])]),a("h2",{attrs:{id:"停止计时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止计时器"}},[t._v("#")]),t._v(" 停止计时器")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("status")]),t._v("属性切换倒计时组件的计时状态，默认为"),a("code",[t._v("true")]),t._v("，表示计时器处于计时状态")]),t._v(" "),a("h2",{attrs:{id:"纪念日模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纪念日模式"}},[t._v("#")]),t._v(" 纪念日模式")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v('countdownType="anniversary"')]),t._v("开启纪念日模式计时，此时计时器会计算距离设定的时间已经过去多久。可选值目前只有"),a("code",[t._v("anniversary")]),t._v("和"),a("code",[t._v("normal")]),t._v(",默认是"),a("code",[t._v("normal")])]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-countdown time="2019-04-24" countdownType="anniversary" />\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("此时")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("time-type")]),t._v("必须是"),a("code",[t._v("datetime")])]),t._v(" "),a("li")])]),t._v(" "),a("h2",{attrs:{id:"倒计时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒计时"}},[t._v("#")]),t._v(" 倒计时")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("目标时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期或者秒数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前日期的后一天")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入时间的格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datetime")]),t._v("、"),a("code",[t._v("second")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datetime")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时的计时状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义显示时间格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("is-zero-padd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一位数值时，是否自动补零")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])])])]),t._v(" "),a("h2",{attrs:{id:"倒计时外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒计时外部样式类"}},[t._v("#")]),t._v(" 倒计时外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改倒计时组件的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-time-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改数字区域的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-time")])])])]),t._v(" "),a("h2",{attrs:{id:"已经弃用的外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),a("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改数字区域的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-time-class替代")])])])]),t._v(" "),a("h2",{attrs:{id:"倒计时-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒计时-2"}},[t._v("#")]),t._v(" 倒计时")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linend")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时结束后的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"行为属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行为属性"}},[t._v("#")]),t._v(" 行为属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("目标时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期或者秒数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前日期的后一天")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入时间的格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datetime")]),t._v("/"),a("code",[t._v("second")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datetime")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时的计时状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义显示时间格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("is-zero-padd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一位数值时，是否自动补零")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])])])]),t._v(" "),a("h2",{attrs:{id:"行为事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行为事件"}},[t._v("#")]),t._v(" 行为事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linend")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时结束后的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),a("p",[t._v("我们将倒计时组件的部分属性和方法写在了"),a("code",[t._v("behaviors")]),t._v("文件中，你还可以直接引用"),a("code",[t._v("behavior")]),t._v("到你自己的组件中。具体使用方法参考"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 behaviors"),a("OutboundLink")],1)]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);