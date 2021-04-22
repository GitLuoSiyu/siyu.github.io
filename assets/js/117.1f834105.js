(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{529:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wx-lin使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-lin使用方法"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" wx.lin使用方法")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("已废弃")]),t._v(" "),a("p",[t._v("wx.lin 已废弃，将在未来的某个版本移除，如果对应组件有"),a("a",{attrs:{href:"./open-function"}},[t._v("开放函数")]),t._v("，请使用"),a("a",{attrs:{href:"./open-function"}},[t._v("开放函数")]),t._v("代替")])]),t._v(" "),a("p",[t._v("在一些操作交互方面，有些组件可以全局挂载一个调用的方法，比如说vue中的类似的调用方法"),a("code",[t._v("this.$message")]),t._v("，同样的在小程序的组件中，我们也设计了类似的调用方法，不过在小程序中使用会受到一些限制：")]),t._v(" "),a("ol",[a("li",[t._v("需要调用某个组件时，必须在对应的页面的"),a("code",[t._v("json")]),t._v("文件中引入并在"),a("code",[t._v("wxml")]),t._v("文件中挂载。")]),t._v(" "),a("li",[t._v("组件仅显示在引入的页面，跳转到其他页面时组件将会消失。比如某些场景下，在成功操作后会提示并跳转页面，这种场景建议传入回调函数在组件隐藏后再进行跳转或者使用原生的"),a("code",[t._v("API")]),t._v("。")]),t._v(" "),a("li",[t._v("一个页面只能引入一个相关的组件，比如"),a("code",[t._v("water-flow")]),t._v("组件每一个页面只能使用一次该组件。")])]),t._v(" "),a("p",[t._v("下面以"),a("code",[t._v("Loading")]),t._v("组件为例，介绍下"),a("code",[t._v("wx.lin")]),t._v("的用法：")]),t._v(" "),a("ol",[a("li",[t._v("在"),a("code",[t._v("json")]),t._v("和"),a("code",[t._v("wxml")]),t._v("文件中引入"),a("code",[t._v("loading")]),t._v("组件。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-loading"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- index.wxml --\x3e\n<l-loading />\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在"),a("code",[t._v("js")]),t._v("文件调用API并传入参数即可，参数参考对应组件的属性列表，参数均为"),a("code",[t._v("非必填")]),t._v("，并且参数需改为"),a("code",[t._v("驼峰命名")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fullScreen"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("显示的API为"),a("code",[t._v("wx.lin.show${组件名称}")]),t._v("，隐藏的API为"),a("code",[t._v("wx.lin.hide${组件名称}")]),t._v("(某些组件不支持隐藏)。")])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);