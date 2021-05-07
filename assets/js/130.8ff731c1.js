(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{553:function(t,e,a){"use strict";a.r(e);var s=a(25),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"遮罩层-mask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遮罩层-mask"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v("  遮罩层 Mask")],1),t._v(" "),a("blockquote",[a("p",[t._v("弹出占据全屏幕的半透明遮罩。")])]),t._v(" "),a("h2",{attrs:{id:"基本案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本案例"}},[t._v("#")]),t._v(" 基本案例")]),t._v(" "),a("p",[t._v("遮罩层可通过设置"),a("code",[t._v("show")]),t._v("属性为"),a("code",[t._v("true")]),t._v("、"),a("code",[t._v("false")]),t._v("来控制显示和隐藏，不设置则显示状态默认为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}"> </l-mask>\n')])])]),a("p",[t._v("如下图：")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/mask/1.jpg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"自定义透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义透明度"}},[t._v("#")]),t._v(" 自定义透明度")]),t._v(" "),a("p",[t._v("遮罩层可以通过设置 "),a("code",[t._v("opacity")]),t._v(" 属性的值来改变它的不透明度，"),a("code",[t._v("opacity")]),t._v(" 为0～1的浮点值，默认0.5。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}"  opacity="0.7"> </l-mask>\n\n')])])]),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}"  opacity="0.3"> </l-mask>\n')])])]),a("h2",{attrs:{id:"设置子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置子节点"}},[t._v("#")]),t._v(" 设置子节点")]),t._v(" "),a("p",[t._v("我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 "),a("code",[t._v("<image>")]),t._v(" "),a("code",[t._v("<view>")]),t._v(" "),a("code",[t._v("<text>")]),t._v(" 等子节点，当然，你也可以在其中插入 "),a("code",[t._v("自定义组件")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("如果需要设置多个子节点并定位在页面的不同位置，可以设置单个子节点的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("fixed")]),t._v("，再通过 "),a("code",[t._v("left")]),t._v(" 和 "),a("code",[t._v("top")]),t._v(" 这样的css属性来完成布局。")]),t._v(" "),a("li",[t._v("默认原点为页面左上角，例如："),a("code",[t._v("top:20rpx;left:20rpx;")]),t._v(" 就代表子节点从页面左上角，先向下平移"),a("code",[t._v("20rpx")]),t._v("; 再向右平移"),a("code",[t._v("20rpx")]),t._v("。")])])]),t._v(" "),a("p",[t._v("Tips：")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<l-mask show=\"{{true}}\">\n    <view class='mask-content'>\n      <view class='mask-close' bindtap='onHideMaskTap'>隐藏遮罩</view>\n    </view>\n</l-mask>\n\n")])])]),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/mask/2.jpg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"设置子节点是否居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置子节点是否居中"}},[t._v("#")]),t._v(" 设置子节点是否居中")]),t._v(" "),a("p",[t._v("遮罩层可以通过设置 "),a("code",[t._v("center")]),t._v(" 属性的值为"),a("code",[t._v("true")]),t._v(" 或者 "),a("code",[t._v("false")]),t._v(" 来设置他是否垂直居中，默认为 垂直居中显示。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("如果设置为 "),a("code",[t._v("false")]),t._v(" ，则 "),a("code",[t._v("<slot>")]),t._v(" 居左上角显示。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}" center="{{false}}">\n    <view class="mask-content">\n      <view class="mask-text" >取消子节点的垂直居中</view>\n    </view>\n</l-mask>\n\n')])])]),a("h2",{attrs:{id:"锁定mask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁定mask"}},[t._v("#")]),t._v(" 锁定mask")]),t._v(" "),a("p",[t._v("设置按钮的 "),a("code",[t._v("locked")]),t._v(" 属性来控制遮罩层的锁定态，属性值为 "),a("code",[t._v("true")]),t._v(" 时点击遮罩层背景部分不会关闭整个遮罩，属性值为 "),a("code",[t._v("false")]),t._v(" 时点击遮罩层背景会立即关闭，默认为 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-mask show="{{true}}" locked="{{true}}">\n    <view class="mask-content">\n      <view class="mask-close" bindtap="onHideMaskTap">隐藏遮罩</view>\n    </view>\n</l-mask>\n\n')])])]),a("h2",{attrs:{id:"用户案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户案例"}},[t._v("#")]),t._v(" 用户案例")]),t._v(" "),a("p",[t._v("浏览完以上内容，我们已经简单了解了 "),a("code",[t._v("Mask")]),t._v(" 组件的属性以及用法。")]),t._v(" "),a("p",[t._v("下面让我们来根据示例代码，实现多个子节点展示的效果。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/mask/3.jpg",alt:"height=300"}}),t._v("\n:::")]),t._v(" "),a("p",[t._v("通过效果图，我们来分析下怎样去实现该案例，可以将过程分为两部分:")]),t._v(" "),a("ol",[a("li",[t._v("设置Mask组件的 "),a("code",[t._v("show")]),t._v(" 属性为"),a("code",[t._v("true")]),t._v("，"),a("code",[t._v("locked")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("。 然后传入自定义的子节点。")]),t._v(" "),a("li",[t._v("将子节点的css属性设置为"),a("code",[t._v("position: fixed")]),t._v(" ,再通过 "),a("code",[t._v("left")]),t._v(" 和 "),a("code",[t._v("top")]),t._v(" 等对它进行定位。")])]),t._v(" "),a("p",[t._v("以下是实现该案例的代码。")]),t._v(" "),a("h3",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" \x3c!-- wxml文件 --\x3e\n <l-mask\n    show=\"{{true}}\"\n    locked=\"{{true}}\"\n    class=\"mask-class\"\n  >\n    <view class='content mask-content1' >\n      这里是子节点一\n    </view>\n    <view class='content mask-content2'>\n      这里是子节点二\n    </view>\n    <view class='content mask-content3' >\n      这里是子节点三\n    </view>\n  </l-mask>\n\n")])])]),a("div",{staticClass:"language-wxss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" /* wxss文件 */\n  .content {\n    height: 80rpx;\n    width: 300rpx;\n    border-radius: 10rpx;\n    line-height: 80rpx;\n    font-size: 28rpx;\n    text-align: center;\n    color: #333;\n  }\n\n  .mask-content1 {\n    position: fixed;\n    top: 50rpx;\n    left: 50rpx;\n    background: #fff;\n  }\n\n  .mask-content2 {\n    position: fixed;\n    top: 300rpx;\n    right: 20rpx;\n    background: #fff;\n  }\n\n  .mask-content3 {\n    position: fixed;\n    bottom: 50rpx;\n    left: 50rpx;\n    background: #fff;\n  }\n")])])]),a("h2",{attrs:{id:"遮罩层属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遮罩层属性"}},[t._v("#")]),t._v(" 遮罩层属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制遮罩层的显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("opacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("透明度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String,Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0~1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("z-index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件的页面层级")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("99")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("遮罩层是否设定为锁定态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("center")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置子节点是否为垂直居中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),a("h2",{attrs:{id:"遮罩层外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遮罩层外部样式类"}},[t._v("#")]),t._v(" 遮罩层外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖遮罩层外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-mask-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖遮罩层插槽部分外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ol",[a("li",[t._v("z-index默认为99，如果当前引入mask组件的页面中有z-index值大于99的节点，那么为了避免错误的显示效果，可以将mask的z-index属性的值重新设置。")]),t._v(" "),a("li",[t._v("传入 "),a("code",[t._v("true/false")]),t._v(" 时候，需要使用 "),a("code",[t._v("Mustache 语法")]),t._v("（双大括号）将值包起来")])])]),t._v(" "),a("h2",{attrs:{id:"遮罩层事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遮罩层事件"}},[t._v("#")]),t._v(" 遮罩层事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击背景时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);e.default=l.exports}}]);