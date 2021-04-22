(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{469:function(t,e,a){"use strict";a.r(e);var l=a(45),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"评分-rate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评分-rate"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 评分 Rate")],1),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("评分组件默认元素个数为5个，元素大小为："),a("code",[t._v("36rpx")]),t._v(";")]),t._v(" "),a("p",[t._v("支持图片和图标两种资源格式，默认为图标资源")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image1.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<l-rate/>\n")])])]),a("h2",{attrs:{id:"设置默认选中数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置默认选中数"}},[t._v("#")]),t._v(" 设置默认选中数")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("score")]),t._v("属性设置默认选中数，支持小数点")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image2.png",alt:"height=50"}}),t._v(" "),a("img",{attrs:{src:"/screenshots/rate/image3.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate score="3" />\n    <l-rate score="3.6" size="56" />\n    <l-rate score="3.3" size="56" />\n    <l-rate score="3.8" size="56" />\n')])])]),a("h2",{attrs:{id:"自定义组件样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件样式"}},[t._v("#")]),t._v(" 自定义组件样式")]),t._v(" "),a("h3",{attrs:{id:"自定义大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义大小"}},[t._v("#")]),t._v(" 自定义大小")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("size")]),t._v(" 属性设置组件元素的大小，传入数值单位为："),a("code",[t._v("rpx")])]),t._v(" "),a("h4",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image4.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate size="56" />\n')])])]),a("h3",{attrs:{id:"自定义颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义颜色"}},[t._v("#")]),t._v(" 自定义颜色")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("active-color")]),t._v(" 属性设置选中时元素颜色；\n通过 "),a("code",[t._v("inActive-color")]),t._v(" 属性设置未选中时元素颜色；")]),t._v(" "),a("h4",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image5.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate active-color="#FFDD55" inActive-color="#FFF5CE" />\n')])])]),a("h3",{attrs:{id:"自定义图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义图标"}},[t._v("#")]),t._v(" 自定义图标")]),t._v(" "),a("p",[t._v("自定义图标分两种情况：")]),t._v(" "),a("p",[t._v("1 使用 "),a("code",[t._v("Loreal UI")]),t._v(" 提供的 "),a("code",[t._v("icon")]),t._v(" 组件内的图标;")]),t._v(" "),a("p",[t._v("2 使用自定义图标库扩展的图标；")]),t._v(" "),a("p",[t._v("第一种通过 "),a("code",[t._v("name")]),t._v("属性匹配对应的icon即可；\n第二种场景使用步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("将自定义图标库写入"),a("code",[t._v("wxss")]),t._v("中，通过"),a("code",[t._v("@font-face")]),t._v("定义字体， "),a("code",[t._v("font-family")]),t._v("必须为："),a("code",[t._v("iconfont")])]),t._v(" "),a("li",[t._v("设置带有"),a("code",[t._v("content")]),t._v("属性 "),a("code",[t._v("class")]),t._v(" 为 "),a("code",[t._v("l-icon-name")]),t._v("格式，"),a("code",[t._v("name")]),t._v("值与在"),a("code",[t._v("rate")]),t._v("组件上设置的"),a("code",[t._v("name")]),t._v("属性值保持一致；")])]),t._v(" "),a("h4",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image6.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@font-face {font-family: \"iconfont\";\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATAAAsAAAAACSAAAARyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqFRIRVATYCJAMUCwwABCAFhG0HTBvdB1GULk6Y7OMwbvhKKLGYXKG1QTHZ/P9E8Px+3+ZceSuuUZt43LRpowONRIgkiAlKstDEQ/vD/7Z8yCXWZXAZsTWDB8cV9qJ0a71Fhbj4iyxdRfz92KzodRpRH97oxT7m2iBxhEjSkAhJZeLNQmFteSs9boGdQx1M0OMEOs2KhpyVVjcDO4W0KRCvWIYAdj6zkkIK7bom5mQR70HVnt4KzgHemX8fvySGHUnNpJ3XDyUUyP+W87wQ1f7XutUxANXnxO0cGduAQryIdd9B7fQ2VOen2MoBoF12JurK5j0v/N9iXIF0LOp2/odHSLJCNCR1NxGPVGXOkMon+JbHJ/GtgE/mW6F0p6grre9EP+ATADELxGV1ne0rKIM2SOocdsSw7nEvDw+B7RvJxgNe6AJdFGMyREAjECzeN4oSSFEaiUQGYYjOJOwyGAGhN+eadW3MQYvhuvRTtdeyqX3XWi8bmhiTRWe+YtZfC6cuacns+Xq31oU69zwSQ4WGJa5g/uIBIj2vM7mLFxi1mwdJdlzxQ5dFtSHrLGXC49cDQIvRU7D8kkaHJK1R2GcwIbl1IRJLD4Ri6/d5AK0LoY+kD5gtlirL9RZXdzPYcvr69XYDmwfrr5HzegT8F5vNmWeu1Ye3ehWRvBkiQ+tbeV2Ue/LQvL5LraKL/lRpUEJSQkkQ5X9R1OqWlF4afLHvYnEwYMHRrdaP0kSJkyRRCprTU6iwqfXNdxW2lmaGDJdRamojSNksuqVlKhl2Uvtm4x87cM6vshnJfKVf87e709xyccO/jUVLfJYYjUu9lyaBdi4zJVP0SPJR7JDH/18OS4N8Ax+4PAj0DVq+2Go1jx3AnLvksVhN9ZyDa6qrvWK7ZUHCAxhfHwTAB0mSxEp9rwOaUUsk2SL60MFDtChbPB20MN+kwlI+WC4dWUAOro7kPQvyHR1BaArdxOACUjoy9hZ8YWnS3ctx9bHxFcJ+3k3vC0tkxXsWstBfpBk3xtlhSd/etuRtud+XQWAGtpc3JqclnwUjALQO5z40j9Mn8kG0hPBs9ks+nt2umlXuFn79GyLN/mon3GMDXzdaNnCodbiAcujQo9zoGkE5u8pXJllqeberkre3utrCGxI6deLayDPoXj3akdxJQrsP3SBpMwNZu2VsIW5D1WUHGu0OodOWsvNdhiigonRg02SA0G87JL0+QtbvPLYQ70I16i00+gOFTjfhfMsuq8FiRQpIqCCFDxuJsyTXSys2FWbVNkJG3U0ovDKT0goVSjaGJ8TGB3NlsBcq6tij1DCJKhWN0wquBy+Fp8Hubg6XKbhOSKpiO1QqWWZcHB33RbEk1wMwpxQgggpEwQ0zEo5F4vSi9f4qWOj3G0EMtW4ERUrHj2ArSEGJnR6XIFZ8DmyZujdXx77MV9JgJFJRoXkdTYHTA1eKTqhbTnNwsvhlnSCSSqyOEkmZTHHUi86rjm1f27ONJ6CT9NYaKXKUqNFoXndw6pHQZiTBydhe25FcL+O02oxgO9RELwAAAA==') format('woff2'),\n  url('iconfont.woff?t=1551939237196') format('woff'),\n  url('iconfont.ttf?t=1551939237196') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('iconfont.svg?t=1551939237196#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.l-icon-shouye:before {\n  content: \"\\e73d\";\n}\n\n")])])]),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate score="4" name="like" />\n    <l-rate score="4" name="shouye" active-color="#F4516C"  \n            inActive-color="rgba(244,81,108,0.1)" />\n    \n')])])]),a("h3",{attrs:{id:"自定义图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片"}},[t._v("#")]),t._v(" 自定义图片")]),t._v(" "),a("p",[t._v("使用自定义图片必须同时设置"),a("strong",[t._v("选中时图片资源")]),t._v("和"),a("strong",[t._v("未选中是的图片资源")]),t._v("，图片资源必须是绝对路径。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("active-image")]),t._v("设置选中时图片资源;")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("inActive-image")]),t._v("设置选中时图片资源;")]),t._v(" "),a("p",[t._v("默认图片宽高为"),a("code",[t._v("80rpx")]),t._v(",可通过外部样式类 "),a("code",[t._v("l-image-class")]),t._v("自定义样式。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image7.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate score="4" \n        active-image="/pages/components/form/images/smile-active.png"\n        inActive-image="/pages/components/form/images/smile-inactive.png" />\n   \n')])])]),a("h2",{attrs:{id:"设置评分元素个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置评分元素个数"}},[t._v("#")]),t._v(" 设置评分元素个数")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("count")]),t._v(" 属性设置评分组件内元素个数，默认是5个。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/rate/image8.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    <l-rate score="3" count="10" bind:linChange="changeScore" />\n')])])]),a("h2",{attrs:{id:"禁用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用"}},[t._v("#")]),t._v(" 禁用")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("disabled")]),t._v("属性值为"),a("code",[t._v("true")]),t._v("禁用评分组件，此时点击事件没有任何反应。")]),t._v(" "),a("h2",{attrs:{id:"评分组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评分组件属性"}},[t._v("#")]),t._v(" 评分组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("评分组件元素个数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("score")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认选中元素个数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标元素大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("36")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("active-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标元素选中时颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("#FF5252")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inActive-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标元素未选中时颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("#FFE5E5")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标元素类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("active-image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("未选中状态下的图片资源")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径为绝对路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inActive-image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("未选中状态下的图片资源")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径为绝对路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁用评分组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("、"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("item-gap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星星（元素）间距，单位 rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")])])])]),t._v(" "),a("h2",{attrs:{id:"评分外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评分外部样式类"}},[t._v("#")]),t._v(" 评分外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖评分组件的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图片样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-image")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图标样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取代l-class-icon")])])])]),t._v(" "),a("h2",{attrs:{id:"已经弃用的外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),a("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图片样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-image-class替代")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图标样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-icon-class替代")])])])]),t._v(" "),a("h2",{attrs:{id:"评分组件事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评分组件事件"}},[t._v("#")]),t._v(" 评分组件事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单击选中评分时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前选择的个数 score")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);