(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{558:function(t,e,a){"use strict";a.r(e);var l=a(25),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"骨架屏-skeleton"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏-skeleton"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 骨架屏 Skeleton")],1),t._v(" "),a("blockquote",[a("p",[t._v("在需要等待加载内容的位置提供一个占位图形组合。")])]),t._v(" "),a("p",[t._v("骨架屏由标题、段落、头像三部分组成，分别由 "),a("code",[t._v("title")]),t._v(" 、 "),a("code",[t._v("paragraph")]),t._v(" 、 "),a("code",[t._v("avatar")]),t._v(" 属性控制该部分的显隐；标题和段落默认显示，头像默认不显示。")]),t._v(" "),a("p",[t._v("该组件主要适用于以下几种场景：")]),t._v(" "),a("ol",[a("li",[t._v("网络较慢，需要长时间等待加载处理的情况下。")]),t._v(" "),a("li",[t._v("图文信息内容较多的列表/卡片中。")]),t._v(" "),a("li",[t._v("只在第一次加载数据的时候使用。")]),t._v(" "),a("li",[t._v("可以被 Loading 组件完全代替，但是在可用的场景下可以比 Loading 组件提供更好的视觉效果和用户体验。")])]),t._v(" "),a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("p",[t._v("加载完成后展示的内容需放在插槽中，通过设置 "),a("code",[t._v("loading")]),t._v(" 属性为 "),a("code",[t._v("true")]),t._v(" 时，显示骨架屏占位图；反之则直接展示插槽内容。默认值为 "),a("code",[t._v("true")]),t._v(" 。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/skeleton/1.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-skeleton \n  loading="{{true}}"\n  rows="3"\n>\n  \x3c!-- 插槽内容 --\x3e\n  <view/>\n</l-skeleton>\n')])])]),a("h2",{attrs:{id:"设置段落占位图的行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置段落占位图的行数"}},[t._v("#")]),t._v(" 设置段落占位图的行数")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("rows")]),t._v(" 属性设置段落占位图的行数。默认值为 "),a("code",[t._v("0")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-skeleton \n  loading="{{true}}"\n  rows="3"\n>\n  \x3c!-- 插槽内容 --\x3e\n  <view/>\n</l-skeleton>\n')])])]),a("h2",{attrs:{id:"设置段落及标题占位图宽度及高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置段落及标题占位图宽度及高度"}},[t._v("#")]),t._v(" 设置段落及标题占位图宽度及高度")]),t._v(" "),a("p",[t._v("通过设置 "),a("code",[t._v("title-width")]),t._v(" 属性修改标题占位图的宽度。默认值为父容器宽度的 "),a("code",[t._v("50%")]),t._v("。")]),t._v(" "),a("p",[t._v("通过设置 "),a("code",[t._v("rows-width")]),t._v(" 属性修改段落占位图的宽度。段落占位图最后一行宽度默认值为父容器的 "),a("code",[t._v("70%")]),t._v(" ，其余行默认宽度为 "),a("code",[t._v("100%")]),t._v(" 。")]),t._v(" "),a("p",[t._v("通过设置 "),a("code",[t._v("rows-height")]),t._v(" 属性修改段落占位图的宽度。段落占位图每一行高度默认为 "),a("code",[t._v("34rpx")]),t._v(" 。")]),t._v(" "),a("p",[a("code",[t._v("rows-width")]),t._v(" 和 "),a("code",[t._v("rows-height")]),t._v(" 属性可接收数组和字符串。若为数组时则为对应的每行宽度和高度，反之则是最后一行的宽度和高度。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/skeleton/2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-skeleton \n  loading="{{true}}"\n  rows="3"\n  title-width="240rpx"\n  rows-width="{{[\'240rpx\',\'240rpx\',\'120rpx\']}}"\n  rows-height="100rpx"\n>\n  \x3c!-- 插槽内容 --\x3e\n  <view/>\n</l-skeleton>\n')])])]),a("h2",{attrs:{id:"设置头像占位图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置头像占位图"}},[t._v("#")]),t._v(" 设置头像占位图")]),t._v(" "),a("p",[t._v("通过设置 "),a("code",[t._v("avatar")]),t._v(" 属性可显示头像展示图。默认值为 "),a("code",[t._v("false")]),t._v(" 。")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("avatar-shape")]),t._v(" 和 "),a("code",[t._v("avatar-size")]),t._v(" 属性可设置头像占位图的形状和大小。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/skeleton/3.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-skeleton \n  loading="{{true}}"\n  avatar="{{true}}"\n  avatar-size="32rpx"\n  avatar-shape="circle"\n  rows="3"\n>\n  \x3c!-- 插槽内容 --\x3e\n  <view/>\n</l-skeleton>\n')])])]),a("h2",{attrs:{id:"展示动画效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示动画效果"}},[t._v("#")]),t._v(" 展示动画效果")]),t._v(" "),a("p",[t._v("通过设置 "),a("code",[t._v("active")]),t._v(" 属性为 "),a("code",[t._v("false")]),t._v(" 可关闭占位图动画效果，默认值为 "),a("code",[t._v("true")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-skeleton \n  loading="{{true}}"\n  paragraph="{{true}}"\n  title="{{true}}"\n  avatar="{{true}}"\n  avatar-size="32rpx"\n  avatar-shape="circle"\n  rows="3"\n  active="{{false}}"\n>\n  \x3c!-- 插槽内容 --\x3e\n  <view/>\n</l-skeleton>\n')])])]),a("h2",{attrs:{id:"骨架屏属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏属性"}},[t._v("#")]),t._v(" 骨架屏属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("为 "),a("code",[t._v("true")]),t._v(" 时，显示占位图。反之则直接展示子组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("active")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示动画效果")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("paragraph")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示段落占位图")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置段落占位图的行数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rows-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置段落占位图的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String/Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rows-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置段落占位图的高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String/Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("34rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示标题占位图")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置标题占位图的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("50%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatar")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示头像占位图")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatar-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置头像占位图大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("32rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatar-shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置头像占位图形状")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("circle/square")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("circle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])])])]),t._v(" "),a("h2",{attrs:{id:"骨架屏外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏外部样式类"}},[t._v("#")]),t._v(" 骨架屏外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖骨架屏整体的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖标题部分的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-row-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖段落内每一行的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-avatar-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖头像部分的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);