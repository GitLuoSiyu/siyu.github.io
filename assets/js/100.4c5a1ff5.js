(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{526:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"日历-calendar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日历-calendar"}},[t._v("#")]),t._v(" "),e("H2Icon"),t._v(" 日历 Calendar")],1),t._v(" "),e("blockquote",[e("p",[t._v("用于选择年月日，可自定义需要选择的时间范围。")])]),t._v(" "),e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),e("p",[t._v("日历组件可以通过"),e("code",[t._v("show")]),t._v("设置是否显示，可选值为"),e("code",[t._v("true/false")]),t._v("，默认为"),e("code",[t._v("false")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ true }}" />\n')])])]),e("h2",{attrs:{id:"自定义颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义颜色"}},[t._v("#")]),t._v(" 自定义颜色")]),t._v(" "),e("p",[t._v("日历组件默认继承"),e("code",[t._v("Loreal UI")]),t._v("的官方主题色，当然你也可以通过"),e("code",[t._v("color")]),t._v("属性来修改为你喜欢的主题色。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ true }}" color="#f60" />\n')])])]),e("h2",{attrs:{id:"日历类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日历类型"}},[t._v("#")]),t._v(" 日历类型")]),t._v(" "),e("p",[t._v("通过 type 属性可以设置日历的类型，可选值 single（单个日期）、multiple（多个日期）、range（范围），默认值 single。")]),t._v(" "),e("h3",{attrs:{id:"选择多个日期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择多个日期"}},[t._v("#")]),t._v(" 选择多个日期")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ true }}" type="multiple" />\n')])])]),e("h3",{attrs:{id:"选择日期区间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择日期区间"}},[t._v("#")]),t._v(" 选择日期区间")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ true }}" type="range" />\n')])])]),e("h2",{attrs:{id:"自定义日期文案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义日期文案"}},[t._v("#")]),t._v(" 自定义日期文案")]),t._v(" "),e("p",[t._v("通过传入 "),e("code",[t._v("formatter")]),t._v(" 函数可以对日历上每一格的内容进行格式化。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar formatter="{{ formatter }}"></l-calendar>\n')])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("day")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMonth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tody "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tody_month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tody"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMonth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tody_date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tody"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("topInfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'国庆节'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" tody_month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" tody_date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今天'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottomInfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'入住'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottomInfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'离店'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"自定义日期可选范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义日期可选范围"}},[t._v("#")]),t._v(" 自定义日期可选范围")]),t._v(" "),e("p",[t._v("通过 min-date 和 max-date 定义日历的范围。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar\n  show="{{ show }}"\n  min-date="{{ minDate }}"\n  max-date="{{ maxDate }}"\n/>\n')])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minDate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    maxDate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"自定义可选日期的数量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义可选日期的数量"}},[t._v("#")]),t._v(" 自定义可选日期的数量")]),t._v(" "),e("p",[t._v("通过设置 max-select/min-select 可以控制日历最多/至少选择的天数，该属性只有 type 为 multiple 和 range 时有效。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar type="range" max-select="{{ 3 }}" />\n\n<l-calendar type="multiple" min-select="{{ 3 }}" />\n')])])]),e("h2",{attrs:{id:"自定义超过可选数量的提示语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义超过可选数量的提示语句"}},[t._v("#")]),t._v(" 自定义超过可选数量的提示语句")]),t._v(" "),e("p",[t._v("通过设置 max-limit-message 可以控制当日历选择天数超过可选数量的提示语句，该属性只有 type 为 multiple 和 range 时有效。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar type="range" max-select="{{ 3 }}" max-limit-message="您选择的日期范围超出可选天数"/>\n')])])]),e("h2",{attrs:{id:"自定义不足必选数量的提示语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义不足必选数量的提示语句"}},[t._v("#")]),t._v(" 自定义不足必选数量的提示语句")]),t._v(" "),e("p",[t._v("通过设置 min-limit-message 可以控制当日历选择天数不足必选数量的提示语句，该属性只有 type 为 multiple 和 range 时有效。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-7"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar type="range" min-select="{{ 3 }}" max-limit-message="日期范围必须大于3天"/>\n')])])]),e("h2",{attrs:{id:"自定义按钮文字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义按钮文字"}},[t._v("#")]),t._v(" 自定义按钮文字")]),t._v(" "),e("p",[t._v("通过设置 confirm-text 属性可以修改确认按钮的文字。")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ show }}" type="range" confirm-text="完成" />\n')])])]),e("h2",{attrs:{id:"隐藏按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏按钮"}},[t._v("#")]),t._v(" 隐藏按钮")]),t._v(" "),e("p",[t._v("通过设置 show-confirm 属性可以隐藏/显示确认按钮。show-confirm 默认值为：true")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-calendar show="{{ show }}" show-confirm="{{ false }}" confirm-text="完成" />\n')])])]),e("h2",{attrs:{id:"日历组件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日历组件属性"}},[t._v("#")]),t._v(" 日历组件属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("控制日历组件的显示和隐藏")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("single/multiple/range")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("single")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主题色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Loreal UI主题色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("default-date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认选中日期，type为 multiple 或 range 时为数组")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number/Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前日期")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期格式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("formatter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期内容格式化函数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置可选最小日期")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number/Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置可选最大日期")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number/Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-select")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置最少可选天数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-select")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置最多可选天数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("show-confirm")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示确认按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("confirm-text")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("确认按钮的文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("确认")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-limit-message")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期选择天数超出 max-select 时的提示文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选择天数不能超过 xx 天")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-limit-message")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期选择天数不足 min-select 时的提示文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选择天数不能少于 xx 天")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("show-title")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示日历标题")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("show-subtitle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示日历副标题（年月）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),e("h2",{attrs:{id:"day-数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#day-数据结构"}},[t._v("#")]),t._v(" Day 数据结构")]),t._v(" "),e("p",[t._v("日历中的每个日期都对应一个 Day 对象，通过 formatter 属性可以自定义 Day 对象的内容。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("格式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期对应的 Date 对象")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("所选日期的 value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("[] / String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期类型，可选值为 selected、start、middle、end、disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中间显示的文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("topInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("上方的提示信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bottomInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下方的提示信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])])])]),t._v(" "),e("h2",{attrs:{id:"插槽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("自定义标题")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("footer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("自定义底部区域内容")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),e("h2",{attrs:{id:"日历组件事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日历组件事件"}},[t._v("#")]),t._v(" 日历组件事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linselect")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选中任意日期触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = { current: Date }")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linunselect")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当 type 为 multiple 时,点击已选中的日期时触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = { current: Date }")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linconfirm")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日期选择完成后触发，若 show-confirm 为 true，则点击确认按钮后触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = {value: Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date[]}")])])])]),t._v(" "),e("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);