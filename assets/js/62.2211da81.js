(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{473:function(t,e,a){"use strict";a.r(e);var l=a(45),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"卡片-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片-card"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 卡片 Card")],1),t._v(" "),a("blockquote",[a("p",[t._v("基础卡片布局，常见应用场景为模块展示。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("由于本组件示例代码的wxss过多，本文档不再展示，大家可以到"),a("a",{attrs:{href:"https://github.com/TaleLin/lin-ui/blob/master/examples/pages/components/layout/pages/card/index.wxss",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1),t._v("自行复制。")])]),t._v(" "),a("h2",{attrs:{id:"卡片类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片类型"}},[t._v("#")]),t._v(" 卡片类型")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("type")]),t._v("属性为"),a("code",[t._v("primary")]),t._v("、"),a("code",[t._v("avatar")]),t._v("、"),a("code",[t._v("cover")]),t._v("可设置不同类型的卡片布局。默认值为"),a("code",[t._v("primary")]),t._v("。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("image")]),t._v("和"),a("code",[t._v("title")]),t._v("属性设置图片（头像）和标题（昵称）。")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("avatar")]),t._v("时可通过"),a("code",[t._v("describe")]),t._v("属性设置额外描述，通过设置"),a("code",[t._v('slot="more"')]),t._v("设置卡片右上角的内容。")]),t._v(" "),a("p",[t._v("内容部分通过"),a("code",[t._v("slot")]),t._v("传入卡片对应区域。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("card")]),t._v("仅设置了组件的宽度，高度由卡片容器内的内容撑开。")])]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/card/image1.png",alt:"height=150"}}),t._v(" "),a("img",{attrs:{src:"/screenshots/card/image2.png",alt:"height=150"}}),t._v(" "),a("img",{attrs:{src:"/screenshots/card/image3.png",alt:"height=150"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    \x3c!-- primary --\x3e\n    <l-card type="primary" \n            image="/image/1.png"\n            title="新疆精选苹果">\n        \x3c!-- 此处为content --\x3e\n        <view class="content">\n        新疆苹果,又名塞威氏苹果,蔷微科,落叶乔木。原产新疆西部天山北山麓,\n        主要集中分布于伊犁河谷果子沟,新源县境内的那拉提野果林,巩留的莫合\n        林场,垂直分布区域海拔在1000～1300m的山顶、山坡、河谷区域。\n        </view>\n    </l-card>\n\n    \x3c!-- cover --\x3e\n    <l-card type="cover" \n            image="/image/5.png"\n            title="年味儿的科技大升级">\n        <view class="content">\n          一部分人回乡，一部分人把父母接到了身边,还有一部分人，干脆把假期变成了真正属于自己的时间。\n          总有- -些科技，升级了生活方式，延展了过年形式的体验，还有一些欲...\n        </view>\n    </l-card>\n\n    \x3c!-- avatar --\x3e\n    <l-card type="avatar" l-class="card" image="/image/2.png"\n    title="七月在夏天" describe="18个小时前">\n        \x3c!-- 此处为content --\x3e\n        <view class="avter-content">\n        很简单，豆瓣现在这样就给大家指了一条明路:以后凡是这种国产的风口浪尖的的片子，会涉及到各方背后利益关系的片子...\n        </view>\n        <view class="avter-share-container">\n        <view class="like-container">\n            <l-icon name="like" color="#666" size="28" />\n            <view class="number">160喜欢</view>\n        </view>\n        <view class="like-container">\n            <l-icon name="default" color="#666" size="28" />\n            <view class="number">10评论</view>\n        </view>\n        </view>\n        <l-tag  shape="circle" \n                bg-color="#f3f3f3" \n                font-color="#3963BC" \n                slot="more"\n                size="large">\n                + 关注\n        </l-tag>\n  </l-card>\n')])])]),a("h2",{attrs:{id:"卡片的图片位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片的图片位置"}},[t._v("#")]),t._v(" 卡片的图片位置")]),t._v(" "),a("p",[t._v("可通过"),a("code",[t._v("position")]),t._v("属性设置图片的卡片中的位置。默认值为"),a("code",[t._v("left")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/card/image4.png",alt:"center height=200"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <l-card  type="primary" \n           l-img-class="right-card" \n           position="right" \n           image="/images/3.png"\n    title="做一个热爱生活的人！">\n    <view class="content">\n      很简单，豆瓣现在这样就给大家指了一条明路:以后凡是这种国产的风口浪尖的的片子...\n    </view>\n  </l-card>\n\n  <l-card  type="primary" \n           l-img-class="right-card" \n           position="left" \n           image="/images/3.png">\n    <view class="content">\n      很简单，豆瓣现在这样就给大家指了一条明路:以后凡是这种国产的风口浪尖的的片子...\n    </view>\n  </l-card>\n')])])]),a("h2",{attrs:{id:"纯文字卡片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯文字卡片"}},[t._v("#")]),t._v(" 纯文字卡片")]),t._v(" "),a("p",[t._v("可通过"),a("code",[t._v("plaintext")]),t._v("属性设置图片的卡片中的位置。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/card/image5.png",alt:"center height=200"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <l-card type="primary"\n          plaintext="{{true}}"\n          title="有什么笑话可以笑一辈子?">\n    <view class="content">\n      大雄要死掉了,他对妻子说:我死之后你找一个男人我就在地下打一一个滚。\n      说完就咽气了。某天妻子有事要找大雄，就去了地府问阎王找人，但是地府人那么多...\n    </view>\n  </l-card>\n')])])]),a("h2",{attrs:{id:"通栏卡片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通栏卡片"}},[t._v("#")]),t._v(" 通栏卡片")]),t._v(" "),a("p",[t._v("可通过"),a("code",[t._v("full")]),t._v("属性设置卡片为通栏卡片。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/card/image6.png",alt:"center height=200"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <l-card type="primary" \n          full="{{true}}"\n          image="/image/4.png"\n          title="做一个热爱生活的人！">\n     <view class="content">\n      大雄要死掉了,他对妻子说:我死之后你找一个男人我就在地下打一一个滚。\n      说完就咽气了。某天...\n    </view>\n  </l-card>\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("、"),a("code",[t._v("plaintext")]),t._v("属性仅在"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("primary")]),t._v("时生效。")])]),t._v(" "),a("h2",{attrs:{id:"卡片属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片属性"}},[t._v("#")]),t._v(" 卡片属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("primary/avatar/cover")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("primary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片内图片的路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("image-mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片内图片的显示模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("参考"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信image组件mode属性"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("describe")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片的描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("position")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片内图片的位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left/right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("left")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("plaintext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片是否为纯文字卡片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("full")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("卡片是否为通栏卡片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h2",{attrs:{id:"卡片外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片外部样式类"}},[t._v("#")]),t._v(" 卡片外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，设置整体卡片样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-img-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖图片（头像）的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标题（昵称）的样式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=i.exports}}]);