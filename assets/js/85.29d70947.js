(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{507:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"loreal-ui-cli-详细介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loreal-ui-cli-详细介绍"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" Loreal UI CLI 详细介绍")],1),t._v(" "),a("h2",{attrs:{id:"create-命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-命令介绍"}},[t._v("#")]),t._v(" create 命令介绍")]),t._v(" "),a("p",[t._v("创建命令时会有如下选项：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("name")]),t._v(" 、 "),a("code",[t._v("version")]),t._v(" 、 "),a("code",[t._v("description")]),t._v(" ：生成 package.json 文件内对应字段")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("是否开启按需加载")]),t._v(" ：当输入 "),a("code",[t._v("yes")]),t._v(" 后，生成的文件 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("project.config.json（微信开发者工具配置文件）"),a("OutboundLink")],1),t._v(" 内会携带以下配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"beforeUpload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run load"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此代码的主要是利用微信小程序自定义处理命令功能实现 "),a("strong",[t._v("自动按需加载")])])])]),t._v(" "),a("p",[t._v("当进行完以上操作后，即可等待项目创建完成。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("create")]),t._v(" 命令创建的项目默认携带 "),a("strong",[t._v("lin-ui.config.json")]),t._v(" 文件，此文件为脚手架配置文件，此配置文件有以下配置：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lib")]),t._v(" ： 配置 Loreal UI 组件库文件夹的名称，默认值 "),a("code",[t._v("miniprogram_npm/lin-ui")])])]),t._v(" "),a("p",[t._v("大多数情况下，此配置文件的配置内容无需任何更改，除非您使用源码方式安装，组件在其他路径的情况下时，当然如果您认为不需要此文件，您也可以删除，我们在脚手架内部已内置与微信小程序相同的默认配置。")]),t._v(" "),a("p",[t._v("在生成的微信开发者工具配置文件 "),a("strong",[t._v("project.config.json")]),t._v(" 文件中，我们已默认配置如下代码，用来防止微信小程序打包配置文件 "),a("strong",[t._v("lin-ui.config.json")]),t._v(" 与 "),a("strong",[t._v(".gitignore")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"linui.config.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".gitignore"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"load-命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-命令介绍"}},[t._v("#")]),t._v(" load 命令介绍")]),t._v(" "),a("p",[t._v("Loreal UI CLI 是通过微信开发者工具配置文件 "),a("strong",[t._v("project.config.json")]),t._v(" 中 "),a("code",[t._v("packOptions.ignore")]),t._v(" 与 "),a("code",[t._v("script")]),t._v(" 字段中 "),a("code",[t._v("beforeUpload")]),t._v(" 的特点来实现 "),a("strong",[t._v("按需加载")]),t._v(" ，脚手架会获取用户使用的 "),a("code",[t._v("pages")]),t._v(" 中与所有 "),a("strong",[t._v("自定义组件")]),t._v(" 中的 Loreal UI 组件，然后进行 "),a("strong",[t._v("按需加载")]),t._v(" 。")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("ol",[a("li",[t._v("首先，CLI 会扫描用户所有的文件（会忽略掉 node_modules 与 miniprogram_npm 文件夹）")]),t._v(" "),a("li",[t._v("然后通过 "),a("strong",[t._v("app.json")]),t._v(" 文件中 "),a("code",[t._v("pages")]),t._v(" 字段匹配到用户所有使用到的页面")]),t._v(" "),a("li",[t._v("通过 "),a("strong",[t._v("所有文件")]),t._v(" 与 "),a("strong",[t._v("app.json")]),t._v(" 中引入的文件进行交集计算，拿到用户 "),a("strong",[t._v("所注册的与所存在")]),t._v(" 的所有页面路径")]),t._v(" "),a("li",[t._v("再进行用户自定义组件的获取操作，通过 "),a("code",[t._v("[component].json")]),t._v(" 文件中的 "),a("code",[t._v("component")]),t._v(" 字段可以确定是否为自定义组件")]),t._v(" "),a("li",[t._v("拿到所有引用组件后，对组件进行深度遍历，拿到所使用到的组件的所有依赖的组件，至此，拿到全部使用到的组件")]),t._v(" "),a("li",[t._v("通过与 miniprogram_npm 下的 Loreal UI 组件进行差集对比，拿到所有未使用到的组件，写入 "),a("strong",[t._v("project.config.json")])]),t._v(" "),a("li",[a("strong",[t._v("按需加载")]),t._v(" 结束")])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=r.exports}}]);