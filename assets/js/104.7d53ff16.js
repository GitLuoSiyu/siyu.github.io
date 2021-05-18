(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{533:function(t,e,a){"use strict";a.r(e);var l=a(25),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图片选择器-imagepicker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器-imagepicker"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 图片选择器 ImagePicker")],1),t._v(" "),a("blockquote",[a("p",[t._v("用于选择需要上传的图片，可自定义需要上传的图片数量。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("组件特性")]),t._v(" "),a("ul",[a("li",[t._v("支持"),a("a",{attrs:{href:"#%E5%BC%80%E6%94%BE%E5%87%BD%E6%95%B0"}},[t._v("开放函数")])])])]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-picker/image1.jpg",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"设置最大值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最大值"}},[t._v("#")]),t._v(" 设置最大值")]),t._v(" "),a("p",[t._v("图片选择器内部可以通过"),a("code",[t._v("count")]),t._v("设置最多可以选择的图片张数，默认是9张，没有最大张数的限制，但因根据实际情况合理选择，"),a("code",[t._v("linchange")]),t._v("事件能监听到选中图片数量的变化。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-picker count="9" bind:linchange="onChangeTap" />\n')])])]),a("h2",{attrs:{id:"自定义每行图片的数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义每行图片的数量"}},[t._v("#")]),t._v(" 自定义每行图片的数量")]),t._v(" "),a("p",[t._v("图片选择器内部可以通过"),a("code",[t._v("size")]),t._v("设置每行图片的数量，默认是3张，可选值为 1 - 10。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-picker size="4" bind:linchange="onChangeTap" />\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-picker/image2.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"设置选择图片的质量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置选择图片的质量"}},[t._v("#")]),t._v(" 设置选择图片的质量")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("size-type")]),t._v("可以设置图片来源，可选值是"),a("code",[t._v("original/compressed")]),t._v("，或者二者均填，默认是"),a("code",[t._v("['original', 'compressed']")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("original")]),t._v("表示原图。")]),t._v(" "),a("li",[a("code",[t._v("compressed")]),t._v("表示缩略图。")])])]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-picker count="9" size-type="compressed" />\n')])])]),a("h2",{attrs:{id:"自定义图片添加按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片添加按钮"}},[t._v("#")]),t._v(" 自定义图片添加按钮")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("<slot>")]),t._v(" 的方式可以自定义"),a("code",[t._v("ImagePicker")]),t._v("组件的添加图片部分。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-picker custom="{{true}}" >\n  <view>\n    <image src="path/to/img.png" />\n  </view>\n</l-image-picker>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-picker/image3.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"图片选择器属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器属性"}},[t._v("#")]),t._v(" 图片选择器属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("urls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始图片链接，仅支持字符串数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cells")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始图片链接，对象数组格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最多可以选择的图片张数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("每行可显示的个数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片剪裁、缩放的模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("参考官方image组件的mode属性可选值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("aspectFit")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所选的图片的尺寸")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("original/compressed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("original")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("preview")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否可以预览")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击删除按钮是否删除图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-image-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片最大限制，单位字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10000000")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("urls 和 cells 两个属性中仅需选择其一传入即可，两者区别如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("若你的链接为如下"),a("strong",[t._v("字符串数组")]),t._v("格式，请使用 "),a("code",[t._v("urls")]),t._v(" 属性")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo1.png',")]),t._v("\n    'https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo2.png'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("若你的链接为如下"),a("strong",[t._v("对象数组")]),t._v("格式，请使用 "),a("code",[t._v("cells")]),t._v(" 属性")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url 属性名称不可改变，其余部分可随意")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo1.png',")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'桔子'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo2.png',")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'juzi'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'男'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])])]),t._v(" "),a("h2",{attrs:{id:"图片选择器外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器外部样式类"}},[t._v("#")]),t._v(" 图片选择器外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置ImagePicker的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-item-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置ImagePicker每个图片的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"图片选择器事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器事件"}},[t._v("#")]),t._v(" 图片选择器事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新增图片时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中项发生变化时触发 "),a("code",[t._v("linchange")]),t._v(" 事件，event.detail = {current: [ 新增项的url信息 ], all: [ 当前urls值 ]}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式为字符串数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linremove")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移除图片时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片移除时触发 "),a("code",[t._v("linremove")]),t._v(" 事件，event.detail = {current: 移除项的url信息, all: [ 当前urls值 ], index: 移除项的下标}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式为字符串数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linpreview")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片被点击时（预览）触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片预览触发 "),a("code",[t._v("linpreview")]),t._v(" 事件，event.detail = {current:[ 当前点击项的url信息 ], all: [ 当前urls值 ], index: 点击项的下标}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式为字符串数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclear")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("清除图片全部时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片移除时触发 "),a("code",[t._v("linclear")]),t._v(" 事件，event.detail = {current: [ 移除项的url信息 ], all: [ 删除前urls值 ]}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式为字符串数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linoversize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新增图片大小超过max-image-size设置的值时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = {all:[当前urls值],oversize:[超过max-image-size限制的图片值],current:[当前值]}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linremovetap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击删除按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("RightMenu"),t._v(" "),a("h2",{attrs:{id:"开放函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放函数"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://doc.mini.talelin.com/start/open-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放函数"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("函数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("linRemoveImage(imageIndex)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除某个图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("optinos 为 Object 类型，属性为 Toast 支持的所有属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("linClearImage()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("清空所有图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不会触发 linremove 事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("linGetValue()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取所有 url 图片链接")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("url 格式为 Array"),a("String")],1)])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);