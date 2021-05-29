(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{580:function(t,r,a){"use strict";a.r(r);var s=a(25),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 快速上手")],1),t._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("在微信小程序中，"),a("code",[t._v("wxml")]),t._v(" 的数据绑定仅支持简单运算，例如：三元表达式、算数运算、逻辑判断、字符串运算；不支持复杂的计算，比如： "),a("code",[t._v("Array")]),t._v(" 的 "),a("code",[t._v("join")]),t._v(" 、 "),a("code",[t._v("pop")]),t._v(" 、"),a("code",[t._v("slice")]),t._v(" ，"),a("code",[t._v("String")]),t._v(" 的 "),a("code",[t._v("indexOf")]),t._v(" 等方法。但在实际开发中，需要在"),a("code",[t._v("wxml")]),t._v("中使用上述方法的场景还是挺多的。")]),t._v(" "),a("p",[t._v("因此我们将数组、字符串的常用方法封装到"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WXS"),a("OutboundLink")],1),t._v("中，以方便在 "),a("code",[t._v("wxml")]),t._v(" 中的使用。除此之外，还会封装一些常用的业务函数，比如：补零函数、动态设置class等。")]),t._v(" "),a("h2",{attrs:{id:"快速使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[t._v("#")]),t._v(" 快速使用")]),t._v(" "),a("p",[t._v("过滤器使用时，你可以在"),a("code",[t._v("wxml")]),t._v("中使用，也可以在"),a("code",[t._v("wxs")]),t._v("中封装自己的业务逻辑中使用，两种使用场景下的引入方式是不同的。")]),t._v(" "),a("h3",{attrs:{id:"在wxml中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在wxml中使用"}},[t._v("#")]),t._v(" 在wxml中使用")]),t._v(" "),a("p",[t._v("必须先引入，再使用。以使用 "),a("code",[t._v("String")]),t._v(" 为例如下：")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<wxs src="../../../dist/filter/string.wxs" module="string"/>\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("src")]),t._v(" 是相对路径")]),t._v(" "),a("li",[a("code",[t._v("module")]),t._v(" 值用于调用过滤器的方法")])])]),t._v(" "),a("h3",{attrs:{id:"在wxs中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在wxs中使用"}},[t._v("#")]),t._v(" 在wxs中使用")]),t._v(" "),a("p",[t._v("必须先引入，再使用。以使用 "),a("code",[t._v("String")]),t._v(" 为例如下：")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var string = require("../../../dist/filter/string.wxs");\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("require")]),t._v(" 是相对路径")])])]),t._v(" "),a("h2",{attrs:{id:"基础过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础过滤器"}},[t._v("#")]),t._v(" 基础过滤器")]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/filter/string.html#tostring"}},[t._v("toString")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#valueof"}},[t._v("valueOf")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#charat"}},[t._v("charAt")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#indexof"}},[t._v("indexOf")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#lastindexof"}},[t._v("lastIndexOf")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#slice"}},[t._v("slice")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#split"}},[t._v("split")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#substring"}},[t._v("substring")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#tolowercase"}},[t._v("toLowerCase")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#touppercase"}},[t._v("toUpperCase")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/string.html#trim"}},[t._v("trim")])])]),t._v(" "),a("h3",{attrs:{id:"array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/filter/array.html#join"}},[t._v("join")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#pop"}},[t._v("pop")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#push"}},[t._v("push")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#reverse"}},[t._v("reverse")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#shift"}},[t._v("shift")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#slice"}},[t._v("slice")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#concat"}},[t._v("concat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#splice"}},[t._v("splice")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#unshift"}},[t._v("unshift")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#indexOf"}},[t._v("indexOf")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/array.html#lastIndexOf"}},[t._v("lastIndexOf")])])]),t._v(" "),a("h3",{attrs:{id:"判断数据类型过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型过滤器"}},[t._v("#")]),t._v(" 判断数据类型过滤器")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isNumber")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isString")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isObject")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isBoolean")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isFunction")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isDate")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isArray")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/filter/is.html"}},[t._v("isRegExp")])])]),t._v(" "),a("h3",{attrs:{id:"业务型过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务型过滤器"}},[t._v("#")]),t._v(" 业务型过滤器")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/filter/classnames.html"}},[t._v("设置class")])])]),t._v(" "),a("h2",{attrs:{id:"未来计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未来计划"}},[t._v("#")]),t._v(" 未来计划")]),t._v(" "),a("p",[t._v("微信小程序从 "),a("code",[t._v("2.4.4")]),t._v(" 开始支持WXS响应事件以提升频繁用户交互在小程序上的体验，但目前版本覆盖率比较低，具有兼容性问题。随着小程序"),a("code",[t._v("2.4.4")]),t._v(" 以上版本使用率提升，我们会封装一些常用的WXS响应事件。")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);r.default=e.exports}}]);