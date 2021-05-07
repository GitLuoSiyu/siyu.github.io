(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{522:function(t,e,a){"use strict";a.r(e);var l=a(25),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"校验规则-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验规则-rules"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 校验规则 Rules")],1),t._v(" "),a("blockquote",[a("p",[t._v("表单组件的校验规则")])]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("校验的功能需要配合程序员思语提供的表单组件使用。")]),t._v(" "),a("p",[t._v("在表单项上设置 "),a("code",[t._v("rules")]),t._v(" 属性，"),a("code",[t._v("rules")]),t._v(" 接收一个数组或者对象；")]),t._v(" "),a("p",[t._v("当失去焦点时触发校验事件，可通过 "),a("code",[t._v("linvalidate")]),t._v(" 事件监听校验结果；")]),t._v(" "),a("p",[t._v("此外，还提供了三种错误提示的方式："),a("code",[t._v("message")]),t._v(" 、 "),a("code",[t._v("toast")]),t._v(" 和 "),a("code",[t._v("text")]),t._v(" ，通过设置 "),a("code",[t._v("tipType")]),t._v("的值为 "),a("code",[t._v("message")]),t._v(" 或 "),a("code",[t._v("toast")]),t._v(" 或 "),a("code",[t._v("text")]),t._v(" 开启提示信息。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="邮箱" placeholder="请输入邮箱" label-width="170" \n    name="email" rules="{{emailRules}}" />\n<l-input label="用户名" placeholder="请输入用户名" label-width="170" \n    name="user" rules="{{userRules}}" />\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     userRules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'长度需要在2-3个字符之间'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    emailRules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"校验规则属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验规则属性"}},[t._v("#")]),t._v(" 校验规则属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("枚举类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("len")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("字段长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("校验错误提示文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最小长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pattern")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("正则表达式校验")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("required")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否必选")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("内建校验类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("见下表")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("whitespace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("必选时，空格是否会被视为错误")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])])])]),t._v(" "),a("p",[t._v("更多高级用法可研究 "),a("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-validator"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("提示："),a("code",[t._v("pattern")]),t._v("属性的值需是 "),a("code",[t._v("String")]),t._v("，传入正则时，微信小程序不识别，会导致传入的 "),a("code",[t._v("pattern")]),t._v(" 是个空的对象。")])]),t._v(" "),a("h2",{attrs:{id:"内置校验类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置校验类型"}},[t._v("#")]),t._v(" 内置校验类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("布尔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("regexp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("正则")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("整数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("浮点数字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("枚举类型，值必须存在 enum 中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("邮箱")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("hex")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("16进制")])])])]),t._v(" "),a("h2",{attrs:{id:"监听校验事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听校验事件"}},[t._v("#")]),t._v(" 监听校验事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linvalidate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("监听校验结果")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{error,isError}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=s.exports}}]);