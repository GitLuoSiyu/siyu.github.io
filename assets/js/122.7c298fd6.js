(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{545:function(t,e,a){"use strict";a.r(e);var n=a(25),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图标-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标-icon"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 图标 Icon")],1),t._v(" "),a("blockquote",[a("p",[t._v("语义化的矢量图形")])]),t._v(" "),a("h2",{attrs:{id:"图标库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标库"}},[t._v("#")]),t._v(" 图标库")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/icon/1.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),a("blockquote",[a("p",[t._v("更多图标请移步示例小程序中查看")])]),t._v(" "),a("h2",{attrs:{id:"图标类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标类型"}},[t._v("#")]),t._v(" 图标类型")]),t._v(" "),a("p",[t._v("通过在"),a("code",[t._v("<l-icon/>")]),t._v("上设置图标组件的"),a("code",[t._v("name")]),t._v("属性,来指定要使用的图标。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("提示："),a("code",[t._v("name")]),t._v("属性为必填。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-icon name="add"/>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/icon/2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"图标样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标样式"}},[t._v("#")]),t._v(" 图标样式")]),t._v(" "),a("p",[t._v("您还可以通过"),a("code",[t._v("color")]),t._v("和"),a("code",[t._v("size")]),t._v("属性分别设置不同颜色和大小的图标，以适用于不同的场景。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("ul",[a("li",[t._v("修改图标颜色")])]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-icon name="setting" color="#34BFA3"/>\n<l-icon name="setting" color="#F4516C"/>\n<l-icon name="setting" color="#FFE57F"/>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/icon/3.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("ul",[a("li",[t._v("修改图标大小（单位：rpx）")])]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-icon name="user" size="30"/>\n<l-icon name="user" size="40"/>\n<l-icon name="user" size="50"/>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/icon/4.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义图标"}},[t._v("#")]),t._v(" 自定义图标")]),t._v(" "),a("p",[t._v("通过外部样式类的方式来实现自定义图标：")]),t._v(" "),a("p",[t._v("1 将从iconfont下载的 "),a("code",[t._v("css")]),t._v(" 代码放进 "),a("code",[t._v("wxss")]),t._v(" 中；通过"),a("code",[t._v("@font-face")]),t._v("定义字体， "),a("code",[t._v("font-family")]),t._v("必须为："),a("code",[t._v("iconfont")])]),t._v(" "),a("p",[t._v("2 设置带有"),a("code",[t._v("content")]),t._v("属性的 "),a("code",[t._v("class")]),t._v(" 名为 "),a("code",[t._v("l-icon-name:before")]),t._v("的格式，（"),a("code",[t._v("name")]),t._v("是用来设置icon组件的"),a("code",[t._v("name")]),t._v("属性的,），如："),a("code",[t._v(".l-icon-duihao:before")])]),t._v(" "),a("p",[t._v("3 在"),a("code",[t._v("wxml")]),t._v("中设置"),a("code",[t._v("l-class")]),t._v("属性为"),a("code",[t._v("iconfont")]),t._v("，"),a("code",[t._v("name")]),t._v("为在步骤2中设置的"),a("code",[t._v("name")]),t._v("，以步骤2为例，在"),a("code",[t._v("wxml")]),t._v("中的"),a("code",[t._v("name")]),t._v("需要设置为"),a("code",[t._v("duihao")])]),t._v(" "),a("p",[t._v("4 如果在项目中遇到自定义"),a("code",[t._v("iconfont")]),t._v("与lin-ui内置"),a("code",[t._v("iconfont")]),t._v("相冲突问题,请看"),a("RouterLink",{attrs:{to:"/start/QA.html#关于自定义iconfont与lin-ui内置的iconfont相冲突的问题"}},[t._v("这里")]),t._v("；")],1),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@font-face {\n    font-family: \"iconfont\";\n    src: url('iconfont.eot?t=1569576441125');\n    /* IE9 */\n    src: url('iconfont.eot?t=1569576441125#iefix') format('embedded-opentype'),\n        /* IE6-IE8 */\n        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALEAAsAAAAABmQAAAJ2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApsgQ0BNgIkAwgLBgAEIAWEbQczG7YFEdWLabK/IpJj9xskBUKoNvS0NL2fGoOTvFXum2pguSRiYn8/GG5DaXACAAAAAMTDf/ul9/2Zv5kQKkCVrAwqghIpRFWhgFWrXGVlhOrxLIGE3s4HAJLZEzyAsxqH7ZCZ1Y6uPUw0KtBmEvkAkyShINPA8ugzLM226lvgQfR1phk9NgnO77V0DrTvr8ffawGQQyYJVm4WHaNOmNAk48F/85Q9Sr/sNwUOp12gQO6Acrnn8rkUB5YGdM6xKLICCb1h7IIXeJ9Ah3FNsd2xc4rMXhaIh+5cUwoBWWbpIjQa9mbxjmqleoPzNvp+/F0UKnViV526vXPT+g/rZPHj38WAQEECOlwjoYlMnGtMnJAEoyUdiWyaY5UHP/ytwCSOqhfsr7NLu8AoFDyT0BM9amkFcjI8jtVJZ1J1DfRL54S9/b01Hi5CWczxymP7LhTcwuEGfTAbP82iFb0ao/lSICNCT4BZdNCSGv+03/hQPnmRGXx60YKWTAnKrp3BLxIO7MiG2DZWWRM2uirjk5ZW6NCBVtgz4PtUzfD9ZEIxfFeuNmMZkmKWmKlN1DotoKFYQ4d5e4c7DXokidyOOS8AQp/3qPQ4RNLnIzFTv6E24j8a+iKhw4XgzE7UwTM0RC/tX6bu2NU108flNwzvtbG8OKK/YHEKS55k5XSNHbbEhvgZClJF7dikAo9hXQ857ZjRMRnJs0xTbXpT0h2b8xgaohftX0zdsWswmL7y+RuG99pYR02d8wWL0+gil8gGEGvFPqjmUV6Jn6FAqlA7NlGBWVjXQ5zNs2Z0TIwTYmcpdXrpUEWyvWr7gXzWgK0Vjj3pyfMDEekcAAAA') format('woff2'),\n        url('iconfont.woff?t=1569576441125') format('woff'),\n        url('iconfont.ttf?t=1569576441125') format('truetype'),\n        /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n        url('iconfont.svg?t=1569576441125#iconfont') format('svg');\n    /* iOS 4.1- */\n}\n\n.iconfont {\n    font-family: \"iconfont\" !important;\n    font-size: 16px;\n    font-style: normal;\n}\n\n.l-icon-duihao:before {\n    content: \"\\e63c\";\n}\n")])])]),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- 下面的示例代码，虽然两个icon的name都为duihao\n但是由于第二个设置了l-class属性，所以显示为不同的icon\n只是做个示例，不要纠结name和图标相对应的问题 --\x3e\n\n\x3c!-- lin-ui组件的duihao icon --\x3e\n<l-icon name='duihao' />\n\x3c!-- 自己从iconfont下载的duihao icon --\x3e\n<l-icon name='duihao' l-class='iconfont' />\n")])])]),a("h2",{attrs:{id:"图标属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标属性"}},[t._v("#")]),t._v(" 图标属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标的名称，必填")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认为主题色")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标的大小（单位：rpx）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("40rpx")])])])])]),t._v(" "),a("h2",{attrs:{id:"图标外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标外部样式类"}},[t._v("#")]),t._v(" 图标外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖图标的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=s.exports}}]);