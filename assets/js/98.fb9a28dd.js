(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{524:function(t,a,e){"use strict";e.r(a);var l=e(25),i=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"单项选择器-radio-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单项选择器-radio-group"}},[t._v("#")]),t._v(" "),e("H2Icon"),t._v(" 单项选择器 Radio-Group")],1),t._v(" "),e("blockquote",[e("p",[t._v("单选组：l-radio-group。作为多个单选项目的父容器，用过来控制单选逻辑，内部由多个"),e("code",[t._v("l-radio")]),t._v("组件组成。")])]),t._v(" "),e("h1",{attrs:{id:"单选项目-radio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单选项目-radio"}},[t._v("#")]),t._v(" "),e("H2Icon"),t._v(" 单选项目 Radio")],1),t._v(" "),e("blockquote",[e("p",[t._v("单选项目，l-radio。必须与"),e("code",[t._v("Radio-Group")]),t._v("搭配使用。")])]),t._v(" "),e("h2",{attrs:{id:"基本常识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本常识"}},[t._v("#")]),t._v(" 基本常识")]),t._v(" "),e("p",[t._v("l-radio必须与l-radio-group搭配使用，且每个l-radio必须指定一个"),e("code",[t._v("key")]),t._v("作为单选项目的"),e("code",[t._v("唯一标识")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"基础案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础案例"}},[t._v("#")]),t._v(" 基础案例")]),t._v(" "),e("p",[t._v("单选组内部由多个"),e("code",[t._v("l-radio")]),t._v("组成，注意设置key。如果你的数据是动态，也可以使用wx:for进行列表渲染，通常key应该设置为\n真实数据的id号，或者是数组的序号index。")]),t._v(" "),e("h3",{attrs:{id:"示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio-group>\n    <l-radio key="1">\b七秀</l-radio>\n    <l-radio key="2">\b五毒</l-radio>\n    <l-radio key="3">长歌</l-radio>\n</l-radio-group>\n')])])]),e("h2",{attrs:{id:"两种模式与选中项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两种模式与选中项"}},[t._v("#")]),t._v(" 两种模式与选中项")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("单选组件支持两种模式：")]),t._v(" "),e("ol",[e("li",[t._v("可以全部不选中")]),t._v(" "),e("li",[t._v("至少选中1项")])]),t._v(" "),e("p",[t._v("模式1 是默认模式。模式1支持"),e("code",[t._v("反选")]),t._v("，当一个radio被选中时，再次点击将取消选中，但模式2不可以。\n将l-radio-group上设置"),e("code",[t._v("none-checked")]),t._v("属性设置为false可以切换到模式2。\n对于模式2，为保证初始化时至少有一项被选中，l-radio-group必须设置current属性，current属性可以设置为任何一个l-radio的key。\n这样，在初始化时，组件将对应的key的l-radio设置为选中状态。\n注意，模式1同样可以设置current，但这不是必须的。")])]),t._v(" "),e("h3",{attrs:{id:"示例代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio-group current="2" none-checked="{{false}}">\n    <l-radio key="1">\b七秀</l-radio>\n    <l-radio key="2">\b五毒</l-radio>\n    <l-radio key="3">长歌</l-radio>\n</l-radio-group>\n')])])]),e("h2",{attrs:{id:"设置radio-group布局方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置radio-group布局方式"}},[t._v("#")]),t._v(" 设置radio-group布局方式")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("placement")]),t._v("属性设置radio-group布局方式。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio-group placement="column">\n    <l-radio key="1">\b七秀</l-radio>\n</l-radio-group>\n')])])]),e("h2",{attrs:{id:"设置radio布局方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置radio布局方式"}},[t._v("#")]),t._v(" 设置radio布局方式")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("placement")]),t._v("属性设置radio布局方式。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio-group>\n    <l-radio key="1" placement="right">\b七秀</l-radio>\n</l-radio-group>\n')])])]),e("h2",{attrs:{id:"设置选中项的颜色及大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置选中项的颜色及大小"}},[t._v("#")]),t._v(" 设置选中项的颜色及大小")]),t._v(" "),e("p",[t._v("当我们需要改变"),e("code",[t._v("radio")]),t._v("选中时的颜色时，可以通过"),e("code",[t._v("color")]),t._v("、"),e("code",[t._v("select-color")]),t._v(" 属性来设置。")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("size")]),t._v("属性设置radio图标大小。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio color="red" size="32" select-color="green">\n长歌\n</l-radio>\n')])])]),e("h2",{attrs:{id:"设置禁用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置禁用"}},[t._v("#")]),t._v(" 设置禁用")]),t._v(" "),e("p",[t._v("当我们需要将某一个选项禁用时，设置 "),e("code",[t._v("disabled")]),t._v(" 为 "),e("code",[t._v("true")]),t._v(" 即可。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio disabled="{{true}}">\n七秀\n</l-radio>\n')])])]),e("h2",{attrs:{id:"自定义radio的内容部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义radio的内容部分"}},[t._v("#")]),t._v(" 自定义Radio的内容部分")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("<slot>")]),t._v(" 的方式可以自定义"),e("code",[t._v("Radio")]),t._v("组件的内容部分。")]),t._v(" "),e("p",[t._v("通过设置"),e("code",[t._v("custom")]),t._v("属性自定义左侧图标。")]),t._v(" "),e("h3",{attrs:{id:"示例代码-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-7"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<l-radio custom="{{true}}">\n    <image slot="custom" src="path/to/img.png" class="img"/>\n    <text>七秀</text>\n</l-radio>\n')])])]),e("h2",{attrs:{id:"单选组件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单选组件属性"}},[t._v("#")]),t._v(" 单选组件属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("radio的大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("36")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cell")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可绑定一个Object对象，在linchange事件触发时，将返回这个当前单选项的cell")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("radio未选中时的颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("select-color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("radio选中时的颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更改radio的布局方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("right/left")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("left")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否禁用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),e("h2",{attrs:{id:"单选组件外部样式类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单选组件外部样式类"}},[t._v("#")]),t._v(" 单选组件外部样式类")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置radio的外部样式类")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-disabled-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置radio禁用时的外部样式类")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),e("h2",{attrs:{id:"单项选择器组件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单项选择器组件属性"}},[t._v("#")]),t._v(" 单项选择器组件属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("current")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置当前被选中的radio，其值必须是radio的key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更改radio-group的布局方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("row/column")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("column")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("none-checked")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为true时允许全部单选项都不选中，否则至少选择一项")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),e("h2",{attrs:{id:"单项选择器事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单项选择器事件"}},[t._v("#")]),t._v(" 单项选择器事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("切换radio时触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选中项发生变化时触发 "),e("code",[t._v("linchange")]),t._v(" 事件，event.detail = {checked,key, currentKey,cell}")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("RightMenu")],1)}),[],!1,null,null,null);a.default=i.exports}}]);