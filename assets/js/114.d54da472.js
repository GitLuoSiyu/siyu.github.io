(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{538:function(t,e,l){"use strict";l.r(e);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("RightMenu"),t._v(" "),l("h1",{attrs:{id:"模态框-dialog"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模态框-dialog"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 模态框 Dialog")],1),t._v(" "),l("blockquote",[l("p",[t._v("保留当前页面，弹出一个对话框，告知用户并承载相关操作。")])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("组件特性")]),t._v(" "),l("ul",[l("li",[t._v("支持"),l("a",{attrs:{href:"#%E5%BC%80%E6%94%BE%E5%87%BD%E6%95%B0"}},[t._v("开放函数")])])])]),t._v(" "),l("h2",{attrs:{id:"模态框类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模态框类型"}},[t._v("#")]),t._v(" 模态框类型")]),t._v(" "),l("p",[t._v("模态框可通过设置"),l("code",[t._v("type")]),t._v("属性为"),l("code",[t._v("alert")]),t._v("或者"),l("code",[t._v("confirm")]),t._v("来控制模态框的类型为 "),l("code",[t._v("提示框")]),t._v(" 和 "),l("code",[t._v("确认框")]),t._v(" ，不设置则显示状态默认为"),l("code",[t._v("alert")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('\x3c!-- 提示框 --\x3e\n<l-dialog \n  show="{{true}}"\n  type="alert"     \n  title="标题"\n  content="这个是提示框" />\n\n\x3c!--确认框 --\x3e\n<l-dialog \n  show="{{true}}"\n  type="confirm"     \n  title="标题"\n  content="这个是确认框" />\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/dialog/1.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"无标题的模态弹框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#无标题的模态弹框"}},[t._v("#")]),t._v(" 无标题的模态弹框")]),t._v(" "),l("p",[t._v("模态框可以通过设置 "),l("code",[t._v("show-title")]),t._v(" 属性为"),l("code",[t._v("true")]),t._v("、"),l("code",[t._v("false")]),t._v("来控制组件标题的显示和隐藏，不设置则显示状态默认为"),l("code",[t._v("true")]),t._v("。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('\x3c!-- 无标题提示框 --\x3e\n<l-dialog \n  show="{{true}}"\n  type="alert"  \n  show-title="{{false}}"\n  title="标题"\n  content="这个是无标题提示框" />\n\n\x3c!-- 无标题确认框 --\x3e\n<l-dialog \n  show="{{true}}"\n  type="confirm"  \n  show-title="{{false}}"\n  title="标题"\n  content="这个是无标题确认框" />\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/dialog/2.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"修改按钮文字和颜色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#修改按钮文字和颜色"}},[t._v("#")]),t._v(" 修改按钮文字和颜色")]),t._v(" "),l("p",[t._v("模态框的按钮支持 "),l("code",[t._v("文本内容")]),t._v(" 和 "),l("code",[t._v("字体颜色")]),t._v(" 的修改， 设置 "),l("code",[t._v("confirm-text")]),t._v(" 和 "),l("code",[t._v("cancel-text")]),t._v(" 可以更改模态框两个按钮的文本， "),l("code",[t._v("confirm-color")]),t._v(" 和 "),l("code",[t._v("cancel-color")]),t._v(" 则可以更改他们的字体颜色。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("提示框只需设置 "),l("code",[t._v("confirm-text")]),t._v("和  "),l("code",[t._v("confirm-color")]),t._v("。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-dialog \n  show="{{true}}"\n  type="confirm"  \n  title="提问"\n  content="PHP是最好的语言吗？"\n  confirm-text="yes"\n  confirm-color="#f60"\n  cancel-text="no~"\n  cancel-color="#999" />\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/dialog/3.jpg",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"设置子节点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设置子节点"}},[t._v("#")]),t._v(" 设置子节点")]),t._v(" "),l("p",[t._v("我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 "),l("code",[t._v("image")]),t._v("、 "),l("code",[t._v("view")]),t._v("、 "),l("code",[t._v("text")]),t._v(" 等子节点，当然，你也可以在其中插入 "),l("code",[t._v("自定义组件")]),t._v(" 。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),l("ul",[l("li",[t._v("不建议在组件中传入多个子节点。")]),t._v(" "),l("li",[t._v("子节点默认是垂直居中显示。")])])]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-dialog \n  show="{{true}}"\n  type="confirm"  \n  show-title="{{false}}"\n  title="标题"\n>\n  <image class=\'dio-img\' src=\'/path/to/example.gif\'></image>\n</l-dialog>\n\n')])])]),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/dialog/4.jpg",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),l("h2",{attrs:{id:"锁定"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#锁定"}},[t._v("#")]),t._v(" 锁定")]),t._v(" "),l("p",[t._v("模态框设置 "),l("code",[t._v("locked")]),t._v(" 属性为 "),l("code",[t._v("false")]),t._v(" 时，点击背景可隐藏模态框组件，默认为 "),l("code",[t._v("true")]),t._v(" ， 即点击背景无法关闭该组件。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-5"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('<l-dialog \n  show="{{true}}"\n  type="alert"  \n  show-title="{{false}}"\n  locked="{{locked}}"\n  title="标题"\n  content="这个是提示框" \n>\n  </l-dialog>\n')])])]),l("h2",{attrs:{id:"模态框参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模态框参数"}},[t._v("#")]),t._v(" 模态框参数")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("控制模态框的显示")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("alert/confirm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("alert")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提示")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置标题的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#45526b;")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置背景是否为锁定态")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示模态框的标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("confirm-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮的文本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("确定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("confirm-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#3683d6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取消")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#45526b")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("is-hover")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示hover效果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),l("h2",{attrs:{id:"模态框外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模态框外部样式类"}},[t._v("#")]),t._v(" 模态框外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog头部的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-content-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog内容的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-cancel-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog取消按钮的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-confirm-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog确定按钮的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog遮罩的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),l("h2",{attrs:{id:"模态框事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模态框事件"}},[t._v("#")]),t._v(" 模态框事件")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当点击背景时触发的事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linconfirm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当点击确定时触发的事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("confirm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lincancel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当点击取消时触发的事件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),l("h2",{attrs:{id:"开放函数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#开放函数"}},[t._v("#")]),t._v(" "),l("a",{attrs:{href:"https://doc.mini.talelin.com/start/open-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放函数"),l("OutboundLink")],1)]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("函数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("linShow(options)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("显示模态框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("optinos 为 Object 类型，属性为 Dialog 支持的所有属性")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("linHide()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("隐藏模态框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);