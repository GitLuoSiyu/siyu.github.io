(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{586:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"操作菜单-actionsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单-actionsheet"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 操作菜单 ActionSheet")],1),t._v(" "),a("blockquote",[a("p",[t._v("同微信ActionSheet")])]),t._v(" "),a("p",[a("code",[t._v("ActionSheet")]),t._v("组件有两种用法:")]),t._v(" "),a("p",[t._v("1 "),a("code",[t._v("wx.lin.showActionSheet(object)")]),t._v("，接近于微信原生API "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.showActionShee"),a("OutboundLink")],1),t._v("的调用方式.")]),t._v(" "),a("p",[t._v("2 常规组件的使用方式，通过更改传入的属性值来控制"),a("code",[t._v("ActionSheet")]),t._v("的显示和隐藏。")]),t._v(" "),a("p",[t._v("默认调用方式为"),a("code",[t._v("wx.lin.showActionSheet")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("在使用"),a("code",[t._v("wx.lin.showActionSheet")]),t._v("的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入"),a("code",[t._v("action-sheet")]),t._v("组件。")]),t._v(" "),a("p",[a("code",[t._v("wx.lin.showActionSheet")]),t._v("接受的参数是个对象，里面包含了所有与操作菜单相关的属性。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("必须传入"),a("code",[t._v("itemList")]),t._v(",且长度不能为0。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- wxml --\x3e\n<l-button l-class="button" size="large" bind:lintap="showActionSheet">操作</l-button>\n\n<l-action-sheet/>\n')])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showActionSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showActionSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\titemList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日不再出现此类内容'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'屏蔽'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"操作菜单子菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单子菜单"}},[t._v("#")]),t._v(" 操作菜单子菜单")]),t._v(" "),a("p",[t._v("操作菜单的子菜单通过"),a("code",[t._v("itemList")]),t._v("设置，接收的是一个数组，数组长度不能超过 10，当长度超过10时，只显示前10个内容。")]),t._v(" "),a("p",[t._v("同时，数组的每个item是个对象，可传入的属性有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("name")]),t._v("：子菜单显示的内容，必填;")]),t._v(" "),a("li",[a("code",[t._v("icon")]),t._v("：子菜单显示的图标;")]),t._v(" "),a("li",[a("code",[t._v("image")]),t._v("：子菜单上的图片，显示在文字左侧。如果"),a("code",[t._v("icon")]),t._v("和"),a("code",[t._v("image")]),t._v("同时使用，则"),a("code",[t._v("image")]),t._v("的优先级高于"),a("code",[t._v("icon")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("imageStyle")]),t._v("：子菜单的样式；")]),t._v(" "),a("li",[a("code",[t._v("color")]),t._v("：子菜单的文字颜色;")]),t._v(" "),a("li",[a("code",[t._v("openType")]),t._v("：子菜单的微信开放能力，参看"),a("a",{attrs:{href:"http://doc.mini.talelin.com/component/basic/",target:"_blank",rel:"noopener noreferrer"}},[t._v("button"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\nitemList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'保存海报分享'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/images/response/picture.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      imageStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width:40rpx;height:40rpx;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#3683D6'")]),t._v("    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'转发给好友'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'share'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#F4516C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      openType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'share'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"设置标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置标题"}},[t._v("#")]),t._v(" 设置标题")]),t._v(" "),a("p",[t._v("通过在"),a("code",[t._v("wx.lin.showActionSheet")]),t._v("中传入"),a("code",[t._v("title")]),t._v("设置标题。")]),t._v(" "),a("h2",{attrs:{id:"点击菜单子项和取消之后的回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击菜单子项和取消之后的回调函数"}},[t._v("#")]),t._v(" 点击菜单子项和取消之后的回调函数")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("wx.lin.showActionSheet")]),t._v("中传入"),a("code",[t._v("success")]),t._v("和"),a("code",[t._v("fail")]),t._v("函数时，当点击操作菜单时，可触发传入的"),a("code",[t._v("success")]),t._v("函数，返回值包括所点击子菜单的位置索引和菜单的值；当点击背景蒙层或取消按钮时，触发"),a("code",[t._v("fail")]),t._v("函数。")]),t._v(" "),a("h2",{attrs:{id:"关闭操作菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭操作菜单"}},[t._v("#")]),t._v(" 关闭操作菜单")]),t._v(" "),a("p",[a("code",[t._v("locked")]),t._v("默认"),a("code",[t._v("false")]),t._v("，点击背景蒙层可以关闭操作菜单，"),a("code",[t._v("locked")]),t._v("设置为"),a("code",[t._v("true")]),t._v("，点击背景蒙层不会关闭操作菜单的功能。")]),t._v(" "),a("p",[t._v("通过在"),a("code",[t._v("wx.lin.showActionSheet")]),t._v("中传入"),a("code",[t._v("locked:Boolean")]),t._v("。")]),t._v(" "),a("p",[t._v("通过改变"),a("code",[t._v("showCancel")]),t._v("的布尔值，设置是否显示取消按钮，默认不显示（"),a("code",[t._v("false")]),t._v("）；\n"),a("code",[t._v("cancelText")]),t._v("设置取消按钮的文字内容，默认为"),a("code",[t._v("取消")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部样式类"}},[t._v("#")]),t._v(" 外部样式类")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("l-title-class")]),t._v(" 用于修改操作菜单的标题的样式")]),t._v(" "),a("li",[a("code",[t._v("l-item-class")]),t._v(" 修改操作菜单子菜单的样式")]),t._v(" "),a("li",[a("code",[t._v("l-cancel-class")]),t._v(" 修改操作菜单取消区域的样式")])]),t._v(" "),a("h2",{attrs:{id:"第二种用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种用法"}},[t._v("#")]),t._v(" 第二种用法")]),t._v(" "),a("p",[t._v("通过设置"),a("code",[t._v("open-api="+t._s(!1))]),t._v("属性可关闭API调用，切换到组件使用模式。")]),t._v(" "),a("p",[t._v("设置组件"),a("code",[t._v("show")]),t._v("属性为"),a("code",[t._v("true")]),t._v("或"),a("code",[t._v("false")]),t._v("，可以控制"),a("code",[t._v("action-sheet")]),t._v("的显示和隐藏。")]),t._v(" "),a("p",[t._v("此外，可以给组件绑定点击操作菜单子菜单的点击事件(linitemtap)以及点击取消按钮和背景蒙层是的点击事件(lincancel)。")]),t._v(" "),a("blockquote",[a("p",[t._v("bind:linitemtap 的返回值在 e.detail 中，success 时返回值通过参数的形式返回。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- wxml --\x3e\n<l-button l-class="button" size="large" bind:lintap="toggleActionSheet">\n    操作\n</l-button>\n\n<l-action-sheet open-api="{{false}}" show-cancel item-list="{{itemList}}" show="{{false}}"   \n  bind:linitemtap="linItemtap" bind:lincancel="lincancel"/>\n\n')])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    itemList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日不再出现此类内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'屏蔽'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggleActionSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lincancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'取消'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lintapItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"操作菜单属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单属性"}},[t._v("#")]),t._v(" 操作菜单属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置操作菜单的显示和隐藏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否取消点击背景关闭操作菜单的功能")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("item-list")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("操作菜单的文字数组，具体参照后面的表格")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("操作菜单的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show-cancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消菜单的文字内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("取消")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("is-hover")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示hover效果")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),a("h2",{attrs:{id:"操作菜单外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单外部样式类"}},[t._v("#")]),t._v(" 操作菜单外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单标题样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-title")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-item-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单除标题和取消区域之外的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-item")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-cancel-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单取消区域的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-cancel")])])])]),t._v(" "),a("h2",{attrs:{id:"已经弃用的外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),a("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单标题样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-title-class替代")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-item")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单除标题和取消区域之外的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-item-class替代")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-cancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖操作菜单取消区域的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-cancel-class替代")])])])]),t._v(" "),a("h2",{attrs:{id:"操作菜单子菜单组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单子菜单组"}},[t._v("#")]),t._v(" 操作菜单子菜单组")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单图标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单图标的大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单图标的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单上的图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("imageStyle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单图片的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("css 行内样式写法")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单文字的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("openType")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单的微信开放能力")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"操作菜单事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单事件"}},[t._v("#")]),t._v(" 操作菜单事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linitemtap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击操作菜单子菜单组时触发,返回子菜单和子菜单所在索引")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("{ index , item}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lincancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击操作菜单取消按钮时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"操作菜单api调用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作菜单api调用参数"}},[t._v("#")]),t._v(" 操作菜单API调用参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("itemList")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子菜单数组")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("操作菜单的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showCancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancelText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文字内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("取消")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击文子菜单后的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("fail")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("背景蒙层是否设定为锁定态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=n.exports}}]);