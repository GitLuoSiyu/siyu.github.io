(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{456:function(t,a,v){"use strict";v.r(a);var _=v(25),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"并发处理中延迟与吞吐量的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发处理中延迟与吞吐量的关系"}},[t._v("#")]),t._v(" 并发处理中延迟与吞吐量的关系")]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"theme-cyanosis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#theme-cyanosis"}},[t._v("#")]),t._v(" theme: cyanosis")]),t._v(" "),v("h2",{attrs:{id:"现象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),v("p",[t._v("高延迟吞吐量可能也会高（分布式系统），低延迟也可能吞吐量变低（GC和JVM）？")]),t._v(" "),v("h3",{attrs:{id:"什么是吞吐量-怎么衡量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是吞吐量-怎么衡量"}},[t._v("#")]),t._v(" 什么是吞吐量，怎么衡量")]),t._v(" "),v("p",[t._v("一般来说，系统吞吐量指的是系统的抗压、负载能力，代表一个系统每秒钟能承受的最大用户访问量。一个系统的吞吐量通常由 qps（tps）、并发数来决定，每个系统对这两个值都有一个相对极限值，只要某一项达到最大值，系统的吞吐量就上不去了。")]),t._v(" "),v("p",[t._v("而并发数，可以理解为系统能同时处理的请求/事务数量。")]),t._v(" "),v("blockquote",[v("p",[t._v("计算方式: QPS=并发数/RT 或者 并发数=QPS*RT")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3537826469f4657bc83d245fe9600d5~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),v("p",[t._v("假设公司每天早上 9 点到 10 点 1 个小时内都有员工要上厕所，公司有 3600 个员工，平均每个员工上厕所时间为 10 分钟，我们来计算一下。")]),t._v(" "),v("p",[t._v("QPS = 3600/60*60 1")]),t._v(" "),v("p",[t._v("RT = 10*60 600 秒")]),t._v(" "),v("p",[t._v("并发数 = 1 * 600 600")]),t._v(" "),v("p",[t._v("这样就意味着如果想达到最好的蹲坑体验，公司需要 600 个坑位来满足员工需求，否则的话上厕所就要排队等待了。")]),t._v(" "),v("h3",{attrs:{id:"对于分布式系统-关于微服务对性能的影响。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对于分布式系统-关于微服务对性能的影响。"}},[t._v("#")]),t._v(" 对于分布式系统，关于微服务对性能的影响。")]),t._v(" "),v("p",[t._v("大家可以先思考2个问题：延迟（latency）和吞吐量（throughout）有什么关系？ 延迟是响应时间么？")]),t._v(" "),v("p",[t._v("先说一下延迟和响应时间，延迟是对于服务本身来说的，响应时间是相当于调用者来说的（更多的内容可以参考《数据密集型应用系统设计​》一书）：")]),t._v(" "),v("blockquote",[v("p",[t._v("延迟（latency） = 请求响应出入系统的时间\n响应时间（ResponseTime）= 客户端请求开始，一直到收到响应的时间 = 延迟 + 网络耗时")])]),t._v(" "),v("p",[t._v("理想状态下，延迟越低，吞吐越高，当然这是对单机单线程而言的，在分布式下就不成立了，举个反例：")]),t._v(" "),v("p",[t._v("比如从密云水库，拉一个水管到国贸，水流到国贸，需要1小时；如果再拉一个水管到顺义，20分钟就可以。如果你在国贸用水龙头接水，你可以单位时间接到非常多的水，这个数量跟你在过国贸还是顺义，没有关系，只跟水库单位时间输入的水量/水压有关系。但是如果你在水管里放一个小球，它从密云到国贸的时间是到顺义的时间的三倍，这样对于到国贸的这个水管系统，延迟很高，但是系统的吞吐量跟到顺义的是一样的。")]),t._v(" "),v("p",[t._v("同理，如果一个单体系统，被拆分成了10个服务，假如一个业务处理流程要经过5个服务，这5个服务只要是每个吞吐量（TPS/QPS）不低于原先的单体，那么整个微服务系统的吞吐量是不变的。相反地，我们通过服务变小，关系变简单，数据库简化，事务变小等等，如果5个系统的吞吐都比原来的系统打，那么改造后的系统，整体的吞吐也比之前要高。")]),t._v(" "),v("p",[t._v("那么这个过程的副作用是什么呢？简单的说，就是延迟变高了，原来都是本地调用，现在变成了5次远程调用，假设每次调用的网络延迟在1-10毫秒（物理机房+万兆网卡可以很低，云环境下比较高），那么延迟就会比之前增加增加5-50毫秒，而且前提是分布式下的请求，使用异步非阻塞的流式或消息处理方式，同步阻塞会更高，而且影响吞吐量。")]),t._v(" "),v("p",[t._v("好在低延迟的系统要求比较少见，对于一般的业务系统来说，可以水平扩展的能力比延迟增加几毫秒要重要的多。比如我们在淘宝或者京东，买个衣服，交易步骤的处理，在秒级都是可以接受的，如果是机票、酒店、电影票之类的，分钟级以上都是可以接受的。")]),t._v(" "),v("p",[t._v("再举一个现实的例子，某个公司从2016年起，就在做微服务改造，研发团队规模不大，业务发展很快，基础设施没有跟上，自动化测试、部署都没有。同时这个公司的主要核心业务是一个低延迟高并发的交易系统，微服务拆分导致系统的延迟进一步增大，客户满意度下降。很快研发团队就发现了拆分成了多个小系统以后，比单体更难以维护，继而采取了措施，把部分微服务进行合并，提高可维护性和控制延迟水平。\n具体可以参考： 微服务架构深度解析与最佳实践 - 第五部分：七个应对策略之性能、一致性与高可用_KimmKing…​")]),t._v(" "),v("h3",{attrs:{id:"_2、对于gc和jvm-关于微服务对性能的影响。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、对于gc和jvm-关于微服务对性能的影响。"}},[t._v("#")]),t._v(" 2、对于GC和JVM，关于微服务对性能的影响。")]),t._v(" "),v("p",[t._v("也就是说每次处理一部分垃圾，并且大部分处理垃圾的时候，业务线程没停，只有少量线程做垃圾处理，这时候业务是不需要暂停的。")]),t._v(" "),v("p",[t._v("单位时间内业务系统创建的对象是一定的，为了低延迟，实际上没有马力全开的跑GC，也没有马力全开的跑业务线程，自然没有资源全开的Parallel GC对处理垃圾更高效率。")]),t._v(" "),v("p",[t._v("以打扫卫生为例，一层楼有很多工作人员在工作，现在需要打扫卫生。\n1、串行GC：所有人都出去，一个保洁阿姨来打扫卫生，打扫完了，大家再进来工作。\n2、并行GC：所有人都出来，一大群保洁阿姨来打扫卫生，打扫完了，大家再进来工作。\n3、CMS：每次1/4的人出去，进来三五个阿姨打扫卫生，然后还有3/4的工作人员在干活，所以能够做到业务大部分时候不会被GC暂停（只需要在开始清点垃圾和确认垃圾的时候需要所有人暂停一小下）。但是明显的是，干活的阿姨变少了，所以整体处理效率实际上降低了。\n4、G1：在CMS的基础上，把整个楼层的工位区域分成很多小片，每次处理其中的一部分片，所以可以更加精细化管理了，对每次作业的估计可以更加精确了，每次也是少量几个阿姨来打扫，所以效率其实也不会比Parallel高。")])])}),[],!1,null,null,null);a.default=s.exports}}]);