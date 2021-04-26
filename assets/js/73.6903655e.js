(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{495:function(t,e,a){"use strict";a.r(e);var l=a(25),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"输入框-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入框-input"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 输入框 Input")],1),t._v(" "),a("blockquote",[a("p",[t._v("基于原生组件Input封装，用于接收单行文本，支持文本、密码、数字、身份证等类型的输入。")])]),t._v(" "),a("p",[t._v("用户可控制是否显示输入框标题，是否出现清除按钮，还可以自定义 Input 组件的右边部分（传入 "),a("code",[t._v("slot")]),t._v("），实现自定义按钮、验证码输入框等。")]),t._v(" "),a("h2",{attrs:{id:"基础案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础案例"}},[t._v("#")]),t._v(" 基础案例")]),t._v(" "),a("p",[t._v("Input的标题部分是通过 "),a("code",[t._v("label")]),t._v(" 属性来实现，你还可以通过"),a("code",[t._v("placeholder")]),t._v(" 来显示自定义的占位文本。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="用户名"  placeholder="请输入用户名"  />\n<l-input label="密码"  placeholder="请输入密码"  />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"对齐方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对齐方式"}},[t._v("#")]),t._v(" 对齐方式")]),t._v(" "),a("p",[t._v("根据具体需求，选择最佳的标签对齐方式（输入框标题和输入框部分）。")]),t._v(" "),a("p",[a("code",[t._v("label-layout")]),t._v(" 默认值是 "),a("code",[t._v("left")]),t._v(" ，即输入框标题在 "),a("code",[t._v("label-width")]),t._v(" 设置的范围内居左显示。值为 "),a("code",[t._v("right")]),t._v(" 时，输入框标题居右显示。")]),t._v(" "),a("p",[t._v("另外，我们还可以通过 "),a("code",[t._v("label-width")]),t._v(" 来设置标题部分的宽度，默认是200，单位是rpx。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="名称" label-layout="left" label-width="170"  />\n\n<l-input label="名称" label-layout="right" label-width="170"  />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"隐藏表单标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏表单标题"}},[t._v("#")]),t._v(" 隐藏表单标题")]),t._v(" "),a("p",[t._v('在不需要显示左侧表单标题时候，可以设置hideLabel="'+t._s(!0)+'"将左侧表单标题隐藏。')]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="标题"  placeholder="这里没有隐藏标题" />\n\n<l-input placeholder="这里隐藏了标题" hide-label="{{true}}"  />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image3.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"输入框类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入框类型"}},[t._v("#")]),t._v(" 输入框类型")]),t._v(" "),a("p",[t._v("输入框类型的可选值有 "),a("code",[t._v("text")]),t._v(" 、"),a("code",[t._v("idcard")]),t._v(" 、"),a("code",[t._v("password")]),t._v(" 、"),a("code",[t._v("number")]),t._v("、"),a("code",[t._v("digit")]),t._v(" ，可根据不同的场景选择。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="数字" type="number" placeholder="请输入数字" />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image4.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"清除按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除按钮"}},[t._v("#")]),t._v(" 清除按钮")]),t._v(" "),a("p",[t._v("当我们设置 "),a("code",[t._v("clear")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 时，并且当输入框输入内容后，会显示 "),a("code",[t._v("清除按钮")]),t._v(" ，我们可以通过点击它来清除文本内容。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="清除按钮" clear="{{true}}" />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image5.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"设置必选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置必选项"}},[t._v("#")]),t._v(" 设置必选项")]),t._v(" "),a("p",[t._v("输入框要显示必填图标，设置 "),a("code",[t._v("required")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 即可。这里只是显示必填图标 * ，不会自动判断是否输入内容，如果需要判断输入内容，请查看设置校验规则部分。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="必填" placeholder="这里是必填项" required="{{true}}" />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image6.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"设置校验规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置校验规则"}},[t._v("#")]),t._v(" 设置校验规则")]),t._v(" "),a("p",[t._v("设置表单校验是为了在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，我们可以通过 "),a("code",[t._v("rules")]),t._v(" 属性来设置相对应的校验规则。详细使用方法请查看"),a("a",{attrs:{href:"http://doc.mini.talelin.com/component/form/rules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("校验规则"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"示例代码-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-7"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="银行卡号" placeholder="请输入代理商的银行卡号" required="{{true}}" rules="{{cardRule}}" />\n\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcardRule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmax"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"长度在16-19之间"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"设置禁用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置禁用"}},[t._v("#")]),t._v(" 设置禁用")]),t._v(" "),a("p",[t._v("当我们需要讲表单项禁用时，设置 "),a("code",[t._v("disabled")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 即可。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-8"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="禁用"  disabled="{{true}}"  placeholder="禁止输入" />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image7.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义input组件右边部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义input组件右边部分"}},[t._v("#")]),t._v(" 自定义Input组件右边部分")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("<slot>")]),t._v(" 的方式可以自定义Input 组件的右边部分，实现自定义按钮、验证码输入框等。"),a("br"),t._v("\n另外需要注意的是传入进去的slot需要制定他的"),a("code",[t._v("slot")]),t._v("属性的值为"),a("code",[t._v("right")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-9"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input label="验证码"  label-layout="left"  placeholder="请输入验证码" >\n\t<img slot="right" src="path/to/img.png">\n</l-input>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/input/image8.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义input组件左边-label-部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义input组件左边-label-部分"}},[t._v("#")]),t._v(" 自定义Input组件左边(label)部分")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("<slot>")]),t._v(" 的方式可以自定义Input 组件的label部分，实现带图标的输入框等。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-10"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-input  placeholder="请输入邮箱" >\n\t<view class="email" slot="left">\n\t\t<img src="path/to/email.png">\n\t\t<text>邮箱：</text>\n\t</view>\n</l-input>\n')])])]),a("h2",{attrs:{id:"表单项属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单项属性"}},[t._v("#")]),t._v(" 表单项属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单标题（label）的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("hide-label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("隐藏表单标题（label）的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boollen")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单的宽,单位是rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("750")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("required")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否必选")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框类型，可选值为 text，idcard，digit，password，number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text/idcard/digit/password/number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框的值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("占位文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("colon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否需要冒号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取焦点")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清除按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxlength")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大输入长度，设置为 -1 的时候不限制最大长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("140")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showRow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示input下方横线样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rules")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入内容的校验规则")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单项标题部分的宽度，单位rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label-layout")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置表单标题的显示位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left/right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder-style")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置输入框占位文本的内联样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tip-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("校验错误提醒方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("toast/message/text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"表单项外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单项外部样式类"}},[t._v("#")]),t._v(" 表单项外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置表单项的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-error-text-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tipType 为 text 时，错误提示信息外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-error-text")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-row-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖 input 下方横线样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-label-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖 label 样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-input-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖 input 样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h2",{attrs:{id:"已经弃用的外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),a("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-error-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tipType 为 text 时，错误提示信息外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-error-text-class替代")])])])]),t._v(" "),a("h2",{attrs:{id:"表单项事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单项事件"}},[t._v("#")]),t._v(" 表单项事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lininput")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键盘输入时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linfocus")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框聚焦时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linblur")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框失去焦点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linconfirm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击完成按钮时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框当前值 value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclear")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击清除按钮时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=s.exports}}]);