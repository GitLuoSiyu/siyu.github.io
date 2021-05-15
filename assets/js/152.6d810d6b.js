(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{574:function(s,t,e){"use strict";e.r(t);var a=e(25),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题汇总-完善中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题汇总-完善中"}},[s._v("#")]),s._v(" "),e("H2Icon"),s._v(" 常见问题汇总（完善中……）")],1),s._v(" "),e("h2",{attrs:{id:"在跨端框架中使用lin-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在跨端框架中使用lin-ui"}},[s._v("#")]),s._v(" 在跨端框架中使用Lin-UI")]),s._v(" "),e("p",[s._v("lin-ui支持在uni-app、mpvue、Taro等跨端框架中使用。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("当在跨端框架中引用lin-ui后，将只能编译为微信小程序")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81",target:"_blank",rel:"noopener noreferrer"}},[s._v("uni-app 引入教程"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/mini-third-party.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Taro 引入教程"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mpvue/examples/tree/master/echarts",target:"_blank",rel:"noopener noreferrer"}},[s._v("mpvue 引入（参考mpvue引入echarts-for-weixin组件库）"),e("OutboundLink")],1)])]),s._v(" "),e("RightMenu"),s._v(" "),e("h2",{attrs:{id:"组件list常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件list常见问题"}},[s._v("#")]),s._v(" 组件List常见问题")]),s._v(" "),e("p",[s._v("1 、在使用List组件时，有时我们需要去掉List默认的右侧箭头，通过阅读文档找到配置项"),e("code",[s._v("is-link")]),s._v("，需要注意的是"),e("code",[s._v("is-link")]),s._v("的数据类型"),e("code",[s._v("Boolean")]),s._v("。通常会有错误写法如下:")]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-list icon="notification" title="铃声" is-link="false"/>\n')])])]),e("p",[s._v("正确写法:")]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-list icon="notification" title="铃声" is-link="{{false}}"/>\n')])])]),e("p",[s._v("原因:在小程序中如果写成"),e("code",[s._v('is-link="false"')]),s._v("，此时"),e("code",[s._v("false")]),s._v("数据类型并不是"),e("code",[s._v("Boolean")]),s._v("，而是"),e("code",[s._v("String")]),s._v("，这也是小程序中一个比较常见的问题。更加值得注意的是如果写成下面这种写法也是可以达到预期的效果。")]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-list icon="notification" title="铃声" is-link="{{xxx}}"/>\n')])])]),e("p",[s._v("or")]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-list icon="notification" title="铃声" is-link="{{0}}"/>\n')])])]),e("p",[s._v("但是如果"),e("code",[s._v('is-link="'+s._s(1)+'"')]),s._v("等价于"),e("code",[s._v('is-link="'+s._s(!0)+'"')])]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-list icon="notification" title="铃声" is-link="{{1}}"/>\n')])])]),e("h2",{attrs:{id:"关于在小程序中将less编译成wxss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于在小程序中将less编译成wxss"}},[s._v("#")]),s._v(" 关于在小程序中将less编译成wxss")]),s._v(" "),e("p",[s._v("在开发小程序的过程中，或许很多人还在用"),e("code",[s._v("wxss")]),s._v("写小程序的层叠样式表，或许曾经尝试过将"),e("code",[s._v("less")]),s._v("编译成"),e("code",[s._v("wxss")]),s._v("。但是每次写完"),e("code",[s._v("less")]),s._v("都需要手动编译，效率真的是太低了，用"),e("code",[s._v("wxss")]),s._v("写样式，也不够优雅，那么我们就需要一个技术去同步将"),e("code",[s._v("less")]),s._v("编译成"),e("code",[s._v("wxss")]),s._v("。")]),s._v(" "),e("p",[s._v("这里介绍下"),e("a",{attrs:{href:"https://github.com/echo008/wxss-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("wxss-cli"),e("OutboundLink")],1),s._v("，这是一个可以实时将"),e("code",[s._v("less")]),s._v("变成"),e("code",[s._v("wxss")]),s._v("的插件。")]),s._v(" "),e("p",[s._v("使用方法:\n1 、首先全局安装"),e("a",{attrs:{href:"https://github.com/echo008/wxss-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("wxss-cli"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g wxss-cli\n")])])]),e("p",[s._v("2 、查看是否安装完毕")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    wxss -V\n")])])]),e("p",[s._v("3 、使用"),e("a",{attrs:{href:"https://github.com/echo008/wxss-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("wxss-cli"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    wxss ./minicode\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("友情提醒")]),s._v(" "),e("p",[s._v("minicode 为小程序开发根目录")])]),s._v(" "),e("p",[s._v("4 、运行"),e("a",{attrs:{href:"https://github.com/echo008/wxss-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("wxss-cli"),e("OutboundLink")],1),s._v("，如果出现类似以下提示，则"),e("a",{attrs:{href:"https://github.com/echo008/wxss-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("wxss-cli"),e("OutboundLink")],1),s._v("运行成功！")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("wxss is running"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAdd pages/books/index.less success"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nAdd pages/index/index.less success"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),e("h2",{attrs:{id:"关于自定义iconfont与lin-ui内置的iconfont相冲突的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于自定义iconfont与lin-ui内置的iconfont相冲突的问题"}},[s._v("#")]),s._v(" 关于"),e("code",[s._v("自定义iconfont")]),s._v("与lin-ui内置的"),e("code",[s._v("iconfont")]),s._v("相冲突的问题")]),s._v(" "),e("p",[s._v("在实际项目，"),e("code",[s._v("lin-ui")]),s._v("现在所提供的"),e("code",[s._v("icon")]),s._v("可能还不能满足需求，我们往往会通过"),e("code",[s._v("iconfont")]),s._v("为项目添加自定义的"),e("code",[s._v("icon")]),s._v("。在添加"),e("code",[s._v("icon")]),s._v("的时候，往往会出现"),e("code",[s._v("自定义的iconfont")]),s._v("库中的"),e("code",[s._v("content")]),s._v("属性与"),e("code",[s._v("lin-ui")]),s._v("内置"),e("code",[s._v("iconfont")]),s._v("的"),e("code",[s._v("content")]),s._v("的值一样。")]),s._v(" "),e("p",[s._v("解决思路有以下两种:")]),s._v(" "),e("p",[s._v("1 、在自定义的项目中修改"),e("code",[s._v("iconfont")]),s._v("的"),e("code",[s._v("content")]),s._v("属性。但是，如果自定义图标过多，那么造成冲突的概率就会大大提升，不建议这样解决冲突。")]),s._v(" "),e("p",[s._v("2 、在项目中添加"),e("code",[s._v("iconfont")]),s._v("时，把"),e("code",[s._v("font-family")]),s._v("改成自定义的值，只要不是"),e("code",[s._v("iconfont")]),s._v("就可以。")]),s._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<l-icon name="my-icon" l-class="icon-self"/>\n')])])]),e("div",{staticClass:"language-wxss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".icon-self{\n    font-family:my-icon !important;\n}\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("友情提醒")]),s._v(" "),e("p",[s._v("my-icon 为你自定义的font-family值")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);