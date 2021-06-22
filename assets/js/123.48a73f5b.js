(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{573:function(t,v,_){"use strict";_.r(v);var a=_(25),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"折叠面板-collapse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板-collapse"}},[t._v("#")]),t._v(" "),_("H2Icon"),t._v(" 折叠面板 Collapse")],1),t._v(" "),_("blockquote",[_("p",[t._v("折叠面板，常见应用场景为折叠菜单、优惠券详情展示")])]),t._v(" "),_("p",[t._v("折叠面板需要"),_("code",[t._v("collapse")]),t._v("和"),_("code",[t._v("collapse-item")]),t._v("组件关联使用")]),t._v(" "),_("h2",{attrs:{id:"普通模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#普通模式"}},[t._v("#")]),t._v(" 普通模式")]),t._v(" "),_("p",[t._v("折叠面板默认为普通模式。普通模式下，多个"),_("code",[t._v("collapse-item")]),t._v("可以同时展开。")]),t._v(" "),_("p",[t._v(":::img\n"),_("img",{attrs:{src:"/screenshots/collapse/collapse-base-case.gif",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),_("h3",{attrs:{id:"示例代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<l-collapse>\n  <l-collapse-item title="Loreal UI">\n    Loreal UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。\n  </l-collapse-item>\n  <l-collapse-item title="Lin-CMS">\n    Lin-CMS 是程序员思语团队经过大量项目实践所提炼出的一套内容管理系统框架。\n    Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。\n  </l-collapse-item>\n  <l-collapse-item title="程序员思语">\n    程序员思语是一个团队\n  </l-collapse-item>\n</l-collapse>\n')])])]),_("h2",{attrs:{id:"手风琴模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手风琴模式"}},[t._v("#")]),t._v(" 手风琴模式")]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("type='accordion'")]),t._v("指定折叠面板为手风琴模式。手风琴模式下多个"),_("code",[t._v("collapse-item")]),t._v("只能同时展开一个。")]),t._v(" "),_("p",[t._v(":::img\n"),_("img",{attrs:{src:"/screenshots/collapse/collapse-accordion-case.gif",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),_("h3",{attrs:{id:"示例代码-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<l-collapse type="accordion">\n  <l-collapse-item title="Loreal UI">\n    Loreal UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。\n  </l-collapse-item>\n  <l-collapse-item title="Lin-CMS">\n    Lin-CMS 是程序员思语团队经过大量项目实践所提炼出的一套内容管理系统框架。\n    Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。\n  </l-collapse-item>\n  <l-collapse-item title="程序员思语">\n    程序员思语是一个团队\n  </l-collapse-item>\n</l-collapse>\n')])])]),_("h2",{attrs:{id:"自定义标题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义标题"}},[t._v("#")]),t._v(" 自定义标题")]),t._v(" "),_("p",[t._v("如果需要更复杂的布局，可以使用slot注入自定义标题")]),t._v(" "),_("p",[t._v(":::img\n"),_("img",{attrs:{src:"/screenshots/collapse/collapse-custom-title.jpg",alt:"center height=200"}}),t._v("\n:::")]),t._v(" "),_("div",{staticClass:"language-wxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<l-collapse>\n  <l-collapse-item l-body-class="l-body-class" l-title-class="l-title-class" customTitle="{{true}}">\n    \x3c!--自定义标题--\x3e\n    <view class="title" slot="title">\n      <view class="ticket-detail-container">使用规则\n        <l-icon name="down" size="16" color="#999"/>\n      </view>\n      <l-button l-class height="50" size="mini" shape="semicircle" plain="{{true}}">立即使用</l-button>\n    </view>\n    <text>1、本券一次使用1张限1件商品，自领取日起有效期7天。\\n2、本优惠券不与其他优惠同享</text>\n  </l-collapse-item>\n<l-collapse>\n')])])]),_("h2",{attrs:{id:"折叠面板属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板属性"}},[t._v("#")]),t._v(" 折叠面板属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("折叠面板类型")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("normal/accordion")]),t._v(" "),_("td",[t._v("normal")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("expand-item-id")]),t._v(" "),_("td",[t._v("初始状态需要展开的折叠面板子项id（手风琴模式下取数组第一个值）")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"折叠面板子项属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板子项属性"}},[t._v("#")]),t._v(" 折叠面板子项属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("item-id")]),t._v(" "),_("td",[t._v("折叠面板子项id，需要确保唯一性")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("折叠面板子项索引值")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("是否禁用折叠面板")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("标题文字")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("默认标题")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("custom-title")]),t._v(" "),_("td",[t._v("是否开启自定义标题区内容（slot注入）")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("title-color")]),t._v(" "),_("td",[t._v("标题可点击时的颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("#333333")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("title-disabled-color")]),t._v(" "),_("td",[t._v("标题不可点击时的颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("#DEE2E6")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("animation-time")]),t._v(" "),_("td",[t._v("内容区域展开动画速度（单位：秒）")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("0.3")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"折叠面板外部样式类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板外部样式类"}},[t._v("#")]),t._v(" 折叠面板外部样式类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("外部样式类名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("l-class")]),t._v(" "),_("td",[t._v("覆盖折叠面板整体样式")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"折叠面板子项外部样式类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板子项外部样式类"}},[t._v("#")]),t._v(" 折叠面板子项外部样式类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("外部样式类名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("l-class")]),t._v(" "),_("td",[t._v("覆盖折叠面板子项整体样式")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("l-title-class")]),t._v(" "),_("td",[t._v("覆盖折叠面板子项标题样式")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("l-body-class")]),t._v(" "),_("td",[t._v("覆盖折叠面板子项内容区样式")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"折叠面板事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板事件"}},[t._v("#")]),t._v(" 折叠面板事件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("返回值")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("bind:linfold")]),t._v(" "),_("td",[t._v("折叠面板折叠回调事件")]),t._v(" "),_("td",[t._v("折叠面板子项id")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("bind:linexpand")]),t._v(" "),_("td",[t._v("折叠面板展开回调事件")]),t._v(" "),_("td",[t._v("折叠面板子项id")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"折叠面板子项插槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折叠面板子项插槽"}},[t._v("#")]),t._v(" 折叠面板子项插槽")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Slot名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")]),t._v(" "),_("th",[t._v("版本号")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("折叠面板标题区域")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")])])]),t._v(" "),_("RightMenu")],1)}),[],!1,null,null,null);v.default=e.exports}}]);