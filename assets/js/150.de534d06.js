(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{599:function(t,e,a){"use strict";a.r(e);var l=a(25),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"页底提示-loadmore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页底提示-loadmore"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 页底提示 Loadmore")],1),t._v(" "),a("blockquote",[a("p",[t._v("用于页底的加载提示。")])]),t._v(" "),a("p",[t._v("Loadmore组件支持以下两种用法：")]),t._v(" "),a("ol",[a("li",[t._v("Loadmore作为页面的一部分元素直接插入页面中使用。")]),t._v(" "),a("li",[t._v("Loadmore作为一个布局组件，可将页面的内容通过插槽的形式传入组件内部，此时loadmore组件的内容可自动定位\n在页面的最下方显示，该用法需设置"),a("code",[t._v('slot="content"')]),t._v("(以下示例代码使用的是第二种用法)。")])]),t._v(" "),a("blockquote",[a("p",[t._v("该组件支持"),a("a",{attrs:{href:"/start/wx.html"}},[t._v("wx.lin")]),t._v("用法。")])]),t._v(" "),a("h2",{attrs:{id:"显示与隐藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示与隐藏"}},[t._v("#")]),t._v(" 显示与隐藏")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("show")]),t._v("属性设置页底提示的显示与隐藏。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loadmore show="{{true}}">\n  <view slot="content">\n      此处是页面内容\n  </view>\n</l-loadmore>\n')])])]),a("h2",{attrs:{id:"提示类型及提示文案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示类型及提示文案"}},[t._v("#")]),t._v(" 提示类型及提示文案")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("type")]),t._v("属性设置页底提示类型。默认值为"),a("code",[t._v("loading")]),t._v("（加载中）。")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("loading-text")]),t._v("属性可覆盖"),a("code",[t._v("loading")]),t._v("状态下的默认文本。")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("end-text")]),t._v("属性覆盖"),a("code",[t._v("end")]),t._v("状态下的默认文本。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/load-more/1.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/load-more/2.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loadmore show="{{true}}" type="loading" loading-text="努力加载中~">\n  <view slot="content">\n      此处是页面内容\n  </view>\n</l-loadmore>\n')])])]),a("h2",{attrs:{id:"是否显示分割线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否显示分割线"}},[t._v("#")]),t._v(" 是否显示分割线")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("line")]),t._v("属性设置是否显示分割线。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/load-more/3.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loadmore show="{{true}}" type="loading" line="{{true}}">\n  <view slot="content">\n      此处是页面内容\n  </view>\n</l-loadmore>\n')])])]),a("h2",{attrs:{id:"自定义提示文字颜色及字体大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义提示文字颜色及字体大小"}},[t._v("#")]),t._v(" 自定义提示文字颜色及字体大小")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("color")]),t._v("属性设置文字和分割线颜色。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("size")]),t._v("属性设置提示文字的字体大小。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loadmore show="{{true}}" \n          type="loading"\n          size="28" \n          line="{{true}}" \n          color="#333">\n  <view slot="content">\n      此处是页面内容\n  </view>\n</l-loadmore>\n')])])]),a("h2",{attrs:{id:"自定义页底加载类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义页底加载类型"}},[t._v("#")]),t._v(" 自定义页底加载类型")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("custom")]),t._v("属性自定义页底提示，自定义内容通过设置"),a("code",[t._v('slot="custom"')]),t._v("传入。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-loadmore show="{{true}}" custom="{{true}}">\n  <view slot="content">\n    此处是页面内容\n  </view>\n  <view slot="custom">\n  </view>\n</l-loadmore>\n')])])]),a("h2",{attrs:{id:"页底提示属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页底提示属性"}},[t._v("#")]),t._v(" 页底提示属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示页底提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("页底提示类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("end/loading")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("loading")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loading-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载中状态的文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载完成状态的文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("line")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示分割线")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义页底加载提示文字字体大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("28")]),t._v("  单位为"),a("code",[t._v("rpx")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义页底加载提示文字和分割线颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否自定义页底加载")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("fasle")])])])]),t._v(" "),a("h2",{attrs:{id:"页底提示事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页底提示事件"}},[t._v("#")]),t._v(" 页底提示事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击页底提示区域触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),a("h2",{attrs:{id:"页底提示外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页底提示外部样式类"}},[t._v("#")]),t._v(" 页底提示外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖loadmore组件整体的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-loading-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖loading状态的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-end-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖end状态的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-line-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖分割线的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"页底提示插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页底提示插槽"}},[t._v("#")]),t._v(" 页底提示插槽")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("插槽名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义展示内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("适用于第二种用法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义加载时提示的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义加载完成提示的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);