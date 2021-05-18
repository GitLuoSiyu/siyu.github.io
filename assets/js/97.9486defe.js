(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{525:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"过渡-transition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡-transition"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 过渡 Transition")],1),t._v(" "),s("blockquote",[s("p",[t._v("通过使用transition给元素添加进入、离开的动画效果。")])]),t._v(" "),s("h2",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),s("p",[t._v("将元素包裹在 transition 组件内，通过 show 属性控制元素的显示隐藏。当元素显示/隐藏时，会有相应的过渡动画。")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition show="{{ show }}">\n  程序员思语\n</l-transition>\n')])])]),s("h2",{attrs:{id:"动画类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画类型"}},[t._v("#")]),t._v(" 动画类型")]),t._v(" "),s("p",[t._v("transition 组件提供多种内置的动画效果，可以通过 name 字段指定动画类型。")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition show="{{ show }}" name="fade-in">\n  程序员思语\n</l-transition>\n\n<l-transition show="{{ show }}" name="slide-up">\n  程序员思语\n</l-transition>\n')])])]),s("h2",{attrs:{id:"动画时长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画时长"}},[t._v("#")]),t._v(" 动画时长")]),t._v(" "),s("p",[t._v("transition 组件可以通过设置 duration 的值来控制动画的时间，duration 可以接收一个数值或者对象：{enter: 1000, leave: 2000}")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition show="{{ show }}" name="fade-in" duration="600">\n  程序员思语\n</l-transition>\n')])])]),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition show="{{ show }}" name="fade-in" duration="{{ { enter: 300, leave: 1000 } }}">\n  程序员思语\n</l-transition>\n')])])]),s("h2",{attrs:{id:"动画事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画事件"}},[t._v("#")]),t._v(" 动画事件")]),t._v(" "),s("p",[t._v("transition 组件提供了动画执行各状态的事件函数。")]),t._v(" "),s("ol",[s("li",[t._v("linbeforeenter 入场动画开始之前触发")]),t._v(" "),s("li",[t._v("linenter 入场动画开始之后、结束之前触发")]),t._v(" "),s("li",[t._v("linafterenter 入场动画结束之后触发")]),t._v(" "),s("li",[t._v("linbeforeleave 出场动画开始前触发")]),t._v(" "),s("li",[t._v("linleave 出场动画开始之后、结束之前触发")]),t._v(" "),s("li",[t._v("linafterleave 出场动画结束之后触发")])]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition\n      show="{{ show }}"\n      bind:linbeforeenter="beforeEnter"\n      bind:linenter="entering"\n      bind:linafterenter="afterEnter"\n      bind:linbeforeleave="beforeLeave"\n      bind:linleave="leaving"\n      bind:linafterleave="afterLeave"\n      name="slide-left"\n>\n  程序员思语\n</l-transition>\n')])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'入场动画准备开始'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("entering")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'入场动画正在进行中'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'入场动画完成'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeLeave")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'出场动画准备开始'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("leaving")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'出场动画正在进行中'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterLeave")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'出场动画完成'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),s("p",[t._v("transition 在动画的不同阶段会有不同的样式 class，如果 transition 内置的动画不能满足你的需要，完全可以通过外部样式类自定义过渡效果。在使用自定义动画时，需要给 transition 设置 "),s("code",[t._v('name=""')]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"案例1-sku-选择弹框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例1-sku-选择弹框"}},[t._v("#")]),t._v(" 案例1. SKU 选择弹框")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition\n        show="{{ show }}"\n        duration="400"\n        name=""\n        l-class="case-custom-class"\n        l-enter-active-class="lin-enter-active-class"\n        l-leave-active-class="lin-leave-active-class"\n        l-enter-class="lin-enter-class"\n        l-leave-to-class="lin-leave-to-class"\n>\n  <view class="sku">\n    <view class="sku-card-container">\n      <l-card l-class="sku-card"\n              image="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1549701108&di=d141540da70a7f92abd6f90ffef7460c&src=http://ztd00.photos.bdimg.com/ztd/w=700;q=50/sign=0b1f180b5a43fbf2c52ca4238045bbbd/b7fd5266d0160924665b9f18dd0735fae6cd34b2.jpg"\n              title="新疆精选苹果"\n              type="primary">\n        <view class="sku-card-content">\n          <view>新疆苹果,又名塞威氏苹果,蔷微科,落叶乔木。</view>\n          <view class="sku-card-price">\n            <l-price unit="￥" value="666"></l-price>\n          </view>\n        </view>\n      </l-card>\n    </view>\n    <view class="sku-tag-container">\n      <view class="sku-tag-title">规格分类</view>\n      <view class="sku-tag-list">\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">试用装1个</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装5kg装（约4-5个）</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装10kg装（约9-11个）</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装12kg装（约10-12个）</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">小号 1 箱装（约8kg）</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">中号 1 箱装（约12kg）</l-tag>\n        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">大号 1 箱装（约16kg）</l-tag>\n      </view>\n    </view>\n    <view class="sku-action">\n      <l-button width="100%" class="sku-action-container" l-class="sku-action-item" l-label-ckass="sku-action-item" shape="square" bind:tap="closeCase" data-name="2">确定</l-button>\n      <l-button width="100%" class="sku-action-container" l-class="sku-action-item" l-label-ckass="sku-action-item" shape="square" plain bind:tap="closeCase" data-name="2">取消</l-button>\n    </view>\n  </view>\n</l-transition>\n\n')])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 页面的初始数据\n   */")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".case-custom-class{\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  /*height: 80%;*/\n  background-color: #ffffff;\n  border-top: 2rpx solid #ccc;\n  border-radius: 20rpx 20rpx 0 0;\n  z-index: 1;\n  box-shadow: 0 -1px 40px rgba(0,0,0,.3);\n}\n\n\n.lin-enter-active-class,\n.lin-leave-active-class {\n  bottom: 0;\n}\n\n.lin-enter-class,\n.lin-leave-to-class {\n  bottom: -100%;\n}\n\n.sku-card{\n  box-shadow: none !important;\n}\n\n.sku-card-content{\n  margin-top: 10rpx;\n  color: #666;\n  font-size: 26rpx;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n}\n\n.sku-card-price{\n  margin-top: 10rpx;\n}\n\n.sku-tag-title{\n  padding-left: 20rpx;\n  margin-bottom: 20rpx;\n}\n\n.sku-tag-list{\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tag-item{\n  margin: 10rpx;\n}\n\n.sku-action{\n  display: flex;\n  margin-top: 20rpx;\n}\n\n.sku-action-container{\n  flex: 1;\n}\n\n.sku-action-item{\n  width: 100% !important;\n}\n\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-transition"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/transition/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-button"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/button/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-card"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/card/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-price"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/price/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/tag/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/icon/index"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"案例2-遮照页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例2-遮照页"}},[t._v("#")]),t._v(" 案例2. 遮照页")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<l-transition\n    show="{{ show }}"\n    duration="300"\n    name=""\n    l-class="case-custom-class"\n    l-enter-active-class="lin-enter-active-class"\n    l-leave-active-class="lin-leave-active-class"\n    l-enter-class="lin-enter-class"\n    l-leave-to-class="lin-leave-to-class"\n  >\n  <l-status show type="cart" full-screen="{{false}}" bind:lintap="closeCase"/>\n</l-transition>\n')])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 页面的初始数据\n   */")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".case-custom-class{\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.lin-enter-active-class,\n.lin-leave-active-class {\n  left: 0;\n  top: 0;\n}\n\n.lin-enter-class,\n.lin-leave-to-class {\n  left: -100%;\n  top: -100%;\n}\n\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-transition"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/transition/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/status/index"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"动画属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画属性"}},[t._v("#")]),t._v(" 动画属性")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("动画类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("见下方动画类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("fade")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示组件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("动画时长，单位为毫秒")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number/object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("300")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("custom-style")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("自定义样式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"动画事件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画事件-2"}},[t._v("#")]),t._v(" 动画事件")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linbeforeenter")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("进入前触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linenter")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("进入中触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linafterenter")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("进入后触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linbeforeleave")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("离开前触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linleave")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("离开中触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linafterleave")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("离开后触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"动画外部样式类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画外部样式类"}},[t._v("#")]),t._v(" 动画外部样式类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("根节点样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-enter-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-enter-active-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-enter-to-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 linenterclass 被移除)，在过渡/动画完成之后移除。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-leave-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-leave-active-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-leave-to-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 linleaveclass 被删除)，在过渡/动画完成之后移除。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),s("h2",{attrs:{id:"动画类型-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画类型-2"}},[t._v("#")]),t._v(" 动画类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fade")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("淡入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fade-up")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("上滑淡入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fade-down")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("下滑淡入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fade-left")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("左滑淡入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fade-right")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("右滑淡入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("slide-up")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("上滑进入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("slide-down")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("下滑进入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("slide-left")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("左滑进入")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("slide-right")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("右滑进入")])])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=e.exports}}]);