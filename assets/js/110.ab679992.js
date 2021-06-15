(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{541:function(t,e,a){"use strict";a.r(e);var s=a(25),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"相册-album"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相册-album"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 相册 Album")],1),t._v(" "),a("blockquote",[a("p",[t._v("图片展示组件，展示传入的图片。常见使用场景：微信朋友圈，商品评论。")])]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("引用组件，通过"),a("code",[t._v("urls")]),t._v("属性传入图片链接,"),a("code",[t._v("urls")]),t._v("应为网络图片链接或本地绝对路径。组件自动展示"),a("code",[t._v("urls")]),t._v("中的图片。")]),t._v(" "),a("h2",{attrs:{id:"图片列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片列表"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"urls"}},[t._v("图片列表")])]),t._v(" "),a("p",[a("code",[t._v("urls")]),t._v("接收一个数组，数组内元素可以有两种格式。")]),t._v(" "),a("ul",[a("li",[t._v("数组元素为字符串")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片1.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片2.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片3.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("数组元素为对象，对象中包含url属性，且url属性值的类型为字符串。对象可以包含其他任意属性。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \tkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key1'")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \tkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \tvalue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("两种格式根据实际情况自行选择，但不能混用，同一组件内只能使用同一种格式。")]),t._v(" "),a("p",[t._v("在组件事件中返回的detail内容，与传入的urls内容保持一致。")])]),t._v(" "),a("h2",{attrs:{id:"指定key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定key"}},[t._v("#")]),t._v(" 指定key")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("urls")]),t._v("数组元素为对象时，可以通过"),a("code",[t._v("key")]),t._v("属性指定数据源的键值（即"),a("code",[t._v("url")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tnewUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t  \tkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key1'")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t \tnewUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t  \tkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t  \tvalue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<l-album urls='{{urls}}' key='newUrl'></l-album>\n")])])]),a("h2",{attrs:{id:"图片展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片展示"}},[t._v("#")]),t._v(" 图片展示")]),t._v(" "),a("p",[t._v("组件分为单图展示和多图展示两种情景，组件会根据传入的"),a("code",[t._v("urls")]),t._v("长度自动布局，不需要单独指定。")]),t._v(" "),a("ol",[a("li",[t._v("单图")])]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("urls")]),t._v(" 长度为 1 时，为单图展示情景。组件将所传图片等比压缩，长边压缩/拉伸至 360rpx。")]),t._v(" "),a("blockquote",[a("p",[t._v("组件只包含图片部分，其他部分代码为展示用。")])]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/album/image1.jpeg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>一张横屏图片的展示，宽为360rpx。</view>\n            <l-album urls=\'{{urls}}\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>一张竖屏图片的展示，高为360rpx。</view>\n            <l-album urls=\'{{urls}}\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n')])])]),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".album {\n    display: flex;\n    flex-direction: row;\n}\n\n.avatar {\n    margin-left: 20rpx;\n}\n\n.right {\n    margin-left: 20rpx;\n}\n\n.name {\n    color: rgb(91, 108, 160);\n    font-weight: 450;\n}\n\n.content {\n    margin-top: 7rpx;\n    margin-right: 10rpx;\n    color: black;\n    font-weight: 445;\n    margin-bottom: 15rpx;\n}\n\n.line {\n    height: 1px;\n    border-top: solid Silver 1px;\n    margin-bottom: 40rpx;\n    margin-top: 30rpx;\n}\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("多图")])]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("urls")]),t._v(" 长度大于 1 时，为多图展示情景。多图展示时，最多展示 9 张照片，如果所传 "),a("code",[t._v("urls")]),t._v(" 长度超过 9，组件自动截取前 9 张照片进行展示。")]),t._v(" "),a("p",[t._v("多图情景下，图片展示为边长"),a("code",[t._v("158rpx")]),t._v("的正方形图片。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/album/image2.jpeg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>多张图片展示，显示为边长158rpx的正方形。</view>\n            <l-album urls=\'{{urls}}\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>多张图片展示，自动按照朋友圈显示规则排序。</view>\n            <l-album urls=\'{{urls}}\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n')])])]),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    wxss文件同上\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("多图展示规则")]),t._v(" "),a("p",[a("strong",[t._v("传入的urls长度不同，组件采用不同的布局形式，具体布局形式如下：")])]),t._v(" "),a("p",[a("strong",[t._v("2图")]),t._v(":\t\t一行两列")]),t._v(" "),a("p",[a("strong",[t._v("3图")]),t._v(":\t\t一行三列")]),t._v(" "),a("p",[a("strong",[t._v("4图")]),t._v(":\t\t两行两列")]),t._v(" "),a("p",[a("strong",[t._v("5、6图")]),t._v(":\t两行三列")]),t._v(" "),a("p",[a("strong",[t._v("7、8、9图")]),t._v(":\t三行三列")])]),t._v(" "),a("h2",{attrs:{id:"预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[t._v("#")]),t._v(" 预览")]),t._v(" "),a("p",[t._v("组件图片是否支持预览，默认状态为支持，可以通过设置"),a("code",[t._v("preview")]),t._v("属性为"),a("code",[t._v("false")]),t._v("关闭。")]),t._v(" "),a("h2",{attrs:{id:"图片尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片尺寸"}},[t._v("#")]),t._v(" 图片尺寸")]),t._v(" "),a("ol",[a("li",[t._v("单图")])]),t._v(" "),a("p",[t._v("单张图片时，组件将所传图片等比压缩，长边压缩/拉伸至"),a("code",[t._v("360rpx")]),t._v("。通过设置"),a("code",[t._v("single-size")]),t._v("可以更改长边大小，单位"),a("code",[t._v("rpx")]),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("多图")])]),t._v(" "),a("p",[t._v("多张图片时，图片展示为边长"),a("code",[t._v("158rpx")]),t._v("的正方形图片。通过设置"),a("code",[t._v("multiple-size")]),t._v("可以更改图片边长，单位"),a("code",[t._v("rpx")])]),t._v(" "),a("h2",{attrs:{id:"图像间隔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像间隔"}},[t._v("#")]),t._v(" 图像间隔")]),t._v(" "),a("blockquote",[a("p",[t._v("此设置仅在多图展示时生效")])]),t._v(" "),a("p",[t._v("通过设置"),a("code",[t._v("gap-row")]),t._v("和"),a("code",[t._v("gap-column")]),t._v("属性来更改多图时，图片的水平间隔和竖直间隔，默认值为"),a("code",[t._v("10")]),t._v(",单位"),a("code",[t._v("rpx")]),t._v(";")]),t._v(" "),a("h2",{attrs:{id:"裁剪、缩放模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#裁剪、缩放模式"}},[t._v("#")]),t._v(" 裁剪、缩放模式")]),t._v(" "),a("p",[t._v("单图情景和多图情景下的裁剪、缩放模式可单独设置，互相不受影响。组件根据传入"),a("code",[t._v("urls")]),t._v("长度自动选择对应裁剪、缩放方式进行图片展示。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("单图\n属性"),a("code",[t._v("single-mode")]),t._v("可以更改单图展示时图片的裁剪、缩放模式，默认值"),a("code",[t._v("aspectFit")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("多图"),a("br"),t._v("\n属性"),a("code",[t._v("multiple-mode")]),t._v("可以更改多图展示时图片的裁剪、缩放模式，默认值"),a("code",[t._v("aspectFill")]),t._v("。")])])]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/album/image3.jpeg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>通过single-mode可以更改单图时图片裁剪、缩放的模式。示例为center模式。</view>\n            <l-album urls=\'{{urls}}\' single-mode=\'center\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n<view>\n    <view class="album">\n        <l-avatar class="avatar" size=\'80\' shape="square" src="" />\n        <view class="right">\n            <view class="name">Lin-UI-27315</view>\n            <view class=\'content\'>通过multiple-mode可以更改多图时图片裁剪、缩放的模式。示例为scaleToFill模式。</view>\n            <l-album urls=\'{{urls}}\' multiple-mode=\'scaleToFill\'></l-album>\n        </view>\n    </view>\n    <view class="line"></view>\n</view>\n')])])]),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    wxss文件同上\n")])])]),a("h1",{attrs:{id:"高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),a("p",[t._v("为了满足用户的定制需求，我们新增了如下属性，可以让 Album 组件支持用户定制。")]),t._v(" "),a("h2",{attrs:{id:"指定最大展示图片数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定最大展示图片数量"}},[t._v("#")]),t._v(" 指定最大展示图片数量")]),t._v(" "),a("p",[t._v("通过设置属性 "),a("code",[t._v("maxNumber")]),t._v(" 可以指定需要展示的最多图片数量。默认值为 9。当用户传递 "),a("code",[t._v("urls")]),t._v(" 数组长度超过 "),a("code",[t._v("maxNumber")]),t._v(" 指定数量时，超过的部分将不会展示。")]),t._v(" "),a("h2",{attrs:{id:"是否预览全部图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否预览全部图片"}},[t._v("#")]),t._v(" 是否预览全部图片")]),t._v(" "),a("p",[t._v("通过设置属性 "),a("code",[t._v("previewFullImage")]),t._v(" 可以指定当所传图片数量超过 "),a("code",[t._v("maxNumber")]),t._v(" 指定数量时，是否预览全部图片。默认值为 "),a("code",[t._v("true")]),t._v("（预览图片是指单击图片，进入预览模式，前提为 "),a("code",[t._v("preview")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("）")]),t._v(" "),a("p",[t._v("举例：设置 "),a("code",[t._v("maxNumber")]),t._v(" 为 10 ，所传 "),a("code",[t._v("urls")]),t._v(" 长度为 15 。当不设置 "),a("code",[t._v("previewFullImage")]),t._v(" 或者将 "),a("code",[t._v("previewFullImage")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v(" 时，点击图片，进行预览，可预览全部图片（ 15 张图片）。且在展示时，最后一张图片会显示灰色蒙层，并提示 +n 。 n 为剩余未展示图片数量。示例中展示 +5 。")]),t._v(" "),a("p",[t._v("如果将 "),a("code",[t._v("previewFullImage")]),t._v(" 设置为 "),a("code",[t._v("false")]),t._v(" ，点击图片，进行预览，可预览10张图片( "),a("code",[t._v("maxNumber")]),t._v(" 设置的值)。且在展示时，最后一张图片无蒙层及 +n 的提示。")]),t._v(" "),a("h2",{attrs:{id:"设置每行显示图片数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置每行显示图片数量"}},[t._v("#")]),t._v(" 设置每行显示图片数量")]),t._v(" "),a("p",[a("code",[t._v("customRowNumber")]),t._v(" 属性可以设置是否开启自定义每行图片，默认为 "),a("code",[t._v("false")]),t._v(" 。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("customRowNumber")]),t._v(" 不设置或设置为 "),a("code",[t._v("false")]),t._v(" 时，图片布局按照微信朋友圈布局规则显示（详情请查看上方多图展示规则）。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("customRowNumber")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v(" 时，可以通过属性 "),a("code",[t._v("everyRowNumber")]),t._v(" 设置每行显示图片的数量，"),a("code",[t._v("everyRowNumber")]),t._v(" 默认值为 3 。")]),t._v(" "),a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("urls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片地址，详细说明见属性"),a("a",{attrs:{href:"#urls"}},[t._v("urls")]),t._v("说明")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定替代键")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("preview")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片是否可预览")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v(","),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("single-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单图时，图片长边的长度，单位rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("360")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多图时，图片边长，单位rpx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("158")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("gap-row")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多图时，图片水平间隔")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("gap-column")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多图时，图片垂直间隔")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("single-mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单图时，图片缩放裁剪的模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("见"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序image组件"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("aspectFit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple-mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多图时，图片缩放裁剪的模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("见"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序image组件"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("aspectFill")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.7.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大展示图片数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("preview-full-image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否预览全部图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v(","),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("custom-row-number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启自定义每行图片数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v(","),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("every-row-number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("每行图片展示数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.8.7")])])])]),t._v(" "),a("h2",{attrs:{id:"外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部样式类"}},[t._v("#")]),t._v(" 外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖组件整体样式的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-single-image-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖组件单图时图片样式的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-multi-image-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖组件多图时图片样式的外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"组件事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件事件"}},[t._v("#")]),t._v(" 组件事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击图片时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = {current:[ 当前点击项的信息 ], all: [ 当前所有项信息 ], index: 点击项的下标}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("detail内容与传入的urls内容保持一致")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=l.exports}}]);