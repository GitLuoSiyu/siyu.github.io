(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{498:function(t,e,a){"use strict";a.r(e);var s=a(25),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"复选框组件-checkbox-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框组件-checkbox-group"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 复选框组件 Checkbox-Group")],1),t._v(" "),a("blockquote",[a("p",[t._v("单项选择器，与原生组件"),a("code",[t._v("Checkbox-Group")]),t._v("用法类似，内部由多个"),a("code",[t._v("l-checkbox")]),t._v("组件组成。")])]),t._v(" "),a("h1",{attrs:{id:"复选框-checkbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框-checkbox"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 复选框 Checkbox")],1),t._v(" "),a("blockquote",[a("p",[t._v("单选项目，与原生组件"),a("code",[t._v("Checkbox")]),t._v("用法类似,内部传入slot。与"),a("code",[t._v("Checkbox-Group")]),t._v("搭配使用。")])]),t._v(" "),a("h2",{attrs:{id:"基础案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础案例"}},[t._v("#")]),t._v(" 基础案例")]),t._v(" "),a("p",[t._v("单项选择器内部由多个"),a("code",[t._v("l-checkbox")]),t._v("组成，"),a("code",[t._v("linchange")]),t._v("事件能监听到选中项的变化。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox-group bind:linchange="onChangeTap" >\n  <l-checkbox\n    wx:for-items="{{items}}"\n    wx:key="{{item.value}}"\n    key="{{item.value}}"\n    checked="{{item.isChecked}}"\n    disabled="{{item.disabled}}">\n    {{item.value}}\n  </l-checkbox>\n</l-checkbox-group>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'美国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巴西'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'日本'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'英国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'法国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])]),a("h2",{attrs:{id:"单个checkbox布局方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个checkbox布局方式"}},[t._v("#")]),t._v(" 单个Checkbox布局方式")]),t._v(" "),a("p",[t._v("根据具体需求，选择最佳的标签对齐方式（选中图标和内容部分）。")]),t._v(" "),a("p",[a("code",[t._v("placement")]),t._v(" 默认值是 "),a("code",[t._v("left")]),t._v(" ，即Checkbox的选中图标居左显示。值为 "),a("code",[t._v("right")]),t._v(" 时，图标居右显示。")]),t._v(" "),a("h2",{attrs:{id:"多个checkbox布局方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个checkbox布局方式"}},[t._v("#")]),t._v(" 多个Checkbox布局方式")]),t._v(" "),a("p",[t._v("根据具体需求，选择最佳的多个"),a("code",[t._v("Checkbox")]),t._v("组件对齐方式，需要设置"),a("code",[t._v("Checkbox-Group")]),t._v("组件的"),a("code",[t._v("placement")]),t._v("属性。")]),t._v(" "),a("p",[a("code",[t._v("placement")]),t._v(" 默认值是 "),a("code",[t._v("column")]),t._v(" ，可选项为 "),a("code",[t._v("row/column")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox-group bind:linchange="onChangeTap" >\n  <l-checkbox  placement="right"  key="1">中国</l-checkbox>\n  <l-checkbox  placement="right"  key="2">美国</l-checkbox>\n</l-checkbox-group>\n')])])]),a("h2",{attrs:{id:"设置选中项的颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置选中项的颜色"}},[t._v("#")]),t._v(" 设置选中项的颜色")]),t._v(" "),a("p",[t._v("当我们需要改变"),a("code",[t._v("checkbox")]),t._v("选中时的颜色时，可以通过"),a("code",[t._v("color")]),t._v(" 属性来设置")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox key="中国"  color="red" >中国</l-checkbox>\n<l-checkbox key="美国"  selected-color="blue">美国</l-checkbox>\n<l-checkbox key="日本"  disabled-color="#333">日本</l-checkbox>\n\n')])])]),a("h2",{attrs:{id:"设置禁用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置禁用"}},[t._v("#")]),t._v(" 设置禁用")]),t._v(" "),a("p",[t._v("当我们需要将某一个选项禁用时，设置 "),a("code",[t._v("disabled")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 即可。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox key="中国"  disabled="{{true}}" >中国</l-checkbox>\n')])])]),a("h2",{attrs:{id:"更改checkbox的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改checkbox的大小"}},[t._v("#")]),t._v(" 更改Checkbox的大小")]),t._v(" "),a("p",[t._v("通过给checkbox的size属性设值可以改变checkbox的大小")]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox-group bind:linchange="onChangeTap" >\n  <l-checkbox size="42rpx" placement="right"  key="1">中国</l-checkbox>\n  <l-checkbox size="42rpx"  placement="right"  key="2">美国</l-checkbox>\n</l-checkbox-group>\n')])])]),a("h2",{attrs:{id:"自定义checkbox的按钮部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义checkbox的按钮部分"}},[t._v("#")]),t._v(" 自定义checkbox的按钮部分")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("<slot>")]),t._v(" 的方式可以自定义"),a("code",[t._v("Checkbox")]),t._v("组件的按钮部分，在此之前需要将"),a("code",[t._v("custom")]),t._v("设置为"),a("code",[t._v(t._s(!0))])]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox key="中国" custom="{{true}}"  disabled="{{true}}" >\n  <image class="checkbox-img" src="path/to/img.png" slot="icon"/>\n  中国\n</l-checkbox>\n')])])]),a("h2",{attrs:{id:"设置最多、最少选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最多、最少选项"}},[t._v("#")]),t._v(" 设置最多、最少选项")]),t._v(" "),a("p",[t._v("通过 min/max 两个属性来设置复选框 最少/最多 可选个数")]),t._v(" "),a("h3",{attrs:{id:"示例代码-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-7"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-checkbox-group bind:linchange="onChangeTap" min-selected="{{2}}" max-selected="{{4}}">\n  <l-checkbox\n    wx:for-items="{{items}}"\n    wx:key="{{item.value}}"\n    key="{{item.value}}"\n    checked="{{item.isChecked}}"\n    disabled="{{item.disabled}}">\n    {{item.value}}\n  </l-checkbox>\n</l-checkbox-group>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'美国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巴西'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'日本'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'英国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'法国'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isChecked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])]),a("h2",{attrs:{id:"复选框组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框组件属性"}},[t._v("#")]),t._v(" 复选框组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox 按钮的位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left/right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否自定义图标内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox唯一id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可绑定一个Object对象，在linchange事件触发时，将返回这个当前单选项的cell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox的大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--—")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("38rpx")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("select-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox选中时的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("#3963BC")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox禁用时的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("#cccccc")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox未选中时的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("#cccccc")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("checked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前checkbox是否选中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h2",{attrs:{id:"复选框组件外部样式类-checkbox-externalclasses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框组件外部样式类-checkbox-externalclasses"}},[t._v("#")]),t._v(" 复选框组件外部样式类（Checkbox ExternalClasses）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置checkbox的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖复选框图标区域")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-disabled-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置checkbox禁用时的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h2",{attrs:{id:"复选框组组件外部样式类-checkboxgroup-externalclasses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框组组件外部样式类-checkboxgroup-externalclasses"}},[t._v("#")]),t._v(" 复选框组组件外部样式类（CheckboxGroup ExternalClasses）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("checkbox-group的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"复选框容器组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框容器组件属性"}},[t._v("#")]),t._v(" 复选框容器组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更改checkbox的flex布局")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("row/column")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("column")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min-selected")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最少选中个数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-selected")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最多选中个数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"复选框组件事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复选框组件事件"}},[t._v("#")]),t._v(" 复选框组件事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中项发生变化时触发 "),a("code",[t._v("linchange")]),t._v(" 事件，event.detail = {key: 选中项Checkbox的key, cell: checkbox-group传入的cell属性，checked: 按钮切换后的状态}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linout")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当设置了min-selected或者max-selected，选中数量不满足要求时触发 linout 事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = {key:当前点击checkbox的key, limitNumber: 选项个数限制的值, type: 数量溢出的类型，可选值 overflow_max_selected/overflow_min_selected}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=l.exports}}]);