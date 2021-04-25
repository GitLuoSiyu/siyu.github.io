(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{516:function(t,e,a){"use strict";a.r(e);var l=a(25),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图片裁剪-imageclipper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片裁剪-imageclipper"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 图片裁剪 ImageClipper")],1),t._v(" "),a("blockquote",[a("p",[t._v("图片裁剪组件。")])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("根据下图所示，"),a("code",[t._v("ImageClipper")]),t._v("分为三个区域："),a("code",[t._v("ImageContent")]),t._v("、"),a("code",[t._v("ClipperContent")]),t._v("、"),a("code",[t._v("ToolsContent")]),t._v("。")]),t._v(" "),a("p",[t._v("该组件默认撑满整个屏幕，您可以通过 "),a("code",[t._v("l-class")]),t._v(" 外部样式类进行定制。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ImageContent")]),t._v("—— 图片内容区域：被裁剪的图片可以在此区域任意移动、缩放和旋转等操作")]),t._v(" "),a("li",[a("code",[t._v("ClipperContent")]),t._v("—— 裁剪内容区域：此区域可以缩放，裁剪只会保留该区域的内容")]),t._v(" "),a("li",[a("code",[t._v("ToolsContent")]),t._v("—— Tools区域：在此区域，"),a("strong",[t._v("您可以任意定制您想要的功能")]),t._v("，如图所示，可以放一些功能性的按钮，"),a("strong",[t._v("当然，您也可以随意放其他内容，随心所欲")]),t._v("，我们会默认内置一些功能，此区域部分功能需引用子组件 "),a("code",[t._v("ImageClipperTools")])])]),t._v(" "),a("p",[t._v("以上三个名词分别对应的部分如下图所示：、\n:::img\n"),a("img",{attrs:{src:"/screenshots/image-clipper/image-clipper.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),a("h3",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-clipper show="{{true}}" image-url="{{图片路径}}">\n  <l-image-clipper-tools />\n</l-image-clipper>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-clipper/demo1.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"页面内选择图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面内选择图片"}},[t._v("#")]),t._v(" 页面内选择图片")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("推荐使用这种方式，在您需要操作的页面里，放置一个按钮或者其他元素，点击后调用"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信选择图片API"),a("OutboundLink")],1),t._v("，当选择完成图片后，设置组件 "),a("code",[t._v("show")]),t._v(" 状态为 "),a("code",[t._v("true")]),t._v("，调起 "),a("code",[t._v("ImageClipper")]),t._v(" 组件，并将 "),a("code",[t._v("image-url")]),t._v(" 属性设置为选择图片回调中的 "),a("code",[t._v("res.tempFilePaths")]),t._v(" 参数，用户体验会更好一些。")])]),t._v(" "),a("h3",{attrs:{id:"代码演示-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-2"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-button bind:lintap="upload" size="large">选择图片</l-button>\n<l-image-clipper show="{{true}}" image-url="{{imageUrl}}"bindlinclip="linclip">\n  <l-image-clipper-tools />\n</l-image-clipper>\n')])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    imageUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linclip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetImageUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'生成的图片链接为：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetImageUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sizeType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'original'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compressed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'album'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'camera'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tempFilePaths "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePaths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          imageUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tempFilePaths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-clipper/demo2.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义工具栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义工具栏"}},[t._v("#")]),t._v(" 自定义工具栏")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("您可以在该插槽内任意定制您想要的功能或其他，当然我们也为您准备了一些工具，需引用 "),a("code",[t._v("ImageClipperTools")]),t._v(" 组件，"),a("a",{attrs:{href:"#%E5%B7%A5%E5%85%B7%E6%A0%8F%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%EF%BC%88imageclippertools-attributes%EF%BC%89"}},[t._v("组件属性")]),t._v("如下。")])]),t._v(" "),a("h3",{attrs:{id:"代码演示-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-3"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-image-clipper show="{{true}}" image-url="{{imageUrl}}">\n  <l-image-clipper-tools \n    lock-width="{{true}}" \n    lock-height="{{true}}" \n    lock-ratio="{{true}}" \n    disable-scale="{{true}}" \n    disable-rotate="{{true}}" \n    limit-move="{{true}}"\n  />\n</l-image-clipper>\n')])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/image-clipper/demo3.png",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"组件完整使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件完整使用说明"}},[t._v("#")]),t._v(" 组件完整使用说明")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("组件会监听 "),a("code",[t._v("image-url")]),t._v(" 参数的变化，当属性有内容时，组件会调用 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("wx.getImageInfo()")]),a("OutboundLink")],1),t._v(" API，当请求成功后，组件会触发 "),a("code",[t._v("linimageready")]),t._v(" 事件，表示图片已加载完成，该事件会返回：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("width")]),t._v(" ：图片宽度")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v(" ：图片高度")]),t._v(" "),a("li",[a("code",[t._v("path")]),t._v(" ：图片本地路径")]),t._v(" "),a("li",[a("code",[t._v("orientation")]),t._v(" ：拍照时设备方向")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(" ：图片格式")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("image-url")]),t._v(" 属性可以是 "),a("strong",[t._v("相对路径、临时文件路径、存储文件路径、网络图片路径")]),t._v("，详见 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("wx.getImageInfo()")]),a("OutboundLink")],1),t._v("，需要注意的是，您使用 "),a("strong",[t._v("网络图片路径")]),t._v(" 可能会造成 "),a("strong",[t._v("跨域")]),t._v("，当然，您可以在 "),a("strong",[t._v("微信开发者工具")]),t._v(" 里配置 "),a("code",[t._v("合法域名")]),t._v("，或者开发环境下勾选 "),a("code",[t._v("不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书")])])]),t._v(" "),a("li",[a("p",[t._v("当您点击工具栏的 "),a("strong",[t._v("旋转按钮")]),t._v(" 时，会触发 "),a("code",[t._v("linrotate")]),t._v(" 事件，并且会返回 "),a("code",[t._v("currentDeg")]),t._v("（当前旋转的角度）")])]),t._v(" "),a("li",[a("p",[t._v("同样，当您 "),a("strong",[t._v("双指拖动图片")]),t._v(" 放大时，会触发 "),a("code",[t._v("linsizechange")]),t._v(" 事件，并且会返回 "),a("code",[t._v("imageWidth")]),t._v(" (当前图片宽度) 、"),a("code",[t._v("imageHeight")]),t._v("（当前图片高度）")])]),t._v(" "),a("li",[a("p",[t._v("当您调整好图片状态后，点击工具栏中的 "),a("code",[t._v("√")]),t._v(" 按钮，将会触发 "),a("code",[t._v("linclip")]),t._v(" 事件，该事件会返回：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("url")]),t._v(" ：生成的图片 "),a("code",[t._v("url")]),t._v("（当您的属性 "),a("code",[t._v("type")]),t._v(" ，为 "),a("code",[t._v("url")]),t._v(" 时）")]),t._v(" "),a("li",[a("code",[t._v("base64")]),t._v(" ：生成的图片 "),a("code",[t._v("base64")]),t._v(" （当您的属性 "),a("code",[t._v("type")]),t._v(" ，为 "),a("code",[t._v("base64")]),t._v(" 时）")]),t._v(" "),a("li",[a("code",[t._v("width")]),t._v(" ：生成的图片宽度")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v(" ：生成的图片高度")])])]),t._v(" "),a("li",[a("p",[t._v("裁剪完成")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("除此之外，我们还为您准备了更多属性，方便您更自由的定制组件功能，"),a("a",{attrs:{href:"#%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%EF%BC%88imageclipper-attributes%EF%BC%89"}},[t._v("点击查看")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("为了优化体验，当您未选择图片时，无法对裁剪框进行任何操作！！！")])]),t._v(" "),a("h2",{attrs:{id:"组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件属性"}},[t._v("#")]),t._v(" 组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件展示隐藏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("image-url")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("base64")]),t._v(" "),a("code",[t._v("url")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("url")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("quality")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片质量")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0~1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框宽度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框高度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最小宽度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最小高度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最大宽度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("600")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最大高度，单位为 "),a("code",[t._v("rpx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("600")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框比例")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("scale-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片相对于裁剪框的比例")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片最小缩放比")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片最大缩放比")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disable-scale")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止缩放")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disable-rotate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止旋转")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("limit-move")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否限制移动范围")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("check-image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示选择图片按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("check-image-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择图片按钮图标url地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-along")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示顺时针旋转按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-along-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("顺时针旋转按钮图标url地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-inverse")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示逆时针旋转按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-inverse-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("逆时针旋转按钮图标url地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示确定按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sure-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮图标url地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示关闭按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("close-icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭按钮图标url地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-angle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("旋转按钮每次旋转的角度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("90")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])])])]),t._v(" "),a("h2",{attrs:{id:"工具栏组件属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具栏组件属性"}},[t._v("#")]),t._v(" 工具栏组件属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框宽度按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框高度按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lock-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框比例按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disable-scale")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示禁止缩放按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("limit-move")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示限制移动范围按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])])])]),t._v(" "),a("h2",{attrs:{id:"组件外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件外部样式类"}},[t._v("#")]),t._v(" 组件外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最底层元素（组件总容器）外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("h2",{attrs:{id:"组件事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件事件"}},[t._v("#")]),t._v(" 组件事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linimageready")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载完成式触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("width")]),t._v("：图片宽度 "),a("br"),t._v(" "),a("code",[t._v("height")]),t._v("：图片高度"),a("br"),a("code",[t._v("path")]),t._v("：图片本地路径"),a("br"),a("code",[t._v("orientation")]),t._v("：拍照时设备方向"),a("br"),a("code",[t._v("type")]),t._v("：图片格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linrotate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片旋转时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("currentDeg")]),t._v("：当前旋转的角度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linsizechange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片大小改变时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("imageWidth")]),t._v("：当前图片宽度"),a("br"),a("code",[t._v("imageHeight")]),t._v("：当前图片高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclip")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片裁剪完成后触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("url")]),t._v("：生成的图片url"),a("br"),a("code",[t._v("base64")]),t._v("：生成的图片base64"),a("br"),a("code",[t._v("width")]),t._v("：生成的图片宽度"),a("br"),a("code",[t._v("height")]),t._v("：生成的图片高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);